import { LoginForm } from './_components/login-form';
import { OAuthLogin } from './_components/o-auth-login';
import { FormTitle } from '../_components/form-title';
import { RegisterModal } from '../../(root)/_components/register-modal';

const LoginPage = () => {
  return (
    <div className='space-y-10'>
      <FormTitle heading='أهلاً بعودتك' />

      <LoginForm />

      <OAuthLogin />

      <RegisterModal
        trigger={
          <button className='block mx-auto mdl:mx-0 text-xl transition-all hover:underline'>
            ليس لديك حساب؟ اشترك الان
          </button>
        }
      />
    </div>
  );
};

export default LoginPage;
