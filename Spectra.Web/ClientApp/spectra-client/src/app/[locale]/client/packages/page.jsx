import Card from '@/components/card';
import Container from '../_components/container';
import LogoOnlyIcon from '@/assets/icons/logo-only-icon';
import { Heading } from '../_components/heading';
import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';
import { Package } from './_components/package';

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
                <Package
                  showPackageList
                  key={p.label}
                  {...p}
                />
              ))}
            </div>
          </div>

          {/* Flex Packages */}
          <div className='w-full'>
            <PackageHeader text='الباقات المرنة' />
            <div className='lg:flex-wrap lg:justify-center gap-5 overflow-x-auto py-4 flex items-center *:flex-[1_0_250px] lg:*:flex-none'>
              {packagesDataFlex.map((p) => (
                <Package
                  showPackageList
                  key={p.label}
                  {...p}
                />
              ))}
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default PackagesPage;

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
