import { getTranslations } from 'next-intl/server';

import { BackButton } from '@/components/buttons/back-button';
import { H1 } from '@/dashboard/_components/ui/h1';
import { RenderLayout } from './_components/render-layout';

const ContractLayout = async ({ params, children }) => {
  const t = await getTranslations('contract_obj');

  const contractId = params?.contractId || '';

  return (
    <div className='h-full flex flex-col gap-5'>
      <div className='flex items-center gap-4'>
        <BackButton />
        <H1>{t('contract')}</H1>
      </div>

      <RenderLayout id={contractId}>{children}</RenderLayout>
    </div>
  );
};

export default ContractLayout;
