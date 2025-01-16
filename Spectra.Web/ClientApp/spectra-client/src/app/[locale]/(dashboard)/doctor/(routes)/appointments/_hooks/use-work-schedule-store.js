'use client';

import { useContext } from 'react';
import { WorkScheduleContext } from '../_components/work-schedule-context';
import { timeFormatToObject } from '@/lib/time';

export const useWorkScheduleStore = () => {
  const context = useContext(WorkScheduleContext);

  if (!context) {
    throw new Error(
      'useWorkScheduleStore must be used within a WorkScheduleProvider'
    );
  }

  const { workSchedule, setWorkSchedule } = context;

  const reset = () =>
    setWorkSchedule({
      action: 'add',
      id: '',
      day: '',
      from: '',
      to: '',
    });

  const setEditAction = ({ id, day, from, to }) => {
    const formattedFrom = timeFormatToObject(from);
    const formattedTo = timeFormatToObject(to);

    setWorkSchedule({
      action: 'edit',
      id,
      day,
      from: formattedFrom,
      to: formattedTo,
    });
  };

  const set = (value, key) => {
    if (key === 'day') {
      return setWorkSchedule({
        action: 'add',
        id: '',
        day: +value,
        from: '',
        to: '',
      });
    }
    setWorkSchedule((prev) => ({ ...prev, [key]: value }));
  };

  const { action, id, day, from, to } = workSchedule;

  return {
    data: { id, day, from, to },
    action,
    reset,
    setEditAction,
    set,
  };
};
