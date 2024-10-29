import Card from '@/components/card';
import { servicesData } from '@/lib/demoData';
import { Service } from '@/client/_components/services';

export const OurServices = () => {
  return (
    <section>
      <Card id='services' title='خدمتنا'>
        <div className='grid grid-cols-2 mdl:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </Card>
    </section>
  );
};
