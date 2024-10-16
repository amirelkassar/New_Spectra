import { Section } from '../../_components/section';

const data = [
  {
    badge: 'الكشف المبكر',
    text: 'أنكايديديونتيوت لابوري ات',
    image: 'demo-baby-1.png',
  },
  {
    badge: 'الحالات الخاصة',
    text: 'أنكايديديونتيوت لابوري ات',
    image: 'demo-baby-2.png',
  },
  {
    badge: 'التوحد',
    text: 'أنكايديديونتيوت لابوري ات',
    image: 'demo-baby-3.png',
  },
];

export const LastNews = () => {
  return (
    <Section
      aria-label='Last News'
      aria-labelledby='last-news'
      id='last-news'
      type='more'
      heading='اخر الاخبار'
      btnLabel='تصفح المزيد'
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item) => (
          <New key={item.text} {...item} />
        ))}
      </div>
    </Section>
  );
};

const New = ({ badge = '', text = '', image = '' }) => {
  return (
    <div
      className='h-40 mdl:h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat p-5'
      style={{ backgroundImage: `url(/${image})` }}
    >
      <div className='w-full h-full flex flex-col justify-end items-start gap-3'>
        <span className='bg-greenMain text-white rounded-lg text-sm mdl:text-medium px-2 py-1'>
          {badge}
        </span>

        <p className='text-white text-sm mdl:text-medium font-bold'>
          {text}
        </p>
      </div>
    </div>
  );
};
