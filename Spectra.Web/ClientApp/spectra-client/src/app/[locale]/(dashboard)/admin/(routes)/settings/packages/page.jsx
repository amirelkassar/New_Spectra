import Card from '@/components/card';
import ROUTES from '@/routes';
import { Heading } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { PackagesList } from './_components/packages-list';
import { prefetchPackages } from '@/hooks/queries/admin/settings/packages';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const PackagesPage = async () => {
  const queryClient = await prefetchPackages();

  return (
    <Card className='h-full'>
      <Heading
        btnLabel='اضافة باقة'
        path={ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESADD}
        title='الاعدادات - الباقات'
        withBackButton
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <PackagesList />
      </HydrationBoundary>
    </Card>
  );
};

export default PackagesPage;
