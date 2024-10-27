import {
  packagesDataFlex,
  packagesDataSpectra,
} from '@/lib/demoData';
import { BackButton } from '../../_components/back-button';
import Container from '../../_components/container';
import { H1 } from '../../_components/h1';

const PackagePage = ({ params: { packageId } }) => {
  const packageData = findPackageById(packageId);
  return (
    <Container>
      <H1>
        <BackButton />
        الباقات{' '}
        {packageData?.label
          ? `- ${packageData?.label}`
          : ''}
      </H1>
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
