import fs from "fs";
import path from "path";

// アプリアイコンの縮小版（public/images/icons/「<元のファイル名> <幅>.avif」）
// 縮小版がないアイコン（新しく追加したアプリなど）は、元の画像をそのまま使う
export const ICON_WIDTHS = [88, 176, 264];

// "/images/X Light.avif" → "/images/icons/X Light 264.avif"
export const iconVariantPath = (icon: string, width: number) =>
    icon.replace(/^\/images\//, "/images/icons/").replace(/\.avif$/, ` ${width}.avif`);

// すべての幅の縮小版がそろっているか（ビルド時にファイルを確認する）
export const hasIconVariants = (icon: string) =>
    ICON_WIDTHS.every((width) => fs.existsSync(path.join(process.cwd(), "public", iconVariantPath(icon, width))));
