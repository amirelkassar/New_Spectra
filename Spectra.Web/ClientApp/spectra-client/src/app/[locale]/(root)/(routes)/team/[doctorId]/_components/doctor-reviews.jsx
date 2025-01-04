import { ShowMoreButton } from '@/components/buttons/show-more-button';
import {
  Carousel,
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const DoctorReviews = ({
  title = 'اراء عملائنا',
  data = [],
}) => {
  if (!data.length) return null;
  return (
    <Container
      aria-label='Doctor Reviews'
      id='doctor-reviews'
      aria-labelledby='doctor-reviews'
    >
      <div className='flex items-center justify-between mb-10'>
        <SectionHeading id='doctor-reviews'>
          {title}
        </SectionHeading>
        <ShowMoreButton href='#'>عرض المزيد</ShowMoreButton>
      </div>

      <Carousel
        withControls={false}
        withIndicators={false}
        slideSize='auto'
        align='start'
        classNames={{
          root: 'px-0',
        }}
        dragFree
      >
        {data?.map((r) => (
          <Carousel.Slide key={r.id}>
            <Review {...r} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

const Review = ({ name = '', rate = 0, comment = '' }) => {
  return (
    <div
      dir='rtl'
      className='p-5 mdl:p-7 rounded-3xl bg-[#F1F1F1] max-w-[465px] space-y-5'
    >
      <div className='flex justify-between'>
        <h5 className='text-base mdl:text-2xl font-bold'>
          {name?.slice(0, 2)}
          {Array.from({ length: name.length - 2 }).map(
            () => '*'
          )}
        </h5>

        <span
          dir='ltr'
          className='text-sm mdl:text-xl font-medium'
        >
          {rate}{' '}
          <span className='text-[#FBBC05]'>&#9733;</span>
        </span>
      </div>
      <p className='p-5 bg-white text-sm mdl:text-xl rounded-2xl'>
        {comment}
      </p>
    </div>
  );
};
