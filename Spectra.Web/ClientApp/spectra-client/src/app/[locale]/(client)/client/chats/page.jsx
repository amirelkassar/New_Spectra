import ChildPopover from '../../_components/child-popover';
import Container from '../../_components/container';
import { Heading } from '../../_components/heading';
import { childPopupData } from '@/lib/demoData';
import { Chats } from './_components/chats';

const ChatsPage = () => {
  return (
    <Container className='h-full'>
      <section className='flex flex-col gap-5 h-full'>
        <Heading label='المحادثات' />
        <ChildPopover data={childPopupData} />
        <Chats />
      </section>
    </Container>
  );
};

export default ChatsPage;
