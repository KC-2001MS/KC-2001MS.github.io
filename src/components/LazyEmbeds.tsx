"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// data-src を持つ iframe（GitHub Sponsorsのボタンなど）を、画面に近づいたときに読み込む
// ブラウザの loading="lazy" は画面からかなり離れていても読み込むため、短いページでは最初から読み込まれてしまう
const LazyEmbeds = () => {
    const pathname = usePathname();

    useEffect(() => {
        const frames = [...document.querySelectorAll<HTMLIFrameElement>("iframe[data-src]")];
        const load = (frame: HTMLIFrameElement) => {
            if (frame.dataset.src) frame.src = frame.dataset.src;
            frame.removeAttribute("data-src");
        };
        if (!("IntersectionObserver" in window)) {
            frames.forEach(load);
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                load(entry.target as HTMLIFrameElement);
                observer.unobserve(entry.target);
            }
        }, { rootMargin: "200px 0px" });
        frames.forEach((frame) => observer.observe(frame));
        return () => observer.disconnect();
    }, [pathname]);

    return null;
};

export default LazyEmbeds;
