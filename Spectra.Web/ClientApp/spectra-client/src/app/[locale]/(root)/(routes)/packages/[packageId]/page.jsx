import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';

import { Package } from './_components/package';
import { BG } from '../_components/bg';

const PackagePage = ({ params: { packageId } }) => {
  const packageData = findPackageById(packageId);
  return (
    <main>
      <BG />
      <Package data={packageData} />
    </main>
  );
};

export default PackagePage;

function findPackageById(id) {
  const packageData = packagesDataSpectra.find(
    (packageData) => packageData.id === id
  );

  if (packageData) return packageData;

  return packagesDataFlex.find(
    (packageData) => packageData.id === id
  );
}
