'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useDeleteScheduleTime } from '@/hooks/queries/employee/schedule-time';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { useWorkScheduleStore } from './use-work-schedule-store';
import ROUTES from '@/routes';

export const useWorkScheduleActions = () => {
  const locale = useLocale();

  const router = useRouter();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteSchedule } = useDeleteScheduleTime();

  const { setEditAction } = useWorkScheduleStore();

  const onDelete = useCallback(
    (id) => {
      open({
        onConfirm: async () => {
          try {
            await Toast.Promise(deleteSchedule(id), {
              success:
                locale === 'ar'
                  ? 'تم حذف الموعد بنجاح'
                  : 'Schedule deleted successfully',
            });
          } catch {}
        },
      });
    },
    [deleteSchedule, locale, open]
  );

  const onEdit = useCallback(
    (time) => {
      setEditAction({ ...time });
      router.push(ROUTES.DOCTOR.APPOINTMENTS.WORK_SCHEDULE.CONTROL);
    },
    [router, setEditAction]
  );

  return {
    onDelete,
    onEdit,
    locale,
  };
};
