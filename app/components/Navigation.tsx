'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './components.module.scss';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    ['Home', '/'],
    ['Login', '/login'],
    ['Collections', '/collections'],
  ];

  return (
    <nav className={styles.navigation}>
      <div
        className={`${styles.navOptions} ${
          menuOpen ? styles.open : styles.closed
        }`}
      >
        <ul className={styles.navList}>
          {navLinks.map((linkInfo, index) => (
            <li key={linkInfo[1] + index}>
              <Link className={styles.singleLink} href={linkInfo[1]}>
                {linkInfo[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${styles.container} ${menuOpen ? styles.change : ''}`}
        onClick={handleMenuToggle}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </nav>
  );
};
