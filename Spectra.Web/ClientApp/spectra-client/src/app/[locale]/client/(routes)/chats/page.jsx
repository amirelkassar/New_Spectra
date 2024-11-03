import { H1, Container } from '@/client/_components/ui';
import { Chats } from './_components/chats';

const ChatsPage = () => {
  return (
    <Container className='h-full'>
      <section className='flex flex-col gap-5 h-full'>
        <H1>المحادثات</H1>
        <Chats />
      </section>
    </Container>
  );
};

export default ChatsPage;
