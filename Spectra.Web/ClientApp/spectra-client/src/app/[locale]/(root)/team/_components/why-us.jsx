import Image from 'next/image';
import { Section } from '../../_components/section';
import CheckHeartIcon from '@/assets/icons/check-heart';
import { cn } from '@/lib/utils';

const whyUsData = [
  'السلامة هي أولويتنا',
  'علاج المرونة',
  'التشخيص باستخدام التكنولوجيا',
  'تسعير موثوق',
  'طاقم عمل خبير',
];

export const WhyUs = ({ className = '' }) => {
  return (
    <div
      style={{
        clipPath:
          'polygon(50% 0%, 100% 7%, 100% 100%, 0 100%, 0 7%)',
      }}
      className={cn('bg-blueLight', className)}
    >
      <Section
        aria-label='Why Us'
        aria-labelledby='why-us'
        id='why-us'
        type='basic'
        heading='لماذا نحن'
      >
        <div className='flex items-center gap-10'>
          <div className='w-1/2 overflow-hidden flex justify-end'>
            <Image
              src='/demo-why-us.webp'
              alt='happy child'
              width={452}
              height={439}
              priority={false}
              className='object-contain max-w-full max-h-full object-center'
            />
          </div>

          <div className='w-1/2'>
            <ul className='space-y-5'>
              {whyUsData.map((item, index) => (
                <li
                  key={index}
                  className='text-sm mdl:text-medium flex items-center gap-5'
                >
                  <CheckHeartIcon className='size-4 mdl:size-6' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};
