import { Section } from '../../_components/section';
import CheckHeartIcon from '@/assets/icons/check-heart';
import AboutUsImg from '@/assets/images/about-us-section.png';
import Image from 'next/image';

const data = [
  'سبيكترا هو أول مركز طب إتصالي و رعاية عن بعد، يقوم بتشخيص و علاج و رعاية إضطرابات تطور و سلوك الاطفال، عن طريق فرقنا المتعددة التخصصات المختارة بعناية، وفق جودة و معايير فنية و مهنية عالمية .',
  'نهدف للقيام بواجب وطني من خلال تفعيل خدمات الكشف المبكر عن الاضطرابات النمائية والسلوكية وتقديم جلسات تشخيصية وعلاجية من خلال الخدمات النوعية التخصصية .',
  'تعمل كوادرنا تحت اشراف اطباء استشاريين متخصيين في اضطرابات النمو والسلوك والطب النفسي والاعصاب لدى الاطفال والمراهقين باستخدام معايير عالمية معتبرة',
];

export const AboutUs = () => {
  return (
    <div className='relative bg-blueLight overflow-hidden'>
      <Section
        aria-label='About Us'
        aria-labelledby='about-us'
        id='about-us'
        heading='من نحن'
      >
        <div className='flex flex-col items-center gap-5 mdl:flex-row'>
          <div className='flex-[0.35]'>
            <Image
              src={AboutUsImg}
              alt='about-us-img'
              priority={false}
              width={396}
              height={406}
            />
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
