import Image from 'next/image';
import { Section } from '../../../_components/section';
import { Rating } from '@mantine/core';

export const Article = ({ data = [] }) => {
  return (
    <Section
      id='article'
      aria-label='Article'
      aria-labelledby='article'
      className='mt-20 mdl:mt-28 space-y-5'
    >
      {/* Heading */}
      <div className='flex justify-between gap-5 items-center'>
        <h1 className='font-bold text-base mdl:text-3xl'>
          {data?.title}
        </h1>
        <span className='text-xs mdl:text-base text-grayDark'>
          {data?.readCount} دقائق قراءة
        </span>
      </div>

      {/* RATE */}
      <div className='flex items-center gap-5'>
        {!data?.rate && (
          <span className='text-xs mdl:text-base'>
            لا يوجد تقييم حتي الأن
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
          <div className='space-y-5'>
            {c?.title && (
              <h2 className='text-sm mdl:text-medium font-bold'>
                {c?.title}
              </h2>
            )}

            {c?.image && (
              <Image
                src={c?.image}
                alt='image'
                width={900}
                height={500}
                className='w-full object-cover object-center'
                priority
              />
            )}

            {c?.paragraphs.length > 0 &&
              c?.paragraphs?.map((p, i) => (
                <p className='text-sm mdl:text-medium'>
                  {p}
                </p>
              ))}
          </div>
        ))}
      </div>

      {/* TODO:SHARE-ARTICLE & WRITER */}
    </Section>
  );
};
