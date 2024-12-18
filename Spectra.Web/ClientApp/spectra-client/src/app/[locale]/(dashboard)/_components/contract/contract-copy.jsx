import ContractsWhiteIcon from '@/assets/icons/contractsWhite';
import DraftIcon from '@/assets/icons/draft';
import Button from '@/components/button';
import { cn, getDate } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import { VERSION_STATE } from '../../../../../data/contract';
import { useTranslations } from 'next-intl';

export const ContractCopy = ({
  id = '',
  state = VERSION_STATE.active,
  creationDate = '2024-11-21T12:05:25.849Z',
}) => {
  return (
    <div
      className={cn(
        'rounded-xl p-3 bg-grayLight flex items-center gap-5',
        state === VERSION_STATE.active && 'bg-blueLighter'
      )}
    >
      <Icon state={state} />

      <div className='flex-1 flex gap-5 lg:gap-10'>
        <VersionAndState state={state} />
        <ShowDate date={creationDate} />
      </div>

      <ViewContract id={id} />
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

const VersionAndState = ({ state }) => {
  const t = useTranslations('contract_obj');
  return (
    <div className='flex flex-col gap-1'>
      <span className='text-sm lg:text-xl font-bold capitalize'>
        {state === VERSION_STATE.active
          ? t('current_copy')
          : t('old_copy')}
      </span>
      <span className='text-xs lg:text-base capitalize'>
        {state === VERSION_STATE.draft ? t('draft') : t('active')}
      </span>
    </div>
  );
};

const ShowDate = ({ date }) => {
  const { fullYear, time } = getDate(date);
  return (
    <div className='flex flex-col gap-1 text-sm lg:text-xl'>
      <span>{fullYear}</span>
      <span>{time}</span>
    </div>
  );
};

const ViewContract = ({ id }) => {
  const tg = useTranslations('general_obj');

  return (
    <Link
      className='lg:max-w-40 lg:w-full block'
      href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSID(id)}
    >
      <Button className='w-full' variant='secondary'>
        {tg('view')}
      </Button>
    </Link>
  );
};
