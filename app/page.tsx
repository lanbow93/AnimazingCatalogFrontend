'use client';
import styles from './page.module.scss';
import SearchBox from './components/SearchBox';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.greeting}>
        <div className={styles.textArea}>
        <h1>Welcome</h1>
        <p>Animazing Catalog</p>
        </div>
        <div className={styles.searchBox}>
          <SearchBox />
        </div>
      </div>
      <div>
        <h1>This Is Not Part Of The Greeting</h1>
      </div>
    </main>
  );
}
