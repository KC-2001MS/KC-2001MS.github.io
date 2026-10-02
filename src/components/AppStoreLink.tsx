import { Language } from "@/lib/Language";
import Link from "next/link";
import styles from "@styles/product.module.css";

type AppStoreLinkProps = {
    lang?: Language
    appId: string;
    appName?: string;
};

const AppStoreLink = ({ lang = Language.Japanese, appId, appName }: AppStoreLinkProps) => {

    const embedUrl = `https://apps.apple.com/app/${appId}`;

    switch (lang) {
        case Language.Japanese:
            return (
                <Link className={`${styles.appStoreLink} hitTarget`} href={embedUrl} aria-label={appName ? `App Storeからダウンロード：${appName}` : undefined}>
                    <picture>
                        <source srcSet={`/images/Download-on-the-App-Store/JP/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg`} media="(prefers-color-scheme: dark)" />
                        <img src={`/images/Download-on-the-App-Store/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg`} width={109} height={40} alt="App Storeからダウンロード" />
                    </picture>
                </Link>
            );
        case Language.EnglishUS:
            return (
                <Link className={`${styles.appStoreLink} hitTarget`} href={embedUrl} aria-label={appName ? `Download on the App Store: ${appName}` : undefined}>
                    <picture>
                        <source srcSet={`/images/Download-on-the-App-Store/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg`} media="(prefers-color-scheme: dark)" />
                        <img src={`/images/Download-on-the-App-Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg`} width={120} height={40} alt="Download on the App Store" />
                    </picture>
                </Link>
            );
    }
};

export default AppStoreLink;