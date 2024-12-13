import type { Metadata } from "next";
import "@styles/content.css";

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
        <div className="h2card">
          <h2 className="n5">プライバシーポリシー</h2>
          <div>
            <p>プライバシーポリシーとは、<strong>お客様から収集した情報についての取り扱いを定めた文言</strong>のことです。すべてのサービスはプライバシーポリシーの通りに収集した情報を扱うことで、より良い体験を提供しています。</p>
            <p>このページでは、茅根啓介（活動名：いろいろ）の提供するサービスにおけるプライバシーポリシーについて説明します。</p>
          </div>
          <div className="h3card">
            <h3>一般的に情報をどのように扱われるのか</h3>
            <p>
              一般に、サービス内で情報は以下の目的に沿って利用されます。
            </p>
            <div className="h4card">
              <h4>1.アプリの機能の実現</h4>
              <div>
                <p>お客様の情報の保存無しには、サービスを構成する基本的な機能を実現できない場合があります。例えば、設定の保存がこれにあたります。</p>
                <p>この場合、情報を記憶しておかないと、そもそもアプリの機能そのものが成立しなくなります。</p>
              </div>
            </div>
            <div className="h4card">
              <h4>2.アプリやマーケティングの分析</h4>
              <div>
                <p>アプリがどのように利用されているかを分析したり、どのようなお客様が利用しているかを分析したりすることで、アプリをより良いものにすることができます。</p>
                <p>また、アプリで不具合が起きた時に、どの端末やバージョンで発生しているかを知ることで、問題を早く解決できるようになったりもします。</p>
              </div>
            </div>
            <div className="h4card">
              <h4>3.提案と広告</h4>
              <div>
                <p>アプリがどのように利用されているかを分析したり、どのようなお客様が利用しているかを分析したりすることで、お客様の求めるコンテンツや動作を提案することができます。</p>
                <p>いろいろのサービスでは採用していませんが、広告を掲載するという方法もあります。</p>
              </div>
            </div>
          </div>
          <div className="h3card">
            <h3>個人情報とは</h3>
            <p>個人情報とは、一般にお客様の以下の情報及び以下の情報を特定することができる情報のことを指します。</p>
            <ul>
              <li>氏名</li>
              <li>住所</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>クレジットカード情報</li>
            </ul>
            <p>さらに、サービス内でお客様が入力および保存したいかなるデータについても、個人情報に含めます。以下、個人情報はこの定義に基づきます。</p>
          </div>
          <div className="h3card">
            <h3>サービスで取得する情報</h3>
            <p>いろいろのアプリでは、いかなる情報も収集することはありません。しかし、App Analyticsを利用してApp Storeにおける以下の情報を取得します。App
              Storeのプライバシーに関してはAppleにご確認ください。</p>
            <ul>
              <li>Appのアクセス状況</li>
              <li>Appの購入数と国</li>
              <li>App内課金数と国</li>
              <li>App内予約注文数と国</li>
              <li>Appのアップデート数と国</li>
              <li>その他のApp Storeから取得できる情報（個人情報は含みません）</li>
            </ul>
            <p>いろいろのウェブサイトでは、Google Analytics及びGoogle Search Consoleを利用して以下の情報を取得します。</p>
            <ul>
              <li>このWebサービスのアクセスに関する情報</li>
              <li>Google検索に関する情報</li>
              <li>その他のGoogle Analytics及びGoogle Search Consoleから取得できる情報（個人情報は含みません）</li>
            </ul>
          </div>
          <div className="h3card">
            <h3>サービスで取得しない情報</h3>
            <div>
              <p>いろいろのサービスでは、上記以外の情報を取得しません。また、個人情報を取得することは一切ありません。</p>
              <p>ただし、サードバーティーのサービスをアプリが利用する場合、サードバーティーのサービスが情報を収集することがあります。現在は該当するアプリはありませんが、リリースした場合は本ページとApp
                Store及びアプリ内に記載いたします。</p>
            </div>
            <p>
              ※アプリで個人情報の入力を求めた場合、<strong>アプリ内で入力した情報</strong>としての利用のみされます。情報はローカルおよびiCloud内に保存され、いろいろがこの情報を取得することはできません。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
