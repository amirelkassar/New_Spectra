import Image from 'next/image';
import { Section } from '../../_components/section';
import CheckHeartIcon from '@/assets/icons/check-heart';

export const Licenses = () => {
  return (
    <Section
      aria-label='Licenses'
      aria-labelledby='licenses'
      id='licenses'
    >
      <div className='flex flex-col items-center justify-center gap-5 *:flex-1 mdl:flex-row'>
        <h2 className='text-base mdl:text-2xl font-bold'>
          كوادرنا الصحية مرخصة لدى الهيئة السعودية للتخصصات
          الطبية
        </h2>
        <div>
          <div className='relative w-fit'>
            <Image
              src='/demo-sponsor-2.png'
              width={530}
              height={274}
              className='w-full h-full max-w-full max-h-full object-cover object-center'
              alt='Saudi Commission for Health Specialties'
            />
            <span className='absolute block top-1/2 start-2 -translate-y-1/2'>
              <CheckHeartIcon className='mdl:size-11 size-8' />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
