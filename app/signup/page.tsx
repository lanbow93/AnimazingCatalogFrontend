'use client';

import styles from './page.module.scss';
import { FormEvent, useState } from 'react';
import { HiddenModal } from '../components/HiddenModal';
import { LoadingScreen } from '../components/LoadingScreen';
import { useRouter } from 'next/navigation';
import { signup } from '../actions';
import { IModalData, IUserData } from '../utils/SharedInterfaces';

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModalData>({
    status: '',
    message: '',
    additional: '',
    isCloseWindow: true,
  });
  const [userData, setUserData] = useState<IUserData>({
    username: '',
    password: '',
    verifyPassword: '',
    email: '',
    isAdult: false,
  });

  const handleSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (userData.password !== userData.verifyPassword) {
      setIsLoading(false);
      setModalData({
        status: 'Failed To Sign Up',
        message: 'Passwords Did Not Match',
        additional: 'Try Again',
        isCloseWindow: true,
      });
      setIsModalActive(true);
      return;
    }
    const response = await signup(userData);
    setIsLoading(false);
    if (response.data) {
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
    setUserData({ ...userData, [name]: value });
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
        <h2>New User Creation</h2>
        <label>Username:</label>
        <input
          required
          autoComplete='none'
          type='text'
          name='username'
          value={userData.username}
          onChange={handleInputChange}
        />
        <label>E-Mail:</label>
        <input
          required
          type='email'
          name='email'
          value={userData.email}
          onChange={handleInputChange}
        />
        <label>Password:</label>
        <input
          required
          type='password'
          name='password'
          value={userData.password}
          onChange={handleInputChange}
        />
        <label>Verify Password:</label>
        <input
          required
          type='password'
          name='verifyPassword'
          value={userData.verifyPassword}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className={
            userData.password === userData.verifyPassword ? '' : styles.disabled
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
