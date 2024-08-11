import { servicesData } from '@/lib/demoData';
import { Section } from '../../_components/section';
import Button from '@/components/button';

export const Services = () => {
  return (
    <Section
      id='services'
      aria-labelledby='services'
      aria-label='Services'
      type='basic'
      heading='خدمتنا'
      className=''
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-10'>
        {servicesData.map((item) => (
          <Service key={item.label} {...item} />
        ))}
        <div className='bg-blueLight p-5 rounded-3xl flex flex-col items-center justify-center gap-5'>
          <h3 className='font-bold text-center text-black'>
            لا تعرف مالذي يحتاجه طفلك؟
          </h3>
          <Button
            variant='secondary'
            className='w-full px-2 py-3 font-bold'
          >
            حجز استشارة مجانية
          </Button>
        </div>
      </div>
    </Section>
  );
};

const Service = ({
  label = '',
  icon = '',
  color = '',
  description = '',
  id = '',
}) => {
  return (
    <div className='p-5 flex flex-col gap-3 items-center justify-start !text-sm lg:!text-base !text-center text-black border-2 border-transparent transition hover:border-blueLight'>
      <div
        className={`lg:size-9 size-8 rounded-full flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <h3 className='font-bold text-center min-h-14'>
        {label}
      </h3>
      <p className=''>{description}</p>
    </div>
  );
};
