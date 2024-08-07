import { Section } from '../../_components/section';
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from '@mantine/core';

const FAQData = [
  {
    id: 1,
    label: 'طرق الدفع',
    content:
      'سبيكترا هو أول مركز طب إتصالي و رعاية عن بعد، يقوم بتشخيص و علاج و رعاية إضطرابات تطور و سلوك الاطفال، عن طريق فرقنا المتعددة التخصصات المختارة بعناية، وفق جودة و معايير فنية و مهنية عالمية .',
  },
  {
    id: 2,
    label: 'كيف استطيع عمل جلسة الكشف المبكر؟',
    content: '',
  },
  {
    id: 3,
    label:
      'ماهو فريق التشخيص متعدد التخصصات، Multidisciplinary team (MDT) ؟',
    content: '',
  },
  {
    id: 4,
    label:
      'هل علي الحضور في مكان معين للحصول على الخدمة؟ و ماهي التجهيزات المطلوبة مني ؟',
    content: '',
  },
  {
    id: 5,
    label: 'ما مدى السرية التي سأحظى بها؟',
    content: '',
  },
];

export const FAQ = () => {
  return (
    <Section
      aria-label='Frequently Asked Questions'
      aria-labelledby='frequently-asked-questions'
      id='frequently-asked-questions'
      heading='أسئلة شائعة'
      type='basic'
    >
      <Accordion radius='md'>
        <AccordionItem value='item'>
          <AccordionControl>control</AccordionControl>
          <AccordionPanel>content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};
