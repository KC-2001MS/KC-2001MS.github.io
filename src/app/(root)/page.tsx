import styles from "@styles/home.module.css";

export default function Home() {
  return (
    <main id={styles.backgroundImage}>
      <div id={styles.goal}>
        <h1 id={styles.goalTitle}>より効率的に。</h1>
        <p className={styles.goalSubtitle}>私のほしいものを<br />私自身の手で作り出します</p>
      </div>
      <div id={styles.language}>
        言語 : <a id={styles.languageItem} href="./en" lang="en" hrefLang="en">English</a>
      </div>
    </main>
  );
}
