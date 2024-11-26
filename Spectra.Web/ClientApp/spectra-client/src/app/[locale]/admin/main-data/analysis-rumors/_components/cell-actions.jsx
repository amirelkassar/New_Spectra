'use client';

import ActionsMenu from '@/components/actions-menu';

import { useParams } from 'next/navigation';

export function CellActions({ id }) {
  const paramsId = useParams()?.analysisRumorsID;

  return (
    <ActionsMenu>
      <ActionsMenu.Delete onClick={() => {}}>
        مسح
      </ActionsMenu.Delete>
      {!paramsId && (
        <ActionsMenu.View onClick={() => {}}>
          عرض
        </ActionsMenu.View>
      )}
      <ActionsMenu.Edit onClick={() => {}}>
        تعديل
      </ActionsMenu.Edit>
      <ActionsMenu.Export onClick={() => {}}>
        تصدير
      </ActionsMenu.Export>
      <ActionsMenu.Print onClick={() => {}}>
        طباعة
      </ActionsMenu.Print>
    </ActionsMenu>
  );
}
