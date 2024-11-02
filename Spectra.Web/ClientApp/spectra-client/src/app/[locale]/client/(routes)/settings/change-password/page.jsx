import {
  BackButton,
  Container,
  H1,
} from '@/client/_components/ui';
import { ChangePasswordForm } from './_components/change-password-form';

const ChangePasswordPage = () => {
  return (
    <Container className='space-y-5 lg:bg-white'>
      <div className='flex items-center gap-5'>
        <BackButton />
        <H1>الاعدادات - تغير كلمة المرور</H1>
      </div>

      <ChangePasswordForm />
    </Container>
  );
};

export default ChangePasswordPage;
