'use client';
import React from 'react';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import DeleteIcon from '@/assets/icons/delete';
import EditIcon from '@/assets/icons/edit';
import ROUTES from '@/routes';
import { DeleteMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import { useRouter } from '@/navigation';
import { Toast } from '@/components/toast';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';

function ActionMenu({ id }) {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteMedicalTests, isPending } =
    DeleteMedicalTests(id);

  const handleDelete = () => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteMedicalTests(), {
          success: 'تم المسح بنجاح',
          onSuccess: () => {
            router.replace(
              ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS
            );
          },
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
      label: 'تعديل',
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSDETAILSEDIT(
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
