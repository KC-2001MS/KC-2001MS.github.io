import type { Metadata } from "next";
import "@styles/content.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This is the privacy policy for all services developed by Keisuke Chinone (activity name: Iroiro).",
  abstract:
    "This is the privacy policy for all services developed by Keisuke Chinone (activity name: Iroiro).",
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
  keywords: ["Privacy", "Policy", "Keisuke", "Chinone"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://iroiro.dev/en/privacy",
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
    url: "https://iroiro.dev/en/privacy",
    title: "Privacy Policy",
    description:
      "This is the privacy policy for all services developed by Keisuke Chinone (activity name: Iroiro).",
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

export default function Privacy() {
  return (
    <main>
      <div id="maincard">
        <div className="card">
          <h1 className="n5">Privacy Policy</h1>
          <p>Our privacy policy is <strong>a statement that defines how we treat the information we collect from you</strong>. All of our services provide a better experience by treating the information we collect as described in our privacy policy.</p>
          <p>This page describes the privacy policy for services provided by Keisuke Chinone (activity name:
            Iroiro).</p>
          <div className="card">
            <h1>How is the information generally handled</h1>
            <p>
              In general, information is used within the service for the following purposes
            </p>
            <div className="card">
              <h2>1. Realization of application functions</h2>
              <p>
                Without the storage of customer information, some of the basic functions that make up the
                service may not be possible. An example of this is the storage of settings.</p>
              <p>In this case, if the information is not stored, the function of the application itself
                will not be possible in the first place.
              </p>
            </div>
            <div className="card">
              <h2>2. Analysis of applications and marketing</h2>
              <p>
                By analyzing how the app is being used and what kind of customers are using it, we can make
                the app better.</p>
              <p>Also, when a problem occurs with an app, knowing which device or version is causing the
                problem can help us solve the problem faster.
              </p>
            </div>
            <div className="card">
              <h2>3. Proposals and Advertisements</h2>
              <p>
                By analyzing how the application is being used and what kind of customers are using it, we
                can suggest content and behavior that customers are looking for.</p>
              <p>Although not employed in Iroiro&apos;s service, another method is to place advertisements.
              </p>
            </div>
          </div>
          <div className="card">
            <h1>What is personal information?</h1>
            <p>Personal information generally refers to the following information about a customer and
              information that can be used to identify the following information</p>
            <ul>
              <li>Name</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email Address</li>
              <li>Credit Card Information</li>
            </ul>
            <p>In addition, any data entered and stored by you within the Service is also included in your
              personal information. Hereafter, personal information is based on this definition.</p>
          </div>
          <div className="card">
            <h1>Information to be obtained by the service</h1>
            <p>Iroiro&apos;s app does not collect any information. However, we do use App Analytics to collect the
              following information on the App Store; please check with Apple regarding App Store privacy.</p>
            <ul>
              <li>App access status</li>
              <li>Number of App purchases and countries</li>
              <li>Number of in-app purchases and countries</li>
              <li>Number of pre-orders in App and country</li>
              <li>Number of App updates and countries</li>
              <li>Other information that can be obtained from the App Store (not including personal
                information)</li>
            </ul>
            <p>Iroiro&apos;s website uses Google Analytics and Google Search Console to obtain the following
              information</p>
            <ul>
              <li>Information about access to this web service</li>
              <li>Information about Google Search</li>
              <li>Other information obtainable from Google Analytics and Google Search Console (not including
                personal information)</li>
            </ul>
          </div>
          <div className="card">
            <h1>Information not obtained by the service</h1>
            <p>
              Iroiro&apos;s services do not collect any information other than the above. We do not collect any
              personal information.</p>
            <p>However, if the app uses a third party service, the third party service may collect
              information. Currently, we do not have any such apps, but if we do, we will post a notice on
              this page, in the App Store, and in the app itself.
            </p>
            <p>
              When the app asks for personal information, it will only be used as <strong>information entered
                within the app</strong>. The information is stored locally and in iCloud and cannot be
              retrieved by various parties.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
