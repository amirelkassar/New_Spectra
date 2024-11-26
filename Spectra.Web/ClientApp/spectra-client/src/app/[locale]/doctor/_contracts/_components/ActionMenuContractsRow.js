'use client';
import React from 'react';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import DataActions from '@/components/data-actions';
import DeleteIcon from '@/assets/icons/delete';
import { DeleteContracts } from '@/hooks/queries/doctor/contracts-api';

function ActionMenu({ id, activeNow = false, employeeId }) {
  const { mutate: deleteContracts, isSuccess } =
    DeleteContracts(id, employeeId);

  const handleDelete = () => {
    deleteContracts();
  };

  const options = [
    !activeNow && {
      label: 'مسح',
      icon: <DeleteIcon />,
      type: 'btn',
      action: handleDelete,
      color: 'red',
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
