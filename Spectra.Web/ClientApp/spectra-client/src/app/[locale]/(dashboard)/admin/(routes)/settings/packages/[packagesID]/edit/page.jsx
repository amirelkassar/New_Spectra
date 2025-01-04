import { UpdatePackage } from '../_components/update-package';

const UpdatePackagePage = ({ params }) => {
  const packageId = params?.packagesID;
  return <UpdatePackage id={packageId} />;
};

export default UpdatePackagePage;
