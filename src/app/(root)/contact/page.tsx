import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import addClasses from "rehype-class-names";
import { Metadata } from "next";
import "@styles/content.css";

export const metadata: Metadata = {
  title: "いろいろへのお問い合わせ",
  description:
    "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスについてのお問い合わせ先です。",
  abstract:
    "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスについてのお問い合わせ先です。",
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
    canonical: "https://iroiro.dev/contact",
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
    url: "https://iroiro.dev/contact",
    title: "いろいろへのお問い合わせ",
    description:
      "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスについてのお問い合わせ先です。",
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

export default async function Contact() {
  const { content } = await getContact();

  return (
    <main>
    <div id="maincard">
    <div className="card" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </main>
  );
}

async function getContact() {
  const filePath = path.join(process.cwd(), "content/ja/", "contact.md");
  const fileContents = fs.readFileSync(filePath, "utf-8");

  function getRandomString(): string {
    const options = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
  
    const randomIndex = Math.floor(Math.random() * options.length);
  
    return options[randomIndex];
  }

  const { content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(addClasses, {
      'div': 'title',
      'h1': getRandomString()
    })
    .process(content);

  return {
    content: processedContent.toString(),
  };
}