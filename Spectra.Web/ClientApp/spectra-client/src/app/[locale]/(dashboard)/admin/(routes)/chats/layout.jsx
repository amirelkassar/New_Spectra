import { prefetchUserChatList } from '@/hooks/queries/user/chat';
import { ChatsLayout as LayoutComponent } from './_components/chats-layout';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ChatHub } from '@/components/chat-hub';

const ChatsLayout = async ({ children }) => {
  const queryClient = await prefetchUserChatList();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutComponent>{children}</LayoutComponent>
      <ChatHub />
    </HydrationBoundary>
  );
};

export default ChatsLayout;
