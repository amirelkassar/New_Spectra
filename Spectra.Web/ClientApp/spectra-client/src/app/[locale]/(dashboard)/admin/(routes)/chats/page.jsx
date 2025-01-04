import Card from '@/components/card';
import { useTranslations } from 'next-intl';

const ChatsPage = () => {
  const tg = useTranslations('general_obj');

  return (
    <Card className='h-full flex items-center justify-center text-grayDark'>
      {tg('select_conversation')}
    </Card>
  );
};

export default ChatsPage;
