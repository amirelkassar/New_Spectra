import Card from '@/components/card';
import { CardHeading } from './card-heading';
import { GroupChat } from './group-chat';
import { cn } from '@/lib/utils';

export const Groups = ({
  data,
  setSelectedChat = () => {},
  selectedChat,
  isOpen,
  setIsOpen = () => {},
}) => {
  return (
    <Card
      className={cn('lg:order-3 lg:col-span-2', isOpen && 'hidden lg:block')}
    >
      <CardHeading label='مجموعة' />

      {data?.map((group) => (
        <GroupChat
          className={group.id === selectedChat && 'bg-blueLight'}
          onClick={() => {
            setSelectedChat(group.id);
            setIsOpen(true);
          }}
          key={group.id}
          {...group}
        />
      ))}
    </Card>
  );
};
