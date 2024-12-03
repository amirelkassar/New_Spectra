'use client';

import ActionsMenu from '@/components/actions-menu';
import { useEmployeeMenuActions } from '../_hooks/use-employee-menu-actions';
import { useParams } from 'next/navigation';

export function EmployeeCellActions({ id }) {
  const paramsId = useParams()?.drugsID;

  const { onDelete, onEdit, onView, onExport, onPrint } =
    useEmployeeMenuActions(id || paramsId);

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
