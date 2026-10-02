import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

// Markdownの表を <div class="tableScroll"> で囲む
// 表そのものは通常の表のまま（文字が大きくなれば表も広がる）にし、画面に収まらないときだけ囲みを横スクロールさせる
const rehypeWrapTables = () => (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
        if (node.tagName !== "table" || !parent || index === undefined) return;
        const parentClass = parent.type === "element" ? parent.properties?.className : undefined;
        if (Array.isArray(parentClass) && parentClass.includes("tableScroll")) return;
        parent.children[index] = {
            type: "element",
            tagName: "div",
            properties: { className: ["tableScroll"] },
            children: [node],
        };
    });
};

export default rehypeWrapTables;
