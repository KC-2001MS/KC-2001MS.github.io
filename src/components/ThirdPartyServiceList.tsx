type ThirdPartyService = {
    name: string;
    privacyPolicyUrl?: string;
};

// 個人情報を扱う可能性があるサードパーティーのサービス（日本語版・英語版で共通）
const services: ThirdPartyService[] = [
    { name: "Bluesky", privacyPolicyUrl: "https://bsky.social/about/support/privacy-policy" },
    // TODO: プライバシーポリシーのURLを確認して追加する
    { name: "Streamplace" },
    { name: "KLIPY" },
];

type ThirdPartyServiceListProps = {
    linkLabel: string;
};

const ThirdPartyServiceList = ({ linkLabel }: ThirdPartyServiceListProps) => {
    return (
        <ul>
            {services.map((service) => (
                <li key={service.name}>
                    {service.name}
                    {service.privacyPolicyUrl && (
                        <>
                            <br />
                            <a href={service.privacyPolicyUrl}>{linkLabel}</a>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ThirdPartyServiceList;
