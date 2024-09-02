import Image from 'next/image';
import { Section } from '../../../_components/section';
import QuoteIcon from '@/assets/icons/quote';

export const FamilyReview = ({
  familyReview = '',
  video = '',
  childName,
}) => {
  return (
    <Section
      id='family-review'
      aria-label='Family Review'
      aria-labelledby='family-review'
      heading={`رأي عائلة ${childName}`}
      type='basic'
    >
      {/* FAMILY REVIEW */}
      <div className='w-full pe-5 mdl:pe-28'>
        <div className='bg-[#F5F5F5] w-full flex items-center justify-center rounded-3xl px-5 mdl:px-10 py-10 mdl:py-20 relative'>
          <span className='flex items-center gap-2 absolute top-0 start-8 -translate-y-1/2'>
            <QuoteIcon className='w-2 h-4 mdl:w-6 mdl:h-11' />
            <QuoteIcon className='w-2 h-4 mdl:w-6 mdl:h-11' />
          </span>
          <p className='bg-white py-4 px-4 mdl:px-10 rounded-full mdl:rounded-3xl text-xs mdl:text-2xl w-4/5 mdl:w-2/3'>
            {familyReview}
          </p>

          <Image
            src='https://s3-alpha-sig.figma.com/img/0b6b/8402/72622ee7b3c96140349d91ea3d6d35ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H16J3MRS7h9gh1Cn0zV9oUUiygyh8SqkAZHPpejngDHhGmSq24cQtodTAKqAdjZNAx9r48okeAMgMoA6htC9y7y7PMd7qnxdrbRKc2hLQhq9sSHpp67EQ1HptDW6lTeE3aOaFmuDwD4RBQlx6EVjMHOt~1x6~85SRyVI8tpbQHO2AMnRzRsXW-RFOMt6vv8cHJbPD82So-fFOEpkcqBW2i4TYFTa0P7XREcvUfwf7LIrXfsLvyKnU6jR5QpP2TdBMwJKXCM45KsmkY0jR11Vgvm-XZbYUyIFYenVfqroAS2CDhgO8cTHEQn7lXGBph~1tYg8-GbxCX9JPRfiufUcTg__'
            alt='family photo'
            priority={false}
            className='rounded-full size-20 mdl:size-52 border-8 border-white absolute top-1/2 end-0 -translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2 object-cover object-center'
            width={208}
            height={208}
          />
        </div>
      </div>

      {/* Video */}
      <div>{/* TODO: ADD THE VIDEO */}</div>
    </Section>
  );
};
