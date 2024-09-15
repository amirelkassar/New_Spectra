import Image from 'next/image';
import { Section } from '../../../_components/section';

export const CureMethod = ({ data = [] }) => {
  return (
    <Section
      id='cure-method'
      aria-label='Cure Method'
      aria-labelledby='cure-method'
    >
      <h2 className='text-base mb-3 mdl:text-2xl font-bold'>
        طريقة العلاج
      </h2>

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
    </Section>
  );
};
