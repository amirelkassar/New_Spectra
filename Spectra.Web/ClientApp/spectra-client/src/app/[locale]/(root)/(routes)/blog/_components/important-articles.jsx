'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

import { Container, SectionHeading } from '@/guest/_components/ui';
import { ArrowIcon } from './features-articles';
import { handlePagination } from '@/lib/utils';
import { Pagination } from '@/components/pagination';
import ROUTES from '@/routes';

export const ImportantArticles = ({
  data = [],
  title = 'المقالات',
}) => {
  const [page, setPage] = useState(1);
  return (
    <Container
      id='important-articles'
      aria-labelledby='important-articles'
      aria-label='Important Articles'
      className='mdl:col-span-3 space-y-10 !p-0'
    >
      <SectionHeading id='important-articles' className='text-center'>
        {title}
      </SectionHeading>
      <div className='space-y-5'>
        {handlePagination(3, page, data).map((article) => (
          <Article key={article.id} {...article} />
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
}) => {
  return (
    <div className='flex gap-5'>
      {/* WRITER & DATE */}
      <div className='space-y-1'>
        <span className='text-greenMain block'>يوليو</span>
        <span className='h-[1px] bg-black w-4 block' />
        <span className='text-greenMain font-bold block mdl:text-4xl text-2xl'>
          {date.split('/')[0]}
        </span>
      </div>

      {/* POSTER */}
      <Link
        href={`${ROUTES.ROOT.BLOG}/article/${id}`}
        className='mdl:min-w-48 block'
      >
        <Image
          src={poster}
          alt={title}
          priority
          className='w-full h-full object-cover object-center'
          width={400}
          height={530}
        />
      </Link>

      {/* TITLE & MAINCONTENT & READ BUTTON & WRITER */}
      <div>
        <h3 className='text-sm mdl:text-2xl font-bold'>{title}</h3>

        <p className='text-xs mdl:text-medium mt-3'>{mainContent}</p>

        <div className='flex items-center justify-between mt-3'>
          <span>{writer}</span>
          <Link
            href={`${ROUTES.ROOT.BLOG}/article/${id}`}
            className='flex border transition border-greenMain items-center hover:border-black py-1 mdl:py-2 px-2 mdl:px-5 text-sm mdl:text-medium rounded-lg'
          >
            <span className='flex-1 block'>قراءة</span>
            <ArrowIcon lineWidth='25' className='w-14' fill='black' />
          </Link>
        </div>
      </div>
    </div>
  );
};
