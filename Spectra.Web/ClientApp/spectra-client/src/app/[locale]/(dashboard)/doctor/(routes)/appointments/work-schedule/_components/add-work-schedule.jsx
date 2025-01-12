'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Divider } from '@mantine/core';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { WEEK_DAYS } from '@/data';
import { TimeInput } from '@/components/inputs/time-input-2';
import { useWorkScheduleForm } from '../../_hooks/use-work-schedule-form';
import { useAddWorkSchedule } from '../../_hooks/use-add-work-schedule';
import Button from '@/components/button';
import Card from '@/components/card';
import CalenderIcon from '@/assets/icons/calender';
import { formatTimeForUserTimezone } from '@/lib/time';

export const AddWorkSchedule = () => {
  const t = useTranslations('appointments_obj');

  const tg = useTranslations('general_obj');

  const { onSave, isDisabled, workSchedule, setWorkSchedule } =
    useAddWorkSchedule();

  return (
    <div className='h-full flex flex-col gap-5'>
      <Card className='space-y-10'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>{t('add_appointment')}</H1>
        </div>

        <WorkScheduleForm setWorkSchedule={setWorkSchedule} />
        <Button
          disabled={isDisabled}
          onClick={onSave}
          type='button'
          variant='secondary'
          className='mdl:max-w-xs w-full !mt-16'
        >
          {tg('save')}
        </Button>
      </Card>

      <Card className='flex-1'>
        <div className='h-full flex flex-wrap gap-4 *:shrink-0'>
          <WorkScheduleList data={workSchedule} />
        </div>
      </Card>
    </div>
  );
};

const WorkScheduleList = ({ data = {} }) => {
  const locale = useLocale();

  const t = useTranslations('appointments_obj');

  if (!Object.keys(data).length)
    return (
      <p className='text-grayDark w-full h-full flex items-center justify-center'>
        {t('no_appointments')}
      </p>
    );

  return Object.entries(data).map(([key, value]) => (
    <DayCard
      key={key}
      dayName={WEEK_DAYS[key][locale]}
      times={value}
    />
  ));
};

const DayCard = ({ dayName = '', times = [] }) => {
  const t = useTranslations('general_obj');

  return (
    <div className='rounded-2xl border-[5px] border-blueLight py-4 px-6 flex items-center gap-10 h-24'>
      <div className='flex items-center gap-5 font-bold text-xs mdl:text-base'>
        <CalenderIcon className='size-5 mdl:size-6 shrink-0' />
        {dayName}
      </div>

      <div className='flex-1'>
        {times?.map((time) => (
          <div
            key={`${time.from}-${time.to}`}
            className='flex items-center gap-7 text-xs mdl:text-base'
          >
            <span>
              <span className='text-grayDark'>
                {`${t('from')} / `}
              </span>
              {formatTimeForUserTimezone(time.from)}
            </span>
            <span>
              <span className='text-grayDark'>{`${t('to')} / `}</span>
              {formatTimeForUserTimezone(time.to)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkScheduleForm = ({ setWorkSchedule = () => {} }) => {
  const t = useTranslations('general_obj');
  const locale = useLocale();

  const { form } = useWorkScheduleForm();

  return (
    <div className='space-y-10'>
      <div className='flex flex-wrap gap-4 items-center *:shrink-0'>
        {Object.entries(WEEK_DAYS).map(([key, value]) => (
          <Day
            aria-pressed={form.days.includes(key)}
            onClick={() => form.toggleDay(key)}
            key={key}
          >
            {value[locale]}
          </Day>
        ))}
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-y-1 gap-x-4 max-w-screen-lg'>
        <TimeInput
          label={`${t('from')} / `}
          value={form.from}
          onChange={form.setFrom}
        />

        <Divider
          orientation='vertical'
          size='sm'
          className='border-grayLight'
        />

        <TimeInput
          label={`${t('to')} / `}
          value={form.to}
          onChange={form.setTo}
        />

        <Button
          type='button'
          variant='secondary'
          className='max-w-44 w-full mt-5 lg:mt-0 gap-1'
          disabled={form.isAddDisabled}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.onAdd(setWorkSchedule);
          }}
        >
          <span className='text-xl mdl:text-2xl'>+</span> {t('add')}
        </Button>
      </div>
    </div>
  );
};

const Day = ({ children, ...props }) => (
  <div
    {...props}
    role='button'
    className='rounded-xl bg-blueLight py-2 px-4 font-bold text-xs mdl:text-base aria-pressed:bg-greenMain aria-pressed:text-white w-fit'
  >
    {children}
  </div>
);
