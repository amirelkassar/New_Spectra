import { Section } from '../../../_components/section';

export const Intro = () => {
  return (
    <Section
      id='blogs-intro'
      aria-label='Blog intro'
      aria-labelledby='blogs-intro'
      className='mt-20 mdl:mt-28 space-y-3'
    >
      <h1
        id='blogs-intro'
        className='font-bold text-base mdl:text-3xl'
      >
        مدونات واخبار سبيكترا
      </h1>
      <p className='text-sm mdl:text-medium'>
        نقدم لكم سلسلة من المقالات التي تخص الاضطرابات
        ومشاكلها
      </p>
    </Section>
  );
};
