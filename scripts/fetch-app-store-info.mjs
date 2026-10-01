// App Store Connect APIから各アプリの最低OSバージョンを取得し、ビルド時に利用するJSONを生成する
// 必要な環境変数: ASC_ISSUER_ID, ASC_KEY_ID, ASC_PRIVATE_KEY（.p8の内容）
// 環境変数が無い場合や取得に失敗した場合は、product.jsonの値がそのまま使われる
import crypto from "crypto";
import fs from "fs";
import path from "path";

const OUTPUT_PATH = path.join(process.cwd(), "content/app-store-info.json");
const PRODUCT_JSON_PATHS = ["content/ja/product.json", "content/en/product.json"];
const API_BASE_URL = "https://api.appstoreconnect.apple.com/v1";

// App Store ConnectのプラットフォームとサイトのOS名の対応
// watchOSは個別のプラットフォームとして提供されないため対象外
const PLATFORM_TO_OS = {
  IOS: ["iOS", "iPadOS"],
  MAC_OS: ["macOS"],
  TV_OS: ["tvOS"],
  VISION_OS: ["visionOS"],
};

const LIVE_STATES = ["READY_FOR_SALE", "READY_FOR_DISTRIBUTION"];

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function createToken(issuerId, keyId, privateKey) {
  const header = { alg: "ES256", kid: keyId, typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = { iss: issuerId, iat: now, exp: now + 15 * 60, aud: "appstoreconnect-v1" };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signature = crypto.sign("sha256", Buffer.from(unsigned), { key: privateKey, dsaEncoding: "ieee-p1363" });
  return `${unsigned}.${signature.toString("base64url")}`;
}

function getAppIds() {
  const ids = new Set();
  for (const productJsonPath of PRODUCT_JSON_PATHS) {
    const productData = JSON.parse(fs.readFileSync(productJsonPath, "utf8"));
    for (const apps of Object.values(productData.apps)) {
      for (const app of apps) {
        ids.add(app.id.replace(/^id/, ""));
      }
    }
  }
  return [...ids];
}

// "15.0" -> "15", "17.4" -> "17.4"
function formatVersion(version) {
  return version.replace(/(\.0)+$/, "");
}

async function fetchMinOsVersions(appId, token) {
  const url = `${API_BASE_URL}/apps/${appId}/appStoreVersions?include=build&fields[appStoreVersions]=platform,appStoreState,appVersionState,createdDate,build&fields[builds]=minOsVersion&limit=50`;
  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const { data = [], included = [] } = await response.json();
  const builds = new Map(included.filter((item) => item.type === "builds").map((build) => [build.id, build.attributes.minOsVersion]));

  // プラットフォームごとに配信中の最新バージョンを選ぶ
  const latest = new Map();
  for (const version of data) {
    const { platform, appStoreState, appVersionState, createdDate } = version.attributes;
    if (!LIVE_STATES.includes(appStoreState) && !LIVE_STATES.includes(appVersionState)) continue;

    const minOsVersion = builds.get(version.relationships?.build?.data?.id);
    if (!minOsVersion) continue;

    const current = latest.get(platform);
    if (!current || createdDate > current.createdDate) {
      latest.set(platform, { createdDate, minOsVersion });
    }
  }

  const result = {};
  for (const [platform, { minOsVersion }] of latest) {
    for (const os of PLATFORM_TO_OS[platform] ?? []) {
      result[os] = formatVersion(minOsVersion);
    }
  }
  return result;
}

async function main() {
  const { ASC_ISSUER_ID, ASC_KEY_ID, ASC_PRIVATE_KEY } = process.env;
  if (!ASC_ISSUER_ID || !ASC_KEY_ID || !ASC_PRIVATE_KEY) {
    console.log("App Store Connect API credentials are not set. Skipping.");
    return;
  }

  const token = createToken(ASC_ISSUER_ID, ASC_KEY_ID, ASC_PRIVATE_KEY.replace(/\\n/g, "\n"));
  const info = {};

  for (const appId of getAppIds()) {
    try {
      const versions = await fetchMinOsVersions(appId, token);
      if (Object.keys(versions).length > 0) {
        info[`id${appId}`] = versions;
      }
      console.log(`id${appId}:`, versions);
    } catch (err) {
      // 自分のアカウント以外のアプリ（翻訳したアプリ等）は取得できないため無視する
      console.warn(`id${appId}: skipped (${err.message})`);
    }
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(info, null, 2) + "\n");
  console.log(`Wrote ${OUTPUT_PATH}`);
}

main().catch((err) => {
  // 取得に失敗してもビルドは止めない
  console.warn("Failed to fetch App Store info:", err);
});
