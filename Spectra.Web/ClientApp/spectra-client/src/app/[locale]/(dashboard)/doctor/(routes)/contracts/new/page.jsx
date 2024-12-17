import Card from '@/components/card';

import { Freelancer } from './_components/freelancer';
import { SpectraTeam } from './_components/spectra-team';
import { WorkDays } from './_components/work-days';
import { ActionButtons } from './_components/action-buttons';
import { ChooseFreelanceServices } from './_components/choose-freelance-services';
import { ChooseSpectraServices } from './_components/choose-spectra-services';

const NewContractPage = () => {
  return (
    <div dir='ltr' className='space-y-5'>
      <Card className='space-y-7'>
        <ChooseFreelanceServices />
        <Freelancer />
      </Card>
      <Card className='space-y-7'>
        <ChooseSpectraServices />
        <SpectraTeam />
      </Card>
      <Card>
        <WorkDays />
        <ActionButtons />
      </Card>
    </div>
  );
};

export default NewContractPage;
