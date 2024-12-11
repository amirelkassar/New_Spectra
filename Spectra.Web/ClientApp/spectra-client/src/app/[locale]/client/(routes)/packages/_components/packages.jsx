import LogoOnlyIcon from '@/assets/icons/logo-only-icon';
import Card from '@/components/card';
import { Link } from '@/i18n/routing';
import { packagesDataSpectra } from '@/lib/demoData';
import { PackageCardItem } from '@/components/packages';
import { Section, SectionTitle } from '@/client/_components/ui';
import ROUTES from '@/routes';

export const Packages = () => {
  return (
    <Section>
      <Card className='space-y-5'>
        <div className='flex items-center gap-3'>
          <LogoOnlyIcon className='w-5 mdl:w-8 shrink-0' />
          <SectionTitle>باقات سبيكترا</SectionTitle>
        </div>
        {/* Spectra Packages */}
        <div className='flex flex-wrap justify-center sml:justify-start gap-5'>
          {packagesDataSpectra.map((p) => (
            <PackageCard key={p.id} {...p} />
          ))}
        </div>
      </Card>
    </Section>
  );
};

const PackageCard = ({
  id = 0,
  label = '',
  price = 0,
  features = [],
}) => {
  return (
    <PackageCardItem data-id={id}>
      <Link href={`${ROUTES.CLIENT.PACKAGES}/${id}`}>
        <PackageCardItem.Title className='group-hover:mdl:text-xl transition'>
          {label}
        </PackageCardItem.Title>
      </Link>

      <PackageCardItem.Price>{`${price}.00 $`}</PackageCardItem.Price>

      <PackageCardItem.List features={features} />

      <PackageCardItem.Button>احجز الان</PackageCardItem.Button>
    </PackageCardItem>
  );
};
