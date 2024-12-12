'use client';

import { useRouter } from '@/i18n/routing';
import { useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Container } from '@/guest/_components/ui';
import ArrowNav from '@/assets/icons/arrow-nav';

const TABS = [
  {
    key: 'general',
    value: 'عام',
  },
  {
    key: 'psychology',
    value: 'علم نفس',
  },
  {
    key: 'meetings',
    value: 'لقاءات',
  },
  {
    key: 'autism',
    value: 'التوحد',
  },
  {
    key: 'hyperactivity',
    value: 'فرط الحركة',
  },
  {
    key: 'family-relationships',
    value: 'العلاقات الأسرية',
  },

  {
    key: 'counseling',
    value: 'ساعة مع المستشار',
  },
  {
    key: 'awareness',
    value: 'وعي',
  },
];

export const ArticlesTabsBar = () => {
  const currentTab = useSearchParams()?.get('tab') || '';
  const router = useRouter();
  const ref = useRef(null);

  const scrollLeft = useCallback(() => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  }, [ref]);

  const scrollRight = useCallback(() => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  }, [ref]);

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
                    tab.key === currentTab,
                }
              )}
              onClick={() =>
                router.push(`?tab=${tab.key}`, {
                  scroll: false,
                })
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
