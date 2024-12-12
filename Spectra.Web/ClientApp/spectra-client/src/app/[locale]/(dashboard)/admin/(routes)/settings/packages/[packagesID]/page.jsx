import { ViewPackage } from './_components/view-package';

const ViewPackagePage = ({ params }) => {
  const packageId = params?.packagesID;

  return <ViewPackage id={packageId} />;
};

export default ViewPackagePage;
