'use client';

import { useLocale } from 'next-intl';
import { useCallback, useMemo } from 'react';

import { objectToTimeFormat } from '@/lib/time';
import {
  useAddScheduleTime,
  useUpdateScheduleTime,
} from '@/hooks/queries/employee/schedule-time';
import { Toast } from '@/components/toast';
import { useWorkScheduleStore } from './use-work-schedule-store';

export const useWorkScheduleControl = () => {
  const locale = useLocale();

  const { data, set, reset, action } = useWorkScheduleStore();

  const { mutateAsync: addTime, isPending } = useAddScheduleTime();

  const { mutateAsync: updateTime, isPending: isUpdatePending } =
    useUpdateScheduleTime();

  const disabled = useMemo(() => {
    return (
      (!data.day && data.day !== 0) ||
      !data.from ||
      !data.to ||
      isPending ||
      isUpdatePending
    );
  }, [data, isPending, isUpdatePending]);

  const onAdd = useCallback(() => {
    const fromIso = objectToTimeFormat(data.from);
    const toIso = objectToTimeFormat(data.to);

    const dataToSend = {
      day: data.day,
      from: fromIso,
      to: toIso,
    };

    Toast.Promise(addTime(dataToSend), {
      success:
        locale === 'ar'
          ? 'تم اضافة الموعد بنجاح'
          : 'Schedule added successfully',
      onSuccess: () => {
        reset();
      },
    });
  }, [data, reset, addTime, locale]);

  const onEdit = useCallback(() => {
    const fromIso = objectToTimeFormat(data.from);
    const toIso = objectToTimeFormat(data.to);

    const dataToSend = {
      id: data.id,
      day: data.day,
      from: fromIso,
      to: toIso,
    };

    Toast.Promise(updateTime(dataToSend), {
      success:
        locale === 'ar'
          ? 'تم تعديل الموعد بنجاح'
          : 'Schedule updated successfully',

      onSuccess: () => {
        reset();
      },
    });
  }, [data, reset, updateTime, locale]);

  const form = {
    data,
    set,
    onAdd,
    onEdit,
    disabled,
    action,
  };

  return {
    form,
    locale,
  };
};
