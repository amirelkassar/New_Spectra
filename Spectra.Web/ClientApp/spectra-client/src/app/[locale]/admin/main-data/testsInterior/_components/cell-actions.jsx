'use client';

import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import DeleteIcon from '@/assets/icons/delete';
import ShowIcon from '@/assets/icons/show';
import EditIcon from '@/assets/icons/edit';
import ROUTES from '@/routes';
import { DeleteInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';

export function CellActions({ id }) {
  const open = useConfirmModal((s) => s.open);

  const {
    mutateAsync: deleteInternalExamination,
    isPending,
  } = DeleteInternalExamination(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteInternalExamination(), {
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
      link: ROUTES.ADMIN.DATAMAIN.TESTSINTERIORDETAILS(id),
      type: 'link',
    },
    {
      label: 'تعديل',
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.TESTSINTERIORDETAILSEDIT(
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
