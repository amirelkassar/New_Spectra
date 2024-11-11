import { FAQDATA, STEPS } from '@/data';
import { FAQ, Steps } from '@/guest/_components/sections';
import { Intro } from './_components/intro';
import { BG } from './_components/bg';

const PackagesPage = () => {
  return (
    <main>
      <BG />
      <Intro />
      <Steps data={STEPS} />
      <FAQ data={FAQDATA} />
    </main>
  );
};

export default PackagesPage;
