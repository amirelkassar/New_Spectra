import ClockWhite from '@/assets/icons/clock-white';
import TherapyIcon from '@/assets/icons/therapy';
import TeamIcon from '@/assets/icons/team';
import HoldingHands from '@/assets/icons/holding-hands';
import CalenderIcon from '@/assets/icons/calender';
import Gear from '@/assets/icons/gear';

export const WHAT_MAKES_US_SPECIAL = [
  {
    id: 1,
    title: 'تشخيص وعلاج سريع',
    content:
      'نلتزم بتقديم حلول طبية سريعة وفعالة لتوفير الوقت وتحسين النتائج.',
    icon: (
      <ClockWhite className='mdl:size-12 size-8 text-black' />
    ),
  },
  {
    id: 2,
    title: 'خدمات متكاملة',
    content:
      'نقدم رعاية شاملة تتضمن التشخيص، العلاج، والمتابعة المستمرة لضمان أفضل النتائج.',
    icon: (
      <TherapyIcon
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 3,
    title: 'فريق طبي متخصص',
    content:
      'فريقنا الطبي يتكون من خبراء مختارين بعناية في مجال علاج التوحد وتأخر النمو وغيرها',
    icon: (
      <TeamIcon
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 4,
    title: 'تجربة مريحة للمرضى',
    content:
      'نوفر خدمات طبية مريحة وداعمة تناسب احتياجات المرضى وأسرهم.',
    icon: <HoldingHands className='mdl:size-12 size-8' />,
  },
  {
    id: 5,
    title: 'متابعة دورية دقيقة',
    content:
      'نضمن متابعة دقيقة ومستدامة لتطورات الحالات وتحسين العلاج.',
    icon: (
      <CalenderIcon
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 6,
    title: 'تقنيات حديثة',
    content:
      'نعتمد على أحدث التقنيات الطبية لتقديم خدمات متطورة وفعالة.',
    icon: <Gear className='mdl:size-12 size-8' />,
  },
];
