import { useLocale } from 'next-intl';
import Image from 'next/image';

import { Container } from '@/guest/_components/ui';

export const Treatment = ({ data }) => {
  const locale = useLocale();

  return (
    <Container
      aria-label='What do we treat?'
      id='what-do-we-treat?'
      aria-labelledby='what-do-we-treat?'
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

      <div className='space-y-5 mdl:space-y-10 max-w-5xl mx-auto'>
        <div>
          <Image
            src={data?.image}
            alt={data?.label}
            width={877}
            height={436}
            className='mx-auto object-contain w-full h-auto max-w-[877px] rounded-xl'
          />
        </div>

        <div>
          {data?.description1[locale]?.map((p) => (
            <p key={p} className='text-sm mdl:text-xl'>
              {p}
            </p>
          ))}
        </div>

        <ul className='list-disc list-inside space-y-2 mdl:space-y-4'>
          {data?.points1[locale]?.map((l) => (
            <li key={l} className='text-sm mdl:text-xl'>
              {l}
            </li>
          ))}
        </ul>

        <div>
          {data?.description2[locale]?.map((p) => (
            <p key={p} className='text-sm mdl:text-xl'>
              {p}
            </p>
          ))}
        </div>

        <ul className='list-disc list-inside space-y-2 mdl:space-y-4'>
          {data?.points2[locale]?.map((l) => (
            <li key={l} className='text-sm mdl:text-xl'>
              {l}
            </li>
          ))}
        </ul>
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
