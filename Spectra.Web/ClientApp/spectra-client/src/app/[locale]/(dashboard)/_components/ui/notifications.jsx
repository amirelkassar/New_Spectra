'use client';

import {
  forwardRef,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Popover } from '@mantine/core';
import { Divider } from '@mantine/core';
import { useRouter } from '@/i18n/routing';
import { Notification } from '@mantine/core';
import { Virtuoso } from 'react-virtuoso';
import { useTranslations } from 'next-intl';

import { useDate } from '@/hooks/use-date';
import { ServerError } from '@/components/server-error';
import {
  useMakeNotificationRead,
  useNotifications,
} from '@/hooks/queries/user/notifications';
import Loader from '@/components/loader';
import Spinner from '@/assets/icons/spinner';
import NotificationIcon from '@/assets/icons/notification';

export const Notifications = () => {
  const router = useRouter();

  const tg = useTranslations('general_obj');

  const [opened, setOpened] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    refetch,
  } = useNotifications();

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

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const Content = useMemo(() => {
    if (isPending) return <Loader />;

    if (isError)
      return (
        <ServerError
          onRetry={refetch}
          classNames={{ icon: 'size-60 mb-5', container: 'h-auto' }}
        />
      );

    const totalCount = data?.pages[0]?.data?.totalCount;

    if (!totalCount)
      return (
        <div
          key={pageIndex}
          className='w-full h-full flex justify-center items-center text-grayDark'
        >
          {tg('no_notifications')}
        </div>
      );

    const mergedNotifications =
      data?.pages.flatMap((page) => page?.data?.items) || [];

    return (
      <Virtuoso
        data={mergedNotifications}
        endReached={loadMore}
        components={{
          Footer: () => <Loading isFetching={isFetchingNextPage} />,
        }}
        itemContent={(index, notification) => {
          return (
            <NotificationItem
              key={notification.id || index}
              {...notification}
              onClick={() => onNotificationClick(notification)}
            />
          );
        }}
      />
    );
  }, [
    data,
    onNotificationClick,
    isPending,
    isError,
    refetch,
    loadMore,
    isFetchingNextPage,
    tg,
  ]);

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

      <Popover.Dropdown>
        <div className='min-w-[calc(100vw-26px)] h-[400px] overflow-y-auto mdl:min-w-[650px] flex flex-col p-4 *:shrink-0'>
          {Content}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

const NotificationItem = memo(
  forwardRef(
    (
      {
        title = '',
        content = '',
        created = '',
        status = 2,
        onClick = () => {},
      },
      ref
    ) => {
      const { timeFromNow } = useDate(created);

      const isNew = status === 2;

      return (
        <>
          <Notification
            ref={ref}
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
              <h4 className='font-bold text-sm mdl:text-base'>
                {title}
              </h4>
              <p className='text-xs mdl:text-base text-grayDark'>
                {content}
              </p>
            </div>

            <time>{timeFromNow}</time>
          </Notification>

          <Divider
            my='sm'
            className='border-grayLight border-2 last:border-none'
          />
        </>
      );
    }
  )
);

NotificationItem.displayName = 'NotificationItem';

const Loading = memo(({ isFetching }) => {
  if (!isFetching) return <></>;
  return (
    <div className='w-fit mx-auto'>
      <Spinner className='text-grayDark size-7 animate-spin' />
    </div>
  );
});

Loading.displayName = 'Loading';
