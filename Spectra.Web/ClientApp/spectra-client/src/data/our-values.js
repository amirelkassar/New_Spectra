import HandHeartIcon from '@/assets/icons/hand-heart';
import CheckedBoardIcon from '@/assets/icons/checked-board';
import ShakeHandBlackIcon from '@/assets/icons/shake-hand-black';
import StatisticsIcon from '@/assets/icons/statistics';
import BrainIcon from '@/assets/icons/brain';
import HeartShakeIcon from '@/assets/icons/heart-shake';

export const OUR_VALUES = [
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
