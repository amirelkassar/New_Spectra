import Image from 'next/image';
import { Section } from '../../_components/section';
import CheckHeartIcon from '@/assets/icons/check-heart';

const whyUsData = [
  'السلامة هي أولويتنا',
  'علاج المرونة',
  'التشخيص باستخدام التكنولوجيا',
  'تسعير موثوق',
  'طاقم عمل خبير',
];

export const WhyUs = () => {
  return (
    <div className='bg-blueLight'>
      <Section
        aria-label='Why Us'
        aria-labelledby='why-us'
        id='why-us'
        type='basic'
        heading='لماذا نحن'
      >
        <div className='flex items-center gap-5'>
          <div className='w-1/2 overflow-hidden'>
            <div className='bg-greenLight rounded-full rtl:rounded-tl-none ltr:rounded-tr-none overflow-hidden w-5/6 h-full'>
              <Image
                src='https://s3-alpha-sig.figma.com/img/391b/edf5/36786b690ef4a5d764b071431d2c58dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXlBpEQrZXBz-PUud4a17X0vNaVuUZ-WMrNnfFvR~OR2HxtaXc~6zIuFnjyEzE0HMM3R~gEZv5tfeyq0SAOUj-WpTBT5~nkoMhcs0XsxkTLHsG6gZjDxxUaREPezMAEIzuEnFrNxOhA49UEZATuTvXrQ3ZIfW-EZWbzEWFdcBD7inUZ2oeLI0CiELGyMuYKEUwFHQcI1BhIHtG64KAT462pU4NH-5L1iOF2IoE3KJCu4KPGXUumVZLmrPuATKSGUdXCj7fmARlpM29diNHyx5ZXytxsaa-0SHnqCF8RbKa9A9daVKIibXoVsnouEeDKqL-cC6f0~bznXFhDnz0PC6g__'
                alt='happy child'
                width={908}
                height={908}
                priority={false}
                className='w-full h-full object-cover object-center'
              />
            </div>
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
