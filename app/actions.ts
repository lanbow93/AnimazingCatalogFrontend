'use server';
import { ILoginData, IPasswordData, IUserData } from './utils/SharedInterfaces';

// const url = "https://animazing-catalog.onrender.com";
const url = "http://localhost:7777"
export async function signup(userData: IUserData) {
  try {
    const response = await fetch(url + '/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return await response.json();
    }
  } catch (error) {
    return { error };
  }
}

export async function login(userData: ILoginData) {
  try {
    const response = await fetch(url + '/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return await response.json();
    }
  } catch (error) {
    return { error };
  }
}

export async function verifyEmail(id: string) {
  try {
    const response = await fetch(url + '/user/verify-email/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      return await response.json();
    }
  } catch (error) {
    return { error };
  }
}

export async function forgotPassword(email: string) {
  try {
    const response = await fetch(url + '/user/forgotpassword', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email: email }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      return await response.json();
    }
  } catch (error) {
    return { error };
  }
}

export async function forgotPasswordReset(
  passwordData: IPasswordData,
  id: string
) {
  try {
    const response = await fetch(url + '/user/forgotpassword/' + id + "/", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(passwordData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return await response.json();
    }
  } catch (error) {
    return { error };
  }
}
