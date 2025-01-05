import { useTranslations } from 'next-intl';

import { LoginForm } from './_components/login-form';
import { OAuthLogin } from './_components/o-auth-login';
import { FormTitle } from '../../_components/form-title';
import { RegisterModal } from '@/guest/_components/sections';

const LoginPage = () => {
  const tg = useTranslations('general_obj');

  return (
    <div className='space-y-10'>
      <FormTitle heading={tg('welcome_back')} />

      <LoginForm />

      <OAuthLogin />

      <RegisterModal className='p-0 bg-transparent hover:bg-transparent hover:underline w-fit lg:max-w-fit text-black'>
        {tg("don't_have_an_account")}
      </RegisterModal>
    </div>
  );
};

export default LoginPage;
