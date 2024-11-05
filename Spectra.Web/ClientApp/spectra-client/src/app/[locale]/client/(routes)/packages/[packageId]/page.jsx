import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';
import { H1 } from '../../../_components/ui/h1';
import { BackButton } from '../../../_components/ui/back-button';
import { Package } from '../_components/package';

import Card from '@/components/card';
import Container from '../../../_components/ui/container';

const PackagePage = ({ params: { packageId } }) => {
  const packageData = findPackageById(packageId);
  return (
    <Container>
      <Card className={'p-0 space-y-5'}>
        <H1>
          <BackButton />
          الباقات - {packageData.label}
        </H1>

        <Package data={packageData} />
      </Card>
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
