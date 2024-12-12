import { redirect } from '@/i18n/routing';
import { getToken } from '@/lib/token';

import ROUTES from '@/routes';

export default async function AdminLayout({ children }) {
  const auth = await getToken();

  if (!auth) redirect(ROUTES.AUTH.LOGIN);

  return children;
}
