'use client';

import { useTranslations } from 'next-intl';

export const CellAcceptedBy = ({ row }) => {
  const t = useTranslations('contract_obj');

  const acceptedByAdmin = row.original?.acceptedByAdmin;
  const acceptedByEmployee = row.original?.acceptedByEmployee;
  const acceptedByHead = row.original?.acceptedByHead;

  if (acceptedByAdmin) return t('accepted_by_admin');
  if (acceptedByEmployee) return t('accepted_by_doctor');
  if (acceptedByHead) return t('accepted_by_department_head');
};
