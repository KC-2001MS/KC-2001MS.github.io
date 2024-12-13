import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { Metadata } from "next";

type ProductPageProps = {
  params: Promise<{ slug: string; }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/en/product", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data } = matter(fileContents);

  const defaultAppName = "Iroiro's portfolio";
  const defaultTitle = "Iroiro's product details";
  const defaultDescription = "This page allows you to learn more about Iroiro's products.";

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
      canonical: `https://iroiro.dev/en/product/${slug}`,
      languages: {
        ja: `https://iroiro.dev/product/${slug}`,
        en: `https://iroiro.dev/en/product/${slug}`,
      },
    },
    icons: [
      { rel: "icon", url: "https://iroiro.dev/favicon.ico" },
      { rel: "apple-touch-icon", url: "https://iroiro.dev/apple-touch-icon.png" },
    ],
    openGraph: {
      type: "article",
      url: `https://iroiro.dev/en/product/${slug}`,
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
export default async function ProductDetail({ params }: ProductPageProps) {
  const { slug } = await params
  const { content } = await getProduct(slug);

  return (
    <main>
      <div id="maincard">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}

// 各製品のデータを取得
async function getProduct(slug: string) {
  const filePath = path.join(process.cwd(), "content/en/product", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成
export async function generateStaticParams() {
  const productsDir = path.join(process.cwd(), "content/en/product");
  const filenames = fs.readdirSync(productsDir);

  // Markdownファイルから `slug` を生成
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}