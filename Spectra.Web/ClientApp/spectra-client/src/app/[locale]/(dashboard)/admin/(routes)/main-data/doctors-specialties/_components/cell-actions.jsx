'use client';

import ActionsMenu from '@/components/actions-menu';
import { useSpecialtyMenuActions } from '../_hooks/use-specialty-menu-actions';
import { useParams } from 'next/navigation';

export function CellActions({ id }) {
  const paramsId = useParams()?.doctorsSpecialtiesID;

  const { onDelete, onEdit, onView } = useSpecialtyMenuActions(
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
