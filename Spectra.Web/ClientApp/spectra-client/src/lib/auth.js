'use server';

import { apiUser } from '@/api/axios';
import { profile } from '@/api/user';

export async function getAuth() {
  try {
    const res = (await apiUser.get(profile.authInfo)).data;

    const roles = [res?.role] || res?.roles || [];
    const permissions = res?.permissions || [];

    return { roles, permissions };
  } catch {
    return null;
  }
}
