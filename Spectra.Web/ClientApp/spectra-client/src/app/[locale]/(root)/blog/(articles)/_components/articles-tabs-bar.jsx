'use client';
import ArrowNav from '@/assets/icons/arrow-nav';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from '@/navigation';
import ROUTES from '@/routes';
import { useMemo, useRef } from 'react';

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
    <div className='my-10 h-16 w-full border-t border-b border-black/10 py-1'>
      <div className='container mx-auto max-w-[1400px] gap-5 mdl:gap-10 flex ltr:flex-row-reverse items-center h-full'>
        <button
          onClick={scrollRight}
          className='h-full px-2 rounded-lg transition hover:bg-[#F5F5F5]'
        >
          <ArrowNav fill='#010036' />
        </button>

        <ul
          ref={ref}
          style={{
            scrollbarWidth: 'none',
          }}
          className='flex-1 flex items-center gap-7 justify-start overflow-x-auto h-full'
        >
          {TABS.map((tab) => (
            <li
              key={tab.key}
              className={cn(
                'h-full min-w-max text-sm mdl:text-medium transition border-b hover:font-bold hover:border-greenMain border-transparent',
                {
                  'border-greenMain font-bold':
                    tab.isActive,
                }
              )}
            >
              <button
                type='button'
                className='w-full h-full'
                onClick={() =>
                  router.push(
                    `${ROUTES.ROOT.BLOG}/${tab.key}`
                  )
                }
              >
                {tab.value}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={scrollLeft}
          className='h-full px-2 rounded-lg transition hover:bg-[#F5F5F5]'
        >
          <ArrowNav className='rotate-180' fill='#010036' />
        </button>
      </div>
    </div>
  );
};
