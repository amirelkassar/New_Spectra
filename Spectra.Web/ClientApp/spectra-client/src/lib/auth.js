'use server';

import { apiUser } from '@/api/axios';
import { profile } from '@/api/user';

export async function getAuth() {
  try {
    const res = (await apiUser.get(profile.authInfo)).data;

    const roles = res?.roles || [];
    const permissions = res?.permissions || [];
    const hasActiveContract = res?.hasActiveContract || false;

    return { roles, permissions, hasActiveContract };
  } catch {
    return { roles: [], permissions: [], hasActiveContract: false };
  }
}
