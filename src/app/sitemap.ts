import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";
import { readMarkdownFilenames } from "@/lib/markdown";

// 静的書き出し（output: "export"）でも sitemap.xml を生成する
export const dynamic = "force-static";

const SITE = "https://iroiro.dev";
const CONTENT = path.join(process.cwd(), "content");

type Page = { path: string; ja: boolean; en: boolean; lastModified?: Date; changeFrequency: "monthly" | "yearly"; priority: number };

// robots.txt で「User-agent: *」に対して除外しているパス（テストページなど）は、サイトマップにも載せない
const disallowed = (() => {
    const lines = fs.readFileSync(path.join(process.cwd(), "public/robots.txt"), "utf-8").split(/\r?\n/);
    const paths: string[] = [];
    let forAll = false;
    for (const line of lines) {
        const [key, ...rest] = line.split(":");
        const value = rest.join(":").trim();
        if (/^user-agent$/i.test(key.trim())) forAll = value === "*";
        else if (forAll && /^disallow$/i.test(key.trim()) && value) paths.push(value);
    }
    return paths;
})();
const isAllowed = (pageUrl: string) => {
    const pathname = new URL(pageUrl).pathname;
    return !disallowed.some((rule) => pathname.startsWith(rule));
};

// 日本語版のURL（/product など）に対応する英語版のURL（/en/product など）
const url = (lang: "ja" | "en", pagePath: string) => `${SITE}${lang === "en" ? "/en" : ""}${pagePath === "/" && lang === "en" ? "/" : pagePath}`;

// Markdownの記事（content/ja/<dir>, content/en/<dir>）をページの一覧にする
// 日付（date）がある記事は、その日付を最終更新日にする
const markdownPages = (dir: string, basePath: string, priority: number): Page[] => {
    const ja = readMarkdownFilenames(path.join(CONTENT, "ja", dir));
    const en = readMarkdownFilenames(path.join(CONTENT, "en", dir));
    return [...new Set([...ja, ...en])].sort().map((filename) => {
        const hasJa = ja.includes(filename);
        const file = path.join(CONTENT, hasJa ? "ja" : "en", dir, filename);
        const { data } = matter(fs.readFileSync(file, "utf-8"));
        const date = data.date ? new Date(String(data.date)) : undefined;
        return {
            path: `${basePath}/${filename.replace(/\.md$/, "")}`,
            ja: hasJa,
            en: en.includes(filename),
            lastModified: date && !isNaN(date.getTime()) ? date : undefined,
            changeFrequency: "yearly",
            priority,
        };
    });
};

export default function sitemap(): MetadataRoute.Sitemap {
    const fixed: Page[] = [
        { path: "/", ja: true, en: true, changeFrequency: "monthly", priority: 1.0 },
        { path: "/product", ja: true, en: true, changeFrequency: "monthly", priority: 0.9 },
        { path: "/blog", ja: true, en: true, changeFrequency: "monthly", priority: 0.8 },
        { path: "/newsroom", ja: true, en: true, changeFrequency: "monthly", priority: 0.8 },
        { path: "/contact", ja: true, en: true, changeFrequency: "monthly", priority: 0.8 },
        { path: "/privacy", ja: true, en: true, changeFrequency: "yearly", priority: 0.3 },
        { path: "/agreement", ja: true, en: true, changeFrequency: "yearly", priority: 0.3 },
    ];
    const pages = [
        ...fixed,
        ...markdownPages("product", "/product", 0.8),
        ...markdownPages("tips", "/product/tips", 0.7),
        ...markdownPages("blog", "/blog", 0.7),
        ...markdownPages("newsroom", "/newsroom", 0.6),
    ];

    // 日本語版・英語版のそれぞれを1件ずつ載せ、両方あるときは互いを代替言語として示す
    return pages.flatMap((page) => {
        const both = page.ja && page.en && isAllowed(url("ja", page.path)) && isAllowed(url("en", page.path));
        const languages = both ? { ja: url("ja", page.path), en: url("en", page.path) } : undefined;
        return (["ja", "en"] as const)
            .filter((lang) => page[lang] && isAllowed(url(lang, page.path)))
            .map((lang) => ({
                url: url(lang, page.path),
                lastModified: page.lastModified,
                changeFrequency: page.changeFrequency,
                priority: lang === "ja" ? page.priority : Math.round((page.priority - 0.1) * 10) / 10,
                ...(languages ? { alternates: { languages } } : {}),
            }));
    });
}
