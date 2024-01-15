'use client';

import styles from './page.module.scss';
import { FormEvent, useState } from 'react';
import { HiddenModal } from '../components/HiddenModal';
import { LoadingScreen } from '../components/LoadingScreen';
import { forgotPassword } from '../actions';
import { IModalData } from '../utils/SharedInterfaces';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModalData>({
    status: '',
    message: '',
    additional: '',
    isCloseWindow: false,
  });
  const [email, setEmail] = useState('');

  const handleSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await forgotPassword(email);

    setIsLoading(false);
    if (response.data) {
      setModalData({
        status: 'Password Reset Request Sent',
        message: 'Please Check Your Email For Further Steps',
        additional: '',
        isCloseWindow: false,
      });
    } else {
      const { status, message, error } = response;
      setModalData({
        status: status,
        message: message,
        additional: error,
        isCloseWindow: true,
      });
    }
    setIsModalActive(true);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.forgotPassword}>
      {modalData.isCloseWindow ? (
        <HiddenModal
          status={modalData.status}
          message={modalData.message}
          isModalActive={isModalActive}
          handleModal={setIsModalActive}
          isCloseWindow={modalData.isCloseWindow}
        />
      ) : (
        <HiddenModal
          status={modalData.status}
          message={modalData.message}
          isModalActive={isModalActive}
          handleModal={() => router.push('/')}
          isCloseWindow={modalData.isCloseWindow}
        />
      )}

      <form onSubmit={handleSubmission}>
        <h2>Forgot Password</h2>
        <label>Email:</label>
        <input
          required
          type='text'
          name='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
