import type { Metadata } from "next";
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AppCard from "@/components/AppCard";
import styles from "@styles/product.module.css";
import { Language } from "@/lib/Language";
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

    return (
        <main>
            <div id="maincard">
                <div className="card">
                    <h1>App</h1>
                    <div className="card">
                        <h2>Development</h2>
                        <div className={styles.appGrid}>
                            {productData.apps.development.map((app) => (
                                <AppCard key={app.id} lang={Language.EnglishUS}
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
                        <h2>Transplanting</h2>
                        <div className={styles.appGrid}>
                            {productData.apps.transplanting.map((app) => (
                                <AppCard key={app.id} lang={Language.EnglishUS}
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
                                            <h4>Media</h4>
                                            {app.media.map((mediaItem, index) => (
                                                <p key={index}><a href={mediaItem.url}>{mediaItem.title}</a></p>
                                            ))}
                                        </>
                                    )}
                                </AppCard>
                            ))}
                        </div>
                    </div>

                    <div className={`card ${styles.clear}`}>
                        <h2>Translation</h2>
                        <div className={styles.appGrid}>
                            {productData.apps.translation.map((app) => (
                                <AppCard key={app.id} lang={Language.EnglishUS}
                                    id={app.id}
                                    title={app.title}
                                    platforms={app.supportedPlatforms}
                                    description={app.description}
                                    supportPage={app.supportPage}
                                    feedback={app.feedback}
                                >
                                    <p>If you have any questions and feedback, please contact {app.feedback.replace('mailto:', '')} in English.</p>
                                    {app.media && (
                                        <>
                                            <h4>Media</h4>
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
                <div className={`card ${styles.clear}`}>
                    <h1>Framework & Packages</h1>
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
                <div className={`card ${styles.clear}`}>
                    <h1>Shell Script</h1>
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
                <div className={`card ${styles.clear}`}>
                    <h1>Website</h1>
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