import Image from 'next/image';

import CheckHeartIcon from '@/assets/icons/check-heart';
import { Container, SectionHeading } from '@/guest/_components/ui';

export const AboutUs = ({
  data = {
    image: '',
    list: [],
  },
  title = 'من نحن',
}) => {
  if (!data.list.length) return null;
  return (
    <Container
      aria-label='About Us'
      aria-labelledby='about-us'
      id='about-us'
    >
      <SectionHeading className='mb-10 text-center'>
        {title}
      </SectionHeading>

      <div className='mdl:flex mdl:items-center mdl:gap-10 space-y-10 mdl:space-y-0'>
        <Image
          src={data?.image}
          alt='about-us-img'
          priority
          className='object-contain w-full h-auto object-center col-span-1 max-w-56 mdl:max-w-[414px] mx-auto flex-1'
          width={414}
          height={442}
        />

        <ul className='space-y-10 mdl:space-y-14 col-span-2'>
          {data?.list?.map((item) => (
            <li
              key={item}
              className='flex items-center gap-3 text-sm mdl:text-xl'
            >
              <CheckHeartIcon className='size-6 shrink-0' />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
