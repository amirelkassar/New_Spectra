import { Section } from '../../_components/section';

import HandHeartIcon from '@/assets/icons/hand-heart';
import CheckedBoardIcon from '@/assets/icons/checked-board';
import ShakeHandBlackIcon from '@/assets/icons/shake-hand-black';
import StatisticsIcon from '@/assets/icons/statistics';
import BrainIcon from '@/assets/icons/brain';
import HeartShakeIcon from '@/assets/icons/heart-shake';

const data = [
  {
    id: 1,
    title: 'الشفافية والنزاهة',
    content: 'نعمل بشفافية ونزاهة عالية بشكل دائم',
    icon: <HandHeartIcon className='mdl:size-12 size-8' />,
  },
  {
    id: 2,
    title: 'ضمان الجودة',
    content: 'نضمن جودة احترافية للخدمات المقدمة لدينا',
    icon: (
      <CheckedBoardIcon className='mdl:size-12 size-8' />
    ),
  },
  {
    id: 3,
    title: 'روح الفريق الواحد ',
    content: 'نمتلك اطباء مميزين يعملون ضمن فريق واحد ',
    icon: (
      <ShakeHandBlackIcon className='mdl:size-12 size-8' />
    ),
  },
  {
    id: 4,
    title: 'أعلى المعايير التقنية',
    content:
      'نحقق دائما اعلي المعايير الثقفية لتسهل الاستشارات',
    icon: <StatisticsIcon className='mdl:size-12 size-8' />,
  },
  {
    id: 5,
    title: 'الامانة',
    content: 'اساس عملنا و سبب نجاحنا',
    icon: <HeartShakeIcon className='mdl:size-12 size-8' />,
  },
  {
    id: 6,
    title: 'روح الفريق',
    content:
      'نمتلك اطباء مميزين يعملون ضمن فريق واحد بكفائة عالية',
    icon: <BrainIcon className='mdl:size-12 size-8' />,
  },
];

export const OurValues = () => {
  return (
    <Section
      type='basic'
      heading='قيمنا'
      id='our-values'
      aria-labelledby='our-values'
      aria-label='Our Values'
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item,i) => (
          <div key={i} className='bg-blueLight text-center text-sm mdl:text-medium rounded-3xl p-3 text-black'>
            <span className='block mb-2 mx-auto w-fit'>
              {item.icon}
            </span>
            <h3 className='font-bold'>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
