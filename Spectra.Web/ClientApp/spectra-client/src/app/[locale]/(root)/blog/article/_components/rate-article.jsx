import { Section } from '../../../_components/section';
import { Rating, Textarea } from '@mantine/core';

export const RateArticle = () => {
  return (
    <Section
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
        <Textarea
          classNames={{
            input: 'rounded-lg focus:border-greenMain',
            label: 'text-xs lg:text-base mb-2 ps-1',
          }}
          size='md'
          placeholder='اكتب تعليق...'
        />
      </div>
    </Section>
  );
};
