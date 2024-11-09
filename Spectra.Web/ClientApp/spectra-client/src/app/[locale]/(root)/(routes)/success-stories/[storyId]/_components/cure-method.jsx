import Image from 'next/image';
import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const CureMethod = ({
  data = [],
  title = 'طريقة العلاج',
}) => {
  return (
    <Container
      id='cure-method'
      aria-label='Cure Method'
      aria-labelledby='cure-method'
    >
      <SectionHeading className='mb-2'>
        {title}
      </SectionHeading>

      <ul className='space-y-5 mdl:space-y-10'>
        {data.map((item) => (
          <li
            key={item?.id}
            className='text-sm mdl:text-medium flex items-center *:flex-1 gap-5'
          >
            <div className='relative'>
              <p className='text-sm relative mdl:text-medium mdl:pe-20 z-10'>
                {item?.text}
              </p>
              <span
                className='absolute font-sans top-0 start-0 text-black/5 text-[100px] mdl:text-[200px] font-black pointer-events-none select-none'
                aria-hidden='true'
              >
                {item?.id}
              </span>
            </div>
            <div className='rounded-xl overflow-hidden'>
              <Image
                src={item?.image}
                alt='Child in treatment'
                className='w-full h-full max-h-64 object-cover object-center'
                width={575}
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
