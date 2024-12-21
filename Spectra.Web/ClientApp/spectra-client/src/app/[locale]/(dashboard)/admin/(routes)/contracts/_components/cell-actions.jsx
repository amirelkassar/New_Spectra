'use client';

import ActionsMenu from '@/components/actions-menu';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useContractMenuActions } from '../_hooks/use-contract-menu-actions';

export function CellActions({ contractId = '' }) {
  const paramsId = useParams()?.contractId;

  const tg = useTranslations('general_obj');

  const { onDelete, onEdit, onView, onCancel } =
    useContractMenuActions(contractId || paramsId);

  return (
    <ActionsMenu>
      <ActionsMenu.Delete onClick={onDelete}>
        {tg('delete')}
      </ActionsMenu.Delete>
      <ActionsMenu.Cancel onClick={onCancel}>
        {tg('cancel')}
      </ActionsMenu.Cancel>
      {!paramsId && (
        <ActionsMenu.View onClick={onView}>
          {tg('view')}
        </ActionsMenu.View>
      )}
      <ActionsMenu.Edit onClick={onEdit}>
        {tg('edit')}
      </ActionsMenu.Edit>
    </ActionsMenu>
  );
}
