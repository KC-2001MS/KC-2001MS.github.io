import type { Metadata } from "next";
import Image from "next/image";
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AppStoreLink from '@/components/AppStoreLink';
import "@styles/content.css";
import "@styles/product.css";
import AppStorePriceTag from "@/components/AppStorePriceTag";

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
                    <h1 className="n1">アプリケーション</h1>
                    <div className="card">
                        <h2>開発</h2>
                        <div className="card clear">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">日本企業情報</h3>
                                <a href="https://apps.apple.com/app/id6477782786">
                                    <Image src={`/images/Japan Corp Info.avif`} className="appIcon left" height={100} width={100} alt="日本企業情報アイコン" />
                                </a>
                            </div>
                            <div className="clear">
                                <p><strong>日本企業情報</strong>は、日本の法人情報を簡単に管理する最適な方法です。</p>
                                <p>対応プラットフォームは次の通りです。</p>
                            </div>
                            <h3>対応プラットフォーム</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="os">OS</th>
                                        <th className="vr">バージョン</th>
                                    </tr>
                                    <tr>
                                        <td className="osItem">iOS</td>
                                        <td className="vrItem">17 ~</td>
                                    </tr>
                                </thead>
                                <tbody>
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
                            <h3><a href="./product/japancorpinfo">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6477782786" />
                                <AppStorePriceTag id={6477782786} />
                            </div>
                        </div>
                        <div className="card clear">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">麻雀牌コンバータ</h3>
                                <a href="https://apps.apple.com/app/id6470128646">
                                    <Image src={`/images/Mahjong Tile Converter.avif`} className="appIcon left" height={100} width={100} alt="麻雀牌コンバータアイコン" />
                                </a>
                            </div>
                            <div className="clear">
                                <p><strong>麻雀牌コンバータ</strong>は、MPSZ形式で表現された牌姿をUnicodeを用いたグラフィカルな表記に変換します。</p>
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
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">14(Sonoma) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3><a href="./product/mahjongtileconverter">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6470128646" />
                                <AppStorePriceTag id={6470128646} />
                            </div>
                        </div>
                        <div className="card clear">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">My Word X</h3>
                                <a href="https://apps.apple.com/app/id6450119338">
                                    <Image src={`/images/My Word X.avif`} className="appIcon left" height={100} width={100} alt="My Word Xアイコン" />
                                </a>
                            </div>
                            <div className="clear">
                                <p><strong>My Word X</strong>は、オリジナルな単語帳を作成するアプリケーションです。様々な情報を登録できるため、より詳しくその単語を覚えることができます。</p>
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
                            <h3><a href="./product/mywordx">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6450119338" />
                                <AppStorePriceTag id={6450119338} />
                            </div>
                        </div>
                        <div className="card clear">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">Word Filter X</h3>
                                <a href="https://apps.apple.com/app/id1668831130">
                                    <Image src={`/images/Word Filter X.avif`} className="appIcon left" height={100} width={100} alt="Word Filter Xアイコン" />
                                </a>
                            </div>
                            <div className="clear">
                                <p><strong>Word Filter
                                    X</strong>はSafariのWebサイト上の苦手な言葉を隠すアプリケーションです。Safari上の苦手な言葉を隠すことで、自身の心を穏やかにすることができます。</p>
                                <p>このアプリはブラウザ拡張機能とiOSアプリの「<a
                                    href="https://bondavi.jp">ひよこフィルター</a>」をベースに設定の同期機能や置き換える単語を変更する機能など機能を追加した派生版です。</p>
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
                            <h3><a href="./product/wordfilterx">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1668831130" />
                                <AppStorePriceTag id={1668831130} />
                            </div>
                        </div>
                        <div className="card clear">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">Uncheck X</h3>
                                <a href="https://apps.apple.com/app/id6446932202">
                                    <Image src={`/images/Uncheck X.avif`} className="appIcon left" height={100} width={100} alt="Uncheck Xアイコン" />
                                </a>

                            </div>
                            <div className="clear">
                                <p>物を買うときやあるサービスのアカウントを作るとき、自分が同意していない項目に勝手にチェックがつけられていたことはありませんか。</p>
                                <p>Uncheck Xをインストールすれば、いつの間にかメールマガジンが送られることはありません。</p>
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
                            <h3>CM</h3>
                            <div>
                                <h5>DMM¹・FANZA²のチェックボックスを外そう iPadOS編</h5>
                                <YouTubeEmbed videoId="qX81u1Jn8Lc" />
                                <h5>楽天³のチェックボックスを外そう macOS編</h5>
                                <YouTubeEmbed videoId="OnYyRR85Op0" />
                            </div>
                            <h3><a href="./product/uncheckx">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id6446932202" />
                                <AppStorePriceTag id={6446932202} />
                            </div>
                        </div>
                        <div className="card clear">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">Simple Editor X</h3>
                                <a href="https://apps.apple.com/app/id1612026794">
                                    <Image src={`/images/Simple Editor X.avif`} className="appIcon left" height={100} width={100} alt="Simple Editor Xアイコン" />
                                </a>
                            </div>
                            <div className="clear">
                                <p><strong>Simple Editor X</strong>は、テキストファイルとして保存することができるシンプルなメモ帳・テキストエディタです。
                                    最低限の機能を持つテキストエディターですが、音声の読み上げ機能や定型文の挿入機能があります。</p>
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
                            <h3><a href="./product/simpleeditorx">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1612026794" />
                                <AppStorePriceTag id={1612026794} />
                            </div>

                        </div>
                    </div>

                    <div className="card clear">
                        <h2>移植</h2>
                        <div className="card">
                            <div className="appInfoTop">
                                <h3 className="left appTitle">Death To _blank</h3>
                                <a href="https://apps.apple.com/app/id1672080999">
                                    <Image src={`/images/Death To _blank.avif`} className="appIcon left" height={100} width={100} alt="Death To _blankアイコン" />
                                </a>
                            </div>
                            <div className="clear">
                                <p>リンクをクリックしたらタブが増えた経験はありませんか。リンクを新規タブで開く原因である_blank属性をWebサイトから取り除くことで、この現象を無くしてタブをスッキリさせます。</p>
                                <p>この拡張機能は、&quot;Death To _blank&quot;拡張機能をSafari拡張機能として移植したバージョンとなります。この拡張機能のコードは、開発者との合意に基づいて利用されています。</p>
                                <p>※ 新規タブを開く効果がある_blank以外の属性でも動作します。</p>
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
                            <h3>メディア</h3>
                            <p><a
                                href="https://books.google.co.jp/books?id=7E_HEAAAQBAJ&pg=PA131&lpg=PA131&dq=Keisuke+Chinone&source=bl&ots=-VqKdV3EKn&sig=ACfU3U3dAboshCgCcqkN2BbWpcwA6YvOYg&hl=ja&sa=X&ved=2ahUKEwiT646nmreAAxXgglYBHb2MANQQ6AF6BAgREAI#v=onepage&q=Keisuke%20Chinone&f=false">Mac
                                Fan</a></p>
                            <h3><a href="./product/deathto_blank">サポートページ</a></h3>
                            <h3><a href="mailto:iroiro.work1234@gmail.com">フィードバック</a></h3>
                            <h3>Chrome版について</h3>
                            <p>
                                Safari拡張機能の元となっているChrome拡張機能があります。もし、Chromeで使用したい場合は
                                <a href="https://chrome.google.com/webstore/detail/death-to-blank/gneobebnilffgkejpfhlgkmpkipgbcno?gl=JP&hl=ja">こちら</a>
                                をご利用ください。
                            </p>
                            <p>※Chrome版のサポートは<a href="mailto:jbarker@jbarker.net">Chrome版の製作者のメールアドレス</a>にお願いします。こちらではサポートを受け付けておりませんのでご注意ください。</p>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1672080999" />
                                <AppStorePriceTag id={1672080999} />
                            </div>
                        </div>
                    </div>

                    <div className="card clear">
                        <h2>翻訳</h2>
                        <div className="card">
                            <h3>Declutter for Safari</h3>
                            <div className="clear">
                                <p><strong>Declutter for Safari</strong>は軽量の拡張機能で重複したタブを自動的に閉じることができます。</p>
                                <p>質問とフィードバックがございましたら、 英語で連絡をお願いします。</p>
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
                                    <tr>
                                        <td className="osItem">macOS</td>
                                        <td className="vrItem">11.1(Big Sur) ~</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3>メディア</h3>
                            <p><a href="https://book.mynavi.jp/macfan/detail_summary/id=124346">Mac Fan</a></p>
                            <h3><a href="https://github.com/brandonlee503/DeclutterInfo">サポートページ</a></h3>
                            <h3><a href="mailto:declutterappextension@gmail.com">フィードバック</a></h3>
                            <div className="appInfoButtom">
                                <AppStoreLink appId="id1574021257" />
                                <AppStorePriceTag id={1574021257} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card clear">
                    <h1 className="n2">テンプレートファイル</h1>
                    <div className="card">
                        <h2>Word-Filter-X-Templates</h2>
                        <div>
                            Word Filter Xの設定データのテンプレートサイト。
                            概要は<a
                                href="https://iroiro.dev/Word-Filter-X-Templates/">Word-Filter-X-Templatesリポジトリ</a>からご確認ください。
                            <h3><a
                                href="https://github.com/KC-2001MS/Word-Filter-X-Templates/archive/refs/heads/master.zip">ダウンロード</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="card clear">
                    <h1 className="n6">Blueskyフィード</h1>
                    <div className="card">
                        <h2>Swift</h2>
                        <p>
                            Swift言語に関連する情報を提供するフィードです。
                            概要は<a
                                href="./product/bluesky_swift-feed">Bluesky Swiftフィード【公式】</a>からご確認ください。
                        </p>
                    </div>
                </div>
                <div className="card clear">
                    <h1 className="n6">Brave Goggle</h1>
                    <div className="card">
                        <h2>Swift</h2>
                        <p>
                            Swift言語に関連する情報を提供するGoggleです。
                            概要は<a
                                href="./product/brave_swift-goggle">Brave Swift Goggle【公式】</a>からご確認ください。
                        </p>
                    </div>
                </div>
                <div className="card clear">
                    <h1 className="n4">フレームワーク・パッケージ</h1>
                    <div className="card">
                        <h2>SwiftStorage</h2>
                        <p>
                            Userdefaultsによる永続化に対応したObservationのコードを生成するマクロ。
                            概要は<a href="https://github.com/KC-2001MS/SwiftStorage">SwiftStorageリポジトリ</a>からご確認ください。
                        </p>
                    </div>
                    <div className="card">
                        <h2>SwiftLI</h2>
                        <p>
                            コマンドラインツールのCUIを簡単に作成することができるパッケージ。
                            概要は<a href="https://github.com/KC-2001MS/SwiftLI">SwiftLIリポジトリ</a>からご確認ください。
                        </p>
                    </div>
                    <div className="card">
                        <h2>OnboardingUI</h2>
                        <p>
                            SwiftUIで簡単にオンボーディングを作成するためのパッケージ。
                            概要は<a href="https://github.com/KC-2001MS/OnboardingUI">OnboardingUIリポジトリ</a>からご確認ください。
                        </p>
                    </div>
                    <div className="card">
                        <h2>AboutUI</h2>
                        <p>
                            SwiftUIでmacOSのアプリについてのウインドウを作成するためのパッケージ。
                            概要は<a href="https://github.com/KC-2001MS/AboutUI">AboutUIリポジトリ</a>からご確認ください。
                        </p>
                    </div>
                    <div className="card">
                        <h2>ArticleUI</h2>
                        <p>
                            SwiftUIのListのように記事のUIを作成できるパッケージ。
                            概要は<a href="https://github.com/KC-2001MS/ArticleUI">ArticleUIリポジトリ</a>からご確認ください。
                        </p>
                    </div>
                </div>
                <div className="card clear">
                    <h1 className="n5">シェルスクリプト</h1>
                    <div className="card">
                        <h2>Shell-Config-Setup</h2>
                        <div>
                            OSの設定とアプリのダウンロードを簡単に行うシェルスクリプト。
                            概要は<a
                                href="https://github.com/KC-2001MS/Shell-Config-Setup">Shell-Config-Setupリポジトリ</a>からご確認ください。
                            <h3>
                                <a href="https://github.com/KC-2001MS/Shell-Config-Setup/archive/refs/heads/main.zip">ダウンロード</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="card clear">
                    <h1 className="n3">ウェブサイト</h1>
                    <div className="card">
                        <h2>いろいろポートフォリオ</h2>
                        <p>こちらのホームページです。公開したサービスの紹介とサポート等を目的としたサイトです。</p>
                        <p>Webアプリケーションに詳しくなく、今後もメインとする予定がないため最低限の作りとなっております。このホームページを頻繁に更新する予定はありませんが、フィードバックが多ければ対応します。</p>
                    </div>
                </div>

                <hr />
                
                <p className="caption">1.ＤＭＭは合同会社ＤＭＭ．ｃｏｍの商標もしくは商標登録です。</p>
                <p className="caption">2.ＦＡＮＺＡは株式会社デジタルコマースの商標もしくは商標登録です。</p>
                <p className="caption">3.楽天は楽天グループ株式会社の商標もしくは商標登録です。</p>
            </div>
        </main>
    );
}