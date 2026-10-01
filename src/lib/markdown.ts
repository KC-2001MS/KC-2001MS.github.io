import fs from "fs";

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
