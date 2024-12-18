'use client';

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Popover } from '@mantine/core';
import { Divider } from '@mantine/core';
import { useDate } from '@/hooks/use-date';
import { useRouter } from '@/i18n/routing';
import { Notification } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

import Loader from '@/components/loader';
import NotificationIcon from '@/assets/icons/notification';
import { ServerError } from '@/components/server-error';
import {
  useMakeNotificationRead,
  useNotifications,
} from '@/hooks/queries/user/notifications';
import Spinner from '@/assets/icons/spinner';

export const Notifications = () => {
  const router = useRouter();

  const containerRef = useRef(null);

  const { ref, entry } = useIntersection({
    root: containerRef?.current,
    threshold: 1,
  });

  const [opened, setOpened] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isSuccess,
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

  const dropdownContent = useMemo(() => {
    return (
      <div
        ref={containerRef}
        className='min-w-[calc(100vw-26px)] h-[400px] overflow-y-auto mdl:min-w-[650px] flex flex-col p-4'
      >
        {isPending && <Loader />}
        {isError && (
          <ServerError
            onRetry={refetch}
            classNames={{ icon: 'size-60 mb-5', container: 'h-auto' }}
          />
        )}
        {isSuccess &&
          data?.pages?.map((page, pageIndex) => {
            if (!page.data?.totalCount)
              return (
                <div
                  key={pageIndex}
                  className='w-full h-full flex justify-center items-center text-grayDark'
                >
                  لا يوجد اشعارات
                </div>
              );

            return (
              <div key={pageIndex}>
                {page.data?.items?.map((notification, index) => {
                  const isLastItem =
                    pageIndex === data.pages.length - 1 &&
                    index === page.data.items.length - 1;

                  return (
                    <NotificationItem
                      key={notification.id}
                      ref={isLastItem ? ref : null}
                      onClick={() =>
                        onNotificationClick(notification)
                      }
                      {...notification}
                    />
                  );
                })}
              </div>
            );
          })}
        {isFetchingNextPage && (
          <div className='w-fit mx-auto'>
            <Spinner className='text-grayDark size-7 animate-spin' />
          </div>
        )}
      </div>
    );
  }, [
    data,
    onNotificationClick,
    ref,
    isFetchingNextPage,
    isPending,
    isSuccess,
    isError,
    refetch,
  ]);

  // Trigger fetchNextPage when last element is visible
  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, hasNextPage, fetchNextPage]);

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

const NotificationItem = forwardRef(
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
);

NotificationItem.displayName = 'NotificationItem';
