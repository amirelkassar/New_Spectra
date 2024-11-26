'use client';

import { useCallback } from 'react';

import { Input, Title } from '../../_components/ui';
import { useContractStore } from '../../_hooks';

export const WorkDays = () => {
  const workDays = useContractStore((s) => s.workDays);

  const setWorkDays = useContractStore(
    (s) => s.setWorkDays
  );

  const onChange = useCallback(
    (value, type) => {
      if (
        !/^\d*$/.test(value) ||
        (value && Number(value) === 0)
      )
        return;

      const limits = {
        hoursPerDay: 24,
        daysPerWeek: 7,
      };

      if (type in limits && Number(value) <= limits[type]) {
        setWorkDays({
          ...workDays,
          [type]: value,
        });
      }
    },
    [setWorkDays, workDays]
  );

  return (
    <div className='space-y-5'>
      <DurationInput
        title='Limit the number of hours worked per day'
        indicator='H'
        label='Daily'
        value={workDays.hoursPerDay}
        onChange={(value) => onChange(value, 'hoursPerDay')}
      />

      <DurationInput
        title='Limit the number of days per week'
        indicator='D'
        label='Weekly'
        value={workDays.daysPerWeek}
        onChange={(value) => onChange(value, 'daysPerWeek')}
      />
    </div>
  );
};

const DurationInput = ({
  title = '',
  indicator = '',
  label = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div className='flex flex-col items-stretch lg:items-center lg:flex-row gap-3'>
      <label htmlFor={label} className='flex-1'>
        <Title>{title}</Title>
      </label>

      <div className='flex items-center gap-3 flex-1'>
        <Input
          indicator={indicator}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={label}
          id={label}
          className='text-center'
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </div>
  );
};
