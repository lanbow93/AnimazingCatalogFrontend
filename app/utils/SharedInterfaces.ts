export interface IUserData {
  username: string;
  password: string;
  verifyPassword: string;
  email: string;
  isAdult: boolean;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IModalData {
  status: string;
  message: string;
  additional: string;
  isCloseWindow: boolean;
}
