import { useTranslations } from 'next-intl';

export const RenderJobType = ({ jobType }) => {
  const t = useTranslations('general_obj');

  switch (String(jobType)) {
    case '1':
      return t('doc');
    case '2':
      return t('specialist');
    case '3':
      return t('accountant');
    case '4':
      return t('secretary');
  }
};
