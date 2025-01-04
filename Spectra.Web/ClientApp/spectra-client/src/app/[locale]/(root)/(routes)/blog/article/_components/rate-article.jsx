import { Rating } from '@mantine/core';

import { Container } from '@/guest/_components/ui';
import { Textarea } from '@/components/inputs/textarea';

export const RateArticle = () => {
  return (
    <Container
      id='rate-article'
      aria-label='Rate Article'
      aria-labelledby='rate-article'
    >
      <div className='flex items-center gap-5 mb-5'>
        <span>اضف تقييم</span>
        <Rating
          dir='ltr'
          defaultValue={0}
          fractions={2}
          color='#10B0C1'
          size='lg'
        />
      </div>

      <div>
        <Textarea size='lg' placeholder='اكتب تعليق...' />
      </div>
    </Container>
  );
};
