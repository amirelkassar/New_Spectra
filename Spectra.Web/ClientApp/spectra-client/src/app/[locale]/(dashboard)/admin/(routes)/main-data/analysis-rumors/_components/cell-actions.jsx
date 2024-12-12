'use client';

import ActionsMenu from '@/components/actions-menu';

import { useParams } from 'next/navigation';
import { useAnalysisMenuActions } from '../_hooks/use-analysis-menu-actions';

export function CellActions({ id }) {
  const paramsId = useParams()?.analysisRumorsID;

  const { onDelete, onView, onEdit } = useAnalysisMenuActions(
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
