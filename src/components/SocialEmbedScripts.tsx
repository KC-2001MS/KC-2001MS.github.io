import Script from "next/script";

// X（Twitter）とBlueskyの埋め込みを表示するためのスクリプト
// 埋め込みがあるページでだけ読み込み、ほかのページの読み込みを重くしないようにする
const SocialEmbedScripts = ({ html }: { html: string }) => (
    <>
        {html.includes("twitter-tweet") && (
            <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" strategy="lazyOnload" />
        )}
        {html.includes("bluesky-embed") && (
            <Script src="https://embed.bsky.app/static/embed.js" charSet="utf-8" strategy="lazyOnload" />
        )}
    </>
);

export default SocialEmbedScripts;
