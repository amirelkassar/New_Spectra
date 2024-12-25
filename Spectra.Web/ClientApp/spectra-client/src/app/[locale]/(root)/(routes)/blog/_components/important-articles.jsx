'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

import { Container, SectionHeading } from '@/guest/_components/ui';
import { ArrowIcon } from './features-articles';
import { handlePagination } from '@/lib/utils';
import { Pagination } from '@/components/pagination';
import ROUTES from '@/routes';
import { useDate } from '@/hooks/use-date';

export const ImportantArticles = ({ data = [] }) => {
  const [page, setPage] = useState(1);

  const t = useTranslations('guest_obj');

  const locale = useLocale();

  return (
    <Container
      id='important-articles'
      aria-labelledby='important-articles'
      aria-label='Important Articles'
      className='mdl:col-span-3 space-y-10 !p-0'
    >
      <SectionHeading
        id='important-articles'
        className='text-center capitalize'
      >
        {t('articles')}
      </SectionHeading>
      <div className='space-y-5'>
        {handlePagination(3, page, data).map((article) => (
          <Article key={article.id} {...article} locale={locale} />
        ))}
      </div>
      <Pagination
        data={data}
        noPerPage={3}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
};

const Article = ({
  id = '',
  poster = '',
  title = '',
  writer = '',
  date = '',
  mainContent = '',
  locale = 'ar',
}) => {
  const { fullMonthName, dayOfTheMonth } = useDate(date);

  return (
    <div className='flex gap-5'>
      {/* WRITER & DATE */}
      <div className='space-y-1 shrink-0'>
        <span className='text-greenMain block'>{fullMonthName}</span>
        <span className='h-[1px] bg-black w-4 block' />
        <span className='text-greenMain font-bold block mdl:text-4xl text-2xl'>
          {dayOfTheMonth}
        </span>
      </div>

      {/* POSTER */}
      <Link
        href={`${ROUTES.ROOT.BLOG}/article/${id}`}
        className='block max-w-[367px] max-h-[238px] overflow-hidden flex-1 min-w-[164px]'
      >
        <Image
          src={poster}
          alt={title[locale]}
          priority
          className='w-full h-auto object-cover object-center'
          width={400}
          height={530}
        />
      </Link>

      {/* TITLE & MAINCONTENT & READ BUTTON & WRITER */}
      <div className='flex-1'>
        <h3 className='text-sm mdl:text-2xl font-bold'>
          {title[locale]}
        </h3>

        <p className='text-xs mdl:text-medium mt-3'>
          {mainContent[locale].split(' ', 50).join(' ')}...
        </p>

        <div className='flex items-center justify-between mt-3'>
          <span>{writer}</span>
          <Link
            href={`${ROUTES.ROOT.BLOG}/article/${id}`}
            className='flex border transition border-greenMain items-center hover:border-black py-1 mdl:py-2 px-2 mdl:px-5 text-sm mdl:text-medium rounded-lg'
          >
            <span className='flex-1 block'>
              {locale === 'ar' ? 'قراءة' : 'Read'}
            </span>
            <ArrowIcon lineWidth='25' className='w-14' fill='black' />
          </Link>
        </div>
      </div>
    </div>
  );
};
