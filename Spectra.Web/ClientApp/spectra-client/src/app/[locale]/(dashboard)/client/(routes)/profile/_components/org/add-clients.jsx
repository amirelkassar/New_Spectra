'use client';

import { AddButton } from '@/components/buttons/add-button';
import { useSearchParams } from 'next/navigation';

export const AddClients = () => {
  const tab = useSearchParams().get('tab') || 'clients';

  switch (tab) {
    case 'clients':
      return <AddButton>اضافة عميل</AddButton>;
    case 'childs':
      return <AddButton>اضافة طفل</AddButton>;
    case 'doctors':
      return <AddButton>اضافة طبيب</AddButton>;
    default:
      return <></>;
  }
};
