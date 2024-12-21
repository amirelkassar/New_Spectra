import { UpdateVersion } from '../../_components/update-version';

const UpdateVersionPage = ({ params }) => {
  const contractId = params?.contractId;
  const versionId = params?.versionId;

  return <UpdateVersion id={versionId} contractId={contractId} />;
};

export default UpdateVersionPage;
