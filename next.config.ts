import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  // trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
  experimental: {
    // CSSを別ファイルではなくHTMLに埋め込み、CSSの読み込みを待たずに描画を始められるようにする
    inlineCss: true,
  },
};

export default nextConfig;
