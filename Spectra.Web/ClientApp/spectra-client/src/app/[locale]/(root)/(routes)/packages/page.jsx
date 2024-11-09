import { FAQDATA, STEPS } from '@/data';
import { FAQ, Steps } from '@/guest/_components/sections';
import { Intro } from './_components/intro';

const PackagesPage = () => {
  return (
    <main>
      <Intro />
      <Steps data={STEPS} />
      <FAQ data={FAQDATA} />
    </main>
  );
};

export default PackagesPage;
