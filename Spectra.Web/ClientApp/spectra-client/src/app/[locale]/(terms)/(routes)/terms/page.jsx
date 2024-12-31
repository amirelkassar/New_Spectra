import { useTranslations } from 'next-intl';

import { BackButton } from '@/components/buttons/back-button';
import { BackButton as BackButtonEnd } from '@/components/buttons/back-button-end';
import { H1 } from '../../_components';

const TermsPage = () => {
  const tg = useTranslations();

  return (
    <div className='space-y-10 mdl:space-y-14'>
      <div className='flex items-center gap-5'>
        <BackButton />
        <H1>{tg('terms_and_conditions')}</H1>
      </div>

      <div className='space-y-5'>DATA</div>

      <BackButtonEnd className='w-full max-w-64'>
        {tg('previous')}
      </BackButtonEnd>
    </div>
  );
};

export default TermsPage;
