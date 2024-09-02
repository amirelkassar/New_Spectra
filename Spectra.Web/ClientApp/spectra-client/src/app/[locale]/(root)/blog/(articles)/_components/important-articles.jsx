'use client';

import Image from 'next/image';
import { Link } from '@/navigation';

import { Section } from '../../../_components/section';
import { ArrowIcon } from './features-articles';
import { PaginationBtns } from '../../../team/_components/team-pagination';
import ROUTES from '@/routes';
import { handlePagination } from '../../../team/_components/team';
import { useState } from 'react';

export const ImportantArticles = ({ data = [] }) => {
  const [page, setPage] = useState(1);
  return (
    <Section
      id='important-articles'
      aria-labelledby='important-articles'
      aria-label='Important Articles'
      className='!py-0 max-w-full mx-0 !px-0 mdl:col-span-3 space-y-10'
      heading='المقالات'
    >
      <div className='space-y-5'>
        {handlePagination(3, page, data).map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
      <PaginationBtns
        data={data}
        noPerPage={3}
        page={page}
        setPage={setPage}
      />
    </Section>
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
        <h3 className='text-sm mdl:text-2xl font-bold'>
          {title}
        </h3>

        <p className='text-xs mdl:text-medium mt-3'>
          {mainContent}
        </p>

        <div className='flex items-center justify-between mt-3'>
          <span>{writer}</span>
          <Link
            href={`${ROUTES.ROOT.BLOG}/article/${id}`}
            className='flex border transition hover:border-greenMain items-center py-1 mdl:py-2 px-2 mdl:px-5 text-sm mdl:text-medium rounded-lg'
          >
            <span className='flex-1 block'>اقرأ اكثر</span>
            <ArrowIcon
              lineWidth='25'
              className='w-14'
              fill='black'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
