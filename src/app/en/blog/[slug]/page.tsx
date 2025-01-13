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

type BlogDetailPageProps = {
  params: Promise<{ slug: string; }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/en/blog", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

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
  const { content } = await getBlogDetail(slug);

  return (
    <main>
      <div id="maincard">
        <div className="card" dangerouslySetInnerHTML={{ __html: content }} />
        <hr />
        <h1>Contribution</h1>
        If you would like to make a donation, please click here. The money you donate will be used to improve my programming skills and maintain the application.
        <p>
          <a href="https://www.buymeacoffee.com/iroiro" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: '60px', width: '217px' }} />
          </a>
          <br />
          <a href="https://paypal.me/iroiroWork" style={{ borderRadius: '20px', display: 'block', width: '217px', padding: '15px', boxSizing: 'border-box', background: '#0070ba', color: '#FFF', textDecoration: 'none', textAlign: 'center' }}>
            Pay by PayPal
          </a>
        </p>
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
      'h1': getRandomString(),
      'img': 'markdown-image'
    })
    .process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/en/blog");
  let filenames: string[] = [];

  try {
    filenames = fs.readdirSync(blogDir);
  } catch {
    console.warn("No markdown files found in the directory.");
    return []
  }

  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}