import { Link } from '@/navigation';

import LogoIcon from '@/assets/icons/logo';
import ROUTES from '@/routes';

export const Logo = ({ className = '' }) => {
  return (
    <Link href={ROUTES.HOME}>
      <LogoIcon className={className} />
    </Link>
  );
};
