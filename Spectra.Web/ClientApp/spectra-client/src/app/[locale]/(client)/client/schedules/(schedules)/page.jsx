import ROUTES from '@/routes';
import { redirect } from '@/navigation';

const Page = () => {
  redirect(`${ROUTES.CLIENT.SCHEDULES}/current`);
};

export default Page;
