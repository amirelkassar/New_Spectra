import { Link } from '@/navigation';

import {
  servicesData,
  SERVICESICONS,
} from '@/lib/demoData';
import { Section } from '../../_components/section';
import Button from '@/components/button';
import ROUTES from '@/routes';

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
            حجز استشارة مدفوعة لمدة 30د
          </Button>
        </div>
      </div>
    </Section>
  );
};

const Service = ({
  label = '',
  description = '',
  id = '',
}) => {
  return (
    <Link
      href={ROUTES.ROOT.SERVICES.VIEW_SERVICE.replace(
        ':id',
        id
      )}
      data-id={id}
      className='p-5 flex flex-col gap-3 items-center justify-start !text-sm lg:!text-base !text-center text-black border-2 border-transparent transition hover:border-blueLight'
    >
      <div
        className={`lg:size-20 size-16 rounded-full flex items-center justify-center *:size-8 mdl:*:size-10`}
        style={{
          color:
            SERVICESICONS[id]?.color ||
            SERVICESICONS[1]?.color,
          backgroundColor:
            SERVICESICONS[id]?.bg || SERVICESICONS[1]?.bg,
        }}
      >
        {SERVICESICONS[id]?.icon || SERVICESICONS[1]?.icon}
      </div>
      <h3 className='font-bold text-center min-h-14'>
        {label}
      </h3>
      <p className=''>{description}</p>
    </Link>
  );
};
