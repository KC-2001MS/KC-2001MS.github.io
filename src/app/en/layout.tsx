import type { Metadata } from "next";
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollbarWidth from '@/components/ScrollbarWidth';
import CodeCopyButtons from '@/components/CodeCopyButtons';
import { Language } from "@/lib/Language";
import "@styles/var.css";
import "@styles/foundation.css";
import "@styles/content.css";
import "@styles/accessibility.css";

export const metadata: Metadata = {
  title: "Iroiro's portfolio【SwiftUI】",
  description:
    "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
  abstract:
    "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
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
  keywords: ["SwiftUI", "Keisuke", "Chinone"],
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
    type: "article",
    url: "https://iroiro.dev",
    title: "Iroiro's portfolio",
    description:
      "Keisuke Chinone's (activity name: Iroiro) portfolio site, I'm developing applications on Apple platforms. This site provides information and support for applications released on the App Store.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  return (
    <html lang="en">
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
        <link rel="preload" href="/fonts/material-symbols-outlined-subset.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="date" content={formattedDate} />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="author" content="Keisuke Chinone" />
        <meta name="copyright" content="© 2024 Keisuke Chinone" />
        <meta httpEquiv='x-dns-prefetch-control' content='on' />
        <meta httpEquiv="Expires" content="604800" />
        <link rel="me" href="https://mastodon.social/@Iroiro" />
        <ScrollbarWidth />
      </head>
      <body>
        <a className="skipLink" href="#content">Skip to main content</a>
        <Header lang={Language.EnglishUS} />
        <span id="content" tabIndex={-1} />
        {children}
        <CodeCopyButtons />
        <Footer lang={Language.EnglishUS} />
      </body>
    </html>
  );
}
