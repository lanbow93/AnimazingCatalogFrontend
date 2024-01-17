'use client';

import styles from './page.module.scss';
import { FormEvent, useState } from 'react';
import { HiddenModal } from '@/app/components/HiddenModal';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { useRouter } from 'next/navigation';
import { forgotPasswordReset } from '@/app/actions';
import { IModalData, IPasswordData } from '@/app/utils/SharedInterfaces';

export default function UpdatePassword({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModalData>({
    status: '',
    message: '',
    additional: '',
    isCloseWindow: true,
  });
  const [passwordData, setpasswordData] = useState<IPasswordData>({
    username: '',
    password: '',
    verifyPassword: '',
  });

  const handleSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (passwordData.password !== passwordData.verifyPassword) {
      setIsLoading(false);
      setModalData({
        status: 'Failed To Update',
        message: 'Passwords Did Not Match',
        additional: 'Try Again',
        isCloseWindow: true,
      });
      setIsModalActive(true);
      return;
    }
    const id = params.id;
    const response = await forgotPasswordReset(passwordData, id);
    console.log(response);
    setIsLoading(false);
    if (response.data) {
      console.log(response);
      const { status, message } = response;
      setModalData({
        status: status,
        message: message,
        additional: 'Try Again',
        isCloseWindow: false,
      });
      setIsModalActive(true);
    } else {
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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setpasswordData({ ...passwordData, [name]: value });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.signup}>
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
          handleModal={() => router.push('/login')}
          isCloseWindow={modalData.isCloseWindow}
        />
      )}

      <form onSubmit={handleSubmission}>
        <h2>Update Password</h2>
        <label>Username:</label>
        <input
          required
          autoComplete='none'
          type='text'
          name='username'
          value={passwordData.username}
          onChange={handleInputChange}
        />

        <label>New Password:</label>
        <input
          required
          type='password'
          name='password'
          value={passwordData.password}
          onChange={handleInputChange}
        />
        <label>Verify New Password:</label>
        <input
          required
          type='password'
          name='verifyPassword'
          value={passwordData.verifyPassword}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className={
            passwordData.password === passwordData.verifyPassword
              ? ''
              : styles.disabled
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
