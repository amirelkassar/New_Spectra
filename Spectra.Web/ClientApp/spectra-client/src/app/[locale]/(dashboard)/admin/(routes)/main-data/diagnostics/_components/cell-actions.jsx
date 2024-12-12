'use client';

import ActionsMenu from '@/components/actions-menu';
import { useParams } from 'next/navigation';
import { useDaignosticsMenuActions } from '../_hooks/use-daignostics-menu-actions';

export function CellActions({ id }) {
  const paramsId = useParams()?.diagnosticsID;

  const { onDelete, onEdit, onView } = useDaignosticsMenuActions(
    id || paramsId
  );

  return (
    <ActionsMenu>
      <ActionsMenu.Delete onClick={onDelete}>مسح</ActionsMenu.Delete>
      {!paramsId && (
        <ActionsMenu.View onClick={onView}>عرض</ActionsMenu.View>
      )}
      <ActionsMenu.Edit onClick={onEdit}>تعديل</ActionsMenu.Edit>
    </ActionsMenu>
  );
}
