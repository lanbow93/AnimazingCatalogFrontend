'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { IModalData } from '@/app/utils/SharedInterfaces';
import { searchManga } from '@/app/actions';
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
    isCloseWindow: true,
  });
  const [searchData, setSearchData] = useState()
  
  useEffect(() => {
    
  }, []);

  /*
  const searchMangaFunction = async () => {
    setIsLoading(true);
    const response = await searchManga();

    setIsLoading(false);
    console.log(response);
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
      const { status, message, error } = response;
      setModalData({
        status: status,
        message: message,
        additional: error,
        isCloseWindow: true,
      });
      setIsModalActive(true);
    }
  };
  */
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.searchResults}>
      <HiddenModal
        status={modalData.status}
        message={modalData.message}
        isModalActive={isModalActive}
        handleModal={setIsModalActive}
        isCloseWindow={modalData.isCloseWindow}
      />
      <div className={styles.message}>
        <h1>Results</h1>
      </div>
      
    </div>
  );
}
