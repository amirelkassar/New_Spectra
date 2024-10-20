import Button from '@/components/button';
import GoogleIcon from '@/assets/icons/google';
import AppleIcon from '@/assets/icons/apple';

export const OAuthLogin = () => {
  return (
    <div className='flex flex-col *:flex-1 gap-5'>
      <Button dir='ltr'>
        <GoogleIcon />
        Sign in with Google
      </Button>
      <Button dir='ltr'>
        <AppleIcon />
        Sign in with Apple
      </Button>
    </div>
  );
};
