'use client';
import React from 'react';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import ShowIcon from '@/assets/icons/show';
import ROUTES from '@/routes';
import DeleteIcon from '@/assets/icons/delete';
import EditIcon from '@/assets/icons/edit';
import { DeleteMasterDataServices } from '@/useAPI/admin/main-data/services';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';
function ActionMenu({ id, show = true }) {
  const open = useConfirmModal((s) => s.open);

  const {
    mutateAsync: deleteMasterDataServices,
    isPending,
  } = DeleteMasterDataServices(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteMasterDataServices(), {
          success: 'تم مسح الخدمة بنجاح',
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
      link: show
        ? ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id)
        : `${ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(
            id
          )}?show=false`,
      type: 'link',
    },
    {
      label: 'تعديل',
      icon: <EditIcon />,
      link: show
        ? ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id)
        : ROUTES.ADMIN.DATAMAIN.SERVICESDETAILSEDIT(id),
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
