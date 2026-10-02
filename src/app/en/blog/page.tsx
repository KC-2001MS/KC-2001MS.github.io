import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import PageCard from "@/components/PageCard";
import EmptyMessage from "@/components/EmptyMessage";
import { readMarkdownFilenames } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Iroiro's blog",
  description:
    "This is a blog to output various contents about various technologies.",
  abstract:
    "This is a blog to output various contents about various technologies.",
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
    canonical: "https://iroiro.dev/en/blog",
    languages: {
      ja: "https://iroiro.dev/blog",
      en: "https://iroiro.dev/en/blog",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://iroiro.dev/en/blog",
    title: "Iroiro's blog",
    description:
      "This is a blog to output various contents about various technologies.",
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

export default async function Blog() {
  const blogList = await getBlog();

  return (
    <main>
      <div id="maincard">
        <div className="card">
          <h1>Blog</h1>
            {blogList.length === 0 ? (
              <EmptyMessage message="There are currently no blog posts." />
            ) : blogList.map((blog, index) => (
              <PageCard key={index} title={blog.title} description={blog.description} date={blog.date} genre={blog.genre} path={blog.path} />
            ))}
        </div>
      </div>
  </main>
  );
}

async function getBlog() {
// 1. Markdownファイルが保存されているディレクトリを指定
  const blogDirectory = path.join(process.cwd(), 'content/en/blog');

  // 2. ディレクトリ内の全ファイル名を取得
  const filenames = readMarkdownFilenames(blogDirectory);

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