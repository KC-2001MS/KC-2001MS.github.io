import type { Metadata } from "next";
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AppCard from "@/components/AppCard";
import styles from "@styles/product.module.css";
import productData from '@/../content/ja/product.json';

export const metadata: Metadata = {
    title: "いろいろが開発したアプリや貢献したプロジェクト・サービス",
    description:
        "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスです。それぞれのサービスの概要について詳しく説明します。",
    abstract:
        "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスの詳細ページです。",
    applicationName: "いろいろポートフォリオ",
    authors: [
        {
            name: "茅根啓介",
            url: "https://iroiro.dev",
        },
    ],
    creator: "茅根啓介",
    publisher: "茅根啓介",
    generator: "Next.js",
    keywords: ["SwiftUI", "茅根啓介"],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iroiro.dev/product",
        languages: {
            ja: "https://iroiro.dev/product",
            en: "https://iroiro.dev/en/product",
        },
    },
    icons: [
        { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
        { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
    ],
    openGraph: {
        type: "article",
        url: "https://iroiro.dev/product",
        title: "いろいろが開発したアプリや貢献したプロジェクト・サービス",
        description:
            "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスです。それぞれのサービスの概要について詳しく説明します。",
        siteName: 'いろいろのポートフォリオ',
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
        title: "いろいろポートフォリオ",
        statusBarStyle: "black-translucent",
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false,
    },
};

export default async function Product() {

    return (
        <main>
            <div id="maincard">
                <div className="card">
                    <h1>アプリケーション</h1>
                    <div className="card">
                        <h2>開発</h2>
                        <div className={styles.appGrid}>
                            {productData.apps.development.map((app) => (
                                <AppCard key={app.id}
                                    id={app.id}
                                    title={app.title}
                                    icon={app.icon}
                                    darkIcon={"darkIcon" in app ? (app.darkIcon as string) : undefined}
                                    platforms={app.supportedPlatforms}
                                    description={app.description}
                                    supportPage={app.supportPage}
                                    feedback={app.feedback}
                                >
                                    {"cm" in app && Array.isArray(app.cm) && app.cm.length > 0 && (
                                        <>
                                            <h4>CM</h4>
                                            {(app.cm as { name: string; url: string }[]).map((cmItem, index) => (
                                                <div key={index}>
                                                    <h5>{cmItem.name}</h5>
                                                    <YouTubeEmbed videoId={cmItem.url} />
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </AppCard>
                            ))}
                        </div>
                    </div>

                    <div className={`card ${styles.clear}`}>
                        <h2>移植</h2>
                        <div className={styles.appGrid}>
                            {productData.apps.transplanting.map((app) => (
                                <AppCard key={app.id}
                                    id={app.id}
                                    title={app.title}
                                    icon={app.icon}
                                    darkIcon={"darkIcon" in app ? (app.darkIcon as string) : undefined}
                                    platforms={app.supportedPlatforms}
                                    description={app.description}
                                    supportPage={app.supportPage}
                                    feedback={app.feedback}
                                >
                                    {app.media && (
                                        <>
                                            <h4>メディア</h4>
                                            {app.media.map((mediaItem, index) => (
                                                <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                            ))}
                                        </>
                                    )}
                                    {app.originalSource && (
                                        <>
                                            <h4>{app.originalSource.platform}版について</h4>
                                            <p>
                                                Safari拡張機能の元となっている{app.originalSource.platform}拡張機能があります。もし、{app.originalSource.platform}で使用したい場合は
                                                <a href={app.originalSource.url} aria-label={`こちら：${app.originalSource.platform}版の${app.title}`}>こちら</a>
                                                をご利用ください。
                                            </p>
                                            <p>※{app.originalSource.platform}版のサポートは<a href={`mailto:${app.originalSource.supportEmail}`}>{app.originalSource.platform}版の製作者のメールアドレス</a>にお願いします。こちらではサポートを受け付けておりませんのでご注意ください。</p>
                                        </>
                                    )}
                                </AppCard>
                            ))}
                        </div>
                    </div>

                    <div className={`card ${styles.clear}`}>
                        <h2>翻訳</h2>
                        <div className={styles.appGrid}>
                            {productData.apps.translation.map((app) => (
                                <AppCard key={app.id}
                                    id={app.id}
                                    title={app.title}
                                    platforms={app.supportedPlatforms}
                                    description={<><strong>{app.title}</strong>{app.description.replace(app.title + 'は', 'は')}</>}
                                    supportPage={app.supportPage}
                                    feedback={app.feedback}
                                >
                                    {app.media && (
                                        <>
                                            <h4>メディア</h4>
                                            {app.media.map((mediaItem, index) => (
                                                <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                            ))}
                                        </>
                                    )}
                                </AppCard>
                            ))}
                        </div>
                    </div>
                </div>
                {productData.others.map((item) => (
                    <div key={item.id} className={`card ${styles.clear}`}>
                        <h1>{item.label}</h1>
                        <div className="card">
                            <h2>{item.title}</h2>
                            {item.label === "テンプレート" ? (
                                <div>
                                    {item.description}
                                    概要は<a href={item.repositoryUrl}>{item.title}リポジトリ</a>からご確認ください。
                                    {item.downloadUrl && (
                                        <p><a href={item.downloadUrl} aria-label={`ダウンロード：${item.title}`}>ダウンロード</a></p>
                                    )}
                                </div>
                            ) : (
                                <p>
                                    {item.description}
                                    {item.moreInfoUrl && (
                                        <>概要は<a href={item.moreInfoUrl}>{item.label} {item.title}【公式】</a>からご確認ください。</>
                                    )}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                <div className={`card ${styles.clear}`}>
                    <h1>フレームワーク・パッケージ</h1>
                    {productData.frameworks.map((framework) => (
                        <div key={framework.id} className="card">
                            <h2>{framework.title}</h2>
                            <p>
                                {framework.description}
                                概要は<a href={framework.repositoryUrl}>{framework.title}リポジトリ</a>からご確認ください。
                            </p>
                        </div>
                    ))}
                </div>
                <div className={`card ${styles.clear}`}>
                    <h1>シェルスクリプト</h1>
                    {productData.shellScripts.map((script) => (
                        <div key={script.id} className="card">
                            <h2>{script.title}</h2>
                            <div>
                                {script.description}
                                概要は<a href={script.repositoryUrl}>{script.title}リポジトリ</a>からご確認ください。
                                {script.downloadUrl && (
                                    <a href={script.downloadUrl} aria-label={`ダウンロード：${script.title}`}>ダウンロード</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`card ${styles.clear}`}>
                    <h1>ウェブサイト</h1>
                    {productData.websites.map((website) => (
                        <div key={website.id} className="card">
                            <h2>{website.title}</h2>
                            <p>{website.description}</p>
                        </div>
                    ))}
                </div>

                <hr />

                {productData.trademarkNotices.map((notice, index) => (
                    <p key={index} className="caption">{index + 1}.{notice}</p>
                ))}
            </div>
        </main>
    );
}