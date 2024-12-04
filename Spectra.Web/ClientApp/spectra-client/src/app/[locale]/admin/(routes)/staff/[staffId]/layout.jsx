import { StaffLayoutProvider } from './_components/staff-layout-provider';

const ViewStaffLayout = ({ params, children }) => {
  const staffId = params?.staffId;

  return (
    <StaffLayoutProvider id={staffId}>
      {children}
    </StaffLayoutProvider>
  );
};

export default ViewStaffLayout;
