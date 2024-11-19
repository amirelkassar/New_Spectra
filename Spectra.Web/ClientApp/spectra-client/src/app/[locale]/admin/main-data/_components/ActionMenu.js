'use client';

import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import ShowIcon from '@/assets/icons/show';
import ROUTES from '@/routes';
import DeleteIcon from '@/assets/icons/delete';
import EditIcon from '@/assets/icons/edit';

import { DeleteDrugs } from '@/useAPI/admin/main-data/drugs';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';

function ActionMenu({ id }) {
  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteDrug, isPending } =
    DeleteDrugs(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteDrug(), {
          success: 'تم مسح العقار بنجاح',
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
      link: ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(id),
      type: 'link',
    },
    {
      label: 'تعديل',
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DRUGSDETAILSEDIT(id),
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
