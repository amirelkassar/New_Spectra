'use client';

import { useParams } from 'next/navigation';

import ActionsMenu from '@/components/actions-menu';
import { useServicesMenuActions } from '../_hooks/use-services-menu-actions';

export function CellActions({ id }) {
  const paramsId = useParams()?.servicesID;

  const { onDelete, onEdit, onView, onExport, onPrint } =
    useServicesMenuActions(id || paramsId);

  return (
    <ActionsMenu>
      <ActionsMenu.Delete onClick={onDelete}>
        مسح
      </ActionsMenu.Delete>
      {!paramsId && (
        <ActionsMenu.View onClick={onView}>
          عرض
        </ActionsMenu.View>
      )}
      <ActionsMenu.Edit onClick={onEdit}>
        تعديل
      </ActionsMenu.Edit>
      <ActionsMenu.Export onClick={onExport}>
        تصدير
      </ActionsMenu.Export>
      <ActionsMenu.Print onClick={onPrint}>
        طباعة
      </ActionsMenu.Print>
    </ActionsMenu>
  );
}
