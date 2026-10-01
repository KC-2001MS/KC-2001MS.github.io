// 調査用: watchOSの最低バージョンを取得できる情報源を探す（GitHub Actionsで手動実行）
import crypto from "crypto";

const APP_IDS = ["6450119338", "6760347335"]; // My Word X, ATP Nexus
const API = "https://api.appstoreconnect.apple.com/v1";

function token() {
  const { ASC_ISSUER_ID, ASC_KEY_ID, ASC_PRIVATE_KEY } = process.env;
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: "ES256", kid: ASC_KEY_ID, typ: "JWT" })}.${b64({ iss: ASC_ISSUER_ID, iat: now, exp: now + 900, aud: "appstoreconnect-v1" })}`;
  const sig = crypto.sign("sha256", Buffer.from(unsigned), { key: ASC_PRIVATE_KEY.replace(/\\n/g, "\n"), dsaEncoding: "ieee-p1363" });
  return `${unsigned}.${sig.toString("base64url")}`;
}

const TOKEN = token();

async function api(pathAndQuery) {
  const res = await fetch(`${API}${pathAndQuery}`, { headers: { Authorization: `Bearer ${TOKEN}` } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) console.log(`  ! ${res.status} ${pathAndQuery}`, JSON.stringify(body.errors?.[0]?.detail ?? body).slice(0, 300));
  return body;
}

function show(label, value) {
  console.log(`  ${label}:`, JSON.stringify(value, null, 1).slice(0, 4000));
}

for (const appId of APP_IDS) {
  console.log(`\n===== app ${appId} =====`);

  // 1. iOSの配信中バージョンとビルド
  const versions = await api(`/apps/${appId}/appStoreVersions?filter[platform]=IOS&include=build&limit=10`);
  const live = (versions.data ?? []).find((v) => ["READY_FOR_SALE", "READY_FOR_DISTRIBUTION"].includes(v.attributes.appStoreState) || ["READY_FOR_DISTRIBUTION"].includes(v.attributes.appVersionState));
  const buildId = live?.relationships?.build?.data?.id;
  console.log("[1] live iOS version:", live?.attributes?.versionString, "build:", buildId);
  if (!buildId) continue;

  // 2. ビルドの全属性
  const build = await api(`/builds/${buildId}`);
  show("[2] build attributes", build.data?.attributes);

  // 3. buildBundles（同梱のWatchアプリ等）
  const bundles = await api(`/builds/${buildId}/buildBundles?limit=50`);
  for (const bundle of bundles.data ?? []) {
    show(`[3] buildBundle ${bundle.id}`, bundle.attributes);

    // 4. buildBundleFileSizes（端末・OSごとのサイズ）
    const sizes = await api(`/buildBundles/${bundle.id}/buildBundleFileSizes?limit=200`);
    const rows = (sizes.data ?? []).map((s) => `${s.attributes.deviceModel} / ${s.attributes.osVersion}`);
    console.log(`  [4] fileSizes (${rows.length}):`, rows.filter((r) => /watch/i.test(r)).slice(0, 40), rows.slice(0, 10));
  }

  // 5. include で取れる関連を一通り
  const inc = await api(`/builds/${buildId}?include=buildBundles,appEncryptionDeclaration,preReleaseVersion`);
  show("[5] included types", (inc.included ?? []).map((i) => i.type));

  // 6. iTunes Lookup API
  for (const country of ["jp", "us"]) {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}&country=${country}&entity=software`);
    const json = await res.json().catch(() => ({}));
    const r = json.results?.[0] ?? {};
    console.log(`[6] lookup ${country}: minimumOsVersion=${r.minimumOsVersion}`, "watch devices:", (r.supportedDevices ?? []).filter((d) => /watch/i.test(d)).slice(0, 5), "keys:", Object.keys(r).join(","));
  }

  // 7. App Storeのページ
  for (const url of [`https://apps.apple.com/jp/app/id${appId}`, `https://apps.apple.com/us/app/id${appId}`]) {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15", "Accept-Language": "ja,en" } });
    const html = await res.text();
    const hits = [...html.matchAll(/.{0,120}watchOS.{0,120}/g)].map((m) => m[0].replace(/\s+/g, " "));
    console.log(`[7] ${url} status=${res.status} watchOS hits=${hits.length}`);
    for (const hit of hits.slice(0, 8)) console.log("   ", hit);
  }
}
