import LogoOnlyIcon from '@/assets/icons/logo-only-icon';
import Card from '@/components/card';
import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';
import { PackageCard } from './package-card';

export const Packages = () => {
  return (
    <section>
      <Card className='space-y-10'>
        {/* Spectra Packages */}
        <PackageContainer title='باقات سبيكترا'>
          {packagesDataSpectra.map((p, i) => (
            <PackageCard showPackageList key={i} {...p} />
          ))}
        </PackageContainer>

        {/* Flex Packages */}
        <PackageContainer title='الباقات المرنة'>
          {packagesDataFlex.map((p, i) => (
            <PackageCard
              showPackageList
              key={i + 100}
              {...p}
            />
          ))}
        </PackageContainer>
      </Card>
    </section>
  );
};

const PackageHeader = ({ text = '' }) => {
  return (
    <div className='flex items-center gap-3'>
      <LogoOnlyIcon className='w-5 mdl:w-8' />
      <h3 className='text-sm mdl:text-xl font-bold'>
        {text}
      </h3>
    </div>
  );
};

const PackageContainer = ({ title = '', children }) => {
  return (
    <div className='w-full space-y-5'>
      <PackageHeader text={title} />
      <div className='flex gap-5 overflow-x-auto pb-5 *:shrink-0'>
        {children}
      </div>
    </div>
  );
};
