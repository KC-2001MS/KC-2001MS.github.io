import Image from "next/image";
import styles from "@styles/product.module.css";

type AppIconProps = {
    icon: string;
    darkIcon?: string;
    alt: string;
};

const AppIcon = ({ icon, darkIcon, alt }: AppIconProps) => {
    const image = <Image src={icon} className={styles.appIcon} height={100} width={100} alt={alt} />;

    if (!darkIcon) {
        return image;
    }

    return (
        <picture>
            <source srcSet={darkIcon} media="(prefers-color-scheme: dark)" />
            {image}
        </picture>
    );
};

export default AppIcon;
