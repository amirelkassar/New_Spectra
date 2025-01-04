import { AcceptVersion } from '../../_components/accept-version';

const AcceptPage = ({ params }) => {
  const contractId = params?.contractId;
  const versionId = params?.versionId;
  return <AcceptVersion contractId={contractId} id={versionId} />;
};

export default AcceptPage;
