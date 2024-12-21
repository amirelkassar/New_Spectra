import ContractsWhiteIcon from '@/assets/icons/contractsWhite';
import DraftIcon from '@/assets/icons/draft';
import Button from '@/components/button';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { VERSION_STATE } from '@/data';
import { useTranslations } from 'next-intl';
import { useDate } from '@/hooks/use-date';

export const ContractCopy = ({
  id = '',
  order = '',
  state = VERSION_STATE.active,
  creationDate = '',
  draftingDate = '',
  viewHref = '#',
}) => {
  return (
    <div
      data-id={id}
      className={cn(
        'rounded-xl p-3 bg-grayLight flex items-center gap-5',
        state === VERSION_STATE.active && 'bg-blueLighter'
      )}
    >
      <Icon state={state} />

      <div className='flex-1 flex gap-5 lg:gap-10'>
        <VersionAndState
          state={state}
          order={order}
          draftDate={draftingDate}
        />
        <CreationDate date={creationDate} />
      </div>

      <ViewContract viewHref={viewHref} />
    </div>
  );
};

const Icon = ({ state }) => {
  return (
    <div className={cn('p-2 lg:p-3 bg-white rounded-xl w-fit')}>
      {state === VERSION_STATE.active && (
        <ContractsWhiteIcon className='size-4 lg:size-10 text-greenMain' />
      )}
      {state === VERSION_STATE.draft && (
        <DraftIcon className='size-4 lg:size-10' />
      )}
    </div>
  );
};

const VersionAndState = ({ state, order, draftDate = '' }) => {
  const t = useTranslations('contract_obj');

  const { fullYear } = useDate(draftDate);

  return (
    <div className='flex flex-col gap-1'>
      <span className='text-sm lg:text-xl font-bold capitalize'>
        {t('copy_num')} {order}
      </span>

      <span className='text-xs lg:text-base capitalize'>
        {state === VERSION_STATE.active
          ? t('active')
          : state === VERSION_STATE.draft && !!fullYear
          ? t('draft_date')
          : t('draft')}
      </span>
      {!!fullYear && (
        <span className='text-xs lg:text-base -mt-1'>{fullYear}</span>
      )}
    </div>
  );
};

const CreationDate = ({ date }) => {
  const { fullYear, time } = useDate(date);
  return (
    <div className='flex flex-col gap-1 text-sm lg:text-xl'>
      <span>{fullYear}</span>
      <span>{time}</span>
    </div>
  );
};

const ViewContract = ({ viewHref = '#' }) => {
  const tg = useTranslations('general_obj');

  return (
    <Link className='lg:max-w-40 lg:w-full block' href={viewHref}>
      <Button className='w-full' variant='secondary'>
        {tg('view')}
      </Button>
    </Link>
  );
};
