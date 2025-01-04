import { useTranslations } from 'next-intl';

import { Container } from '@/guest/_components/ui';
import { SearchBar } from './search-bar';

export const Intro = () => {
  const t = useTranslations('guest_obj');

  return (
    <Container
      id='blogs-intro'
      aria-label='Blog intro'
      aria-labelledby='blogs-intro'
      className='mt-16 mdl:mt-20 space-y-5'
    >
      <p className='text-sm mdl:text-medium'>
        {t('articles_series')}
      </p>

      <SearchBar />
    </Container>
  );
};
