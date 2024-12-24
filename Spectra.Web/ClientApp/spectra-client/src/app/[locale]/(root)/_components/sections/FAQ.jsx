import { useLocale, useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from '@mantine/core';

import PlusCircleOutlineIcon from '@/assets/icons/plus-circle-outline';
import { Container, SectionHeading } from '@/guest/_components/ui';

export const FAQ = ({ data = {}, title = '' }) => {
  const t = useTranslations('general_obj');

  const locale = useLocale();

  const FAQ_DATA = data[locale] || data['ar'];

  const titleValue = title || t('faq');

  if (!FAQ_DATA.length) return null;
  return (
    <Container
      aria-label='Frequently Asked Questions'
      aria-labelledby='frequently-asked-questions'
      id='frequently-asked-questions'
    >
      <SectionHeading
        id='frequently-asked-questions'
        className='mb-10 text-center'
      >
        {titleValue}
      </SectionHeading>
      <Accordion
        classNames={{
          root: 'space-y-5',
          item: 'border-none',
          chevron: 'w-fit data-[rotate=true]:rotate-[135deg]',
          control:
            'text-black bg-blueLighter hover:bg-blueLight/80 text-base mdl:text-2xl',
        }}
        radius='xl'
        chevron={
          <PlusCircleOutlineIcon className='size-5 mdl:size-7' />
        }
      >
        {FAQ_DATA?.map((item) => (
          <AccordionItem key={item.id} value={item.label}>
            <AccordionControl>{item.label}</AccordionControl>
            <AccordionPanel>{item.content}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};
