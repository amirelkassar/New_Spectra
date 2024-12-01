import Card from '@/components/card';
import ROUTES from '@/routes';
import { Heading } from '@/admin/_components/ui';
import { PackagesList } from './_components/packages-list';

const PackagesPage = () => {
  return (
    <Card className='h-full'>
      <Heading
        btnLabel='اضافة باقة'
        path={ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESADD}
        title='الاعدادات - الباقات'
        withBackButton
      />

      <PackagesList />
    </Card>
  );
};

export default PackagesPage;
