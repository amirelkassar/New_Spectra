import { Translate } from '@/components/translate';
import {
  CellName,
  CellDate,
  CellAcceptedBy,
} from '@/dashboard/_components/contract/contracts-table';
import { ContractStatus } from '@/dashboard/_components/contract/contract-status';
import { CellActions } from './cell-actions';

export const contractsColumns = [
  {
    accessorKey: 'employeeName',
    header: () => <Translate value='name' />,
    cell: ({ row }) => <CellName row={row} />,
  },
  {
    accessorKey: 'jobTitle',
    header: () => <Translate value='job' />,
  },
  {
    accessorKey: 'creationDate',
    header: () => (
      <Translate value='contract_date' target='contract_obj' />
    ),
    cell: ({ getValue }) => <CellDate date={getValue()} />,
  },
  {
    accessorKey: 'currentVersion',
    header: () => <Translate value='copies' target='contract_obj' />,
  },
  {
    accessorKey: 'acceptedBy',
    header: () => <Translate value='accepted_by' />,
    cell: ({ row }) => (
      <CellAcceptedBy
        acceptedByAdmin={row.original?.acceptedByAdmin}
        acceptedByEmployee={row.original?.acceptedByEmployee}
        acceptedByHead={row.original?.acceptedByHead}
      />
    ),
  },
  {
    accessorKey: 'contractState',
    header: () => <Translate value='status' />,
    cell: ({ getValue }) => <ContractStatus state={getValue()} />,
  },
  {
    id: 'id',
    cell: ({ getValue }) => <CellActions contractId={getValue()} />,
  },
];
