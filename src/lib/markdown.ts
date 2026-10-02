import fs from "fs";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import addClasses from "rehype-class-names";
import rehypeWrapTables from "@/lib/rehypeWrapTables";
import rehypeMarkdownImages from "@/lib/rehypeMarkdownImages";

// 記事が0件の時に generateStaticParams が返すダミーのslug
// output: "export" では空配列を返すとビルドに失敗するため
export const EMPTY_SLUG = "_empty";

// ディレクトリ内のMarkdownファイル名を取得（ディレクトリが存在しない場合は空配列）
export function readMarkdownFilenames(directory: string): string[] {
  try {
    return fs.readdirSync(directory).filter((filename) => filename.endsWith(".md"));
  } catch {
    return [];
  }
}

// generateStaticParams用のslug一覧を生成
export function getStaticSlugs(directory: string): { slug: string }[] {
  const slugs = readMarkdownFilenames(directory).map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));

  return slugs.length > 0 ? slugs : [{ slug: EMPTY_SLUG }];
}

// MarkdownをHTMLに変換する（日本語版・英語版の全ページで共通）
export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeWrapTables)
    .use(rehypeMarkdownImages)
    .use(rehypeStringify)
    .use(addClasses, {
      'div': 'title',
      'img': 'markdown-image'
    })
    .process(markdown);
  return processed.toString();
}
