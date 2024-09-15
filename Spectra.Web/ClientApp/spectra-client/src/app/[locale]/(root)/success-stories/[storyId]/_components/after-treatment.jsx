import Image from 'next/image';
import { Section } from '../../../_components/section';
import TeamIcon from '@/assets/icons/team';
import TallBreakArrowIcon from '@/assets/icons/tall-break-arrow';

const icons = [
  <TallBreakArrowIcon className='w-3 h-2 mdl:w-7 mdl:h-4' />,
  <TeamIcon className='size-4 mdl:size-8' />,
];

export const AfterTreatment = ({ data = [] }) => {
  return (
    <Section
      id='after-treatment'
      aria-label='After Treatment'
      aria-labelledby='after-treatment'
      heading='بعد العلاج'
      type='basic'
    >
      <div className='flex items-center gap-5 mdl:gap-10'>
        {/* IMAGE */}
        <div className='rounded-xl overflow-hidden w-2/3 mdl:w-auto'>
          <Image
            src='https://s3-alpha-sig.figma.com/img/1d5a/ae9b/f646756e75ca633dd0fe1001e9cf7c5d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~isoqSdNc770oYFpN8UWEhXSH4z3jY2dxmE4ofcJzlObwaFH3qzYzonaHmnAPQ180RN0rhm4cZykMCCJJ4m2J57JN6HVigBu9wUMzxHABvZu922jdaBIExjbNvcCc~b02rsT02~jPG6URaAJdiV53a6B8~q~nzK23MMTX~RHjiBOy0vJckq3tUbgw00wgxsUj~gmJ2JN8SapwDUh8f2ZfGl1jpmy0HZ9r5d1PL8xliEvtMlLtmDod3E-IWJ8gdOqCqTU1Ctp8bNZDK01S5MGM9WhG~eMIeTitYULK5F2ErYtys-HIXL47V9On3IwVGwbhmqDdHR~iCRsPtLk4e1eQ__'
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
    </Section>
  );
};
