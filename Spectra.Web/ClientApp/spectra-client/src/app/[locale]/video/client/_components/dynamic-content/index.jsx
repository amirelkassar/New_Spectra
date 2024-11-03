'use client';

import { useSearchParams } from 'next/navigation';
import { Chat } from './chat';
import { Recomendations } from './recomendations';
import { TestsScans } from './tests-scans';
import { Prescriptions } from './prescriptions';
import { Reports } from './reports';
import { Files } from './files';

export const DynamicContent = () => {
  const view = useSearchParams().get('view') || '';

  const Content = () => {
    switch (view) {
      case 'recommendations':
        return <Recomendations />;
      case 'tests-scans':
        return <TestsScans />;
      case 'prescriptions':
        return <Prescriptions />;
      case 'reports':
        return <Reports />;
      case 'files':
        return <Files />;
      case 'chat':
        return <Chat />;
      default:
        return <Chat />;
    }
  };

  return (
    <div className='lgl:col-span-3 flex-1 p-5 lgl:h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden flex flex-col *:flex-1'>
      <Content />
    </div>
  );
};
