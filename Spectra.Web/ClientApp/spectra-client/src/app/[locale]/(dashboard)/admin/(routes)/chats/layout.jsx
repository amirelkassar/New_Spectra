import { prefetchUserChatList } from '@/hooks/queries/user/chat';
import { ChatsLayout as LayoutComponent } from './_components/chats-layout';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const ChatsLayout = async ({ children }) => {
  const queryClient = await prefetchUserChatList();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutComponent>{children}</LayoutComponent>
    </HydrationBoundary>
  );
};

export default ChatsLayout;
