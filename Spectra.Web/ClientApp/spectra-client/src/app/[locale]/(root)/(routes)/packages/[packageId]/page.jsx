import { Package } from './_components/package';
import { BG } from '../_components/bg';

const PackagePage = ({ params }) => {
  const packageId = params?.packageId || '';
  return (
    <main>
      <BG />
      <Package id={packageId} />
    </main>
  );
};

export default PackagePage;
