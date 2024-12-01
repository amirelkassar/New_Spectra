import Card from '@/components/card';
import { H1 } from '@/admin/_components/ui';
import { Settings } from './_components/settings';

function SettingPage() {
  return (
    <Card className='h-full flex flex-col gap-5'>
      <H1>الاعدادات</H1>

      <Settings />
    </Card>
  );
}

export default SettingPage;
