import ContractsWhiteIcon from '@/assets/icons/contractsWhite';
import DraftIcon from '@/assets/icons/draft';
import Button from '@/components/button';
import { cn, getDate } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';

const STATES = {
  draft: 1,
  active: 2,
};

const VERSIONS = {
  current: 1,
  previous: 2,
};

export const ContractCopy = ({
  id = '',
  state = STATES.draft,
  version = VERSIONS.current,
  date = '2024-11-21T12:05:25.849Z',
}) => {
  return (
    <div
      className={cn(
        'rounded-xl p-3 bg-grayLight flex items-center gap-5',
        state === STATES.active && 'bg-blueLighter'
      )}
    >
      <Icon state={state} />

      <div className='flex-1 flex gap-5 lg:gap-10'>
        <VersionAndState version={version} state={state} />
        <ShowDate date={date} />
      </div>

      <ViewContract id={id} />
    </div>
  );
};

const Icon = ({ state }) => {
  return (
    <div className={cn('p-2 lg:p-3 bg-white rounded-xl w-fit')}>
      {state === STATES.active && (
        <ContractsWhiteIcon className='size-4 lg:size-10 text-greenMain' />
      )}
      {state === STATES.draft && (
        <DraftIcon className='size-4 lg:size-10' />
      )}
    </div>
  );
};

const VersionAndState = ({ version, state }) => {
  return (
    <div className='flex flex-col gap-1'>
      <span className='text-sm lg:text-xl font-bold'>
        {version === VERSIONS.current
          ? 'النسخة الحالية'
          : 'نسخة سابقة'}
      </span>
      <span className='text-xs lg:text-base'>
        {state === STATES.draft ? 'مسودة' : 'مفعلة'}
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
  return (
    <Link
      className='lg:max-w-40 lg:w-full block'
      href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSID(id)}
    >
      <Button className='w-full' variant='secondary'>
        عرض
      </Button>
    </Link>
  );
};
