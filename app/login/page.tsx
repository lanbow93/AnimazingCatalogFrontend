'use client';

import styles from './page.module.scss';
import { FormEvent, useState } from 'react';
import { HiddenModal } from '../components/HiddenModal';
import { LoadingScreen } from '../components/LoadingScreen';
import { login } from '../actions';
import { IModalData, ILoginData } from '../utils/SharedInterfaces';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModalData>({
    status: '',
    message: '',
    additional: '',
    isCloseWindow: true,
  });
  const [userData, setUserData] = useState<ILoginData>({
    username: '',
    password: '',
  });

  const handleSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await login(userData);
    console.log(response)
    setIsLoading(false);
    if (response.data) {
      router.push('/dashboard');
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
    <div className={styles.login}>
      <HiddenModal
        status={modalData.status}
        message={modalData.message}
        isModalActive={isModalActive}
        handleModal={setIsModalActive}
        isCloseWindow={modalData.isCloseWindow}
      />

      <form onSubmit={handleSubmission}>
        <h2>User Login</h2>
        <label>Username:</label>
        <input
          required
          autoComplete='none'
          type='text'
          name='username'
          value={userData.username}
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
        <Link href='/forgotpassword'>Forgot Password?</Link>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
