import type { Metadata } from "next";
import ThirdPartyServiceList from "@/components/ThirdPartyServiceList";

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
          <h1>Privacy Policy</h1>
          <p>Last updated: October 20, 2026</p>
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
            <h1>Terms used in this privacy policy</h1>
            <div className="card">
              <h2>Personal information</h2>
              <p>Personal information refers to the following information about you and information that can be used to identify the following information.</p>
              <ul>
                <li>Name</li>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email Address</li>
                <li>Credit Card Information</li>
              </ul>
            </div>
            <div className="card">
              <h2>Input data</h2>
              <p>Input data refers to any data you enter and store within the service, such as posts, settings, and search terms.</p>
            </div>
          </div>
          <div className="card">
            <h1>Information to be obtained by the service</h1>
            <p>Iroiro obtains the following information. This information does not include personal information or input data.</p>
            <div className="card">
              <h2>Apps</h2>
              <p>We use App Analytics to obtain the following information on the App Store. Please check with Apple regarding App Store privacy.</p>
              <ul>
                <li>App access status</li>
                <li>Number of App purchases and countries</li>
                <li>Number of in-app purchases and countries</li>
                <li>Number of pre-orders in App and country</li>
                <li>Number of App updates and countries</li>
                <li>Other information that can be obtained from the App Store</li>
              </ul>
            </div>
            <div className="card">
              <h2>Website</h2>
              <p>We use Google Analytics and Google Search Console to obtain the following information.</p>
              <ul>
                <li>Information about access to this web service</li>
                <li>Information about Google Search</li>
                <li>Other information obtainable from Google Analytics and Google Search Console</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h1>Information not obtained by the service</h1>
            <p>Iroiro does not obtain any information other than the above, and never obtains personal information or input data. In addition, the apps do not send any information to Iroiro.</p>
            <p>Personal information and input data are stored on your device and in iCloud. They are not used outside the app, except when the app sends them to a third-party service for its features. Iroiro cannot obtain this information.</p>
          </div>
          <div className="card">
            <h1>Third-party services</h1>
            <p>The third-party services used by the apps are operated by their respective operators, not by Iroiro. How each service defines and handles information differs from service to service, and may differ from the definitions in this privacy policy.</p>
            <p>Note that communicating with any service sends that service the information needed for the communication, such as your IP address.</p>
            <div className="card">
              <h2>Services that may handle personal information</h2>
              <p>These are services that may collect personal information, or information that the service treats as personal information. Information is handled in accordance with the service&apos;s terms of use and privacy policy. For a service that has not published terms of use or a privacy policy, information is handled as determined by its operator, and the service is marked &quot;No published terms or policy&quot; in the list below.</p>
              <h3>ATP Nexus</h3>
              <ThirdPartyServiceList linkLabel="Privacy Policy" />
            </div>
            <div className="card">
              <h2>Services that do not handle personal information</h2>
              <p>These are services that handle only input data. We do not guarantee how they handle information. Information you have deleted may remain on these services for some time.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
