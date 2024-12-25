import Image from 'next/image';
import { useLocale } from 'next-intl';

import { Container, SectionHeading } from '@/guest/_components/ui';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';

export const RelatedArticles = ({ data = [] }) => {
  const locale = useLocale();

  const title =
    locale === 'ar' ? 'مقالات ذات صلة' : 'Related Articles';

  if (!data.length) return null;
  return (
    <Container
      id='related-article'
      aria-label='Related Article'
      aria-labelledby='related-article'
    >
      <SectionHeading
        className='mb-10 text-center'
        id='related-article'
      >
        {title}
      </SectionHeading>
      <div className='flex flex-wrap gap-5 justify-center'>
        {data?.slice(0, 3)?.map((article, i) => (
          <Link
            href={`${ROUTES.ROOT.BLOG}/article/${article?.id}`}
            className='w-72 block space-y-3'
            key={article.id || i}
          >
            <Image
              src={article?.poster}
              alt={article?.title.en}
              width={320}
              height={200}
              className='w-full h-44 object-cover object-center'
            />
            <h3 className='text-sm mdl:text-medium font-bold'>
              {article?.title[locale]}
            </h3>
          </Link>
        ))}
      </div>
    </Container>
  );
};
