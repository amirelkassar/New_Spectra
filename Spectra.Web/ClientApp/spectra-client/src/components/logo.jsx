import { Link } from '@/navigation';

import LogoIcon from '@/assets/icons/logo';
import ROUTES from '@/routes';

export const Logo = ({ className = '', href = '' }) => {
  return (
    <Link
      className='w-fit block'
      href={href || ROUTES.HOME}
    >
      <LogoIcon className={className} />
    </Link>
  );
};
