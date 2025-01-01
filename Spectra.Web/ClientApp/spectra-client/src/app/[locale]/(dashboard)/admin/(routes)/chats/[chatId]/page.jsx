import { ChatCard } from '../_components/chat-card';

const ChatPage = ({ params }) => {
  const chatId = params?.chatId;

  return <ChatCard id={chatId} />;
};

export default ChatPage;
