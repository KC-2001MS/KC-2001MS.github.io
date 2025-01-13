import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import "@styles/content.css";
import PageCard from "@/components/PageCard";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "This page allows you to learn more about Iroiro's products.",
  abstract:
    "This page allows you to learn more about Iroiro's products.",
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

export default async function Newsroom() {
  const newsroomList = await getNewsroom();

  return (
    <main>
    <div id="maincard">
    {newsroomList.map((newsroom, index) => (
      <PageCard key={index} title={newsroom.title} description={newsroom.description} date={newsroom.date} genre={newsroom.genre} path={newsroom.path} />
    ))}
    </div>
  </main>
  );
}

async function getNewsroom() {
// 1. Markdownファイルが保存されているディレクトリを指定
  const newsroomDirectory = path.join(process.cwd(), 'content/en/newsroom');

  // 2. ディレクトリ内の全ファイル名を取得
  const filenames = fs.readdirSync(newsroomDirectory);

  // 3. Markdownファイルを読み込み、必要なデータを抽出
  const newsroomList = filenames
    .filter((filename) => filename.endsWith('.md')) // .mdファイルのみ対象
    .map((filename) => {
      const filePath = path.join(newsroomDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // gray-matterでフロントマターを解析
      const { data } = matter(fileContents);

      return {
        title: data.title || '',
        description: data.description || '',
        genre: data.genre || '',
        date: data.date || '',
        path: path.join('/en/newsroom', filename.replace(/\.md$/, "")),
      };
    });

  // 必要なデータを配列として返す
  return newsroomList;
}