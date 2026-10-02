import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";
import markdownImages from "@/lib/markdownImages.json";

type ImageInfo = { width: number; height: number; widths: number[] };
const images: Record<string, ImageInfo> = markdownImages;

// 記事内の画像（.markdown-image）の表示幅の上限（content.cssのmax-widthと合わせる）
const sizes = "(max-width: 555px) 90vw, 500px";

// Markdownの画像を軽く読み込めるようにする
// - 縦横の大きさを指定し、読み込み中にレイアウトがずれないようにする
// - public/images/resized/ に縮小版（AVIF）があれば、画面に合った大きさを選んで読み込ませる
// - 最初の画像以外は、画面に近づいてから読み込む
const rehypeMarkdownImages = () => (tree: Root) => {
    let isFirst = true;
    visit(tree, "element", (node: Element) => {
        if (node.tagName !== "img") return;
        const src = typeof node.properties.src === "string" ? node.properties.src : "";
        const info = images[src];
        if (info) {
            const base = src.replace(/^\/images\//, "/images/resized/").replace(/\.\w+$/, "");
            node.properties.srcSet = info.widths.map((w) => `${encodeURI(`${base}-${w}.avif`)} ${w}w`).join(", ");
            node.properties.sizes = sizes;
            node.properties.width = info.width;
            node.properties.height = info.height;
        }
        node.properties.decoding = "async";
        if (!isFirst) node.properties.loading = "lazy";
        isFirst = false;
    });
};

export default rehypeMarkdownImages;
