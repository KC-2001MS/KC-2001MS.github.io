import type { ReactNode } from "react";
import AppIcon from "@/components/AppIcon";
import AppStoreLink from "@/components/AppStoreLink";
import AppStorePriceTag from "@/components/AppStorePriceTag";
import { Language } from "@/lib/Language";
import styles from "@styles/product.module.css";

type Platform = { os: string; version: string };

type AppCardProps = {
    lang?: Language;
    id: string;
    title: string;
    icon?: string;
    darkIcon?: string;
    platforms: Platform[];
    description: ReactNode;
    supportPage: string;
    feedback: string;
    children?: ReactNode;
};

// アプリ一覧のカード
const AppCard = ({ lang = Language.Japanese, id, title, icon, darkIcon, platforms, description, supportPage, feedback, children }: AppCardProps) => {
    const appStoreId = id.startsWith("id") ? id : `id${id}`;
    const labels = lang === Language.EnglishUS
        ? { icon: `${title} Icon`, platforms: "Supported platforms", supportPage: "Support Page", feedback: "Feedback", iconLink: `View ${title} on the App Store`, supportPageName: `Support Page for ${title}`, feedbackName: `Feedback on ${title}` }
        : { icon: `${title}アイコン`, platforms: "対応プラットフォーム", supportPage: "サポートページ", feedback: "フィードバック", iconLink: `App Storeで${title}を見る`, supportPageName: `${title}のサポートページ`, feedbackName: `${title}へのフィードバック` };
    // 「サポートページ」などはどのアプリのものか文字だけでは分からないため、読み上げ用の名前にアプリ名を含める（表示中の文字も含める）

    return (
        <article className={styles.appCard}>
            <div className={styles.appHeader}>
                {icon && (
                    <a href={`https://apps.apple.com/app/${appStoreId}`} className={styles.appIconLink} aria-label={labels.iconLink}>
                        <AppIcon icon={icon} darkIcon={darkIcon} alt={labels.icon} />
                    </a>
                )}
                <div className={styles.appHeading}>
                    <h3 className={styles.appName}>{title}</h3>
                    <ul className={styles.platforms} aria-label={labels.platforms}>
                        {platforms.map((platform) => (
                            <li key={platform.os}>{platform.os} {platform.version}~</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.appBody}>
                <p>{description}</p>
                {children}
            </div>
            <div className={styles.appFooter}>
                <div className={styles.appLinks}>
                    <a className="hitTarget" href={supportPage} aria-label={labels.supportPageName}>{labels.supportPage}</a>
                    <a className="hitTarget" href={feedback} aria-label={labels.feedbackName}>{labels.feedback}</a>
                </div>
                <div className={styles.appActions}>
                    <AppStorePriceTag lang={lang} id={parseInt(appStoreId.replace("id", ""))} />
                    <AppStoreLink lang={lang} appId={appStoreId} appName={title} />
                </div>
            </div>
        </article>
    );
};

export default AppCard;
