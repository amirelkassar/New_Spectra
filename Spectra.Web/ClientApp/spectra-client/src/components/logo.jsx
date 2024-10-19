import { Link } from '@/navigation';

import LogoIcon from '@/assets/icons/logo';
import ROUTES from '@/routes';

export const Logo = ({ className = '' }) => {
  return (
    <Link className='w-fit block' href={ROUTES.HOME}>
      <LogoIcon className={className} />
    </Link>
  );
};
