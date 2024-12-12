import {
  H1,
  Container,
  Section,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { Chats } from './_components/chats';

const ChatsPage = () => {
  return (
    <Container className='h-full'>
      <Section className='flex flex-col gap-5 h-full mdl:pt-0'>
        <H1>المحادثات</H1>
        <Chats />
      </Section>
    </Container>
  );
};

export default ChatsPage;
