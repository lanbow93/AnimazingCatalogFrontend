import Link from 'next/link';
import styles from './components.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Powered by{' '}
        <Link href='https://mangadex.org/' className={styles.link}>
          MangaDex
        </Link>
      </p>
    </footer>
  );
}
