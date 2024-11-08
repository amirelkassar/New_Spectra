'use client';

import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/navigation';
import ROUTES from '@/routes';
import { useTranslations } from 'next-intl';

export const Nav = ({ navLinks = [], className = '' }) => {
  const pathName = usePathname();
  const t = useTranslations();

  return (
    <nav
      className={cn(
        'flex items-center flex-1 justify-start gap-x-4 2xl:gap-x-7',
        className
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'font-bold inline-block after:block after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:hover:scale-100 after:origin-right ltr:after:origin-left after:mt-0.5',
            (pathName === link.href ||
              (link.href !== ROUTES.ROOT.HOME &&
                pathName.includes(link.href))) &&
              'after:scale-x-100 after:origin-center'
          )}
          aria-label={link.label}
        >
          {t(link.key)}
        </Link>
      ))}
    </nav>
  );
};
