'use client';

import ActionsMenu from '@/components/actions-menu';

export const CellActions = () => {
  return (
    <ActionsMenu>
      <ActionsMenu.Delete>مسح</ActionsMenu.Delete>

      <ActionsMenu.View>عرض</ActionsMenu.View>
    </ActionsMenu>
  );
};
