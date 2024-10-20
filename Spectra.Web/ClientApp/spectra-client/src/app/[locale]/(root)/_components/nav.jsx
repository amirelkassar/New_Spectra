'use client';

import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/navigation';
import ROUTES from '@/routes';

export const Nav = ({ navLinks = [], className = '' }) => {
  const pathName = usePathname();

  return (
    <nav
      className={cn(
        'flex items-center flex-1 justify-start gap-x-6',
        className
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'font-bold leading-6 pb-2 border-b-2 border-transparent transition hover:border-black',
            (pathName === link.href ||
              (link.href !== ROUTES.ROOT.HOME &&
                pathName.includes(link.href))) &&
              'border-black'
          )}
          aria-label={link.label}
          title={link.label}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
