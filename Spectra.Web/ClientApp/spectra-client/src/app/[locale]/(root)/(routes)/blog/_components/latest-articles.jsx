import { Link } from '@/i18n/routing';

import { Container, SectionHeading } from '@/guest/_components/ui';
import ROUTES from '@/routes';
import LikeHeartIcon from '@/assets/icons/like-heart';

export const LatestArticles = ({
  data = [],
  title = 'احدث المقالات',
}) => {
  return (
    <Container
      id='latest-articles'
      aria-labelledby='latest-articles'
      aria-label='Latest Articles'
      className='mdl:!p-0 space-y-10'
    >
      <SectionHeading className='text-center' id='latest-articles'>
        {title}
      </SectionHeading>
      <div className='mdl:space-y-5 grid grid-cols-2 gap-3 mdl:block'>
        {data?.map((article) => (
          <Article key={article.id} {...article} />
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
}) => {
  return (
    <Link
      className='block'
      href={`${ROUTES.ROOT.BLOG}/article/${id}`}
    >
      <div className='border space-y-3 border-black p-4 rounded-lg mdl:max-w-72 transition hover:border-greenMain'>
        <h3 className='text-sm mdl:text-base'>{title}</h3>
        <div
          dir='ltr'
          className='text-greenMain gap-1 text-xs flex items-center ltr:flex-row-reverse justify-end'
        >
          <LikeHeartIcon />
          {likes}
        </div>
        <div className='text-xs text-grayDark flex items-center justify-between'>
          <span>{writer}</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};
