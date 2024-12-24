import { useTranslations } from 'next-intl';

import { Container } from '@/guest/_components/ui';

export const Treatment = ({ data }) => {
  const t = useTranslations('guest_obj');

  return (
    <Container
      aria-label='All Packages'
      id='all-packages'
      aria-labelledby='all-packages'
      className='mt-20 mdl:mt-24'
    >
      <div className='mb-12'>
        <h1
          id='all-packages'
          className='text-2xl mdl:text-4xl text-center font-bold mb-4 capitalize'
        >
          {data?.label}
        </h1>
        <Separator />
      </div>
    </Container>
  );
};

const Separator = () => (
  <svg
    width={226}
    height={21}
    viewBox='0 0 226 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='mx-auto'
  >
    <path
      d='M225 5.40854C212.768 10.6941 41.5188 -12.7134 0.999992 19'
      stroke='#10B0C1'
      strokeWidth={3}
    />
  </svg>
);
