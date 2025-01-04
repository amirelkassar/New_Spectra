import { LoginForm } from './_components/login-form';
import { OAuthLogin } from './_components/o-auth-login';
import { FormTitle } from '../../_components/form-title';
import { RegisterModal } from '@/guest/_components/sections';

const LoginPage = () => {
  return (
    <div className='space-y-10'>
      <FormTitle heading='أهلاً بعودتك' />

      <LoginForm />

      <OAuthLogin />

      <RegisterModal className='p-0 bg-transparent hover:bg-transparent hover:underline w-fit lg:max-w-fit text-black'>
        ليس لديك حساب؟ اشترك الان
      </RegisterModal>
    </div>
  );
};

export default LoginPage;
