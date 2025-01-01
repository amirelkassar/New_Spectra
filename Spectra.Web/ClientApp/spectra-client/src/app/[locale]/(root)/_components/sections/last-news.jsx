import { useLocale, useTranslations } from 'next-intl';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import { Container, SectionHeading } from '@/guest/_components/ui';
import ROUTES from '@/routes';
import { getDate } from '@/lib/utils';
import { Link } from '@/i18n/routing';

export const LastNews = ({ data = [], title = '' }) => {
  const tg = useTranslations('general_obj');

  const locale = useLocale();

  const titleValue = title || tg('last_news');

  if (!data.length) return null;
  return (
    <Container
      aria-label='Last News'
      aria-labelledby='last-news'
      id='last-news'
    >
      <div className='flex items-center justify-between mb-10'>
        <SectionHeading className='capitalize' id='last-news'>
          {titleValue}
        </SectionHeading>
        <ShowMoreButton
          className='capitalize'
          href={ROUTES.ROOT.BLOG}
        >
          {tg('browse_more')}
        </ShowMoreButton>
      </div>
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data?.map((item) => (
          <Link
            key={item.id}
            href={ROUTES.ROOT.BLOG + '/article/' + item.id}
          >
            <New {...item} locale={locale} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

const New = ({ date = '', title = '', poster = '', locale = '' }) => {
  const { fullYear } = getDate(date, locale);

  return (
    <div
      className='h-40 mdl:h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat p-5'
      style={{ backgroundImage: `url(${poster})` }}
    >
      <div className='w-full h-full flex flex-col justify-end items-start gap-3'>
        <span className='bg-greenMain text-white rounded-lg text-sm mdl:text-medium px-2 py-1'>
          {fullYear}
        </span>

        <p className='text-white text-sm mdl:text-medium font-bold'>
          {title[locale]}
        </p>
      </div>
    </div>
  );
};
