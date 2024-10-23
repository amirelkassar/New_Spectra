'use client';

import { useChildStore } from '../_hooks/use-child-store';
import ChildPopover from './child-popover';

export const ChildSelect = ({ data = [] }) => {
  const childId = useChildStore((state) => state.childId);

  const setChildId = useChildStore(
    (state) => state.setChildId
  );

  return (
    <ChildPopover
      onChange={(childId) => setChildId(childId)}
      data={data}
      defaultSelected={childId}
    />
  );
};
