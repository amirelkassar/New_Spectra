import { ChildInfo } from './child-info';

export const RenderChild = ({ tabKey = 'child-info' }) => {
  switch (tabKey) {
    case 'child-info':
      return <ChildInfo />;
    case 'sessions':
      return <></>;
    case 'external-reports':
      return <></>;
    case 'prescriptions':
      return <></>;
    default:
      return <ChildInfo />;
  }
};
