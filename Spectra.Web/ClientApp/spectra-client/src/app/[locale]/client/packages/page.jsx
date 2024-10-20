import Card from '@/components/card';
import Container from '../_components/container';
import LogoOnlyIcon from '@/assets/icons/logo-only-icon';
import { Heading } from '../_components/heading';
import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';
import Button from '@/components/button';
import CircleCheck from '@/assets/icons/circle-check';

const PackagesPage = () => {
  return (
    <Container>
      <section>
        <Card className='space-y-5'>
          {/* Section Heading */}
          <Heading
            label='جميع الباقات'
            className='flex-row-reverse justify-end gap-5'
          />

          {/* Spectra Packages */}
          <div className='w-full'>
            <PackageHeader text='باقات سبيكترا' />
            <div className='lg:flex-wrap lg:justify-center gap-5 overflow-x-auto py-4 flex items-center *:flex-[1_0_250px] lg:*:flex-none'>
              {packagesDataSpectra.map((p) => (
                <Package key={p.label} {...p} />
              ))}
            </div>
          </div>

          {/* Flex Packages */}
          <div className='w-full'>
            <PackageHeader text='الباقات المرنة' />
            <div className='lg:flex-wrap lg:justify-center gap-5 overflow-x-auto py-4 flex items-center *:flex-[1_0_250px] lg:*:flex-none'>
              {packagesDataFlex.map((p) => (
                <Package key={p.label} {...p} />
              ))}
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default PackagesPage;

const Package = ({
  id = 0,
  label = '',
  price = 0,
  features = [],
  color = '',
}) => {
  return (
    <div
      className={`rounded-lg lg:min-w-[300px] border-2 border-grayLight p-5 border-t-[6px] w-fit`}
      style={{ borderTopColor: color }}
    >
      <div className='mx-auto w-fit space-y-5'>
        <h3
          className='text-sm lg:text-base font-bold'
          style={{
            color,
          }}
        >
          {label}
        </h3>

        <p
          className='lg:text-4xl text-2xl font-bold'
          style={{ color }}
        >{`${price}.00 $`}</p>

        <ul className='text-black text-xs lg:text-base relative space-y-2 min-h-44'>
          {features.map((feature) => (
            <li
              key={feature}
              className='flex items-center gap-3 py-1'
            >
              <CircleCheck fill={color} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant='secondary'
          className='font-bold w-full block'
          style={{ backgroundColor: color }}
        >
          احجز الان
        </Button>
      </div>
    </div>
  );
};

const PackageHeader = ({ text = '' }) => {
  return (
    <div className='flex items-center gap-3'>
      <LogoOnlyIcon />
      <h2 className='text-sm lg:text-base font-bold text-black'>
        {text}
      </h2>
    </div>
  );
};
