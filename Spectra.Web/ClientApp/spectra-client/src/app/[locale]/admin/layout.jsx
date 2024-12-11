import { redirect } from '@/i18n/routing';
import { getToken } from '@/lib/token';
import ROUTES from '@/routes';
import { Header, AdminSidebar } from '@/admin/_components/layouts';

export default async function Layout({ children }) {
  const auth = await getToken();

  if (!auth) redirect(ROUTES.AUTH.LOGIN);

  return (
    <div className='relative flex flex-col lg:gap-4 px-3 mdl:px-4 xl:px-8 py-5 min-h-screen'>
      <Header />
      <div className='flex-1 h-full flex'>
        <AdminSidebar />
        <main className='bg-white lg:bg-grayBlueLight lg:rounded-3xl xl:rounded-[36px] flex-1 overflow-hidden py-4 lg:p-6 xl:p-9'>
          {children}
        </main>
      </div>
    </div>
  );
}
