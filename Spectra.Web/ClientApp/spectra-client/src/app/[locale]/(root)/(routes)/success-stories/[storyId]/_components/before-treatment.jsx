import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container, SectionHeading } from '@/guest/_components/ui';

import SadFaceIcon from '@/assets/icons/sad-face';
import SpeechBubbleIcon from '@/assets/icons/speech-bubble';
import RobotRedIcon from '@/assets/icons/robot-red';

const Icons = {
  0: <SadFaceIcon className='size-4 mdl:size-6' />,
  1: <SpeechBubbleIcon className='size-4 mdl:size-6' />,
  2: <RobotRedIcon className='size-4 mdl:size-6' />,
};

export const BeforeTreatment = ({ data = {}, title = '' }) => {
  const locale = useLocale();

  const t = useTranslations('guest_obj');

  const titleValue = title || t('before_treatment');

  return (
    <Container
      id='before-treatment'
      aria-label='Before Treatment'
      aria-labelledby='before-treatment'
      className='flex items-center gap-5 mdl:gap-10'
    >
      {/* IMAGE */}
      <div className='w-2/3 mdl:w-auto h-auto shrink overflow-hidden'>
        <Image
          src={data.image}
          width={500}
          height={350}
          alt='Child before treatment'
          priority={false}
          className='w-full max-w-[493px] h-auto object-cover object-center rounded-xl mx-auto'
        />
      </div>

      {/* LIST */}
      <div className='space-y-5'>
        <SectionHeading className='capitalize'>
          {titleValue}
        </SectionHeading>

        <ul className='space-y-5'>
          {data[locale]?.map((item, index) => (
            <li key={item} className='flex items-center gap-5'>
              <span className='rounded-full shrink-0 flex items-center justify-center bg-red/10 size-7 mdl:size-12'>
                {Icons[index]}
              </span>
              <span className='text-sm mdl:text-medium'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
