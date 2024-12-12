'use client';

import Card from '@/components/card';
import Avatar from '@/components/avatar';
import {
  DataTable,
  Table,
  TableCard,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { CellRate } from './cell-rate';
import { doctorsColumns } from './doctors-columns';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import { TEAM } from '@/data';

export const DoctorsTable = () => {
  return (
    <Card>
      <DataTable data={TEAM} columns={doctorsColumns}>
        <TableItem />
      </DataTable>

      <div className='flex flex-col mt-5 space-y-5 mdl:hidden'>
        {TEAM?.map((item) => (
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
          <div className='flex gap-2'>
            <Avatar
              name={item?.doctor}
              src={item?.avatar}
              className='size-10'
            />
            <div className='flex-1 space-y-3'>
              <div className='grid grid-cols-2 gap-5'>
                <span>الاسم</span>
                <span className='font-bold'>{item?.doctor}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>التخصص</span>
                <span className='font-bold'>{item?.profession}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>سنوات الخبرة</span>
                <span className='font-bold'>{item?.exp}</span>
              </div>
            </div>
          </div>
        </TableCard.Body>
        <TableCard.Footer className='grid-cols-2'>
          <CellRate rate={item?.rate} />
        </TableCard.Footer>
        <TableCard.Action>
          <ThreeDotsIcon />
        </TableCard.Action>
      </TableCard.Container>
    </TableCard>
  );
};
