'use client';
import styles from './page.module.scss';
import SearchBox from './components/SearchBox';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.greeting}>
        <div className={styles.textArea}>
          <h1>Welcome</h1>
          <p>Animazing Catalogue</p>
        </div>
        <div className={styles.searchBox}>
          <SearchBox />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.message}>
          <p>
            Discover the world of manga like never before with Animazing
            Catalog! Our user-friendly platform is designed exclusively for
            manga enthusiasts.
          </p>

          <p>
            Organize, explore, and keep track of your favorite manga series
            effortlessly. Whether you're an avid collector, a casual reader, or
            a dedicated otaku, Animazing Catalog is your ultimate companion for
            manga cataloging and discovery.
          </p>

          <p>
            Dive into a world of beautifully organized manga collections and
            make your reading experience truly Animazing!
          </p>
        </div>
      </div>
    </main>
  );
}
