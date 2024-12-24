import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Separator from '@/assets/icons/separator';
import { Container } from '@/guest/_components/ui';

export const Description = ({
  childName = {},
  daignosis = {},
  image = '',
  description = {},
}) => {
  const locale = useLocale();

  const t = useTranslations('guest_obj');

  return (
    <Container
      id='description'
      aria-label='Description'
      aria-labelledby='description'
      className='mt-20 mdl:mt-28 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-10'
    >
      {/* NAME AND DIAGNOSIS */}
      <div className='space-y-3 my-auto col-span-2 lg:col-span-1 text-center lg:text-start'>
        <span className='text-sm mdl:text-medium block'>
          {t('success_story')}
        </span>
        <h1
          id='description'
          className='text-2xl mdl:text-3xl font-bold text-center lg:text-start'
        >
          {childName[locale]}
        </h1>
        <Separator className='mx-auto lg:mx-0 text-greenMain' />
        <span className='text-sm mdl:text-medium block'>
          {daignosis[locale]}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className='text-xs mdl:text-base my-auto'>
        {description[locale]}
      </p>

      {/* IMAGE */}
      <div className='overflow-hidden lg:col-span-2'>
        <Image
          src={image}
          alt={childName.en}
          width={389}
          height={255}
          priority
          className='w-full max-w-[389px] h-auto object-cover object-center rounded-xl mx-auto'
        />
      </div>
    </Container>
  );
};
