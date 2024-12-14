import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

import LogoIcon from '@/assets/icons/logo';
import ROUTES from '@/routes';

export const Logo = ({ className = '', href = '' }) => {
  const locale = useLocale();

  return (
    <Link
      locale={locale}
      className='w-fit block'
      href={href || ROUTES.HOME}
    >
      <LogoIcon className={className} />
    </Link>
  );
};
