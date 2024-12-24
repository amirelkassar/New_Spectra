import { useTranslations } from 'next-intl';

import Card from '@/components/card';

export const NoActionsAvailable = ({ versionNum = '' }) => {
  const t = useTranslations('contract_obj');

  if (!versionNum) return null;
  return (
    <Card className='h-full flex items-center justify-center text-sm mdl:text-xl font-bold'>
      <p>
        {t('no_actions_available_for_this_version')} {versionNum}
      </p>
    </Card>
  );
};
