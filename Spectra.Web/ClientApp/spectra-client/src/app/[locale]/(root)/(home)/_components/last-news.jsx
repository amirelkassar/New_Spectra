import { Section } from '../../_components/section';

const data = [
  {
    badge: 'الكشف المبكر',
    text: 'أنكايديديونتيوت لابوري ات',
    image:
      'https://s3-alpha-sig.figma.com/img/20cb/48fd/6de565a9eca735dac8000b04c6c22c0c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlycV9LxfCaK3Yvl6qs-CQ7FvImTCE7glC5jkubXDuCNTAPer3irSjBEmQb49X2mGA1oWChtdV5-vd3yYoBMN~88ySH6BDlzdsHaKAKby2Nt9CoM~T1TYgLH37LJzy1Hge2xERpatZ9XZfPuc6CIOFoxjyPFx3CjIQD654n5MZi4wSceHk7UUFTGsjWPtdap8DQTDmXTyMk7GUoo7ZGgcfy67C9dRpnIALhsDY4mzG8czhmpBcQUF2djRoRZiYTnirIiRTDktie-SY91HP9c2PMU~DPHLUzNP6~YOX6hxBHESm1S7ULgdVyHKSFJRqv47KQsjtQrrgFgLZRGf8rStg__',
  },
  {
    badge: 'الحالات الخاصة',
    text: 'أنكايديديونتيوت لابوري ات',
    image:
      'https://s3-alpha-sig.figma.com/img/6d9b/594e/00075896c0a7cba9c1ac0866293ec93b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiT15ThXi7CPqNbpH0AgwgxFIFWATYthv8gRFYeL6Fhk17kDjV2qvtw4Q7bRfrIXDmfWkxYvLTdQhMrILH1230H5Ka9X105RSODSaTuuvQJyc3Fq-Elw4RAS9TXYIv6iu6BIYBUayXpu2MrKUxP~PkhC7MDKh3LzQaHTcSkTzLYBzsqO5HPMNAWX9fMWEwi9nqhh8BepKelNY0ehedToIH7c7KTAhB48HpTiUyi2Gb~UaK8XrrK6sya8yZl~wZhvObYWfEXquV9PgoKnYGVKisN06sbTC~AHqjd~N7~n~jL1nB0H5W6gsUodn9uZDA9ALSAY224enLcUAK-z-SA8vQ__',
  },
  {
    badge: 'التوحد',
    text: 'أنكايديديونتيوت لابوري ات',
    image:
      'https://s3-alpha-sig.figma.com/img/b354/cc9d/8b891f91393d57cf404798b3b490d2bb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpKnRuKSHLd-e0EXbsT8dea29kwkMvY6Cmb-o3scVn9dLGp6Pr1-iAPeke~422CwnFex1IuBTv9s23PqQtFGlC2jY2jwLQOIv6JgAYXGv-KM5LCLB9q8Rx~SQCJnAaWYgoU1UgEhm58Zfkxf1v52zDy10DcudsE9ef8PTguylT7VEkL36wunRvgX0bv2P5Xhanur8NQjNufSFHco5gqtI0coWcH6fSkd03AOtHy~E~dE1DCah98hcwOqa0kRDzgAllr47VbvMyYRONDNBI7X44RTR~HHhBYCjs6TmB7PPDFbfZj4-EqBN1Tgi7wVrmTCFRfvixgDmIX7ll3XPbRkpA__',
  },
  {
    badge: 'التوحد',
    text: 'أنكايديديونتيوت لابوري ات',
    image:
      'https://s3-alpha-sig.figma.com/img/a8a4/c8fa/b223dc886b639da6368743d9d090b864?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXNxoNew3tIxEtR5bpSMedInS2jNlPCgmoIp0YJuoWAf7y~Cr4rcwsTZQweGoceBo4wtthYGqIqq6jrQKRXtkNgam0qHfCuMr48iXrAMISnVCu6AD6uaT4xM1nSiTut~Q6hEy40B2ftCG8bx~82Df-wlm~WRE~00yv4q004MjuPAHprXzP~n7F1orhCI02xyxReMMZVCYb2o5zFXCOfgvCewS7xeRdhNaOulQ2u60vkVMcCkv4YxvJ-4iFxqaV7~ZgvT9kshIszFo-6a88he69j40Y7kaNrOg8bB1LXi9aPIIjom1RXkHGDYnKV1p06J4bI4eB7h0XVIZMx-ua9Nnw__',
  },
];

export const LastNews = () => {
  return (
    <Section
      aria-label='Last News'
      aria-labelledby='last-news'
      id='last-news'
      type='more'
      heading='اخر الاخبار'
      btnLabel='تصفح المزيد'
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item) => (
          <New key={item.text} {...item} />
        ))}
      </div>
    </Section>
  );
};

const New = ({ badge = '', text = '', image = '' }) => {
  return (
    <div
      className='h-40 mdl:h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat p-5'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='w-full h-full flex flex-col justify-end items-start gap-3'>
        <span className='bg-greenMain text-white rounded-lg text-sm mdl:text-medium px-2 py-1'>
          {badge}
        </span>

        <p className='text-white text-sm mdl:text-medium font-bold'>
          {text}
        </p>
      </div>
    </div>
  );
};
