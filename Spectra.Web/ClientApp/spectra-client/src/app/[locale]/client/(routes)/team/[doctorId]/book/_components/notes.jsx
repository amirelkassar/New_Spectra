import { Section } from '@/client/_components/ui';
import Card from '@/components/card';
import { Textarea } from '@/components/inputs/textarea';

export const Notes = () => {
  return (
    <Section>
      <Card title='ملاحظات'>
        <Textarea />
      </Card>
    </Section>
  );
};
