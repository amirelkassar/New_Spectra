import { Link } from '@/navigation';
import { Section } from '../../../_components/section';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ROUTES from '@/routes';

export const FeaturesArticles = ({ data = [] }) => {
  return (
    <div className='bg-blueLight'>
      <Section
        id='features-articles'
        aria-labelledby='features-articles'
        aria-label='Features Articles'
        className='max-w-6xl'
      >
        <div className='grid grid-cols-3 gap-5 mdl:gap-10'>
          {data?.map((article, index) => (
            <Article
              key={article.id}
              {...article}
              isLatest={index === 0}
              isSecond={index === 1}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

const Article = ({
  id = '',
  poster = '',
  isNew = false,
  title = '',
  writer = '',
  date = '',
  mainContent = '',
  isLatest = false,
  isSecond = false,
}) => {
  return (
    <div
      className={cn('h-auto flex flex-col gap-5', {
        'row-span-2': isLatest,
        '-order-1': isSecond,
      })}
    >
      {/* POSTER */}
      <Link
        className={cn(
          'block relative',
          isLatest
            ? 'mdl:h-[530px] h-[190px] w-auto'
            : 'h-full w-auto'
        )}
        href={`${ROUTES.ROOT.BLOG}/article/${id}`}
      >
        <Image
          src={poster}
          alt={title}
          priority
          className='w-auto h-full object-cover object-center'
          width={400}
          height={530}
        />

        {isNew && (
          <span className='absolute bottom-4 start-4 bg-greenMain rounded-lg text-white text-sm font-bold py-1 px-5'>
            جديد
          </span>
        )}
      </Link>

      {/* TITLE & MAINCONTENT */}
      <div>
        <h3 className='text-sm mdl:text-2xl font-bold'>
          {title}
        </h3>
        {isLatest && (
          <p className='text-xs mdl:text-medium mt-3'>
            {mainContent}
          </p>
        )}
      </div>

      {/* WRITER & DATE */}
      <div className='text-xs mdl:text-base flex items-center justify-between'>
        <span>{writer}</span>
        <span>{date}</span>
      </div>

      {/* READMORE */}
      {isLatest && (
        <Link
          href={`${ROUTES.ROOT.BLOG}/article/${id}`}
          className='flex items-center py-1 mdl:py-2 px-2 mdl:px-5 w-full bg-greenMain text-white text-sm mdl:text-medium rounded-lg'
        >
          <span className='flex-1 block'>اقرأ اكثر</span>
          <ArrowIcon lineWidth='25' className='w-14' />
        </Link>
      )}
    </div>
  );
};

export const ArrowIcon = ({
  className = '',
  lineWidth = '60.0938',
  fill = 'white',
}) => (
  <svg
    className={`ltr:rotate-180 ${className}`}
    width={67}
    height={16}
    viewBox='0 0 67 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d={`M0.95443 7.29289C0.563904 7.68342 0.563904 8.31658 0.95443 8.70711L7.31839 15.0711C7.70892 15.4616 8.34208 15.4616 8.7326 15.0711C9.12313 14.6805 9.12313 14.0474 8.7326 13.6569L3.07575 8L8.7326 2.34315C9.12313 1.95262 9.12313 1.31946 8.7326 0.928932C8.34208 0.538408 7.70892 0.538408 7.31839 0.928932L0.95443 7.29289ZM${lineWidth} 7L1.66154 7V9L${lineWidth} 9V7Z`}
      fill={fill}
    />
  </svg>
);
