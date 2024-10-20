import { ResetForm } from '../_components/reset-form';

const ResetPasswordPage = ({ params }) => {
  const token = params.token;
  return <ResetForm resetToken={token} />;
};

export default ResetPasswordPage;
