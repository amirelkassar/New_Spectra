'use client';

import { Chat } from './chat';
import { Recomendations } from './recomendations';
import { TestsScans } from './tests-scans';
import { Prescriptions } from './prescriptions';
import { Reports } from './reports';
import { Files } from './files';

import { cn } from '@/lib/utils';
import { useClientVideoStore } from '../../_hooks';

export const DynamicContent = ({ ...props }) => {
  const view = useClientVideoStore((s) => s.view);

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
        return null;
    }
  };

  if (!view) return null;
  return (
    <div
      className={cn(
        'bg-white overflow-y-auto overflow-x-hidden p-2 lgl:p-5 h-[calc(65vh-120px)] mdl:h-[calc(65vh-168px)] lgl:h-screen',
        props?.className
      )}
    >
      <Content />
    </div>
  );
};
