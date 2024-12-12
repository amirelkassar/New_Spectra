'use client';

import { useParams } from 'next/navigation';

import ActionsMenu from '@/components/actions-menu';
import { useSectionsMenuActions } from '../_hooks/use-sections-menu-actions';

export function CellActions({ id }) {
  const paramsId = useParams()?.departmentsID;

  const { onDelete, onEdit, onView } = useSectionsMenuActions(
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
