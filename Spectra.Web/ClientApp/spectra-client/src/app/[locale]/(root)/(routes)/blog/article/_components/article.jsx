import Image from 'next/image';
import { useLocale } from 'next-intl';

import { Rating } from '@mantine/core';
import { Container } from '@/guest/_components/ui';

export const Article = ({ data = [] }) => {
  const locale = useLocale();

  return (
    <Container
      id='article'
      aria-label='Article'
      aria-labelledby='article'
      className='mt-20 mdl:mt-28 space-y-5'
    >
      {/* Heading */}
      <div className='flex justify-between gap-5 items-center'>
        <h1 className='font-bold text-base mdl:text-3xl'>
          {data?.title[locale]}
        </h1>
        <span className='text-xs mdl:text-base text-grayDark'>
          {data?.readCount}{' '}
          {locale === 'ar' ? 'دقائق قراءة' : 'Read Time'}
        </span>
      </div>

      {/* RATE */}
      <div className='flex items-center gap-5'>
        {!data?.rate && (
          <span className='text-xs mdl:text-base'>
            {locale === 'ar'
              ? 'لا يوجد تقييم حتي الأن'
              : 'No Rate Yet'}
          </span>
        )}

        <Rating
          dir='ltr'
          defaultValue={data?.rate}
          fractions={2}
          readOnly
        />
      </div>

      {/* CONTENT*/}
      <div className='space-y-10'>
        {data?.content?.map((c, i) => (
          <div className='space-y-5' key={i}>
            {c?.title[locale] && (
              <h2 className='text-sm mdl:text-medium font-bold'>
                {c?.title[locale]}
              </h2>
            )}

            {c?.image && (
              <Image
                src={c?.image}
                alt='image'
                width={900}
                height={500}
                className='w-full h-[436px] object-cover object-center'
                priority
              />
            )}

            {c?.paragraphs[locale]?.length > 0 &&
              c?.paragraphs[locale]?.map((p, j) => (
                <p className='text-sm mdl:text-medium' key={j}>
                  {p}
                </p>
              ))}
          </div>
        ))}
      </div>

      {/* TODO:SHARE-ARTICLE & WRITER */}
    </Container>
  );
};
