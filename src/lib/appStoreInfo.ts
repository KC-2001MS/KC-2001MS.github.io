import fs from "fs";
import path from "path";

type Platform = { os: string; version: string };
type AppStoreInfo = Record<string, Record<string, string>>;

const MACOS_NAMES: Record<string, string> = {
  "11": "Big Sur",
  "12": "Monterey",
  "13": "Ventura",
  "14": "Sonoma",
  "15": "Sequoia",
  "26": "Tahoe",
};

let cache: AppStoreInfo | null = null;

// scripts/fetch-app-store-info.mjs がビルド前に生成したJSONを読み込む（無ければ空）
function loadAppStoreInfo(): AppStoreInfo {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content/app-store-info.json"), "utf8"));
  } catch {
    cache = {};
  }
  return cache!;
}

function formatVersion(os: string, version: string): string {
  if (os !== "macOS") return version;
  const name = MACOS_NAMES[version.split(".")[0]];
  return name ? `${version}(${name})` : version;
}

// 表示順
const OS_ORDER = ["iOS", "iPadOS", "visionOS", "macOS", "watchOS", "tvOS"];
// 取得に失敗することがあるOS（取得できなかった場合はproduct.jsonやMarkdownの値を使う）
// watchOSはApp Storeのページから取得しているため、ページ構成の変更等で取得できない場合がある
const NON_API_OS = ["watchOS"];

// API の結果を正として対応プラットフォームを組み立てる（APIに無いOSは除外、watchOSは取得できなかった場合のみ既存の値を使う）
function mergePlatforms(versions: Record<string, string>, existing: Platform[]): Platform[] {
  return OS_ORDER.flatMap((os) => {
    if (versions[os]) return [{ os, version: formatVersion(os, versions[os]) }];
    const current = existing.find((platform) => platform.os === os);
    return current && NON_API_OS.includes(os) ? [current] : [];
  });
}

export function getSupportedPlatforms(app: { id: string; supportedPlatforms: Platform[] }): Platform[] {
  const versions = loadAppStoreInfo()[app.id];
  return versions ? mergePlatforms(versions, app.supportedPlatforms) : app.supportedPlatforms;
}

// Markdownの対応プラットフォーム表（| OS | バージョン |）の行をAPIの結果で作り直す
export function applyPlatformVersions(markdown: string, appId?: string): string {
  if (!appId) return markdown;
  const versions = loadAppStoreInfo()[`id${appId}`];
  if (!versions) return markdown;

  return markdown.replace(/(^\|\s*OS\s*\|[^\n]*\n\|[-\s|]+\|\n)((?:\|[^\n]*\|(?:\n|$))+)/m, (_, header: string, rows: string) => {
    const existing = rows
      .trim()
      .split("\n")
      .map((row) => row.split("|").map((cell) => cell.trim()))
      .map(([, os, version]) => ({ os, version: version.replace(/\s*~$/, "") }));
    const merged = mergePlatforms(versions, existing);
    return header + merged.map(({ os, version }) => `| ${os} | ${version} ~ |`).join("\n") + "\n";
  });
}
