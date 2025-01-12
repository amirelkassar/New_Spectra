import { useTranslations } from 'next-intl';

import { SummaryCard } from '@/dashboard/_components/appointments';
import AppointmentsAllIcon from '@/assets/icons/appointmentsAll';
import AppointmentsNewIcon from '@/assets/icons/appointmentsNew';
import ClockIcon from '@/assets/icons/clock';
import SessionIcon from '@/assets/icons/session';

export const AppointmentsSummary = ({
  values = {
    all: 0,
    new: 0,
    examination: 0,
    sessions: 0,
  },
}) => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex flex-wrap items-center gap-4'>
      <SummaryCard
        label={tg('all')}
        value={values?.all || 0}
        icon={<AppointmentsAllIcon className='size-5 mdl:size-6' />}
        className='flex-1 mdl:flex-none'
      />
      <SummaryCard
        label={tg('new')}
        value={values?.new || 0}
        icon={<AppointmentsNewIcon className='size-5 mdl:size-6' />}
        className='bg-[#0E9EAD] flex-1 mdl:flex-none'
      />
      <SummaryCard
        label={tg('examination')}
        value={values?.examination || 0}
        icon={<ClockIcon className='size-5 mdl:size-6' />}
        className='bg-[#0D8693] flex-1'
      />
      <SummaryCard
        label={tg('session')}
        value={values?.sessions || 0}
        icon={<Session />}
        className='bg-white text-black flex-1'
        style={{ boxShadow: '1px 2px 4px 0px #0000000D' }}
      />
    </div>
  );
};

const Session = () => (
  <div className='bg-greenMain/20 rounded-full size-8 mdl:size-9 flex items-center justify-center shrink-0'>
    <SessionIcon className='size-5 mdl:size-6' />
  </div>
);
