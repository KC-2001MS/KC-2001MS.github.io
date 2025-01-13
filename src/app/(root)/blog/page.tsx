import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import "@styles/content.css";
import PageCard from "@/components/PageCard";

export const metadata: Metadata = {
  title: "いろいろのブログ",
  description:
    "いろいろがさまざまな技術についての内容をアウトプットするためのブログです。",
  abstract:
    "いろいろがさまざまな技術についての内容をアウトプットするためのブログです。",
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

export default async function Blog() {
  const blogList = await getBlog();

  return (
    <main>
      <div id="maincard">
        <div className="card">
          <h1 className="n1">Blog</h1>
            {blogList.map((blog, index) => (
              <PageCard key={index} title={blog.title} description={blog.description} date={blog.date} genre={blog.genre} path={blog.path} />
            ))}
        </div>
      </div>
  </main>
  );
}

async function getBlog() {
// 1. Markdownファイルが保存されているディレクトリを指定
  const blogDirectory = path.join(process.cwd(), 'content/ja/blog');

  // 2. ディレクトリ内の全ファイル名を取得
  const filenames = fs.readdirSync(blogDirectory);

  // 3. Markdownファイルを読み込み、必要なデータを抽出
  const blogList = filenames
    .filter((filename) => filename.endsWith('.md')) // .mdファイルのみ対象
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // gray-matterでフロントマターを解析
      const { data } = matter(fileContents);

    return {
        title: data.title || '',
        description: data.description || '',
        genre: data.genre || '',
        date: data.date || '',
        path: path.join('/en/blog', filename.replace(/\.md$/, "")),
      };
    });

  // 必要なデータを配列として返す
  return blogList;
}