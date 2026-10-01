"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Markdownのコードブロック（pre）の右上にコピーボタンを追加する
// Markdownはサーバーで HTML に変換して埋め込んでいるため、表示後にボタンを差し込む
const CodeCopyButtons = () => {
    const pathname = usePathname();

    useEffect(() => {
        const english = document.documentElement.lang === "en";
        const labels = english
            ? { copy: "Copy code", copied: "Copied" }
            : { copy: "コードをコピー", copied: "コピーしました" };
        const timers: number[] = [];

        document.querySelectorAll<HTMLPreElement>(".markdown pre").forEach((pre) => {
            if (pre.querySelector(".copyButton")) return;
            const code = pre.querySelector("code") ?? pre;

            const button = document.createElement("button");
            button.type = "button";
            button.className = "copyButton";
            button.title = labels.copy;
            button.setAttribute("aria-label", labels.copy);
            const icon = document.createElement("span");
            icon.className = "material-symbols-outlined";
            icon.textContent = "content_copy";
            button.appendChild(icon);

            button.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(code.textContent ?? "");
                    icon.textContent = "check";
                    button.title = labels.copied;
                    button.setAttribute("aria-label", labels.copied);
                    timers.push(window.setTimeout(() => {
                        icon.textContent = "content_copy";
                        button.title = labels.copy;
                        button.setAttribute("aria-label", labels.copy);
                    }, 2000));
                } catch {
                    // クリップボードが使えない環境では何もしない
                }
            });

            pre.classList.add("hasCopyButton");
            pre.appendChild(button);
        });

        return () => timers.forEach((timer) => window.clearTimeout(timer));
    }, [pathname]);

    return null;
};

export default CodeCopyButtons;
