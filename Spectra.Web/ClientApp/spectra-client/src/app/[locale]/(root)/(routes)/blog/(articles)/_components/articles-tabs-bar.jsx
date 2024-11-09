'use client';

import { useMemo, useRef } from 'react';
import { usePathname, useRouter } from '@/navigation';

import { cn } from '@/lib/utils';
import { Container } from '@/guest/_components/ui';
import ArrowNav from '@/assets/icons/arrow-nav';
import ROUTES from '@/routes';

export const ArticlesTabsBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const ref = useRef(null);

  const TABS = useMemo(
    () => [
      {
        key: 'general',
        value: 'عام',
        isActive: pathName === '/blog/general',
      },
      {
        key: 'psychology',
        value: 'علم نفس',
        isActive: pathName === '/blog/psychology',
      },
      {
        key: 'meetings',
        value: 'لقاءات',
        isActive: pathName === '/blog/meetings',
      },
      {
        key: 'autism',
        value: 'التوحد',
        isActive: pathName === '/blog/autism',
      },
      {
        key: 'hyperactivity',
        value: 'فرط الحركة',
        isActive: pathName === '/blog/hyperactivity',
      },
      {
        key: 'family-relationships',
        value: 'العلاقات الأسرية',
        isActive: pathName === '/blog/family-relationships',
      },

      {
        key: 'counseling',
        value: 'ساعة مع المستشار',
        isActive: pathName === '/blog/counseling',
      },
      {
        key: 'awareness',
        value: 'وعي',
        isActive: pathName === '/blog/awareness',
      },
    ],
    [pathName]
  );

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='my-10 w-full border-t border-b border-black/10'>
      <Container className='gap-5 !p-0 mdl:gap-10 flex ltr:flex-row-reverse items-center h-full'>
        <button
          onClick={scrollRight}
          className='h-full p-2 rounded-lg transition hover:bg-[#F5F5F5] shrink-0'
        >
          <ArrowNav fill='#010036' />
        </button>

        <ul
          ref={ref}
          style={{
            scrollbarWidth: 'none',
          }}
          className='flex-1 flex items-center gap-7 *:shrink-0 overflow-x-auto h-full'
        >
          {TABS.map((tab) => (
            <li
              role='button'
              key={tab.key}
              className={cn(
                'py-3 text-sm mdl:text-xl border-b-2 transition hover:border-greenMain border-transparent',
                {
                  'border-greenMain font-bold':
                    tab.isActive,
                }
              )}
              onClick={() =>
                router.push(
                  `${ROUTES.ROOT.BLOG}/${tab.key}`
                )
              }
            >
              {tab.value}
            </li>
          ))}
        </ul>

        <button
          onClick={scrollLeft}
          className='h-full p-2 rounded-lg transition hover:bg-[#F5F5F5] shrink-0'
        >
          <ArrowNav className='rotate-180' fill='#010036' />
        </button>
      </Container>
    </div>
  );
};
