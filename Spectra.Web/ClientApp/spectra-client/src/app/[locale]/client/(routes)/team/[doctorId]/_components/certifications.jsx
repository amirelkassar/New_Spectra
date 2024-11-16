import {
  Section,
  SectionTitle,
} from '@/client/_components/ui';
import Card from '@/components/card';
import { getDate } from '@/lib/utils';
import Image from 'next/image';

export const Certifications = ({ data }) => {
  return (
    <Section id='certifications'>
      <SectionTitle id='certifications' className='mb-5'>
        الشهادات
      </SectionTitle>

      <div className='flex flex-wrap gap-5'>
        {data?.map((item, index) => (
          <Certification
            key={index}
            name={item?.name}
            image={item?.image}
            date={item?.date}
          />
        ))}
      </div>
    </Section>
  );
};

const Certification = ({
  name = '',
  image = '',
  date = '',
}) => {
  const { fullYear } = getDate(date);

  return (
    <Card
      className='flex-none !p-2 mdl:!p-3 space-y-3'
      size='sm'
    >
      <div className='relative rounded-lg overflow-hidden w-36 h-28 mdl:w-56 mdl:h-44'>
        <Image
          src={image}
          alt={name}
          priority={false}
          fill
          sizes='width: 230px; height: 180px;'
          className='w-full h-full object-center object-cover'
        />
      </div>

      <div className='max-w-36 mdl:max-w-56'>
        <h5 className='text-xs mdl:text-base font-bold inline-block me-2'>
          {name}
        </h5>
        <p className='text-xs mdl:text-base text-grayDark text-end'>
          {fullYear}
        </p>
      </div>
    </Card>
  );
};
