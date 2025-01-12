'use client';

import { useLocale } from 'next-intl';
import { useCallback, useMemo, useState } from 'react';

import { convertToISOWithUserTimezone } from '@/lib/time';
import { useAddScheduleTime } from '@/hooks/queries/employee/schedule-time';
import { Toast } from '@/components/toast';

export const useAddWorkSchedule = () => {
  const locale = useLocale();

  const [data, setData] = useState({
    day: '',
    from: '',
    to: '',
  });

  const { mutateAsync: addTime, isPending } = useAddScheduleTime();

  const disabled = useMemo(() => {
    return !data.day || !data.from || !data.to || isPending;
  }, [data, isPending]);

  const set = useCallback(
    (value, key) => {
      if (data[key] === value) return;

      setData((prev) => ({ ...prev, [key]: value }));
    },
    [data]
  );

  const reset = useCallback(() => {
    setData({
      day: '',
      from: '',
      to: '',
    });
  }, []);

  const onAdd = useCallback(() => {
    const fromIso = convertToISOWithUserTimezone(data.from);
    const toIso = convertToISOWithUserTimezone(data.to);

    const dataToSend = {
      day: data.day,
      from: fromIso,
      to: toIso,
    };

    Toast.Promise(addTime(dataToSend), {
      success:
        locale === 'ar'
          ? 'تم اضافة الموعد بنجاح'
          : 'Added successfully',
    });

    reset();
  }, [data, reset, addTime, locale]);

  const form = {
    data,
    set,
    onAdd,
    disabled,
  };

  return {
    form,
    locale,
  };
};
