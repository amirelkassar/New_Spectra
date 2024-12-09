'use server';

import { cookies } from 'next/headers';

export async function storeAuth(data) {
  if (!data) return false;
  const cookie = cookies();

  const { permissions, roles, expirationTime } = data;

  try {
    cookie.set(
      'sessionData',
      JSON.stringify({ roles, permissions }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        expires: new Date(expirationTime),
      }
    );

    return true;
  } catch {
    return false;
  }
}

export async function getAuth() {
  const cookie = cookies();

  try {
    const sessionData = cookie.get('sessionData')?.value;
    if (sessionData) {
      const { roles, permissions } = JSON.parse(sessionData);
      return { roles, permissions };
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

export async function clearAuth() {
  const cookie = cookies();

  try {
    cookie.delete('sessionData');
    return true;
  } catch {
    return false;
  }
}
