'use client';

import { Conversation } from '@/components/conversation';
import { useSearchParams } from 'next/navigation';

export const DynamicContent = () => {
  const view = useSearchParams().get('view') || '';

  const Content = () => {
    switch (view) {
      case 'recommendations':
        return <Recomendations />;
      case 'tests-scans':
        return <TestsScans />;
      case 'prescriptions':
        return <Prescriptions />;
      case 'reports':
        return <Reports />;
      case 'files':
        return <Files />;
      case 'chat':
        return <Chat />;
      default:
        return <Chat />;
    }
  };

  return (
    <div className='lgl:col-span-3 flex-1 p-5 lgl:h-[calc(100vh-80px)] overflow-y-auto flex flex-col *:flex-1'>
      <Content />
    </div>
  );
};

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

const Chat = () => {
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

const Recomendations = () => {
  return <div>Recomendations</div>;
};

const TestsScans = () => {
  return <div>TestsScans</div>;
};

const Prescriptions = () => {
  return <div>Prescriptions</div>;
};

const Reports = () => {
  return <div>Reports</div>;
};

const Files = () => {
  return <div>Files</div>;
};
