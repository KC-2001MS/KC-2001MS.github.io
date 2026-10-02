import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeWrapTables from "@/lib/rehypeWrapTables";
import rehypeStringify from "rehype-stringify";
import addClasses from "rehype-class-names";
import { Metadata } from "next";
import DonationSection from "@/components/DonationSection";
import { Language } from "@/lib/Language";
import { notFound } from "next/navigation";
import { EMPTY_SLUG, getStaticSlugs } from "@/lib/markdown";

type BlogDetailPageProps = {
  params: Promise<{ slug: string; }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/en/blog", `${slug}.md`);
  const fileContents = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";

  const { data } = matter(fileContents);

  const defaultAppName = "Iroiro's portfolio";
  const defaultTitle = "Iroiro's blog";
  const defaultDescription = "This is a blog to output various contents about various technologies.";

  return {
    title: data.title || defaultTitle,
    description: data.description || defaultDescription,
    abstract: data.description || defaultDescription,
    applicationName: defaultAppName,
    authors: [
      {
        name: "Keisuke Chinone",
        url: "https://iroiro.dev",
      },
    ],
    creator: "Keisuke Chinone",
    publisher: "Keisuke Chinone",
    generator: "Next.js",
    keywords: data.keywords || [],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://iroiro.dev/en/blog/${slug}`,
      languages: {
        ja: `https://iroiro.dev/blog/${slug}`,
        en: `https://iroiro.dev/en/blog/${slug}`,
      },
    },
    icons: [
      { rel: "icon", url: "https://iroiro.dev/favicon.ico" },
      { rel: "apple-touch-icon", url: "https://iroiro.dev/apple-touch-icon.png" },
    ],
    openGraph: {
      type: "article",
      url: `https://iroiro.dev/en/blog/${slug}`,
      title: data.title || defaultTitle,
      description: data.description || defaultDescription,
      siteName: defaultAppName,
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
      title: defaultAppName,
      statusBarStyle: "black-translucent",
    },
    itunes: data.appId === undefined ? null : {
      appId: data.appId ?? '',
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

// ページのコンポーネント
export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { slug } = await params
  if (slug === EMPTY_SLUG) {
    notFound();
  }
  const { content } = await getBlogDetail(slug);

  return (
    <main>
      <div id="maincard">
        {/* 記事の本文（Safariのリーダー表示などが本文として認識できるよう article にする） */}
        <article className="card markdown" dangerouslySetInnerHTML={{ __html: content }} />
        <DonationSection lang={Language.EnglishUS} />
      </div>
    </main>
  );
}

// 各製品のデータを取得
async function getBlogDetail(slug: string) {
  const filePath = path.join(process.cwd(), "content/en/blog", `${slug}.md`);
  let fileContents = "";

  try {
    fileContents = fs.readFileSync(filePath, "utf-8");
  } catch {
    console.warn(`Markdown file not found for slug: ${slug}`);
    return { content: "" }; // ファイルが見つからない場合は空のコンテンツを返す
  }


  const { content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeWrapTables)
    .use(rehypeStringify)
    .use(addClasses, {
      'div': 'title',
      'img': 'markdown-image'
    })
    .process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成
export async function generateStaticParams() {
  return getStaticSlugs(path.join(process.cwd(), "content/en/blog"));
}
