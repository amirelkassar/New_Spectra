import { Link } from '@/i18n/routing';

import Button from '@/components/button';
import Card from '@/components/card';
import ROUTES from '@/routes';
import OfferSendIcon from '@/assets/icons/offerSend';
import { useTranslations } from 'next-intl';

export const HasContractMessage = () => {
  const t = useTranslations('contract_obj');
  return (
    <Card className='h-full flex flex-col gap-4 justify-center items-center'>
      <OfferSendIcon className='text-greenMain mx-auto !mb-10' />
      <h2 className='font-bold text-2xl mdl:text-3xl text-center'>
        {t('already_have_contract')}
      </h2>
      <p className='text-sm mdl:text-xl text-center'>
        {t('already_have_contract_subtitle')}
      </p>

      <Link href={ROUTES.DOCTOR.CONTRACTS.DASHBOARD}>
        <Button
          variant='secondary'
          className='text-sm mdl:text-xl px-16 font-bold mx-auto mt-5'
        >
          {t('go_to_contracts_section')}
        </Button>
      </Link>
    </Card>
  );
};
