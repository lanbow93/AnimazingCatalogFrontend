'use server'
import { ILoginData, IUserData } from './utils/SharedInterfaces';

const url = process.env.BACKEND_URL;

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

// export async function login(userData) {
//     try {
//         const response = await fetch(url + '/user/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//             body: userData,
//         })

//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function assetsCall() {
//     try {
//         const response = await fetch(url + '/inventory/', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function singleAsset(id) {
//     try {
//         const response = await fetch(url + `/inventory/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function createAsset(assetData) {
//     try {
//         const response = await fetch(url + '/inventory', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//             body: JSON.stringify(assetData),
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function getCategories() {
//     try {
//         const response = await fetch(url + '/inventory/unique-categories', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function updateAsset(assetData) {
//     try {
//         const response = await fetch(url + '/inventory/' + assetData._id, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//             body: JSON.stringify(assetData),
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function assignAsset(id, assetData) {
//     try {
//         const response = await fetch(url + '/possession/' + id, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//             body: JSON.stringify(assetData),
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }

// export async function viewChainHistory(id) {
//     try {
//         const response = await fetch(url + '/possession/' + id, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         })
//         if (response.ok) {
//             return { data: await response.json() }
//         } else {
//             return { error: await response.json() }
//         }
//     } catch (error) {
//         return { error }
//     }
// }
