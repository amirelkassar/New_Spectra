import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const OurValues = ({
  data = [],
  title = 'قيمنا',
}) => {
  if (!data.length) return null;
  return (
    <Container
      id='our-values'
      aria-labelledby='our-values'
      aria-label='Our Values'
    >
      <SectionHeading
        id='our-values'
        className='mb-10 text-center'
      >
        {title}
      </SectionHeading>
      <ul className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item, i) => (
          <li
            key={i}
            className='bg-blueLighter text-center text-sm mdl:text-medium rounded-3xl p-7 space-y-1'
          >
            <span className='block mb-4 mx-auto w-fit'>
              {item.icon}
            </span>
            <h3 className='font-bold'>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
