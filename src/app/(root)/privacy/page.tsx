import type { Metadata } from "next";
import ThirdPartyServiceList from "@/components/ThirdPartyServiceList";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "茅根啓介（活動名：いろいろ）の展開する全てのサービスに関するプライバシーポリシーです。",
  abstract:
    "茅根啓介（活動名：いろいろ）の展開する全てのサービスに関するプライバシーポリシーです。",
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
  keywords: ["プライバシーポリシー", "茅根啓介"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://iroiro.dev/privacy",
    languages: {
      ja: "https://iroiro.dev/privacy",
      en: "https://iroiro.dev/en/privacy",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://iroiro.dev/privacy",
    title: "プライバシーポリシー",
    description:
      "茅根啓介（活動名：いろいろ）の展開する全てのサービスに関するプライバシーポリシーです。",
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

export default function Privacy() {
  return (
    <main>
      <div id="maincard">
        <div className="card">
          <h1>プライバシーポリシー</h1>
          <p>最終更新日：2026年10月20日</p>
          <div>
            <p>プライバシーポリシーとは、<strong>お客様から収集した情報についての取り扱いを定めた文言</strong>のことです。すべてのサービスはプライバシーポリシーの通りに収集した情報を扱うことで、より良い体験を提供しています。</p>
            <p>このページでは、茅根啓介（活動名：いろいろ）の提供するサービスにおけるプライバシーポリシーについて説明します。</p>
          </div>
          <div className="card">
            <h2>一般的に情報はどのように扱われるのか</h2>
            <p>
              一般に、サービス内で情報は以下の目的に沿って利用されます。
            </p>
            <div className="card">
              <h3>1.アプリの機能の実現</h3>
              <div>
                <p>お客様の情報の保存無しには、サービスを構成する基本的な機能を実現できない場合があります。例えば、設定の保存がこれにあたります。</p>
                <p>この場合、情報を記憶しておかないと、そもそもアプリの機能そのものが成立しなくなります。</p>
              </div>
            </div>
            <div className="card">
              <h3>2.アプリやマーケティングの分析</h3>
              <div>
                <p>アプリがどのように利用されているかを分析したり、どのようなお客様が利用しているかを分析したりすることで、アプリをより良いものにすることができます。</p>
                <p>また、アプリで不具合が起きた時に、どの端末やバージョンで発生しているかを知ることで、問題を早く解決できるようになったりもします。</p>
              </div>
            </div>
            <div className="card">
              <h3>3.提案と広告</h3>
              <div>
                <p>アプリがどのように利用されているかを分析したり、どのようなお客様が利用しているかを分析したりすることで、お客様の求めるコンテンツや動作を提案することができます。</p>
                <p>いろいろのサービスでは採用していませんが、広告を掲載するという方法もあります。</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>本プライバシーポリシーで使う言葉</h2>
            <div className="card">
              <h3>個人情報</h3>
              <p>個人情報とは、お客様の以下の情報及び以下の情報を特定することができる情報のことを指します。</p>
              <ul>
                <li>氏名</li>
                <li>住所</li>
                <li>電話番号</li>
                <li>メールアドレス</li>
                <li>クレジットカード情報</li>
              </ul>
            </div>
            <div className="card">
              <h3>入力データ</h3>
              <p>入力データとは、サービス内でお客様が入力および保存したデータのことを指します。投稿、設定、検索した語句などがこれにあたります。</p>
            </div>
          </div>
          <div className="card">
            <h2>サービスで取得する情報</h2>
            <p>いろいろが取得する情報は、以下のとおりです。これらの情報に、個人情報および入力データは含まれません。</p>
            <div className="card">
              <h3>アプリ</h3>
              <p>App Analyticsを利用して、App Storeにおける以下の情報を取得します。App Storeのプライバシーに関してはAppleにご確認ください。</p>
              <ul>
                <li>Appのアクセス状況</li>
                <li>Appの購入数と国</li>
                <li>App内課金数と国</li>
                <li>App内予約注文数と国</li>
                <li>Appのアップデート数と国</li>
                <li>その他のApp Storeから取得できる情報</li>
              </ul>
            </div>
            <div className="card">
              <h3>ウェブサイト</h3>
              <p>Google Analytics及びGoogle Search Consoleを利用して、以下の情報を取得します。</p>
              <ul>
                <li>このWebサービスのアクセスに関する情報</li>
                <li>Google検索に関する情報</li>
                <li>その他のGoogle Analytics及びGoogle Search Consoleから取得できる情報</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h2>サービスで取得しない情報</h2>
            <p>いろいろは、上記以外の情報を取得しません。個人情報および入力データを取得することも一切ありません。また、アプリから、いろいろに情報が送られることはありません。</p>
            <p>個人情報および入力データは、端末内およびiCloud内に保存されます。アプリの機能のためにサードパーティーのサービスへ送る場合を除き、アプリの外で利用されることはありません。いろいろがこれらの情報を取得することはできません。</p>
          </div>
          <div className="card">
            <h2>サードパーティーのサービス</h2>
            <p>アプリが利用するサードパーティーのサービスは、いろいろではなく、各サービスの運営者が運営しています。各サービスにおける情報の定義や取り扱いは、サービスごとに異なり、本プライバシーポリシーの定義とは異なる場合があります。</p>
            <p>なお、どのサービスとの通信でも、通信に必要なIPアドレスなどの情報がそのサービスに送られます。</p>
            <div className="card">
              <h3>個人情報を扱う可能性があるサービス</h3>
              <p>個人情報、またはそのサービスが個人情報として扱う情報を、収集する可能性があるサービスです。情報の取り扱いは、そのサービスの利用規約およびプライバシーポリシーに従います。利用規約やプライバシーポリシーが公開されていないサービスについては、そのサービスの運営者の取り扱いによります。その場合は、以下の一覧に「規約・ポリシー未公開」と記載します。</p>
              <h4>ATP Nexus</h4>
              <ThirdPartyServiceList linkLabel="プライバシーポリシー" />
            </div>
            <div className="card">
              <h3>個人情報を扱わないサービス</h3>
              <p>入力データのみを扱うサービスです。情報の取り扱いは、保証しません。お客様が削除した情報が、これらのサービスにしばらく残る場合があります。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
