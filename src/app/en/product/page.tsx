import Image from "next/image";
import type { Metadata } from "next";
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AppStoreLink from '@/components/AppStoreLink';
import "@styles/content.css";
import "@styles/product.css";
import { Language } from "@/lib/Language";
import AppStorePriceTag from "@/components/AppStorePriceTag";
import productData from '@/../content/en/product.json';

export const metadata: Metadata = {
    title: "Applications developed and projects/services contributed to by the Iroiro",
    description:
        "These are the applications, projects and services developed by Keisuke Chinone (activity name: Iroiro). An overview of each service will be described in detail.",
    abstract:
        "These are the applications, projects and services developed by Keisuke Chinone (activity name: Iroiro). Detailed descriptions of each service are provided.",
    applicationName: "Iroiro's portfolio",
    authors: [
        {
            name: "Keisuke Chinone",
            url: "https://iroiro.dev",
        },
    ],
    creator: "Keisuke Chinone",
    publisher: "Keisuke Chinone",
    generator: "Next.js",
    keywords: ["SwiftUI", "Keisuke", "Chinone"],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iroiro.dev/en/product",
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
        url: "https://iroiro.dev/en/product",
        title: "Applications developed and projects/services contributed to by the Iroiro",
        description:
            "These are the applications, projects and services developed by Keisuke Chinone (activity name: Iroiro). An overview of each service will be described in detail.",
        siteName: "Iroiro's portfolio",
        images: [
            {
                url: 'https://iroiro.dev/images/出雲大社1080.jpg',
            },
        ],
    },
    twitter: {
        card: "summary",
        site: '@IroIro1234work',
        creator: '@IroIro1234work',
        images: 'https://iroiro.dev/images/出雲大社1080.jpg',
    },
    appleWebApp: {
        capable: true,
        title: "Iroiro's portfolio",
        statusBarStyle: 'black-translucent'
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false,
    },
};

