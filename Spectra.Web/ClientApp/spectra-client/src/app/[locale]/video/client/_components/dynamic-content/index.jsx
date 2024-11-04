'use client';

import { useSearchParams } from 'next/navigation';
import { Chat } from './chat';
import { Recomendations } from './recomendations';
import { TestsScans } from './tests-scans';
import { Prescriptions } from './prescriptions';
import { Reports } from './reports';
import { Files } from './files';
import { cn } from '@/lib/utils';

export const DynamicContent = ({ ...props }) => {
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
    <div
      className={cn(
        'flex-1 p-5 lgl:h-screen overflow-y-auto overflow-x-hidden flex flex-col *:flex-1',
        props?.className
      )}
    >
      <Content />
    </div>
  );
};
