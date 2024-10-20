import BackIcon from '@/assets/icons/back-black';
import Card from '@/components/card';
import { servicesData } from '@/lib/demoData';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import Container from '../../_components/container';
import { Heading } from '../../_components/heading';

const ServicesPage = () => {
  return (
    <Container>
      <Card className='space-y-5'>
        <Heading
          label='جميع الخدمات'
          icon={
            <Link href={ROUTES.CLIENT.MAIN.HOME}>
              <BackIcon className='ltr:rotate-180' />
            </Link>
          }
          className='flex-row-reverse justify-end gap-5'
        />

        <div className='grid grid-cols-fill-250 gap-5'>
          {servicesData.map((service) => (
            <Service key={service.label} {...service} />
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default ServicesPage;

const Service = ({
  label = '',
  icon = '',
  color = '',
  description = '',
  id = '',
}) => {
  return (
    <Link
      href={`${ROUTES.CLIENT.MAIN.HOME}/services/${id}`}
    >
      <div className='p-5 flex flex-col gap-3 items-center justify-start !text-sm lg:!text-base !text-center text-black border-2 border-transparent transition hover:border-blueLight'>
        <div
          className={`lg:size-9 size-8 rounded-full flex items-center justify-center`}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h2 className='font-bold text-center min-h-14'>
          {label}
        </h2>
        <p className=''>{description}</p>
      </div>
    </Link>
  );
};
