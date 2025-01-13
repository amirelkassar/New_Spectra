'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Divider } from '@mantine/core';

import { TimeInput } from '@/components/inputs/time-input-2';
import { WEEK_DAYS } from '@/data';
import Button from '@/components/button';

export const WorkScheduleForm = ({ form = {} }) => {
  const t = useTranslations('general_obj');

  const locale = useLocale();

  if (!form) throw new Error('form is required');
  return (
    <div className='space-y-10'>
      <div className='flex flex-wrap gap-4 items-center *:shrink-0'>
        {Object.entries(WEEK_DAYS).map(([key, value]) => (
          <Day
            aria-pressed={form.data.day === +key}
            onClick={() => form.set(key, 'day')}
            key={key}
          >
            {value[locale]}
          </Day>
        ))}
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-y-1 gap-x-4 max-w-screen-lg'>
        <TimeInput
          label={`${t('from')} / `}
          value={form.data.from}
          onChange={(value) => form.set(value, 'from')}
        />

        <Divider
          orientation='vertical'
          size='sm'
          className='border-grayLight'
        />

        <TimeInput
          label={`${t('to')} / `}
          value={form.data.to}
          onChange={(value) => form.set(value, 'to')}
        />

        <Button
          type='button'
          variant='secondary'
          className='lg:max-w-44 max-w-xs w-full mt-5 lg:mt-0 gap-1'
          disabled={form.disabled}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (form.action === 'add') {
              return form.onAdd();
            }

            return form.onEdit();
          }}
        >
          {form.action === 'add' ? (
            <>
              <span className='text-xl mdl:text-2xl'>+</span>{' '}
              {t('add')}
            </>
          ) : (
            t('edit')
          )}
        </Button>
      </div>
    </div>
  );
};

const Day = ({ children, ...props }) => (
  <div
    {...props}
    role='button'
    className='rounded-xl bg-blueLight py-2 px-2 font-bold text-xs mdl:text-base aria-pressed:bg-greenMain aria-pressed:text-white w-fit min-w-28 mdl:min-w-32 text-center'
  >
    {children}
  </div>
);
