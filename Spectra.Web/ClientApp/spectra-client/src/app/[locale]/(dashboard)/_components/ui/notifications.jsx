'use client';

import { Popover } from '@mantine/core';
import { Divider } from '@mantine/core';
import { Link } from '@/i18n/routing';
import { Notification } from '@mantine/core';

import ROUTES from '@/routes';
import NotificationIcon from '@/assets/icons/notification';
import { useNotifications } from '@/hooks/queries/user/notifications';
import { QueryWrapper } from '@/components/query-wrapper';
import { useDate } from '@/hooks/use-date';

export const Notifications = () => {
  const query = useNotifications();

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
            <QueryWrapper query={query}>
              {({ data }) =>
                data.map((notification) => (
                  <NotificationItem
                    onClick={() => {
                      // console.log(notification.id);
                    }}
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
      </Popover.Dropdown>
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
        onClick={onClick}
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
