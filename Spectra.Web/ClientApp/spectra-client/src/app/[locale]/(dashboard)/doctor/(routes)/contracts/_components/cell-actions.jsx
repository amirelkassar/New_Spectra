'use client';

import ActionsMenu from '@/components/actions-menu';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useContractMenuActions } from '../_hooks/use-contract-menu-actions';

export function CellActions({ contractId = '', lastVersionId = '' }) {
  const paramsId = useParams()?.contractId;

  const tg = useTranslations('general_obj');

  const { onView } = useContractMenuActions(
    contractId || paramsId,
    lastVersionId
  );

  return (
    <ActionsMenu>
      {!paramsId && (
        <ActionsMenu.View onClick={onView}>
          {tg('view')}
        </ActionsMenu.View>
      )}
    </ActionsMenu>
  );
}
