'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import { useEffect } from 'react';

export default function EmailVerification({
  params,
}: {
  params: { slug: string };
}) {
  useEffect(() => {}, []);
  return (
    <div className={styles.emailVerification}>
      <div className={styles.message}>
        <h2>Email Has Been Confirmed</h2>
        <p>Please Proceed To Login</p>
        <Link href='/login'>Login</Link>
      </div>
    </div>
  );
}
