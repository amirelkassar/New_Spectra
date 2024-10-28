import Container from '../../_components/ui/container';
import { Heading } from '../../_components/ui/heading';
import { Chats } from './_components/chats';

const ChatsPage = () => {
  return (
    <Container className='h-full'>
      <section className='flex flex-col gap-5 h-full'>
        <Heading label='المحادثات' />
        <Chats />
      </section>
    </Container>
  );
};

export default ChatsPage;
