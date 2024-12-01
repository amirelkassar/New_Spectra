import ModalReq from '@/components/modalReq';
import { HandelDashboardLayout } from './_components/layouts';
import { getToken } from '@/lib/token';
import { redirect } from '@/navigation';
import ROUTES from '@/routes';

export default async function DashboardLayout({
  children,
}) {
  const auth = await getToken();

  if (!auth) redirect(ROUTES.AUTH.LOGIN);

  return (
    <main className='relative flex flex-col gap-4   px-4 xl:px-8 py-5 gap-x-5 min-h-screen '>
      <HandelDashboardLayout Children={children} />
      <ModalReq />
    </main>
  );
}
