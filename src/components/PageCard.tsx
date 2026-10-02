import Link from 'next/link'
import styles from "@styles/pageCard.module.css";

// 「2025/1/14」のような日付を、機械が読める形式（2025-01-14）にする
const toISODate = (date: string) => {
    const m = date.match(/^(\d{4})\D(\d{1,2})\D(\d{1,2})$/);
    return m ? `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}` : undefined;
};

type PageCardProps = {
    title: string;
    description: string;
    date: string;
    genre: string;
    path: string;
}
  
  const PageCard = ({ title, description, date, genre, path }: PageCardProps) => {

    return (
        <Link href={path} className={styles.pageCard}>
            <p className={styles.genre}>{genre}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.date}><time dateTime={toISODate(date)}>{date}</time></p>
        </Link>
    );
  };
  
  export default PageCard;