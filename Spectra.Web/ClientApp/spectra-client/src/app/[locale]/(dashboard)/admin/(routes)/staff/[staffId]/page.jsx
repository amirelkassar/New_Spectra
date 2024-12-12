import { ViewStaff } from './_components/view-staff';

const ViewStaffPage = ({ params }) => {
  const staffId = params?.staffId;

  return <ViewStaff id={staffId} />;
};

export default ViewStaffPage;
