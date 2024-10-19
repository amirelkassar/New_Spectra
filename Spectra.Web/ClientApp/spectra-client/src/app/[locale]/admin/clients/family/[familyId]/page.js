'use client';
import ROUTES from '@/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const FamilyPage = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    router.push(
      ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(params.familyId)
    );
  }, [params.familyId, router]);
  return null;
};

export default FamilyPage;
