'use client';
import { Conversation } from '@/components/conversation';

const MESSAGES = [
  {
    id: 1,
    message: 'اخذ الجرعة لمدة شهر مع المتابعة للحالة',
    isHost: false,
  },
  {
    id: 2,
    message: 'شكرا يادكتور الله يعافيك',
    isHost: true,
  },
];

export const Chat = () => {
  return (
    <Conversation
      guest={{ name: 'احمد محمد', title: 'طبيب' }}
      host={{ name: 'احمد محمد', title: 'طبيب' }}
    >
      <Conversation.Body>
        {MESSAGES.map((message) => (
          <Conversation.Message
            key={message.id}
            isHost={message.isHost}
          >
            {message.message}
          </Conversation.Message>
        ))}
      </Conversation.Body>

      <Conversation.Footer
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Conversation.AttachButton />
        <Conversation.InputField />
        <Conversation.SendButton />
      </Conversation.Footer>
    </Conversation>
  );
};
