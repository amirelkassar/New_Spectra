import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';
import { Container } from '@/client/_components/ui';
import { Package } from '../_components/package';

const PackagePage = ({ params: { packageId } }) => {
  const packageData = findPackageById(packageId);
  return (
    <Container>
      <Package data={packageData} />
    </Container>
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
