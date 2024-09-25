import Image from 'next/image';
import { Section } from '../../../_components/section';
import SadFaceIcon from '@/assets/icons/sad-face';
import SpeechBubbleIcon from '@/assets/icons/speech-bubble';
import RobotRedIcon from '@/assets/icons/robot-red';

const Icons = [
  <SadFaceIcon className='size-4 mdl:size-6' key={3} />,
  <SpeechBubbleIcon className='size-4 mdl:size-6'key={1} />,
  <RobotRedIcon className='size-4 mdl:size-6' key={2} />,
];

export const BeforeTreatment = ({ data = [] }) => {
  return (
    <Section
      id='before-treatment'
      aria-label='Before Treatment'
      aria-labelledby='before-treatment'
      className='flex items-center gap-5 mdl:gap-10'
    >
      {/* IMAGE */}
      <div className='rounded-xl w-2/3 mdl:w-auto h-auto shrink overflow-hidden'>
        <Image
          src='https://s3-alpha-sig.figma.com/img/53a8/451b/f2d838c760c0518b7caa390e56cae3e8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKj7T7qeWhk8J7sV~cnO~~G~LG5gH~EBKeeZXTgwhsVLqxfABOM26ezXTsh7L0qAvtMjiFW7kaRUgXZikaAQUb1DD3gOFnfGL~g4rXgEoBx6U~YtzwiW294ex-PNSkLzF2DYhQox0CiBZ0~I~zCT~gdqjzj1P5o9lgc4t80D-aOnQhnuDk1HQsOF3JpkJA2XCF7aH2jDq9z2MAedY7G0c8E40JHV0ilBtcurU2wvY2cgY2gYbCPofK2dSEJkT7xVxExni0R80jGMc3PknZ2QmNVutHuh7ChfmgXeYHjvk2BDjxuWGyzrGR5fLw5ppyEvFH9-Xg9PrFz1-9rG83flkg__'
          width={400}
          height={350}
          alt='Child before treatment'
          priority={false}
          className='w-full h-full object-cover object-center'
        />
      </div>

      {/* LIST */}
      <div className='space-y-5'>
        <h2 className='text-base mdl:text-2xl font-bold'>
          قبل العلاج
        </h2>

        <ul className='space-y-5'>
          {data.map((item, index) => (
            <li
              key={index}
              className='flex items-center gap-5'
            >
              <span className='rounded-full shrink-0 flex items-center justify-center bg-red/10 size-7 mdl:size-12'>
                {Icons[index]}
              </span>
              <span className='text-sm mdl:text-medium'>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
