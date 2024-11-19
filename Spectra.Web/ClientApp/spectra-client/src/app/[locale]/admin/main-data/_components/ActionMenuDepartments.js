'use client';
import React from 'react';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import DeleteIcon from '@/assets/icons/delete';
import ShowIcon from '@/assets/icons/show';
import ROUTES from '@/routes';
import EditIcon from '@/assets/icons/edit';
import { DeleteSection } from '@/useAPI/admin/main-data/section';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';

function ActionMenu({ id }) {
  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteSection, isPending } =
    DeleteSection(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteSection(), {
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
      link: ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILS(id),
      type: 'link',
    },
    {
      label: 'تعديل',
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILSEDIT(
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

export default ActionMenu;
