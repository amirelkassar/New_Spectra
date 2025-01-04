'use client';

import { useRouter } from '@/i18n/routing';

import ContractsWhiteIcon from '@/assets/icons/contractsWhite';
import DraftIcon from '@/assets/icons/draft';
import { cn } from '@/lib/utils';
import { VERSION_STATE } from '@/data';
import { useTranslations } from 'next-intl';
import { useDate } from '@/hooks/use-date';
import ContractReject from '@/assets/icons/contract-reject';
import { CellAcceptedBy } from './contracts-table';

export const ContractCopy = ({
  id = '',
  order = '',
  state = VERSION_STATE.active,
  creationDate = '',
  draftingDate = '',
  rejectingDate = '',
  viewHref = '#',
  acceptedByAdmin = false,
  acceptedByEmployee = false,
  acceptedByHead = false,
  changedByAdminDate = '',
  changedByEmployeeDate = '',
  changedByHeadDate = '',
}) => {
  const lastModified = getLatestDate({
    changedByAdminDate,
    changedByEmployeeDate,
    changedByHeadDate,
  });

  return (
    <div
      data-id={id}
      className={cn(
        'rounded-xl p-3 bg-grayLight flex gap-5',
        state === VERSION_STATE.active && 'bg-blueLighter',
        state === VERSION_STATE.reject && 'bg-red/10'
      )}
    >
      <Icon state={state} href={viewHref} />

      <VersionAndState
        href={viewHref}
        state={state}
        order={order}
        draftDate={draftingDate}
        rejectDate={rejectingDate}
        acceptedByAdmin={acceptedByAdmin}
        acceptedByEmployee={acceptedByEmployee}
        acceptedByHead={acceptedByHead}
        lastModified={lastModified}
      />

      <CreationDate date={creationDate} />
    </div>
  );
};

const Icon = ({ state, href }) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        'p-2 mdl:p-3 bg-white rounded-xl w-fit h-fit my-auto',
        state === VERSION_STATE.reject && 'bg-red/10'
      )}
      role='button'
      onClick={() => router.push(href)}
    >
      {state === VERSION_STATE.active && (
        <ContractsWhiteIcon className='size-4 mdl:size-10 text-greenMain' />
      )}
      {state === VERSION_STATE.draft && (
        <DraftIcon className='size-4 mdl:size-10' />
      )}
      {state === VERSION_STATE.reject && (
        <ContractReject className='size-4 mdl:size-10 text-red' />
      )}
    </div>
  );
};

const VersionAndState = ({
  state,
  order,
  draftDate = '',
  rejectDate = '',
  href = '#',
  acceptedByAdmin = false,
  acceptedByEmployee = false,
  acceptedByHead = false,
  lastModified = {},
}) => {
  const router = useRouter();

  const t = useTranslations('contract_obj');

  const tg = useTranslations('general_obj');

  const { fullYear: draftingDate, time: draftingTime } =
    useDate(draftDate);
  const { fullYear: rejectingDate, time: rejectingTime } =
    useDate(rejectDate);

  const { fullYear: lastModifiedFull, time: lastModifiedTime } =
    useDate(lastModified?.latestDate);

  return (
    <div className='flex flex-col gap-2 flex-1'>
      <div
        role='button'
        onClick={() => router.push(href)}
        className='flex items-center gap-2 w-fit'
      >
        <span className='text-sm mdl:text-xl font-bold capitalize'>
          {t('copy_num')} {order}
        </span>
        <VersionStateBadge state={state} />
      </div>

      {!!draftingDate && (
        <span className='text-xs mdl:text-base -mt-1'>
          {tg('last_modified')} {draftingDate} - {draftingTime}
        </span>
      )}
      {!!rejectingDate && (
        <span className='text-xs mdl:text-base -mt-1'>
          {tg('last_modified')} {rejectingDate} - {rejectingTime}
        </span>
      )}

      {state === VERSION_STATE.active && (
        <div className='flex items-center gap-4'>
          <span className='text-xs mdl:text-base capitalize'>
            {tg('accepted_by')}:
          </span>
          <CellAcceptedBy
            acceptedByAdmin={acceptedByAdmin}
            acceptedByEmployee={acceptedByEmployee}
            acceptedByHead={acceptedByHead}
            className='flex-wrap'
          />
        </div>
      )}

      {!!lastModified?.latestDate && (
        <LastModified
          date={lastModifiedFull}
          time={lastModifiedTime}
          by={tg(lastModified?.changedBy)}
        />
      )}
    </div>
  );
};

const CreationDate = ({ date }) => {
  const { fullYear, time } = useDate(date);
  return (
    <div className='flex flex-col items-center gap-1 text-xs mdl:text-base'>
      <span>{fullYear}</span>
      <span>{time}</span>
    </div>
  );
};

// const ViewContract = ({ viewHref = '#' }) => {
//   const tg = useTranslations('general_obj');

//   return (
//     <Link className='lg:max-w-40 lg:w-full block' href={viewHref}>
//       <Button className='w-full' variant='secondary'>
//         {tg('view')}
//       </Button>
//     </Link>
//   );
// };

const VersionStateBadge = ({ state }) => {
  const t = useTranslations('contract_obj');

  return (
    <span
      className={cn(
        'rounded-xl py-1 px-2 font-medium text-xs mdl:text-base capitalize',
        state === VERSION_STATE.active && 'bg-greenMain/20',
        state === VERSION_STATE.reject && 'bg-red/10',
        state === VERSION_STATE.draft && 'bg-[#D9D9D9]'
      )}
    >
      {state === VERSION_STATE.active
        ? t('active')
        : state === VERSION_STATE.draft
        ? t('draft')
        : t('reject')}
    </span>
  );
};

const LastModified = ({ date, time, by }) => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex items-center gap-2'>
      <span>{tg('last_modified')}</span>
      <span>
        {date} - {time}
      </span>
      <span>
        {tg('by')} {by}
      </span>
    </div>
  );
};

function getLatestDate({
  changedByAdminDate = '',
  changedByEmployeeDate = '',
  changedByHeadDate = '',
}) {
  if (
    !changedByAdminDate &&
    !changedByEmployeeDate &&
    !changedByHeadDate
  )
    return { latestDate: null, changedBy: null };

  const dates = [
    { date: new Date(changedByAdminDate), source: 'admin' },
    { date: new Date(changedByEmployeeDate), source: 'doctor' },
    { date: new Date(changedByHeadDate), source: 'department_head' },
  ];

  const validDates = dates.filter((item) => !isNaN(item.date));

  if (validDates.length === 0) {
    return { latestDate: null, changedBy: null };
  }

  const latest = validDates.reduce((a, b) =>
    a.date > b.date ? a : b
  );

  return {
    latestDate: latest.date.toISOString(),
    changedBy: latest.source,
  };
}
