'use client';

import { useRouter } from '@/navigation';

import { PackageCardItem } from './package-card-item';
import ROUTES from '@/routes';

export const PackageCard = ({
  showPackageList = false,
  className = '',
  id = 0,
  label = '',
  price = 0,
  features = [],
}) => {
  const router = useRouter();
  return (
    <PackageCardItem
      role='button'
      onClick={() =>
        router.push(`${ROUTES.CLIENT.PACKAGES}/${id}`)
      }
      data-id={id}
      className={className}
    >
      <PackageCardItem.Title>{label}</PackageCardItem.Title>

      <PackageCardItem.Price>
        {`${price}.00 $`}
      </PackageCardItem.Price>

      {showPackageList && (
        <PackageCardItem.List features={features} />
      )}

      <PackageCardItem.Button
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        احجز الان
      </PackageCardItem.Button>
    </PackageCardItem>
  );
};
