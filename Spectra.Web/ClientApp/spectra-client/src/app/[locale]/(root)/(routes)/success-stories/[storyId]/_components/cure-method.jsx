import Image from 'next/image';
import { useLocale } from 'next-intl';

import { Container } from '@/guest/_components/ui';

export const CureMethod = ({ data = [] }) => {
  const locale = useLocale();

  return (
    <Container
      id='cure-method'
      aria-label='Cure Method'
      aria-labelledby='cure-method'
    >
      <ul className='space-y-5 mdl:space-y-10'>
        {data.map((item) => (
          <li
            key={item?.id}
            className='text-sm mdl:text-medium flex items-center *:flex-1 gap-5'
          >
            <div className='relative'>
              <ul className='text-sm relative mdl:text-medium mdl:pe-20 z-10 list-disc list-inside'>
                {item?.text[locale]?.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span
                className='absolute font-sans top-0 start-5 text-black/5 text-[100px] mdl:text-[200px] font-black pointer-events-none select-none'
                aria-hidden='true'
              >
                {item?.id}
              </span>
            </div>
            <div className='overflow-hidden'>
              <Image
                src={item?.image}
                alt='Child in treatment'
                className='w-full max-w-[475] h-auto object-cover object-center rounded-xl mx-auto'
                width={475}
                height={250}
                priority={false}
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};
