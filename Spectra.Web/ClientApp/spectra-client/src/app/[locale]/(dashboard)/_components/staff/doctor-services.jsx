import { useLocale } from 'next-intl';

export const DoctorServices = ({ services = [] }) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  if (!services.length) return null;
  return (
    <div className='flex flex-col gap-5 justify-center border-t-2 lg:border-t-0 lg:border-s-2 border-grayLight lg:ps-5 pt-5 lg:pt-0'>
      {services.map((service) => (
        <div
          key={service?.id}
          className='lg:flex lg:justify-center grid grid-cols-2 place-items-center items-center gap-2'
        >
          <p className='lg:flex-1'>{service[key]}</p>
          <p className='text-greenMain font-bold'>
            {service?.price || 0} SAR
          </p>
        </div>
      ))}
    </div>
  );
};
