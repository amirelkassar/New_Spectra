'use client';

import { Attachments } from './attachments';
import { ChildInfo } from './child-info';
import { ExternalReports } from './external-reports';
import { Prescriptions } from './prescriptions';
import { Reports } from './reports';
import { Sessions } from './sessions';

export const RenderChild = ({ tabKey = 'child-info' }) => {
  switch (tabKey) {
    case 'child-info':
      return <ChildInfo />;
    case 'sessions':
      return <Sessions />;
    case 'external-reports':
      return <ExternalReports />;
    case 'prescriptions':
      return <Prescriptions />;
    case 'reports':
      return <Reports />;
    case 'attachments':
      return <Attachments />;
    default:
      return <ChildInfo />;
  }
};
