import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "This page does not exist.",
    description:
        "This page does not exist in the Iroiro's portfolios.",
    abstract:
        "This page does not exist in the Iroiro's portfolios.",
    applicationName: "Iroiro's portfolio",
    authors: [
        {
            name: "Keisuke Chinone",
            url: "https://iroiro.dev",
        },
    ],
    creator: "Keisuke Chinone",
    publisher: "Keisuke Chinone",
    generator: "Next.js",
    keywords: ["404", "existence", "Keisuke", "Chinone"],
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: "https://iroiro.dev/en/404",
        languages: {
            ja: "https://iroiro.dev/404",
            en: "https://iroiro.dev/en/404",
        },
    },
    icons: [
        { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
        { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
    ],
    openGraph: {
        type: "article",
        url: "https://iroiro.dev/en/404",
        title: "This page does not exist.",
        description:
            "This page does not exist in the Iroiro's portfolios.",
        siteName: "Iroiro's portfolio",
        images: [
            {
                url: 'https://iroiro.dev/images/出雲大社1080.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@IroIro1234work',
        creator: '@IroIro1234work',
        images: 'https://iroiro.dev/images/出雲大社1080.jpg',
    },
    appleWebApp: {
        capable: true,
        title: "Iroiro's portfolio",
        statusBarStyle: 'black-translucent'
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false,
    },
};

export default function Error404() {
    return (
        <main id="backgroundImage">
            <div id="goal">
                <h2 id="goalTitle"><strong>404</strong></h2>
                <p id="goalSubtitle">This page does not exist.</p>
                <p id="goalSubtitle">This page does not appear to have been created; please check to see if the URL is correct.</p>
            </div>
            <div id="language">
                Language : <a id="languageItem" href="../">日本語</a>
            </div>
        </main>
    );
}
