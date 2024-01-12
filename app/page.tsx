'use client';
import styles from './page.module.scss';
import SearchBox from './components/SearchBox';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.greeting}>
        <h1>Welcome</h1>
        <p>Animazing Catalog</p>
        <div className={styles.searchBox}>
          <SearchBox />
        </div>
      </div>
    </main>
  );
}
