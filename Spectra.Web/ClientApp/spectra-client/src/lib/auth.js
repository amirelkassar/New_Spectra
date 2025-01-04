'use server';

import { apiUser } from '@/api/axios';
import { profile } from '@/api/user';
import { decodeToken, getToken } from './token';

const getUser = async () =>
  (await apiUser.get(profile.authInfo)).data;

export async function getAuth() {
  const token = await getToken();

  try {
    const [res, decodedToken] = await Promise.all([
      getUser(),
      decodeToken(token),
    ]);

    const userId = decodedToken?.userId || '';
    const firstName = decodedToken?.firstName || '';
    const lastName = decodedToken?.lastName || '';
    const email = decodedToken?.email || '';
    const roles = res?.roles || decodedToken?.role || [];
    const permissions = res?.permissions || [];
    const hasActiveContract = res?.hasActiveContract || false;

    return {
      userId,
      firstName,
      lastName,
      email,
      roles,
      permissions,
      hasActiveContract,
    };
  } catch {
    return {
      userId: '',
      firstName: '',
      lastName: '',
      email: '',
      roles: [],
      permissions: [],
      hasActiveContract: false,
    };
  }
}
