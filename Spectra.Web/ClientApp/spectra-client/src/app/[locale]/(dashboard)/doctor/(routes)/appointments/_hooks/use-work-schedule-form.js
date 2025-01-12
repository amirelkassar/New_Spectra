'use client';

import { useCallback, useMemo, useState } from 'react';
import { convertToISOWithUserTimezone } from '@/lib/time';

export const useWorkScheduleForm = () => {
  const [days, setDays] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const isAddDisabled = useMemo(() => {
    return (
      !days.length ||
      !Object.keys(from).length ||
      !Object.keys(to).length
    );
  }, [days, from, to]);

  const toggleDay = useCallback((day) => {
    setDays((prevDays) => {
      const isExisting = prevDays.includes(day);
      return isExisting
        ? prevDays.filter((d) => d !== day).sort()
        : [...prevDays, day].sort();
    });
  }, []);

  const reset = useCallback(() => {
    setDays([]);
    setFrom('');
    setTo('');
  }, []);

  const onAdd = useCallback(
    (setWorkSchedule) => {
      const fromIso = convertToISOWithUserTimezone(from);
      const toIso = convertToISOWithUserTimezone(to);

      const newEntries = days.reduce((acc, day) => {
        acc[day] = acc[day] || [];
        acc[day].push({ from: fromIso, to: toIso });
        return acc;
      }, {});

      setWorkSchedule((prev) => {
        const updatedSchedule = { ...prev };

        // تحديث الجدول الحالي بالأيام الجديدة
        Object.entries(newEntries).forEach(([day, entries]) => {
          updatedSchedule[day] = updatedSchedule[day] || [];

          entries.forEach(({ from, to }) => {
            // التحقق من وجود نفس from و to
            const isDuplicate = updatedSchedule[day].some(
              (entry) => entry.from === from && entry.to === to
            );

            if (!isDuplicate) {
              updatedSchedule[day].push({ from, to });
            }
          });
        });

        return updatedSchedule;
      });

      reset();
    },
    [days, from, to, reset]
  );

  const form = {
    from,
    to,
    days,
    toggleDay,
    onAdd,
    setFrom,
    setTo,
    isAddDisabled,
  };

  return {
    form,
  };
};
