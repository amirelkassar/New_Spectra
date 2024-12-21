'use client';

import Avatar from '@/components/avatar';
import { CellDate } from './cell-date';
import { TableCard } from '@/components/table/table-card';
import { useImagePath } from '@/hooks/use-image-path';
import { useTranslations } from 'next-intl';
import { ContractStatus } from '../contract-status';

export const CardItem = ({ item = {} }) => {
  const path = useImagePath(item?.imagePath);

  const tg = useTranslations('general_obj');

  const t = useTranslations('contract_obj');

  return (
    <TableCard>
      <TableCard.Container>
        <TableCard.Body>
          <div className='flex gap-2'>
            <Avatar
              name={item?.employeeName}
              src={path}
              className='size-10'
            />
            <div className='flex-1 space-y-3'>
              <div className='grid grid-cols-2 gap-5'>
                <span>{tg('name')}</span>
                <span className='font-bold'>
                  {item?.employeeName}
                </span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>{tg('job')}</span>
                <span className='font-bold'>{item?.jobTitle}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>{t('contract_date')}</span>
                <span className='font-bold'>
                  <CellDate date={item?.creationDate} />
                </span>
              </div>
            </div>
          </div>
        </TableCard.Body>
        <TableCard.Footer className='grid-cols-2'>
          <ContractStatus state={item?.contractState} />
        </TableCard.Footer>
        <TableCard.Action>{/* <CellActions /> */}</TableCard.Action>
      </TableCard.Container>
    </TableCard>
  );
};
