import styles from "@styles/product.module.css";

type AppIconProps = {
    icon: string;
    darkIcon?: string;
    alt: string;
};

// 表示サイズ（88px）に合わせた縮小版（public/images/icons/）を、画面の解像度に応じて選ばせる
// 縮小版は「<元のファイル名> <幅>.avif」で、元の512pxの画像から作っている
const sizes = [88, 176, 264];
const srcSet = (src: string) =>
    sizes.map((w) => `${encodeURI(src.replace("/images/", "/images/icons/").replace(/\.avif$/, ` ${w}.avif`))} ${w}w`).join(", ");

const AppIcon = ({ icon, darkIcon, alt }: AppIconProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    const image = <img src={encodeURI(icon)} srcSet={srcSet(icon)} sizes="88px" className={styles.appIcon} width={88} height={88} alt={alt} loading="lazy" decoding="async" />;

    if (!darkIcon) {
        return image;
    }

    return (
        <picture>
            <source srcSet={srcSet(darkIcon)} sizes="88px" media="(prefers-color-scheme: dark)" />
            {image}
        </picture>
    );
};

export default AppIcon;
