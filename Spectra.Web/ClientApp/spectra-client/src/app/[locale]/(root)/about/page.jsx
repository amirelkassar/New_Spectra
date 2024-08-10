import { AboutUs } from '../(home)/_components/about-us';
import { OurValues } from './_components/our-values';

const Page = () => {
  return (
    <main>
      <AboutUs
        className='bg-white'
        heading='رعاية مبكرة, لغد مشرق'
      />
      <OurValues />
    </main>
  );
};

export default Page;
