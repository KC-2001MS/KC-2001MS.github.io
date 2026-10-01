import Link from 'next/link'
import styles from "@styles/pageCard.module.css";

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
            <p className={styles.date}>{date}</p>
        </Link>
    );
  };
  
  export default PageCard;