import styles from "@styles/home.module.css";

export default function Home() {
  return (
    <main id={styles.backgroundImage}>
      <div id={styles.goal}>
        <h1 id={styles.goalTitle}>More efficient.</h1>
        <p className={styles.goalSubtitle}>I create what I want<br />with my own hands.</p>
      </div>
      <div id={styles.language}>
        Language : <a id={styles.languageItem} href="../" lang="ja" hrefLang="ja">日本語</a>
      </div>
    </main>
  );
}
