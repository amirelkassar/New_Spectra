import {
  BackButton,
  Container,
  H1,
  Section,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { ChangePasswordForm } from './_components/change-password-form';
import Card from '@/components/card';

const ChangePasswordPage = () => {
  return (
    <Container>
      <Section className='mdl:pt-0'>
        <Card>
          <div className='flex items-center gap-5 mb-5'>
            <BackButton />
            <H1>الاعدادات - تغير كلمة المرور</H1>
          </div>

          <ChangePasswordForm />
        </Card>
      </Section>
    </Container>
  );
};

export default ChangePasswordPage;
