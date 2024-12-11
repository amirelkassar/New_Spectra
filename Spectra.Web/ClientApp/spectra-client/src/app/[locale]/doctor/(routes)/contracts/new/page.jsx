import { Divider } from '@mantine/core';

import Card from '@/components/card';

import { Freelancer } from './_components/freelancer';
import { SpectraTeam } from './_components/spectra-team';
import { ChooseServices } from './_components/choose-services';
import { WorkDays } from './_components/work-days';
import { ActionButtons } from './_components/action-buttons';

const NewContractPage = () => {
  return (
    <Card dir='ltr' className='space-y-7'>
      <ChooseServices />
      <Freelancer />
      <Divider className='border-grayDark' my='xl' />
      <SpectraTeam />
      <Divider className='border-grayDark' my='xl' />
      <WorkDays />
      <ActionButtons />
    </Card>
  );
};

export default NewContractPage;
