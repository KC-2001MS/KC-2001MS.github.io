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

        // コピーしたことをスクリーンリーダーに読み上げてもらうための、見えない領域
        let status = document.getElementById("copyStatus");
        if (!status) {
            status = document.createElement("div");
            status.id = "copyStatus";
            status.className = "visuallyHidden";
            status.setAttribute("role", "status");
            document.body.appendChild(status);
        }
        const announce = (message: string) => {
            status!.textContent = "";
            window.setTimeout(() => { status!.textContent = message; }, 50);
        };

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
            icon.setAttribute("aria-hidden", "true");
            icon.textContent = "content_copy";
            button.appendChild(icon);

            button.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(code.textContent ?? "");
                    icon.textContent = "check";
                    announce(labels.copied);
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

        // 横にスクロールできるコードや表を、キーボードでもスクロールできるようにする（Tabで選んで矢印キーで動かせる）
        document.querySelectorAll<HTMLElement>(".markdown pre > code, .markdown table").forEach((element) => {
            if (element.scrollWidth > element.clientWidth && !element.hasAttribute("tabindex")) {
                element.tabIndex = 0;
            }
        });

        return () => timers.forEach((timer) => window.clearTimeout(timer));
    }, [pathname]);

    return null;
};

export default CodeCopyButtons;
