'use client';

import { useSearchParams } from 'next/navigation';

import { DoctorsTable } from './doctors-table';
import { ClientsTable } from './clients-table';
import { ChildsTable } from './childs-table';

export const RenderTables = () => {
  const tab = useSearchParams().get('tab') || 'clients';

  switch (tab) {
    case 'clients':
      return <ClientsTable />;
    case 'childs':
      return <ChildsTable />;
    case 'doctors':
      return <DoctorsTable />;
    default:
      return <></>;
  }
};
