import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Section } from '../../_components/section';
import CheckHeartIcon from '@/assets/icons/check-heart';
import AboutUsImg from '@/assets/images/about-us-section.png';

const data = [
  'سبيكترا هو أول مركز طب إتصالي و رعاية عن بعد، يقوم بتشخيص و علاج و رعاية إضطرابات تطور و سلوك الاطفال، عن طريق فرقنا المتعددة التخصصات المختارة بعناية، وفق جودة و معايير فنية و مهنية عالمية .',
  'نهدف للقيام بواجب وطني من خلال تفعيل خدمات الكشف المبكر عن الاضطرابات النمائية والسلوكية وتقديم جلسات تشخيصية وعلاجية من خلال الخدمات النوعية التخصصية .',
  'تعمل كوادرنا تحت اشراف اطباء استشاريين متخصيين في اضطرابات النمو والسلوك والطب النفسي والاعصاب لدى الاطفال والمراهقين باستخدام معايير عالمية معتبرة',
];

export const AboutUs = ({
  className = '',
  containerClassName = '',
  heading = 'من نحن',
}) => {
  return (
    <div
      className={cn(
        'relative bg-blueLight overflow-hidden custom-clipPath-triangle-up',
        className
      )}
    >
      <Section
        aria-label='About Us'
        aria-labelledby='about-us'
        id='about-us'
        heading={heading}
      >
        <div
          className={cn(
            'flex flex-col items-center gap-5 mdl:flex-row',
            containerClassName
          )}
        >
          <div className='flex-[0.35] relative overflow-hidden'>
            <div className='bg-greenLight rounded-full rtl:rounded-tl-none ltr:rounded-tr-none'>
              <Image
                src={AboutUsImg}
                alt='about-us-img'
                priority={false}
                className='w-full h-full object-cover object-center'
                width={414}
                height={442}
              />
            </div>
          </div>

          <ul className='flex-[0.65] space-y-10'>
            {data.map((item) => (
              <li
                key={item}
                className='flex items-center gap-3 text-sm mdl:text-medium'
              >
                <CheckHeartIcon className='size-6 shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};
