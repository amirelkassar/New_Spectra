import Image from 'next/image';

import ArrowLeft from '@/assets/icons/arrow-left';
import { Section } from '../../_components/section';

const data = [
  {
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image:
      'https://s3-alpha-sig.figma.com/img/20cb/48fd/6de565a9eca735dac8000b04c6c22c0c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlycV9LxfCaK3Yvl6qs-CQ7FvImTCE7glC5jkubXDuCNTAPer3irSjBEmQb49X2mGA1oWChtdV5-vd3yYoBMN~88ySH6BDlzdsHaKAKby2Nt9CoM~T1TYgLH37LJzy1Hge2xERpatZ9XZfPuc6CIOFoxjyPFx3CjIQD654n5MZi4wSceHk7UUFTGsjWPtdap8DQTDmXTyMk7GUoo7ZGgcfy67C9dRpnIALhsDY4mzG8czhmpBcQUF2djRoRZiYTnirIiRTDktie-SY91HP9c2PMU~DPHLUzNP6~YOX6hxBHESm1S7ULgdVyHKSFJRqv47KQsjtQrrgFgLZRGf8rStg__',
  },
  {
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image:
      'https://s3-alpha-sig.figma.com/img/6d9b/594e/00075896c0a7cba9c1ac0866293ec93b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiT15ThXi7CPqNbpH0AgwgxFIFWATYthv8gRFYeL6Fhk17kDjV2qvtw4Q7bRfrIXDmfWkxYvLTdQhMrILH1230H5Ka9X105RSODSaTuuvQJyc3Fq-Elw4RAS9TXYIv6iu6BIYBUayXpu2MrKUxP~PkhC7MDKh3LzQaHTcSkTzLYBzsqO5HPMNAWX9fMWEwi9nqhh8BepKelNY0ehedToIH7c7KTAhB48HpTiUyi2Gb~UaK8XrrK6sya8yZl~wZhvObYWfEXquV9PgoKnYGVKisN06sbTC~AHqjd~N7~n~jL1nB0H5W6gsUodn9uZDA9ALSAY224enLcUAK-z-SA8vQ__',
  },
  {
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image:
      'https://s3-alpha-sig.figma.com/img/b354/cc9d/8b891f91393d57cf404798b3b490d2bb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpKnRuKSHLd-e0EXbsT8dea29kwkMvY6Cmb-o3scVn9dLGp6Pr1-iAPeke~422CwnFex1IuBTv9s23PqQtFGlC2jY2jwLQOIv6JgAYXGv-KM5LCLB9q8Rx~SQCJnAaWYgoU1UgEhm58Zfkxf1v52zDy10DcudsE9ef8PTguylT7VEkL36wunRvgX0bv2P5Xhanur8NQjNufSFHco5gqtI0coWcH6fSkd03AOtHy~E~dE1DCah98hcwOqa0kRDzgAllr47VbvMyYRONDNBI7X44RTR~HHhBYCjs6TmB7PPDFbfZj4-EqBN1Tgi7wVrmTCFRfvixgDmIX7ll3XPbRkpA__',
  },
];

export const SuccessStories = () => {
  return (
    <Section
      aria-label='Success Stories'
      aria-labelledby='success-stories'
      id='success-stories'
      type='basic'
      heading='قصص النجاح'
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item) => (
          <Story key={item.childName} {...item} />
        ))}
      </div>
    </Section>
  );
};

const Story = ({
  childName = '',
  daignosis = '',
  image = '',
}) => {
  return (
    <div className='space-y-2'>
      <div className='h-40 mdl:h-72 w-full rounded-lg overflow-hidden'>
        <Image
          src={image}
          alt={childName}
          priority={false}
          height={288}
          width={384}
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className='flex items-center justify-between px-5'>
        <div>
          <p className='text-black text-sm mdl:text-medium font-bold'>
            {childName}
          </p>
          <p className='text-black text-sm mdl:text-medium'>
            {daignosis}
          </p>
        </div>
        <ArrowLeft className='ltr:rotate-180' />
      </div>
    </div>
  );
};
