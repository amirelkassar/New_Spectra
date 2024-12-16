'use client';

import { useCallback, useMemo, useState } from 'react';
import { Popover } from '@mantine/core';
import { Divider } from '@mantine/core';
import { Link, useRouter } from '@/i18n/routing';
import { Notification } from '@mantine/core';

import NotificationIcon from '@/assets/icons/notification';
import {
  useMakeNotificationRead,
  useNotifications,
} from '@/hooks/queries/user/notifications';
import { QueryWrapper } from '@/components/query-wrapper';
import { useDate } from '@/hooks/use-date';
import ROUTES from '@/routes';

export const Notifications = () => {
  const router = useRouter();

  const [opened, setOpened] = useState(false);

  const query = useNotifications();

  const { mutate: makeNotificationRead } = useMakeNotificationRead();

  const onNotificationClick = useCallback(
    (notification) => {
      makeNotificationRead(notification?.id);
      if (notification?.objectUrl) {
        router.push(notification.objectUrl);
        setOpened(false);
      }
    },
    [makeNotificationRead, router]
  );

  const dropdownContent = useMemo(() => {
    return (
      <div className='min-w-[calc(100vw-26px)] h-[400px] overflow-y-auto mdl:min-w-[650px] flex flex-col p-4'>
        <div className='flex-1'>
          <QueryWrapper query={query}>
            {({ data }) =>
              data.map((notification) => (
                <NotificationItem
                  onClick={() => onNotificationClick(notification)}
                  key={notification.id}
                  {...notification}
                />
              ))
            }
          </QueryWrapper>
        </div>

        <Link
          className='block text-end text-sm mdl:text-base font-bold text-greenMain hover:underline'
          href={ROUTES.CLIENT.NOTIFICATIONS}
        >
          عرض الكل
        </Link>
      </div>
    );
  }, [query, onNotificationClick]);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position='bottom-end'
      clickOutsideEvents={['mouseup', 'touchend']}
      offset={10}
      classNames={{
        dropdown: 'rounded-xl border-grayLight shadow-md p-0',
      }}
    >
      <Popover.Target>
        <button
          onClick={() => setOpened((o) => !o)}
          className='shrink-0 p-0 size-9 mdl:size-11 rounded-full bg-blueLight flex items-center justify-center'
        >
          <NotificationIcon className='size-4 mdl:size-5' />
        </button>
      </Popover.Target>

      <Popover.Dropdown>{dropdownContent}</Popover.Dropdown>
    </Popover>
  );
};

const NotificationItem = ({
  title = '',
  content = '',
  created = '',
  status = 2,
  onClick = () => {},
}) => {
  const { timeFromNow } = useDate(created);

  const isNew = status === 2;

  return (
    <>
      <Notification
        radius={3}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick(e);
        }}
        classNames={{
          root: 'shadow-none cursor-pointer transition hover:bg-blueLighter',
          description: 'flex items-center gap-4',
        }}
        withCloseButton={false}
        color={isNew ? '#10B0C1' : '#939393'}
      >
        <div className='flex-1'>
          <h4 className='font-bold text-sm mdl:text-base'>{title}</h4>
          <p className='text-xs mdl:text-base text-grayDark'>
            {content}
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
