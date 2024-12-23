import { useTranslations } from 'next-intl';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import { Container, SectionHeading } from '@/guest/_components/ui';
import ROUTES from '@/routes';

export const LastNews = ({ data = [], title = '' }) => {
  const tg = useTranslations('general_obj');

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
          <New key={item.text} {...item} />
        ))}
      </div>
    </Container>
  );
};

const New = ({ badge = '', text = '', image = '' }) => {
  return (
    <div
      className='h-40 mdl:h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat p-5'
      style={{ backgroundImage: `url(/${image})` }}
    >
      <div className='w-full h-full flex flex-col justify-end items-start gap-3'>
        <span className='bg-greenMain text-white rounded-lg text-sm mdl:text-medium px-2 py-1'>
          {badge}
        </span>

        <p className='text-white text-sm mdl:text-medium font-bold'>
          {text}
        </p>
      </div>
    </div>
  );
};
