'use client';

import Card from '@/components/card';
import {
  DataTable,
  Table,
  TableCard,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import { FAMILIES } from '@/data';
import { clientsColumns } from './clients-columns';

export const ClientsTable = () => {
  return (
    <Card>
      <DataTable data={FAMILIES} columns={clientsColumns}>
        <TableItem />
      </DataTable>

      <div className='flex flex-col mt-5 space-y-5 mdl:hidden'>
        {FAMILIES?.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
};

const TableItem = () => {
  return (
    <Table className='hidden mdl:table' borderColor='#F5F5F5'>
      <Table.Head
        classNames={{
          th: 'bg-blueLighter font-normal first:rounded-s-2xl last:rounded-e-2xl lg:text-xl p-3',
          tr: 'border-0',
        }}
      />
      <Table.Body
        classNames={{
          tr: 'group',
          td: 'first:rounded-s-2xl last:rounded-e-2xl transition group-hover:bg-blueLight text-sm lg:text-base first:font-bold first:lg:text-xl first:ps-5 py-7 px-3',
        }}
      >
        <Table.Fallback>لا يوجد بيانات</Table.Fallback>
      </Table.Body>
    </Table>
  );
};

const CardItem = ({ item = {} }) => {
  return (
    <TableCard>
      <TableCard.Container>
        <TableCard.Body>
          <div className='grid grid-cols-2 gap-5'>
            <span>الاسم</span>
            <span className='font-bold'>{item?.name}</span>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <span>عدد الاطفال</span>
            <span className='font-bold'>{item?.childs}</span>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <span>الايميل</span>
            <span className='font-bold'>{item?.email}</span>
          </div>
        </TableCard.Body>
        <TableCard.Footer className='grid-cols-2'>
          {item?.type}
        </TableCard.Footer>
        <TableCard.Action>
          <ThreeDotsIcon />
        </TableCard.Action>
      </TableCard.Container>
    </TableCard>
  );
};
