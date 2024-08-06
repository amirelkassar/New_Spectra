import { Hero } from './_components/hero';
import { Services } from './_components/services';
import { WhatWeCure } from './_components/what-we-cure';

export default function page() {
  return (
    <main className='container max-w-5xl mx-auto'>
      <Hero />
      <WhatWeCure />
      <Services />
    </main>
  );
}
