import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "@/lib/markdown";
import DonationSection from "@/components/DonationSection";
import { Language } from "@/lib/Language";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Iroiro",
  description:
    "Contact information for inquiries about applications, projects and services developed by Keisuke Chinone (activity name: Iroiro).",
  abstract:
    "Contact information for inquiries about applications, projects and services developed by Keisuke Chinone (activity name: Iroiro).",
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
    canonical: "https://iroiro.dev/en/contact",
    languages: {
      ja: "https://iroiro.dev/contact",
      en: "https://iroiro.dev/en/contact",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://iroiro.dev/en/contact",
    title: "Contact Iroiro",
    description:
      "Contact information for inquiries about applications, projects and services developed by Keisuke Chinone (activity name: Iroiro).",
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

export default async function Contact() {
  const { content } = await getContact();

  return (
    <main>
      <div id="maincard">
        <div className="card markdown" dangerouslySetInnerHTML={{ __html: content }} />
        {/* 寄付の案内は記事末尾と共通の部品を使う */}
        <DonationSection lang={Language.EnglishUS} />
      </div>
    </main>
  );
}

async function getContact() {
  const filePath = path.join(process.cwd(), "content/en/", "contact.md");
  const fileContents = fs.readFileSync(filePath, "utf-8");


  const { content } = matter(fileContents);
  const processedContent = await markdownToHtml(content);

  return {
    content: processedContent,
  };
}