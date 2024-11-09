import Image from 'next/image';

import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const WeMakeSmile = ({
  data = {
    image: '',
    list: [],
  },
  title = 'سبيكترا .تصنع الابتسامة لطفلك',
}) => {
  if (!data?.list.length && !data?.image) return null;
  return (
    <Container
      aria-label='We Make Smile'
      aria-labelledby='we-make-smile'
      id='we-make-smile'
      className='flex items-center justify-center gap-5 mdl:px-20'
    >
      <div className='flex-[0.65]'>
        <div className='w-fit mx-auto'>
          <SectionHeading
            id='we-make-smile'
            className='mb-10'
          >
            {title}
          </SectionHeading>

          <ul className='space-y-5'>
            {data?.list?.map((item) => (
              <li
                key={item.label}
                className='text-sm mdl:text-medium'
              >
                <span className='flex items-center gap-3'>
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex-[0.35] relative overflow-hidden'>
        <Image
          src={data?.image}
          alt='about-us-img'
          priority={true}
          className='w-full h-full object-cover object-center'
          width={500}
          height={900}
        />
      </div>
    </Container>
  );
};
