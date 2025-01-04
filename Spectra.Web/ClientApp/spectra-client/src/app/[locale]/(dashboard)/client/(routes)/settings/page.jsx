import {
  Container,
  H1,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { SettingsList } from './_components/settings-list';

const SettingsPage = () => {
  return (
    <Container>
      <H1 id='settings'>الاعدادات</H1>
      <SettingsList />
    </Container>
  );
};

export default SettingsPage;
