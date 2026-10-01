import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import addClasses from "rehype-class-names";
import { Metadata } from "next";
import DonationSection from "@/components/DonationSection";
import { notFound } from "next/navigation";
import { EMPTY_SLUG, getStaticSlugs } from "@/lib/markdown";

type NewsroomDetailPageProps = {
  params: Promise<{ slug: string; }>;
};

export async function generateMetadata({ params }: NewsroomDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/ja/newsroom", `${slug}.md`);
  const fileContents = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";

  const { data } = matter(fileContents);

  const defaultAppName = "いろいろポートフォリオ";
  const defaultTitle = "ニュースルーム";
  const defaultDescription = "いろいろの活動に関わるお知らせです。";

  return {
    title: data.title || defaultTitle,
    description: data.description || defaultDescription,
    abstract: data.description || defaultDescription,
    applicationName: defaultAppName,
    authors: [
      {
        name: '茅根啓介',
        url: 'https://iroiro.dev',
      },
    ],
    creator: "茅根啓介",
    publisher: "茅根啓介",
    generator: 'Next.js',
    keywords: data.keywords || [],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://iroiro.dev/en/newsroom/${slug}`,
      languages: {
        ja: `https://iroiro.dev/newsroom/${slug}`,
        en: `https://iroiro.dev/en/newsroom/${slug}`,
      },
    },
    icons: [
      { rel: "icon", url: "https://iroiro.dev/favicon.ico" },
      { rel: "apple-touch-icon", url: "https://iroiro.dev/apple-touch-icon.png" },
    ],
    openGraph: {
      type: "article",
      url: `https://iroiro.dev/newsroom/${slug}`,
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
export default async function NewsroomDetail({ params }: NewsroomDetailPageProps) {
  const { slug } = await params
  if (slug === EMPTY_SLUG) {
    notFound();
  }
  const { content } = await getNewsroomDetail(slug);

  return (
    <main>
      <div id="maincard">
        <div className="card markdown" dangerouslySetInnerHTML={{ __html: content }} />
        <DonationSection />
      </div>
    </main>
  );
}

// Newsのデータを取得
async function getNewsroomDetail(slug: string) {
  const filePath = path.join(process.cwd(), "content/ja/newsroom", `${slug}.md`);
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
  return getStaticSlugs(path.join(process.cwd(), "content/ja/newsroom"));
}
