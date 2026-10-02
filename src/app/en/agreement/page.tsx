import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
    description:
        "This is the Terms of Use for all services developed by Keisuke Chinone (activity name: Iroiro).",
    abstract:
        "This is the Terms of Use for all services developed by Keisuke Chinone (activity name: Iroiro).",
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
    keywords: ["Agreement", "Keisuke", "Chinone"],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iroiro.dev/en/agreement",
        languages: {
            ja: "https://iroiro.dev/agreement",
            en: "https://iroiro.dev/en/agreement",
        },
    },
    icons: [
        { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
        { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
    ],
    openGraph: {
        type: "article",
        url: "https://iroiro.dev/en/agreement",
        title: "Terms of Use",
        description:
            "This is the Terms of Use for all services developed by Keisuke Chinone (activity name: Iroiro).",
        siteName: "Iroiro's portfolio",
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
        title: "Iroiro's portfolio",
        statusBarStyle: 'black-translucent'
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false,
    },
};

export default function Agreement() {
    return (
        <main>
            <div id="maincard">
                <div className="card">
                    <h1>Terms of Use</h1>
                    <p>
                        These Terms of Use (hereinafter, the &quot;Terms&quot;) set forth the conditions for using the services
                        that Keisuke Chinone (activity name: Iroiro) (hereinafter, the &quot;Company&quot;) provides in
                        applications or on websites (hereinafter, the &quot;Service&quot;). All users (hereinafter,
                        &quot;Users&quot;) shall use the Service in accordance with these Terms.
                    </p>
                    <div className="card">
                        <h2>Article 1 (Application)</h2>
                        <p>1. These Terms apply to all relationships between Users and the Company concerning the use of the Service.</p>
                        <p>2. In addition to these Terms, the Company may establish various provisions regarding the Service, such
                            as rules for its use (hereinafter, &quot;Individual Provisions&quot;). Regardless of their names, these
                            Individual Provisions form part of these Terms.</p>
                        <p>3. If a provision of these Terms conflicts with a provision of the Individual Provisions set forth in the
                            preceding paragraph, the provision of the Individual Provisions shall prevail unless otherwise specified
                            in the Individual Provisions.</p>
                    </div>
                    <div className="card">
                        <h2>Article 2 (Consent)</h2>
                        <p>1. For the applications, persons wishing to register may consent to these Terms in each application.</p>
                        <p>2. This site is a portfolio and support site and is therefore not a service subject to these Terms.
                            However, we comply with our <a href="./privacy.html">Privacy Policy</a> on this site as well.</p>
                    </div>
                    <div className="card">
                        <h2>Article 3 (Prohibited Acts)</h2>
                        <p>When using the Service, Users shall not engage in any of the following acts:</p>
                        <ul>
                            <li>Acts that violate laws and regulations or public order and morals</li>
                            <li>Acts related to criminal activity</li>
                            <li>Acts that infringe copyrights, trademark rights, or other intellectual property rights included in
                                the Service, such as its content</li>
                            <li>Acts that destroy or interfere with the functions of the servers or networks of the Company, other
                                Users, or other third parties</li>
                            <li>Unauthorized access or attempts at unauthorized access</li>
                            <li>Collecting or accumulating personal information about other Users</li>
                            <li>Using the Service for illegitimate purposes</li>
                            <li>Acts that cause disadvantage, damage, or discomfort to other Users of the Service or other third
                                parties</li>
                            <li>Directly or indirectly providing benefits to antisocial forces in connection with the Company&apos;s
                                services</li>
                            <li>Any other acts that the Company deems inappropriate</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>Article 4 (Suspension of the Service)</h2>
                        <p>1. If the Company determines that any of the following applies, it may suspend or interrupt all or part
                            of the Service without prior notice to Users:</p>
                        <ul>
                            <li>When performing maintenance, inspection, or updates of the computer systems related to the Service</li>
                            <li>When providing the Service becomes difficult due to force majeure such as an earthquake, lightning,
                                fire, power outage, or natural disaster</li>
                            <li>When computers or communication lines stop due to an accident</li>
                            <li>When the Company otherwise determines that providing the Service is difficult</li>
                        </ul>
                        <p>2. The Company shall bear no responsibility for any disadvantage or damage suffered by Users or third
                            parties as a result of the suspension or interruption of the Service.</p>
                    </div>
                    <div className="card">
                        <h2>Article 5 (Restriction of Use and Deregistration)</h2>
                        <p>1. If a User falls under any of the following, and the application is a service that must implement
                            blocking as required by the App Store Review Guidelines, the Company may, without prior notice,
                            restrict the User&apos;s use of all or part of the Service or cancel the User&apos;s registration:</p>
                        <ul>
                            <li>When the User violates any provision of these Terms</li>
                            <li>When the Company otherwise determines that the User&apos;s use of the Service is inappropriate</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>Article 6 (Disclaimer of Warranties and Limitation of Liability)</h2>
                        <p>1. The Company does not warrant, either expressly or impliedly, that the Service is free from defects in
                            fact or in law (including defects relating to safety, reliability, accuracy, completeness,
                            effectiveness, fitness for a particular purpose, or security, as well as errors, bugs, and
                            infringements of rights).</p>
                        <p>2. The Company shall bear no responsibility for any damage incurred by Users arising from the Service,
                            except in cases of intent or gross negligence on the part of the Company. However, this disclaimer does
                            not apply if the contract between the Company and a User concerning the Service (including these
                            Terms) is a consumer contract as defined in the Consumer Contract Act.</p>
                        <p>3. Even in the case set forth in the proviso of the preceding paragraph, the Company shall bear no
                            responsibility for damage arising from special circumstances (including cases where the Company or the
                            User foresaw or could have foreseen the occurrence of the damage) among the damage incurred by Users
                            due to default or tort caused by the Company&apos;s negligence (excluding gross negligence). In
                            addition, compensation for damage incurred by Users due to default or tort caused by the
                            Company&apos;s negligence (excluding gross negligence) shall be limited to the amount of usage fees
                            received from the User in the month in which the damage occurred.</p>
                        <p>4. The Company shall bear no responsibility for any transactions, communications, disputes, or the like
                            that arise between Users and other Users or third parties in connection with the Service.</p>
                    </div>
                    <div className="card">
                        <h2>Article 7 (Changes to the Service)</h2>
                        <p>The Company may change, add to, or discontinue the content of the Service with prior notice to Users,
                            and Users shall accept this.</p>
                    </div>
                    <div className="card">
                        <h2>Article 8 (Changes to these Terms)</h2>
                        <p>1. The Company may change these Terms without the individual consent of Users in the following cases:</p>
                        <ul>
                            <li>When the change to these Terms conforms to the general interests of Users.</li>
                            <li>When the change to these Terms does not run counter to the purpose of the contract for use of the
                                Service and is reasonable in light of the necessity of the change, the appropriateness of the
                                changed content, and other circumstances relating to the change.</li>
                        </ul>
                        <p>2. When changing these Terms under the preceding paragraph, the Company will notify Users in advance
                            that these Terms will be changed, of the content of the changed Terms, and of the time when the change
                            takes effect.</p>
                    </div>
                    <div className="card">
                        <h2>Article 9 (Handling of Personal Information)</h2>
                        <p>The Company shall appropriately handle personal information obtained through the use of the Service in
                            accordance with the Company&apos;s &quot;<a href="./privacy.html">Privacy Policy</a>&quot;.</p>
                    </div>
                    <div className="card">
                        <h2>Article 10 (Prohibition of Assignment of Rights and Obligations)</h2>
                        <p>Users may not assign to a third party, or offer as security, their status under the contract for use
                            or their rights or obligations under these Terms without the prior written consent of the Company.</p>
                    </div>
                    <div className="card">
                        <h2>Article 11 (Governing Law and Jurisdiction)</h2>
                        <p>1. These Terms shall be construed in accordance with the laws of Japan.</p>
                        <p>2. If any dispute arises in connection with the Service, the court having jurisdiction over the location
                            of the Company&apos;s head office shall have exclusive agreed jurisdiction.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
