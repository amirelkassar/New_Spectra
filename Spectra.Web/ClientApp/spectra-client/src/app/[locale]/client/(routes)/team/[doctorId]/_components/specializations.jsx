import CheckHeartIcon from '@/assets/icons/check-heart';
import Button from '@/components/button';
import Card from '@/components/card';

export const Specializations = ({ data }) => {
  return (
    <Card
      className='space-y-5'
      title={
        <div className='flex items-center gap-3'>
          <CheckHeartIcon className='size-7' />
          التخصصات الدقيقة
        </div>
      }
    >
      <div className='flex flex-wrap gap-3'>
        {data.map((item) => (
          <Button
            key={item}
            variant='blueLight'
            className='font-medium cursor-default px-4'
          >
            {item}
          </Button>
        ))}
      </div>
    </Card>
  );
};
