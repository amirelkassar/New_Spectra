import { OurValues } from '@/guest/_components/sections';
import { Intro } from './_components/intro';
import { Services } from './_components/services';
import { OUR_VALUES, SERVICES } from '@/data';

const ServicesPage = () => {
  return (
    <main>
      <Intro />
      <Services data={SERVICES} />
      <OurValues data={OUR_VALUES} />
    </main>
  );
};

export default ServicesPage;
