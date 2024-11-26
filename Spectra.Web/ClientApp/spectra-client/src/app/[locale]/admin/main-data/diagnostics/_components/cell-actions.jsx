'use client';
import React from 'react';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import ShowIcon from '@/assets/icons/show';
import ROUTES from '@/routes';
import DeleteIcon from '@/assets/icons/delete';
import EditIcon from '@/assets/icons/edit';
import { DeleteDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';

export function CellActions({ id }) {
  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteDiagnostics, isPending } =
    DeleteDiagnostics(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteDiagnostics(), {
          success: 'تم المسح بنجاح',
        });
      },
    });
  };
  const options = [
    {
      label: 'مسح',
      icon: <DeleteIcon />,
      type: 'btn',
      action: handleDelete,
      color: 'red',
    },
    {
      label: 'عرض',
      icon: <ShowIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILS(id),
      type: 'link',
    },
    {
      label: 'تعديل',
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILSEDIT(
        id
      ),
      type: 'link',
    },
    {
      label: 'تصدير',
      icon: <ExportIcon />,
      type: 'btn',
      action: () => {},
    },

    {
      label: 'طباعة',
      icon: <PrintIcon />,
      type: 'btn',
      action: () => {},
    },
  ];
  return <DataActions options={options} />;
}
