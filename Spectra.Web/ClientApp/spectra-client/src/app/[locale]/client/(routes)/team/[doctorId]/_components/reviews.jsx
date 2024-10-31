import { Rating } from '@mantine/core';

import { getDate } from '@/lib/utils';
import Card from '@/components/card';
import Avatar from '@/components/avatar';

export const Reviews = ({ data }) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-base font-bold mdl:text-xl mb-3'>
        التعليقات
      </h3>

      <div className='space-y-5'>
        {data?.map((item, index) => (
          <Review key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const Review = ({
  name = '',
  rate = 0,
  comment = '',
  date = '',
  avatar = '',
}) => {
  const { fullYear } = getDate(date);

  return (
    <Card className='flex gap-5'>
      <Avatar
        src={avatar}
        name={name}
        className='rounded-full size-9 mdl:size-12'
      />

      <div className='flex-1 text-xs mdl:text-base space-y-2'>
        <h5>{name}</h5>

        <Rating
          dir='ltr'
          size={'md'}
          readOnly
          defaultValue={rate / 2}
        />

        <p>{comment}</p>

        <span className='text-xs text-grayDark font-medium block text-end'>
          {fullYear}
        </span>
      </div>
    </Card>
  );
};
