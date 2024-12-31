import { PersonalInfo } from '../_components/personal-info';

const ViewDoctorInfo = ({ params }) => {
  const staffId = params?.staffId || '';

  return <PersonalInfo id={staffId} />;
};

export default ViewDoctorInfo;
