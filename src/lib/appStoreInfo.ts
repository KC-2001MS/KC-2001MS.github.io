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

// App Store Connectから取得できたOSのバージョンだけを上書きする
export function getSupportedPlatforms(app: { id: string; supportedPlatforms: Platform[] }): Platform[] {
  const versions = loadAppStoreInfo()[app.id];
  if (!versions) return app.supportedPlatforms;

  return app.supportedPlatforms.map((platform) =>
    versions[platform.os] ? { os: platform.os, version: formatVersion(platform.os, versions[platform.os]) } : platform
  );
}

// Markdownの対応プラットフォーム表（| OS | バージョン ~ |）のバージョンを上書きする
export function applyPlatformVersions(markdown: string, appId?: string): string {
  if (!appId) return markdown;
  const versions = loadAppStoreInfo()[`id${appId}`];
  if (!versions) return markdown;

  return markdown.replace(/^\|\s*(\w+)\s*\|\s*[^|\n]+~\s*\|$/gm, (row, os: string) =>
    versions[os] ? `| ${os} | ${formatVersion(os, versions[os])} ~ |` : row
  );
}
