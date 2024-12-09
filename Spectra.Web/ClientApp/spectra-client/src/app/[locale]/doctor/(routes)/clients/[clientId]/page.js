'use client';
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';
import { useEffect } from 'react';

const Org = ({ params }) => {
  const router = useRouter();
  useEffect(
    () =>
      router.push(
        ROUTES.DOCTOR.CLIENTS.DETAILS(params.clientId)
      ),
    [params.clientId, router]
  );
  return null;
};

export default Org;
