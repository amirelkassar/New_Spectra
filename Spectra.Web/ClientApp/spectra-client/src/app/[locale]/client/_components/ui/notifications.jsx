'use client';

import { Popover } from '@mantine/core';
import { Notification } from '@mantine/core';
import { Divider } from '@mantine/core';

import NotificationIcon from '@/assets/icons/notification';
import { getDate } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'تم تحديث بيانات الحساب',
    description: 'تم تحديث بيانات الحساب بنجاح',
    date: '2024-11-02T12:44:26.808Z',
    isNew: true,
  },
  {
    id: 2,
    title: 'تم تحديث بيانات الحساب',
    description: 'تم تحديث بيانات الحساب بنجاح',
    date: '2024-11-02T12:44:26.808Z',
    isNew: false,
  },
];

export const Notifications = () => {
  const locale = useLocale();
  return (
    <Popover
      position='bottom-end'
      clickOutsideEvents={['mouseup', 'touchend']}
      offset={10}
      classNames={{
        dropdown: 'rounded-xl border-grayLight shadow-md',
      }}
    >
      <Popover.Target>
        <button className='shrink-0 p-0 size-9 mdl:size-11 rounded-full bg-blueLight flex items-center justify-center'>
          <NotificationIcon className='size-4 mdl:size-5' />
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <div className='min-w-[calc(100vw-67px)] h-96 overflow-y-auto mdl:min-w-[650px] flex flex-col'>
          <div className='flex-1'>
            {NOTIFICATIONS.map((notification) => (
              <NotificationItem
                onClick={() => {
                  // console.log(notification.id);
                }}
                key={notification.id}
                locale={locale}
                {...notification}
              />
            ))}
          </div>

          <Link
            className='block text-end text-sm mdl:text-base font-bold text-greenMain hover:underline'
            href={ROUTES.CLIENT.NOTIFICATIONS}
          >
            عرض الكل
          </Link>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

const NotificationItem = ({
  title = '',
  description = '',
  date = '',
  locale = 'en',
  isNew = false,
  onClick = () => {},
}) => {
  const { timeFromNow } = getDate(date, locale);

  return (
    <>
      <Notification
        radius={3}
        onClick={onClick}
        classNames={{
          root: 'shadow-none cursor-pointer transition hover:bg-blueLighter',
          description: 'flex items-center gap-4',
        }}
        withCloseButton={false}
        color={isNew ? '#10B0C1' : '#939393'}
      >
        <div className='flex-1'>
          <h4 className='font-bold text-sm mdl:text-base'>
            {title}
          </h4>
          <p className='text-xs mdl:text-base text-grayDark'>
            {description}
          </p>
        </div>

        <time>{timeFromNow}</time>
      </Notification>

      <Divider
        my='sm'
        className='border-grayLight border-2 last:border-transparent'
      />
    </>
  );
};
