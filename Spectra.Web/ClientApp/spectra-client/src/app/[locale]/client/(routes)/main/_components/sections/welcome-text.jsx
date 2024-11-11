import HelloHandIcon from '@/assets/icons/hello-hand';
import { H1, Section } from '@/client/_components/ui';
import { useTranslations } from 'next-intl';

export const WelcomeText = ({ name = '' }) => {
  const t = useTranslations();
  return (
    <Section
      id='welcome-text'
      className='flex items-center gap-3 *:shrink-0'
    >
      <H1 id='welcome-text'>
        {t('hello')} {name} !
      </H1>
      <HelloHandIcon className='mdl:size-7 size-5 animate-wiggle' />
    </Section>
  );
};
