'use client';

import { useParams } from 'next/navigation';

import ActionsMenu from '@/components/actions-menu';
import { useComplaintsMenuActions } from '../_hooks/use-complaint-menu-actions';

export function CellActions({ id }) {
  const paramsId = useParams()?.complaintsID;

  const { onDelete, onEdit, onView } = useComplaintsMenuActions(
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
