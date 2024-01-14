'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { IModalData } from '@/app/utils/SharedInterfaces';
import { verifyEmail } from '@/app/actions';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { HiddenModal } from '@/app/components/HiddenModal';

export default function EmailVerification({
  params,
}: {
  params: { id: string };
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModalData>({
    status: '',
    message: '',
    additional: '',
  });
  const [screenData, setScreenData] = useState({
    heading: '',
    message: '',
    isSuccess: false,
  });
  useEffect(() => {
    checkEmailVerification();
  }, []);

  const checkEmailVerification = async () => {
    setIsLoading(true);
    const response = await verifyEmail(params.id);

    setIsLoading(false);
    if (response.data) {
      setScreenData({
        heading: 'Email Has Been Confirmed',
        message: 'Please Procees To Login',
        isSuccess: true,
      });
    } else {
      setScreenData({
        heading: 'Email Not Verified',
        message:
          'Reattempt email verification and login. If problem persists, contact Sitemaster.',
        isSuccess: false,
      });
      const { status, message, error } = response.error;
      setModalData({
        status: status,
        message: message,
        additional: error,
      });
      setIsModalActive(true);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.emailVerification}>
      <HiddenModal
        status={modalData.status}
        message={modalData.message}
        isModalActive={isModalActive}
        handleModal={setIsModalActive}
        isCloseWindow={true}
      />
      <div className={styles.message}>
        <h2>{screenData.heading}</h2>
        <p>{screenData.message}</p>
        {screenData.isSuccess ? (
          <Link href='/login'>Login</Link>
        ) : (
          <Link href='/home'>Home</Link>
        )}
      </div>
    </div>
  );
}
