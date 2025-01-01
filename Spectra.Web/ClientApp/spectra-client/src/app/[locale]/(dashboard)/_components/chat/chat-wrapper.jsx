'use client';

import { memo, useCallback } from 'react';

import { ServerError } from '@/components/server-error';
import Loader from '@/components/loader';

export const ChatWrapper = memo(({ query, children }) => {
  if (!query) throw new Error('query is required');

  const {
    data,
    isPending,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = query;

  const onRetry = useCallback(() => query?.refetch(), [query]);

  if (isPending) return <Loading />;

  if (isError) return <Error onRetry={onRetry} />;

  const generalData = data?.pages[0] || {};

  const { id, reference, chatImage, roomName, isGroup } = generalData;

  const totalCount = data.pages[0].messages.totalCount;

  const mergedMessages =
    data?.pages?.flatMap((page) => page.messages.items).reverse() ||
    [];

  const totalMessages =
    data?.pages?.reduce(
      (total, page) => total + page.messages.items.length,
      0
    ) || 0;

  return children({
    chatId: id,
    reference,
    chatImage,
    roomName,
    isGroup,
    messages: mergedMessages,
    totalMessages,
    totalCount,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  });
});

const Container = ({ children }) => (
  <div className='flex justify-center items-center h-full'>
    {children}
  </div>
);

const Error = memo(({ onRetry = () => {} }) => (
  <Container>
    <ServerError
      onRetry={onRetry}
      classNames={{
        container: 'flex-none h-auto max-w-full',
        text: 'text-xs mdl:text-base text-grayDark text-wrap px-5 max-w-full',
        icon: 'mb-0',
        button: 'max-w-full text-xs mdl:text-base w-fit',
      }}
    />
  </Container>
));

const Loading = memo(() => (
  <Container>
    <Loader />
  </Container>
));

ChatWrapper.displayName = 'ChatWrapper';
Error.displayName = 'Error';
Loading.displayName = 'Loading';