export default function Product() {
    const getRandomClassName = () => {
        const classes = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
        return classes[Math.floor(Math.random() * classes.length)];
    };

    return (
        <main>
            <div id="maincard">
                <div className="card">
                    <h1 className={getRandomClassName()}>App</h1>
                    <div className="card">
                        <h2>Development</h2>
                        {productData.apps.development.map((app) => (
                            <div key={app.id} className="card clear">
                                <div className="appInfoTop">
                                    <h3 className="left appTitle">{app.title}</h3>
                                    <a href={`https://apps.apple.com/app/${app.id}`}>
                                        <Image src={app.icon} className="appIcon left" height={100} width={100} alt={`${app.title} Icon`} />
                                    </a>
                                </div>
                                <div className="clear">
                                    <p>{app.description}</p>
                                    <p>Supported platforms are as follows</p>
                                </div>
                                <h3>Supported platforms</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="os">OS</th>
                                            <th className="vr">Version</th>
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
                                {(app as any).cm?.length && (
                                    <>
                                        <h3>CM</h3>
                                        <div>
                                            {(app as any).cm.map((cmItem: any, index: number) => (
                                                <div key={index}>
                                                    <h5>{cmItem.name}</h5>
                                                    <YouTubeEmbed videoId={cmItem.url} />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                                <h3><a href={app.supportPage}>Support Page</a></h3>
                                <h3><a href={app.feedback}>Feedback</a></h3>
                                <div className="appInfoButtom">
                                    <AppStoreLink appId={app.id} lang={Language.EnglishUS} />
                                    <AppStorePriceTag lang={Language.EnglishUS} id={parseInt(app.id.replace('id', ''))} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card clear">
                        <h2>Transplanting</h2>
                        {productData.apps.transplanting.map((app) => (
                            <div key={app.id} className="card">
                                <div className="appInfoTop">
                                    <h3 className="left appTitle">{app.title}</h3>
                                    <a href={`https://apps.apple.com/app/${app.id}`}>
                                        <Image src={app.icon} className="appIcon left" height={100} width={100} alt={`${app.title} Icon`} />
                                    </a>
                                </div>
                                <p className="clear">{app.description}</p>
                                <p>Supported platforms are as follows</p>
                                <h3>Supported platforms</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="os">OS</th>
                                            <th className="vr">Version</th>
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
                                        <h3>Media</h3>
                                        {app.media.map((mediaItem, index) => (
                                            <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                        ))}
                                    </>
                                )}
                                <h3><a href={app.supportPage}>Support Page</a></h3>
                                <h3><a href={app.feedback}>Feedback</a></h3>
                                {app.originalSource && (
                                    <>
                                        <h3>About {app.originalSource.platform} version</h3>
                                        <p>
                                            There is a {app.originalSource.platform} extension that is the original Safari extension. If you wish to use it
                                            with {app.originalSource.platform}, please use <a href={app.originalSource.url}>this one</a>.
                                        </p>
                                        <p>*Please send support for the {app.originalSource.platform} version to <a href={`mailto:${app.originalSource.supportEmail}`}>the
                                            email address of the creator of the {app.originalSource.platform} version</a>. Please note that we do not
                                            accept support here.
                                        </p>
                                    </>
                                )}
                                <div className="appInfoButtom">
                                    <AppStoreLink appId={app.id} lang={Language.EnglishUS} />
                                    <AppStorePriceTag lang={Language.EnglishUS} id={parseInt(app.id.replace('id', ''))} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card clear">
                        <h2>Translation</h2>
                        {productData.apps.translation.map((app) => (
                            <div key={app.id} className="card">
                                <h3>{app.title}</h3>
                                <p className="clear">{app.description}</p>
                                <p>If you have any questions and feedback, please contact {app.feedback.replace('mailto:', '')} in English.</p>
                                <h3>Supported platforms</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="os">OS</th>
                                            <th className="vr">Version</th>
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
                                        <h3>Media</h3>
                                        {app.media.map((mediaItem, index) => (
                                            <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                        ))}
                                    </>
                                )}
                                <h3><a href={app.supportPage}>Support Page</a></h3>
                                <h3><a href={app.feedback}>Feedback</a></h3>
                                <div className="appInfoButtom">
                                    <AppStoreLink appId={app.id} lang={Language.EnglishUS} />
                                    <AppStorePriceTag lang={Language.EnglishUS} id={parseInt(app.id.replace('id', ''))} />
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
                            {item.label === "Template" ? (
                                <div>
                                    {item.description}
                                    An overview is available from the <a href={item.repositoryUrl}>{item.title} repository</a>.
                                    {item.downloadUrl && (
                                        <a href={item.downloadUrl}>Download</a>
                                    )}
                                </div>
                            ) : (
                                <p>
                                    {item.description}
                                    {item.moreInfoUrl && (
                                        <>Please see the <a href={item.moreInfoUrl}>More about {item.label} {item.title}</a> for an overview.</>
                                    )}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                <div className="card clear">
                    <h1 className={getRandomClassName()}>Framework & Packages</h1>
                    {productData.frameworks.map((framework) => (
                        <div key={framework.id} className="card">
                            <h2>{framework.title}</h2>
                            <p>
                                {framework.description}
                                Please visit the <a href={framework.repositoryUrl}>{framework.title} repository</a> for an overview.
                            </p>
                        </div>
                    ))}
                </div>
                <div className="card clear">
                    <h1 className={getRandomClassName()}>Shell Script</h1>
                    {productData.shellScripts.map((script) => (
                        <div key={script.id} className="card">
                            <h2>{script.title}</h2>
                            <div>
                                {script.description}
                                An overview is available from the <a href={script.repositoryUrl}>{script.title} repository</a>.
                                {script.downloadUrl && (
                                    <h3>
                                        <a href={script.downloadUrl}>Download</a>
                                    </h3>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card clear">
                    <h1 className={getRandomClassName()}>Website</h1>
                    {productData.websites.map((website) => (
                        <div key={website.id} className="card">
                            <h2>{website.title}</h2>
                            <p>{website.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}