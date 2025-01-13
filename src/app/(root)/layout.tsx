import type { Metadata } from "next";
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "@styles/var.css";
import "@styles/foundation.css";

export const metadata: Metadata = {
  title: "【SwiftUIアプリ開発】いろいろポートフォリオ",
  description: "茅根啓介（活動名：いろいろ）のポートフォリオサイトです。Appleプラットフォームでアプリケーションを展開しております。このサイトでは、App Storeでリリースしたアプリの情報とサポート等を行います。",
  abstract: '茅根啓介（活動名：いろいろ）のポートフォリオサイトです。Appleプラットフォームでアプリケーションを展開しております。このサイトでは、App Storeでリリースしたアプリの情報とサポート等を行います。',
  applicationName: 'いろいろポートフォリオ',
  authors: [
    {
      name: '茅根啓介',
      url: 'https://iroiro.dev',
    },
  ],
  creator: "茅根啓介",
  publisher: "茅根啓介",
  generator: 'Next.js',
  keywords: ["SwiftUI", "茅根啓介"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://iroiro.dev/en/",
    languages: {
      ja: "https://iroiro.dev/",
      en: "https://iroiro.dev/en/",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
  ],
  openGraph: {
    type: 'article',
    url: 'https://iroiro.dev',
    title: '【SwiftUIアプリ開発】いろいろポートフォリオ',
    description: '茅根啓介（活動名：いろいろ）のポートフォリオサイトです。Appleプラットフォームでアプリケーションを展開しております。このサイトでは、リリースしたアプリの情報とサポート等を行います。',
    siteName: 'いろいろのポートフォリオ',
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
    title: 'いろいろポートフォリオ',
    statusBarStyle: 'black-translucent'
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  return (
    <html lang="ja">
      <head prefix="og: https://ogp.me/ns#">
        <Script async src={"https://www.googletagmanager.com/gtag/js?id=G-L32Y5LGJEB"} />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-L32Y5LGJEB');
      `}
        </Script>
        <Script async src={"https://embed.bsky.app/static/embed.js"} charSet="utf-8" />
        <Script async src={"https://platform.twitter.com/widgets.js"} charSet="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <meta name="date" content={formattedDate} />
        <meta name="google" content="nositelinkssearchbox" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <meta name="language" content="Japanese" />
        <meta httpEquiv="content-language" content="ja" />
        <meta name="author" content="茅根啓介" />
        <meta name="copyright" content="© 2024 Keisuke Chinone" />
        <meta httpEquiv='x-dns-prefetch-control' content='on' />
        <meta httpEquiv="Expires" content="604800" />
        <link rel="me" href="https://mastodon.social/@Iroiro" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
