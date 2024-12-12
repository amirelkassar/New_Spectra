'use client';
import { useRouter } from '@/i18n/routing';
import ROUTES from '@/routes';

import { useEffect } from 'react';

const FamilyPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.ADMIN.CLIENTS.DASHBOARD);
  }, [router]);
  return null;
};

export default FamilyPage;
