import Image from "next/image";
import type { Metadata } from "next";
import AppStoreLink from '@/components/AppStoreLink';
import AppPrice from '@/components/AppPrice';
import "@styles/content.css";
import "@styles/product.css";
import { Language } from "@/lib/Language";

interface AppInfo {
    id: number;
    region: string;
}

interface AppPriceData {
    id: number;
    price: string;
}

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
    // 
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

const apps: AppInfo[] = [
    { id: 6470128646, region: "us" },
    { id: 6450119338, region: "us" },
    { id: 1668831130, region: "us" },
    { id: 6446932202, region: "us" },
    { id: 1612026794, region: "us" },
    { id: 1672080999, region: "us" },
    { id: 1574021257, region: "us" },
];

export default async function Product() {
    const prices = await fetchPrices();

    return (
        <main>
            <div id="maincard">
                <div className="h2card">
                    <h2 className="n1">App</h2>
                    <div className="h3card">
                        <h3>Development</h3>
                        <div className="h4card clear">
                            <div className="appInfoTop">
                                <h4 className="left appTitle">Mahjong Tile Converter</h4>
                                <a href="https://apps.apple.com/app/id6470128646">
                                    <Image src={`/images/Mahjong Tile Converter.avif`} className="appIcon left" height={100} width={100} alt="Mahjong Tile Converter Icon" />
                                </a>
                            </div>
                            <div className="clear">
                                <p>
                                    <strong>Mahjong Tile Converter</strong> converts tiles represented in MPSZ format into a
                                    graphical representation using Unicode.
                                </p>
                            </div>
                            <h4>Supported platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4><a href="./product/mahjongtileconverter">Support Page</a></h4>
                            <h4><a href="mailto:iroiro.work1234@gmail.com">Feedback</a></h4>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6470128646" lang={Language.EnglishUS} />
                                <AppPrice id={6470128646} prices={prices} lang={Language.EnglishUS} />
                            </div>
                        </div>
                        <div className="h4card clear">
                            <div className="appInfoTop">
                                <h4 className="left appTitle">My Word X</h4>
                                <a href="https://apps.apple.com/app/id6450119338">
                                    <Image src={`/images/My Word X.avif`} className="appIcon left" height={100} width={100} alt="My Word X Icon" />
                                </a>
                            </div>
                            <p className="clear">
                                <strong>My Word X</strong> is an application to create an original word book. You can
                                register various information so that you can memorize the word in more detail.</p>
                            <p>Supported platforms are as follows
                            </p>
                            <h4>Supported Platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">iOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">iPadOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">visionOS</td>
                                        <td className="vrItem">1 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">watchOS</td>
                                        <td className="vrItem">10 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">tvOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4><a href="./product/mywordx">Support Page</a></h4>
                            <h4><a href="mailto:iroiro.work1234@gmail.com">Feedback</a></h4>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6450119338" lang={Language.EnglishUS} />
                                <AppPrice id={6450119338} prices={prices} lang={Language.EnglishUS} />
                            </div>
                        </div>
                        <div className="h4card clear">
                            <div className="appInfoTop">
                                <h4 className="left appTitle">Word Filter X</h4>
                                <a href="https://apps.apple.com/app/id1668831130">
                                    <Image src={`/images/Word Filter X.avif`} className="appIcon left" height={100} width={100} alt="Word Filter X Icon" />
                                </a>
                            </div>
                            <div className="clear">
                                <p><strong>Word Filter X</strong> is an application that hides words you don&apos;t like on Safari
                                    websites.By hiding the words that you have difficulty with on Safari, you can put your own
                                    mind at ease.</p>
                                <p>This app is a derivative of the browser extension and iOS app &quot;<a
                                    href="https://bondavi.jp">Hiyoko Filter(Support for Japanese language only)</a>&quot; with
                                    additional features such as the ability to sync settings and change the words to be
                                    replaced.</p>
                                <p>Supported platforms are as follows</p>
                            </div>
                            <h4>Supported Platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">iOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">iPadOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">visionOS</td>
                                        <td className="vrItem">1 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4><a href="./product/wordfilterx">Support Page</a></h4>
                            <h4><a href="mailto:iroiro.work1234@gmail.com">Feedback</a></h4>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1668831130" lang={Language.EnglishUS} />
                                <AppPrice id={1668831130} prices={prices} lang={Language.EnglishUS} />
                            </div>
                        </div>
                        <div className="h4card clear">
                            <div className="appInfoTop">
                                <h4 className="left appTitle">Uncheck X</h4>
                                <a href="https://apps.apple.com/app/id6446932202">
                                    <Image src={`/images/Uncheck X.avif`} className="appIcon left" height={100} width={100} alt="Uncheck X Icon" />
                                </a>
                            </div>
                            <p className="clear">
                                Have you ever checked items that you did not agree to when buying something or creating an
                                account for a service?</p>
                            <p><strong>Uncheck X</strong> returns checkboxes and radio buttons that are selected by
                                default on a
                                Web site to the deselected state. This reduces the need to uncheck checkboxes and radio
                                buttons that have been added without your permission.</p>
                            <p>You will no longer receive the newsletter any time soon.</p>
                            <p>Supported platforms are as follows
                            </p>
                            <h4>Supported Platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">iOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">iPadOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">visionOS</td>
                                        <td className="vrItem">1 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4><a href="./product/uncheckx">Support Page</a></h4>
                            <h4><a href="mailto:iroiro.work1234@gmail.com">Feedback</a></h4>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6446932202" lang={Language.EnglishUS} />
                                <AppPrice id={6446932202} prices={prices} lang={Language.EnglishUS} />
                            </div>

                        </div>
                        <div className="h4card clear">
                            <div className="appInfoTop">
                                <h4 className="left appTitle">Simple Editor X</h4>
                                <a href="https://apps.apple.com/app/id1612026794">
                                    <Image src={`/images/Simple Editor X.avif`} className="appIcon left" height={100} width={100} alt="Simple Editor X Icon" />
                                </a>
                            </div>
                            <div className="clear">
                                <p>
                                    <strong>Simple Editor X</strong> is a simple notepad and text editor that can be saved as a
                                    text file.
                                    Although it is a text editor with minimal features, it has a voice reading function and the
                                    ability to insert canned text.
                                </p>
                            </div>
                            <h4>Supported platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">iOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">iPadOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4><a href="./product/simpleeditorx">Support Page</a></h4>
                            <h4><a href="mailto:iroiro.work1234@gmail.com">Feedback</a></h4>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1612026794" lang={Language.EnglishUS} />
                                <AppPrice id={1612026794} prices={prices} lang={Language.EnglishUS} />
                            </div>
                        </div>
                    </div>

                    <div className="h3card clear">
                        <h3>Transplanting</h3>
                        <div className="h4card">
                            <div className="appInfoTop">
                                <h4 className="left appTitle">Death To _blank</h4>
                                <a href="https://apps.apple.com/app/id1672080999">
                                    <Image src={`/images/Death To _blank.avif`} className="appIcon left" height={100} width={100} alt="Death To _blank Icon" />
                                </a>
                            </div>
                            <p className="clear">
                                Have you ever clicked on a link and had it open a new tab? This is often caused by links
                                using the &apos;target=_blank&apos; attribute. Death To _blank fixes this problem by removing the
                                &apos;_blank&apos; attribute from links, meaning that most links will open in the current tab.</p>
                            <p>This extension is a port of &apos;Death To _blank&apos; for Chrome, and has been developed in
                                collaboration with its author.</p>
                            <p>&apos;Death To _blank&apos; also removes a few other &apos;target&apos; values that can cause links to open
                                in new pages (e.g. &quot;blank&quot; and &quot;new&quot;).</p>
                            <p>Supported platforms are as follows
                            </p>
                            <h4>Supported platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">iOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">iPadOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">visionOS</td>
                                        <td className="vrItem">1 ~</td>
                                    </tr>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Media</h4>
                            <p><a
                                href="https://books.google.co.jp/books?id=7E_HEAAAQBAJ&pg=PA131&lpg=PA131&dq=Keisuke+Chinone&source=bl&ots=-VqKdV3EKn&sig=ACfU3U3dAboshCgCcqkN2BbWpcwA6YvOYg&hl=ja&sa=X&ved=2ahUKEwiT646nmreAAxXgglYBHb2MANQQ6AF6BAgREAI#v=onepage&q=Keisuke%20Chinone&f=false">Mac
                                Fan(Japanese magazine specializing in Apple products)</a></p>
                            <h4><a href="./product/deathto_blank">Support Page</a></h4>
                            <h4><a href="mailto:iroiro.work1234@gmail.com">Feedback</a></h4>
                            <h4>About Chrome version</h4>
                            <p>
                                There is a Chrome extension that is the original Safari extension. If you wish to use it
                                with Chrome, please use <a
                                    href="https://chrome.google.com/webstore/detail/death-to-blank/gneobebnilffgkejpfhlgkmpkipgbcno?gl=US&hl=en">this
                                    one</a>.</p>
                            <p>*Please send support for the Chrome version to <a href="mailto:jbarker@jbarker.net">the
                                email address of the creator of the Chrome version</a>. Please note that we do not
                                accept support here.
                            </p>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1672080999" lang={Language.EnglishUS} />
                                <AppPrice id={1672080999} prices={prices} lang={Language.EnglishUS} />
                            </div>

                        </div>
                    </div>

                    <div className="h3card clear">
                        <h3>Translation</h3>
                        <div className="h4card">
                            <h4>Declutter for Safari</h4>
                            <p className="clear">
                                Declutter for Safari is a lightweight extension that automatically closes duplicate tabs.</p>
                            <p>If you have any questions and feedback, please contact declutterappextension@gmail.com
                                in English.
                            </p>
                            <h4>Supported platforms</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">11.1(Big Sur) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Media</h4>
                            <p><a href="https://book.mynavi.jp/macfan/detail_summary/id=124346">Mac Fan(Japanese magazine
                                specializing in Apple products)</a></p>
                            <h4><a href="https://github.com/brandonlee503/DeclutterInfo">Support Page</a></h4>
                            <h4><a href="mailto:declutterappextension@gmail.com">Feedback</a></h4>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1574021257" lang={Language.EnglishUS} />
                                <AppPrice id={1574021257} prices={prices} lang={Language.EnglishUS} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h2card clear">
                    <h2 className="n2">Templates</h2>
                    <div className="h3card">
                        <h3>Word-Filter-X-Templates</h3>
                        <div>
                            Template site for Word Filter X configuration data.
                            An overview is available from the <a
                                href="https://iroiro.dev/Word-Filter-X-Templates/">Word-Filter-X-Templates
                                repository</a>.
                            <h4><a
                                href="https://github.com/KC-2001MS/Word-Filter-X-Templates/archive/refs/heads/master.zip">Download</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="h2card clear">
                    <h2 className="n6">Bluesky Feed</h2>
                    <div className="h3card">
                        <h3>Swift</h3>
                        <p>
                            This feed provides information related to the Swift language.
                            Please see the <a href="./product/bluesky_swift-feed">More about Bluesky Swift feed</a> for an overview.
                        </p>
                    </div>
                </div>
                <div className="h2card clear">
                    <h2 className="n5">Brave Goggle</h2>
                    <div className="h3card">
                        <h3>Swift</h3>
                        <p>
                            This goggle provides information related to the Swift language.
                            Please see the <a href="./product/brave_swift-goggle">More about Brave Swift goggle</a> for an overview.
                        </p>
                    </div>
                </div>
                <div className="h2card clear">
                    <h2 className="n4">Framework & Packages</h2>
                    <div className="h3card">
                        <h3>SwiftStorage</h3>
                        <p>
                            Macro to generate Observation code for persistence by Userdefaults.
                            Please visit the <a href="https://github.com/KC-2001MS/SwiftStorage">SwiftStorage repository</a> for an overview.
                        </p>
                    </div>
                    <div className="h3card">
                        <h3>SwiftLI</h3>
                        <p>
                            A package that makes it easy to create a CUI for a command line tool.
                            Please visit the <a href="https://github.com/KC-2001MS/SwiftLI">SwiftLI repository</a> for an overview.
                        </p>
                    </div>
                    <div className="h3card">
                        <h3>OnboardingUI</h3>
                        <p>
                            Package for creating easy onboarding with SwiftUI.
                            Please visit the <a href="https://github.com/KC-2001MS/OnboardingUI">OnboardingUI repository</a> for an overview.
                        </p>
                    </div>
                    <div className="h3card">
                        <h3>AboutUI</h3>
                        <p>
                            Package to create a window about macOS apps in SwiftUI.
                            Please visit the <a href="https://github.com/KC-2001MS/AboutUI">AboutUI repository</a> for an overview.
                        </p>
                    </div>
                    <div className="h3card">
                        <h3>ArticleUI</h3>
                        <p>
                            A package that allows you to create a UI for articles like List in SwiftUI.
                            Please visit the <a href="https://github.com/KC-2001MS/ArticleUI">ArticleUI repository</a> for an overview.
                        </p>
                    </div>
                </div>
                <div className="h2card clear">
                    <h2 className="n5">Shell Script</h2>
                    <div className="h3card">
                        <h3>Shell-Config-Setup</h3>
                        <div>
                            Shell scripts to easily configure the OS and download applications.
                            An overview is available from the <a
                                href="https://github.com/KC-2001MS/Shell-Config-Setup">Shell-Config-Setup repository</a>.
                            <h4>
                                <a
                                    href="https://github.com/KC-2001MS/Shell-Config-Setup/archive/refs/heads/main.zip">Download</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="h2card clear">
                    <h2 className="n3">Website</h2>
                    <div className="h3card">
                        <h3>Iroiro&apos;s portfolio</h3>
                        <p>
                            This is the homepage. The purpose of this site is to introduce and support the services we have
                            made available to the public.</p>
                        <p>It is minimal because we are not familiar with web applications and do not plan to make it
                            our main focus in the future. We do not plan to update this website frequently, but will respond
                            if we get a lot of feedback.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

async function fetchPrices(): Promise<AppPriceData[]> {
    const apiBaseURL = "https://itunes.apple.com/lookup?";
    const prices: AppPriceData[] = [];

    for (const app of apps) {
        const apiEndpoint = `${apiBaseURL}id=${app.id}&country=${app.region}`;
        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            if (data.results && data.results[0]) {
                prices.push({
                    id: app.id,
                    price: data.results[0].formattedPrice || "Free",
                });
            } else {
                prices.push({ id: app.id, price: "App not found" });
            }
        } catch (err) {
            console.error(`Error fetching data for ${app.id}:`, err);
            prices.push({ id: app.id, price: "Error fetching data" });
        }
    }

    return prices
};