import { Container, H1 } from '@/client/_components/ui';
import { SettingsList } from './_components/settings-list';

const SettingsPage = () => {
  return (
    <Container className='space-y-5'>
      <H1>الاعدادات</H1>
      <SettingsList />
    </Container>
  );
};

export default SettingsPage;
