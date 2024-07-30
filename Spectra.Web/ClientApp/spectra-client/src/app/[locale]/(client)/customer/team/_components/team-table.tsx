import { DataTable } from '@/components/data-table';
import { MedicalTeamData } from '@/lib/demoData';
import { columns } from './columns';

const sortingData = [
  {
    label: 'التقييم',
    key: 'rate',
  },
  {
    label: 'السعر',
    key: 'cost',
  },
];

export const TeamTable = () => {
  return (
    <div>
      <DataTable
        data={MedicalTeamData}
        columns={columns}
        filter='select'
        filterBy='profession'
        sort
        sortingData={sortingData}
        selectData={['اخصائى نفسي', 'توحد', 'فرط حركة', 'ثنائي القطب']}
      />
    </div>
  );
};
