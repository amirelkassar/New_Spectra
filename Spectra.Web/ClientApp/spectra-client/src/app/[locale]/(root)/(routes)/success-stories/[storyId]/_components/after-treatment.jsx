import Image from 'next/image';

import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';
import TeamIcon from '@/assets/icons/team';
import TallBreakArrowIcon from '@/assets/icons/tall-break-arrow';

const icons = [
  <TallBreakArrowIcon
    className='w-3 h-2 mdl:w-7 mdl:h-4'
    key={1}
  />,
  <TeamIcon
    className='size-4 mdl:size-8 text-greenMain'
    key={2}
  />,
];

export const AfterTreatment = ({
  data = [],
  title = 'بعد العلاج',
}) => {
  return (
    <Container
      id='after-treatment'
      aria-label='After Treatment'
      aria-labelledby='after-treatment'
    >
      <SectionHeading
        className='mb-10 text-center'
        id='after-treatment'
      >
        {title}
      </SectionHeading>
      <div className='flex items-center gap-5 mdl:gap-10'>
        {/* IMAGE */}
        <div className='rounded-xl overflow-hidden w-2/3 mdl:w-auto'>
          <Image
            src='/demo-baby-4.png'
            alt='Child after treatment'
            width={500}
            height={260}
            className='w-full h-full object-cover object-center max-h-64'
            priority={false}
          />
        </div>

        {/* LIST */}
        <ul className='space-y-5 mdl:space-y-10'>
          {data?.map((item, index) => (
            <li
              key={item}
              className='flex items-center gap-5'
            >
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
