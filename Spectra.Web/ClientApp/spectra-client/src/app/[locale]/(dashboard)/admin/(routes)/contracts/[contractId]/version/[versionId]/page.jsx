import { ViewVersion } from '../_components/view-version';

const VersionPage = ({ params }) => {
  const contractId = params?.contractId;
  const versionId = params?.versionId;

  return <ViewVersion id={versionId} contractId={contractId} />;
};

export default VersionPage;
