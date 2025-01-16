import { TableCard } from '@/components/table/table-card';
import { CellActions } from './cell-actions';
import { CellDate } from './cell-date';
import { CellStatus } from './cell-status';

export const CardItem = ({ item = {} }) => {
  const t = useTranslations('general_obj');

  return (
    <TableCard>
      <TableCard.Container
        className={
          item?.status === 'available'
            ? 'bg-blueLinerGradient shadow-md'
            : ''
        }
      >
        <TableCard.Body>
          <div className='grid grid-cols-2 gap-5'>
            <span>{t('name')}</span>
            <span className='font-bold'>{item?.label}</span>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <span>{t('child_name')}</span>
            <span className='font-bold'>{item?.doctor}</span>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <span>{t('session_type')}</span>
            <span className='font-bold'>{item?.child}</span>
          </div>
        </TableCard.Body>
        <TableCard.Footer>
          <CellDate date={item?.date} />
          <CellDate date={item?.date} />
          <CellStatus status={item?.status} />
        </TableCard.Footer>
        <TableCard.Action>
          <CellActions data={item} />
        </TableCard.Action>
      </TableCard.Container>
    </TableCard>
  );
};
