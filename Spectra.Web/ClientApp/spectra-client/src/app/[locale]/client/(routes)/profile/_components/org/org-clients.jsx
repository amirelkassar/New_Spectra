import { Section } from '@/client/_components/ui';
import { AddClients } from './add-clients';
import { ClientsTabs } from './clients-tabs';
import { RenderTables } from './render-tables';
import Card from '@/components/card';

export const OrgClients = () => {
  return (
    <Section>
      <Card className='space-y-5'>
        <div className='flex items-center justify-between'>
          <ClientsTabs />

          <AddClients />
        </div>

        <RenderTables />
      </Card>
    </Section>
  );
};
