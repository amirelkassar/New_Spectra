'use client';
import React from 'react';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import DeleteIcon from '@/assets/icons/delete';
import ShowIcon from '@/assets/icons/show';
import ROUTES from '@/routes';
import EditIcon from '@/assets/icons/edit';
import { DeleteSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';

function ActionMenu({ id }) {
  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteDiagnostics, isPending } =
    DeleteSpecialization(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: () => {
        Toast.Promise(deleteDiagnostics(), {
          success: 'تم مسح التخصص بنجاح',
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
      link: ROUTES.ADMIN.DATAMAIN.SPECIALTIESID(id),
      type: 'link',
    },
    {
      label: 'تعديل',
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.SPECIALTIESIDEDIT(id),
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

export default ActionMenu;
