import { RenderLayout } from './_components/render-layout';

const ViewStaffLayout = ({ children, params }) => {
  const staffId = params?.staffId || '';

  return <RenderLayout id={staffId}>{children}</RenderLayout>;
};

export default ViewStaffLayout;
