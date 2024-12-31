'use server';

import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';

export async function storeToken(data) {
  const cookie = cookies();

  try {
    cookie.set('accessToken', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      expires: new Date(data.expirationTime),
    });

    return true;
  } catch {
    return false;
  }
}

export async function getToken() {
  const cookie = cookies();

  try {
    return cookie.get('accessToken')?.value;
  } catch {
    return null;
  }
}

export async function clearToken() {
  const cookie = cookies();

  try {
    cookie.delete('accessToken');
    return true;
  } catch {
    return false;
  }
}

/**
 * Decodes a JWT token and extracts specific claims.
 * @param {string} token - The JWT token to decode.
 * @returns {Promise<{ userId: string, firstName: string, lastName: string, email: string, role: string } | null>}
 * A promise that resolves to the decoded token data or null if decoding fails.
 */

export async function decodeToken(token) {
  if (!token) return null;
  try {
    const decoded = decodeJwt(token);

    return {
      userId:
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'
        ],
      fistName:
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ],
      lastName: decoded['Surname'],
      email:
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ],
      role: decoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
    };
  } catch {
    return null;
  }
}
