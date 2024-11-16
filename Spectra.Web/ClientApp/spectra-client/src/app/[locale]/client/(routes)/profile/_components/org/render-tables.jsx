'use client';

import { useSearchParams } from 'next/navigation';

import { DoctorsTable } from './doctors-table';

export const RenderTables = () => {
  const tab = useSearchParams().get('tab') || 'clients';

  switch (tab) {
    case 'clients':
      return <>Clients table</>;
    case 'childs':
      return <>Childs table</>;
    case 'doctors':
      return <DoctorsTable />;
    default:
      return <></>;
  }
};
