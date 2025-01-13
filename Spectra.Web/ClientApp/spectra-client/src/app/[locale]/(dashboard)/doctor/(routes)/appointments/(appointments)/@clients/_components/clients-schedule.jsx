'use client';

import { useTranslations } from 'next-intl';
import { DataTable } from '@/components/table/data-table';
import { TableCard } from '@/components/table/table-card';
import {
  clientsScheduleColumns,
  CardItem,
  TableItem,
} from '@/dashboard/_components/appointments/clients-schedule-table';

export const ClientsSchedule = () => {
  const t = useTranslations('appointments_obj');

  return (
    <div>
      <>
        <DataTable data={[]} columns={clientsScheduleColumns}>
          <TableItem />
        </DataTable>

        <div className='mdl:hidden'>
          {!![].length ? (
            data.map((item) => <CardItem key={item.id} item={item} />)
          ) : (
            <TableCard.Fallback>
              {t('no_appointments')}
            </TableCard.Fallback>
          )}
        </div>
      </>
    </div>
  );
};
