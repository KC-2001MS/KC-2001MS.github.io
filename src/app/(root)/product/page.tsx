import type { Metadata } from "next";
import Image from "next/image";
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AppStoreLink from '@/components/AppStoreLink';
import "@styles/content.css";
import "@styles/product.css";
import AppStorePriceTag from "@/components/AppStorePriceTag";
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
    const getRandomClassName = () => {
        const classes = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
        return classes[Math.floor(Math.random() * classes.length)];
    };

    return (
        <main>
            <div id="maincard">
                <div className="card">
                    <h1 className={getRandomClassName()}>アプリケーション</h1>
                    <div className="card">
                        <h2>開発</h2>
                        {productData.apps.development.map((app) => (
                            <div key={app.id} className="card clear">
                                <div className="appInfoTop">
                                    <h3 className="left appTitle">{app.title}</h3>
                                    <a href={`https://apps.apple.com/app/${app.id}`}>
                                        <Image src={app.icon} className="appIcon left" height={100} width={100} alt={`${app.title}アイコン`} />
                                    </a>
                                </div>
                                <div className="clear">
                                    <p>{app.description}</p>
                                    <p>対応プラットフォームは次の通りです。</p>
                                </div>
                                <h3>対応プラットフォーム</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="os">OS</th>
                                            <th className="vr">バージョン</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {app.supportedPlatforms.map((platform, index) => (
                                            <tr key={index}>
                                                <td className="osItem">{platform.os}</td>
                                                <td className="vrItem">{platform.version} ~</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {(() => {
                                    const appWithCm = app as Record<string, unknown>;
                                    if ('cm' in app && appWithCm.cm && Array.isArray(appWithCm.cm) && appWithCm.cm.length > 0) {
                                        const cmItems = appWithCm.cm as { name: string; url: string }[];
                                        return (
                                            <>
                                                <h3>CM</h3>
                                                <div>
                                                    {cmItems.map((cmItem: { name: string; url: string }, index: number) => (
                                                        <div key={index}>
                                                            <h5>{cmItem.name}</h5>
                                                            <YouTubeEmbed videoId={cmItem.url} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    }
                                    return null;
                                })()}
                                <h3><a href={app.supportPage}>サポートページ</a></h3>
                                <h3><a href={app.feedback}>フィードバック</a></h3>
                                <div className="appInfoButtom">
                                    <AppStoreLink appId={app.id} />
                                    <AppStorePriceTag id={parseInt(app.id.replace('id', ''))} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card clear">
                        <h2>移植</h2>
                        {productData.apps.transplanting.map((app) => (
                            <div key={app.id} className="card">
                                <div className="appInfoTop">
                                    <h3 className="left appTitle">{app.title}</h3>
                                    <a href={`https://apps.apple.com/app/${app.id}`}>
                                        <Image src={app.icon} className="appIcon left" height={100} width={100} alt={`${app.title}アイコン`} />
                                    </a>
                                </div>
                                <div className="clear">
                                    <p><strong>{app.title}</strong>{app.description.replace(app.title, '')}</p>
                                    <p>対応プラットフォームは次の通りです。</p>
                                </div>
                                <h3>対応プラットフォーム</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="os">OS</th>
                                            <th className="vr">バージョン</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {app.supportedPlatforms.map((platform, index) => (
                                            <tr key={index}>
                                                <td className="osItem">{platform.os}</td>
                                                <td className="vrItem">{platform.version} ~</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {app.media && (
                                    <>
                                        <h3>メディア</h3>
                                        {app.media.map((mediaItem, index) => (
                                            <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                        ))}
                                    </>
                                )}
                                <h3><a href={app.supportPage}>サポートページ</a></h3>
                                <h3><a href={app.feedback}>フィードバック</a></h3>
                                {app.originalSource && (
                                    <>
                                        <h3>{app.originalSource.platform}版について</h3>
                                        <p>
                                            Safari拡張機能の元となっている{app.originalSource.platform}拡張機能があります。もし、{app.originalSource.platform}で使用したい場合は
                                            <a href={app.originalSource.url}>こちら</a>
                                            をご利用ください。
                                        </p>
                                        <p>※{app.originalSource.platform}版のサポートは<a href={`mailto:${app.originalSource.supportEmail}`}>{app.originalSource.platform}版の製作者のメールアドレス</a>にお願いします。こちらではサポートを受け付けておりませんのでご注意ください。</p>
                                    </>
                                )}
                                <div className="appInfoButtom">
                                    <AppStoreLink appId={app.id} />
                                    <AppStorePriceTag id={parseInt(app.id.replace('id', ''))} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card clear">
                        <h2>翻訳</h2>
                        {productData.apps.translation.map((app) => (
                            <div key={app.id} className="card">
                                <h3>{app.title}</h3>
                                <div className="clear">
                                    <p><strong>{app.title}</strong>{app.description.replace(app.title + 'は', 'は')}</p>
                                </div>
                                <h3>対応プラットフォーム</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="os">OS</th>
                                            <th className="vr">バージョン</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {app.supportedPlatforms.map((platform, index) => (
                                            <tr key={index}>
                                                <td className="osItem">{platform.os}</td>
                                                <td className="vrItem">{platform.version} ~</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {app.media && (
                                    <>
                                        <h3>メディア</h3>
                                        {app.media.map((mediaItem, index) => (
                                            <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                        ))}
                                    </>
                                )}
                                <h3><a href={app.supportPage}>サポートページ</a></h3>
                                <h3><a href={app.feedback}>フィードバック</a></h3>
                                <div className="appInfoButtom">
                                    <AppStoreLink appId={app.id.startsWith('id') ? app.id : `id${app.id}`} />
                                    <AppStorePriceTag id={parseInt(app.id.replace(/^(id|d)/, ''))} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {productData.others.map((item) => (
                    <div key={item.id} className="card clear">
                        <h1 className={getRandomClassName()}>{item.label}</h1>
                        <div className="card">
                            <h2>{item.title}</h2>
                            {item.label === "テンプレート" ? (
                                <div>
                                    {item.description}
                                    概要は<a href={item.repositoryUrl}>{item.title}リポジトリ</a>からご確認ください。
                                    {item.downloadUrl && (
                                        <h3><a href={item.downloadUrl}>ダウンロード</a></h3>
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
                <div className="card clear">
                    <h1 className={getRandomClassName()}>フレームワーク・パッケージ</h1>
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
                <div className="card clear">
                    <h1 className={getRandomClassName()}>シェルスクリプト</h1>
                    {productData.shellScripts.map((script) => (
                        <div key={script.id} className="card">
                            <h2>{script.title}</h2>
                            <div>
                                {script.description}
                                概要は<a href={script.repositoryUrl}>{script.title}リポジトリ</a>からご確認ください。
                                {script.downloadUrl && (
                                    <a href={script.downloadUrl}>ダウンロード</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card clear">
                    <h1 className={getRandomClassName()}>ウェブサイト</h1>
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