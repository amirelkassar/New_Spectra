import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container, SectionHeading } from '@/guest/_components/ui';
import TeamIcon from '@/assets/icons/team';
import TallBreakArrowIcon from '@/assets/icons/tall-break-arrow';

const icons = {
  0: <TallBreakArrowIcon className='w-3 h-2 mdl:w-7 mdl:h-4' />,
  1: <TeamIcon className='size-4 mdl:size-8 text-greenMain' />,
};

export const AfterTreatment = ({ data = {}, title = '' }) => {
  const locale = useLocale();

  const t = useTranslations('guest_obj');

  const titleValue = title || t('after_treatment');

  return (
    <Container
      id='after-treatment'
      aria-label='After Treatment'
      aria-labelledby='after-treatment'
    >
      <SectionHeading
        className='mb-10 text-center capitalize'
        id='after-treatment'
      >
        {titleValue}
      </SectionHeading>
      <div className='flex flex-col mdl:flex-row items-center gap-5 mdl:gap-10'>
        {/* IMAGE */}
        <div className='overflow-hidden mdl:w-1/2'>
          <Image
            src={data.image}
            alt='Child after treatment'
            width={400}
            height={260}
            className='w-full max-w-[389px] h-auto object-cover object-center mx-auto rounded-xl'
            priority={false}
          />
        </div>

        {/* LIST */}
        <ul className='space-y-5 mdl:space-y-10 mdl:w-1/2'>
          {data?.text[locale]?.map((item, index) => (
            <li key={item} className='flex items-center gap-5'>
              <span className='rounded-full shrink-0 flex items-center justify-center bg-greenMain/10 size-7 mdl:size-12'>
                {icons[index]}
              </span>

              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
