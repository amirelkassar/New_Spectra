'use client';

import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

import { Container, SectionHeading } from '@/guest/_components/ui';
import ROUTES from '@/routes';
import LikeHeartIcon from '@/assets/icons/like-heart';
import { useDate } from '@/hooks/use-date';

export const LatestArticles = ({ data = [] }) => {
  const locale = useLocale();

  const t = useTranslations('guest_obj');

  return (
    <Container
      id='latest-articles'
      aria-labelledby='latest-articles'
      aria-label='Latest Articles'
      className='mdl:!p-0 space-y-10'
    >
      <SectionHeading
        className='text-center capitalize'
        id='latest-articles'
      >
        {t('latest_articles')}
      </SectionHeading>
      <div className='mdl:space-y-5 grid grid-cols-2 gap-3 mdl:block'>
        {data?.map((article) => (
          <Article key={article.id} {...article} locale={locale} />
        ))}
      </div>
    </Container>
  );
};

const Article = ({
  title = '',
  writer = '',
  date = '',
  likes = '',
  id = '',
  locale = 'ar',
}) => {
  const { fullYear } = useDate(date);

  return (
    <Link
      className='block'
      href={`${ROUTES.ROOT.BLOG}/article/${id}`}
    >
      <div className='border space-y-3 border-black p-4 rounded-lg mdl:max-w-72 transition hover:border-greenMain'>
        <h3 className='text-sm mdl:text-base'>{title[locale]}</h3>
        <div
          dir='ltr'
          className='text-greenMain gap-1 text-xs flex items-center ltr:flex-row-reverse justify-end'
        >
          <LikeHeartIcon />
          {likes}
        </div>
        <div className='text-xs text-grayDark flex items-center justify-between'>
          <span>{writer}</span>
          <span>{fullYear}</span>
        </div>
      </div>
    </Link>
  );
};
