import type { Metadata } from "next";
import "@styles/content.css";

export const metadata: Metadata = {
  title: "いろいろへのお問い合わせ",
  description:
    "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスについてのお問い合わせ先です。",
  abstract:
    "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスについてのお問い合わせ先です。",
  applicationName: 'いろいろポートフォリオ',
  authors: [
    {
      name: '茅根啓介',
      url: 'https://iroiro.dev',
    },
  ],
  creator: "茅根啓介",
  publisher: "茅根啓介",
  generator: 'Next.js',
  keywords: ["SwiftUI", "茅根啓介"],
  // 
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://iroiro.dev/contact",
    languages: {
      ja: "https://iroiro.dev/contact",
      en: "https://iroiro.dev/en/contact",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://iroiro.dev/contact",
    title: "いろいろへのお問い合わせ",
    description:
      "茅根啓介（活動名：いろいろ）の展開したアプリやプロジェクト・サービスについてのお問い合わせ先です。",
    siteName: 'いろいろのポートフォリオ',
    images: [
      {
        url: 'https://iroiro.dev/images/出雲大社1080.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IroIro1234work',
    creator: '@IroIro1234work',
    images: 'https://iroiro.dev/images/出雲大社1080.jpg',
  },
  appleWebApp: {
    capable: true,
    title: 'いろいろポートフォリオ',
    statusBarStyle: 'black-translucent'
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function Contact() {
  return (
    <main>
      <div id="maincard">
        <div className="h2card">
          <h2 className="n1">プロフィール</h2>
          <div className="h3card">
            <h3>茅根啓介</h3>
            <p>
              「いろいろ」というアカウント名で活動しています。SwiftUIでのアプリケーションの開発をメインとしており、私が必要とするアプリを制作しております。また、他の開発者様と連絡をとりアプリを改良したり移植したりする活動も行なっております。
            </p>
            <div className="h4card">
              <h4>経歴</h4>
              <table>
                <thead>
                  <tr>
                    <th>日付</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023/7/19</td>
                    <td>こちらのサイトを設立</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="h4card">
              <h4>連絡先</h4>
              <p>こちらは、開発したアプリやこのウェブサイトのお問い合わせ先です。基本的に<strong>メールアドレス</strong>から連絡をいただけると幸いです。</p>
              <p>知り合いで私的な用事のために連絡を取りたい場合は、基本的に私用のメールアドレスで連絡をお願いします。もし、連絡先を知らない場合は、こちらに連絡していただいても構いません。私用のメールアドレスで返信します。</p>
              <p>メールアドレス：<a href="mailto:iroiro.work1234@gmail.com">iroiro.work1234@gmail.com</a></p>
              <p>Twitter：<a href="https://twitter.com/IroIro1234work">https://twitter.com</a></p>
              <p>Bluesky：<a href="https://bsky.app/profile/bluesky.iroiro.me">https://bsky.app</a></p>
              <p>mastodon：<a rel="me" href="https://mastodon.social/@Iroiro">https://mastodon.social</a></p>
              <p>GitHub：<a href="https://github.com/KC-2001MS">https://github.com</a></p>
              <p>Hugging Face：<a href="https://huggingface.co/Iroiro">https://huggingface.co</a></p>
              <p>Stack Overflow：<a
                href="https://stackoverflow.com/users/21741409/iroiro">https://stackoverflow.com</a></p>
              <p>note：<a href="https://note.com/iroiro_work">https://note.com</a></p>
            </div>
            <div className="h4card">
              <h4>販売</h4>
              <p>App Store：<a
                href="https://apps.apple.com/jp/developer/keisuke-chinone/id1586934587">https://apps.apple.com</a>
              </p>
              <p>booth：<a href="https://iroirowork.booth.pm">https://iroirowork.booth.pm</a></p>
            </div>
            <div className="h4card">
              <h4>動画</h4>
              <p>YouTube：
                <a href="https://www.youtube.com/@IroiroWork">https://www.youtube.com</a>
              </p>
            </div>
            <div className="h4card">
              <h4>寄付</h4>
              <p>寄付をご希望の方は、こちらをクリックしてください。ご寄付いただいたお金は、私のプログラミング・スキルの向上とアプリケーションのメンテナンスに使わせていただきます。</p>
              <p>
                <a href="https://www.buymeacoffee.com/iroiro" target="_top">
                  <img src={`https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png`} alt="Buy Me A Coffee" style={{ "height": "60px", "width": "217px" }} />
                </a>
              </p>
              <p>
                <a href="https://paypal.me/iroiroWork" style={{ borderRadius: '20px', display: 'block', width: '217px', padding: '15px', boxSizing: 'border-box', background: '#0070ba', color: '#FFF', textDecoration: 'none', textAlign: 'center' }}>Pay by PayPal</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
