import fs from "fs";
import path from "path";
import { hasIconVariants, iconVariantPath } from "@/lib/appIcons";

// アプリ向けのアプリ一覧（/api/v1/<lang>/apps.json）の中身を content/<lang>/product.json から作る
// アプリはこれを取得して表示するだけで、自分自身を除くなどの絞り込みはアプリ側で行う
// v1 では項目の追加だけを行い、削除や名前・型の変更はしない（古いアプリが読めなくなるため）

export const CATALOG_LANGUAGES = ["ja", "en"] as const;
export type CatalogLanguage = (typeof CATALOG_LANGUAGES)[number];

const SITE = "https://iroiro.dev";
// アイコンは縮小版（public/images/icons）のうち一番大きいものを使う（縮小版がなければ元の画像）
const ICON_SIZE = 264;
// 自分が公開しているアプリの区分（translation は他の開発者のアプリの翻訳のため含めない）
const CATEGORIES = ["development", "transplanting"] as const;

type ProductApp = {
    id: string;
    title: string;
    subtitle?: string;
    icon?: string;
    darkIcon?: string;
    description: string;
    supportedPlatforms: { os: string; version: string }[];
    supportPage: string;
};

export type CatalogApp = {
    id: string;
    appStoreId: number;
    name: string;
    subtitle: string;
    description: string;
    category: (typeof CATEGORIES)[number];
    image: { kind: "url"; lightURL: string; darkURL: string };
    platforms: { platform: string; version: string }[];
    appStoreURL: string;
    supportURL: string;
};

export type AppCatalog = { schemaVersion: 1; apps: CatalogApp[] };

// "/images/X Light.avif" → "https://iroiro.dev/images/icons/X Light 264.avif"（空白などはURLエンコードする）
const iconURL = (icon: string) => SITE + encodeURI(hasIconVariants(icon) ? iconVariantPath(icon, ICON_SIZE) : icon);

// "26(Tahoe)" や "26" を、アプリで比較しやすい "26.0" の形にする
const normalizeVersion = (version: string) => {
    const match = version.match(/^\d+(\.\d+)*/);
    if (!match) throw new Error(`Unknown version format: ${version}`);
    return match[0].includes(".") ? match[0] : `${match[0]}.0`;
};

// "./product/filesprout" → "https://iroiro.dev/product/filesprout"（英語版は /en/product/...）
const supportURL = (lang: CatalogLanguage, page: string) =>
    /^https?:\/\//.test(page) ? page : `${SITE}${lang === "en" ? "/en" : ""}/${page.replace(/^\.\//, "")}`;

export function buildAppCatalog(lang: CatalogLanguage): AppCatalog {
    const product = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", lang, "product.json"), "utf-8"));
    const apps = CATEGORIES.flatMap((category) =>
        (product.apps[category] as ProductApp[]).filter((app) => app.icon).map((app): CatalogApp => {
            const appStoreId = Number(app.id.replace(/^id/, ""));
            return {
                id: app.id,
                appStoreId,
                name: app.title,
                subtitle: app.subtitle ?? "",
                description: app.description,
                category,
                image: { kind: "url", lightURL: iconURL(app.icon!), darkURL: iconURL(app.darkIcon ?? app.icon!) },
                platforms: app.supportedPlatforms.map((p) => ({ platform: p.os, version: normalizeVersion(p.version) })),
                appStoreURL: `https://apps.apple.com/app/id${appStoreId}`,
                supportURL: supportURL(lang, app.supportPage),
            };
        })
    );
    return { schemaVersion: 1, apps };
}
