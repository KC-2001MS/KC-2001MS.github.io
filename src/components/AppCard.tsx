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
        ? { icon: `${title} Icon`, platforms: "Supported platforms", supportPage: "Support Page", feedback: "Feedback" }
        : { icon: `${title}アイコン`, platforms: "対応プラットフォーム", supportPage: "サポートページ", feedback: "フィードバック" };

    return (
        <article className={styles.appCard}>
            <div className={styles.appHeader}>
                {icon && (
                    <a href={`https://apps.apple.com/app/${appStoreId}`} className={styles.appIconLink}>
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
                    <a href={supportPage}>{labels.supportPage}</a>
                    <a href={feedback}>{labels.feedback}</a>
                </div>
                <div className={styles.appActions}>
                    <AppStorePriceTag lang={lang} id={parseInt(appStoreId.replace("id", ""))} />
                    <AppStoreLink lang={lang} appId={appStoreId} />
                </div>
            </div>
        </article>
    );
};

export default AppCard;
