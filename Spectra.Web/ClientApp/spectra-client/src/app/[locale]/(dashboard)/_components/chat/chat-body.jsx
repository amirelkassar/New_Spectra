'use client';

import { useTranslations } from 'next-intl';
import { forwardRef, useCallback, useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { NoMessages } from './no-messages';
import { cn } from '@/lib/utils';

export const ChatBody = forwardRef(
  (
    {
      messages = [],
      totalCount = 0,
      totalMessages = 0,
      hasNextPage = false,
      isFetchingNextPage = false,
      fetchNextPage = () => {},
      children,
    },
    ref
  ) => {
    const tg = useTranslations('general_obj');

    // HANDLE FETCH NEXT PAGE
    const onFetchNextPage = useCallback(() => {
      if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    const statusMsg = useMemo(() => {
      return (
        <div
          className={cn(
            'w-fit mx-auto capitalize text-xs pt-2',
            !hasNextPage && 'text-grayDark'
          )}
        >
          {isFetchingNextPage && tg('loading')}
          {!hasNextPage && tg('no_more_messages')}
        </div>
      );
    }, [hasNextPage, isFetchingNextPage, tg]);

    if (!children)
      throw new Error('ChatBody must have a children prop');

    if (!totalCount) return <NoMessages />;
    return (
      <Virtuoso
        ref={ref}
        data={messages}
        firstItemIndex={totalCount - totalMessages}
        initialTopMostItemIndex={messages.length - 1}
        startReached={onFetchNextPage}
        followOutput={false}
        components={{ Header: () => statusMsg }}
        itemContent={(i, m) => {
          return children({
            m,
            i,
          });
        }}
      />
    );
  }
);

ChatBody.displayName = 'ChatBody';
