import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このページは存在しない",
  description:
    "いろいろポートフォリオにこのページは存在しない",
  abstract:
    "いろいろポートフォリオにこのページは存在しない",
  applicationName: "いろいろポートフォリオ",
  authors: [
    {
      name: "茅根啓介",
      url: "https://iroiro.dev",
    },
  ],
  creator: "茅根啓介",
  publisher: "茅根啓介",
  generator: "Next.js",
  keywords: ["404", "存在", "茅根啓介"],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://iroiro.dev/404",
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
    url: "https://iroiro.dev/404",
    title: "このページは存在しない",
    description:
      "いろいろポートフォリオにこのページは存在しない",
    siteName: 'いろいろのポートフォリオ',
    images: [
      {
        url: "https://iroiro.dev/images/出雲大社1080.jpg",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@IroIro1234work",
    creator: "@IroIro1234work",
    images: "https://iroiro.dev/images/出雲大社1080.jpg",
  },
  appleWebApp: {
    capable: true,
    title: "いろいろポートフォリオ",
    statusBarStyle: "black-translucent",
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
          <h1 id="goalTitle">404</h1>
          <p className="goalSubtitle">このページは存在しません。<br />このページは作られていないようです。URLが正しいかどうかを確認してください。</p>
        </div>
        <div id="language">
          言語 : <a id="languageItem" href="./en">English</a>
        </div>
      </main>
    );
  }
  