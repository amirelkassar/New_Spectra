import { Container } from '@/guest/_components/ui';

export const Testimonials = ({ data = [] }) => {
  if (!data.length) return null;
  return (
    <Container
      aria-label='Testimonials'
      aria-labelledby='testimonials'
      id='testimonials'
    >
      <div className='flex justify-between text-center items-center mdl:items-start flex-col mdl:flex-row gap-5'>
        {data.map((item) => (
          <Item key={item?.text} {...item} />
        ))}
      </div>
    </Container>
  );
};

const Item = ({ icon = null, text = '' }) => {
  return (
    <div className='space-y-3'>
      <span className='bg-greenMain rounded-full size-10 mdl:size-20 flex items-center justify-center mx-auto'>
        {icon}
      </span>
      <p className='font-bold max-w-56 text-sm mdl:text-base'>
        {text}
      </p>
    </div>
  );
};
