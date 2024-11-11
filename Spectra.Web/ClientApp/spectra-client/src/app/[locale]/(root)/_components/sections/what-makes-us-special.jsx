import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const WhatMakesUsSpecial = ({
  data = [],
  title = 'مايميزنا',
}) => {
  if (!data.length) return null;
  return (
    <Container
      id='what-makes-us-special'
      aria-labelledby='what-makes-us-special'
      aria-label='What makes us special'
    >
      <SectionHeading
        id='what-makes-us-special'
        className='text-center mb-10'
      >
        {title}
      </SectionHeading>
      <ul className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item, i) => (
          <li
            key={i}
            className='text-center text-sm mdl:text-medium p-7'
          >
            <span
              style={{
                boxShadow: '3px 4px 6px 0px #10B0C12E',
              }}
              className='mb-4 mx-auto size-14 mdl:size-20 flex items-center justify-center rounded-2xl'
            >
              {item.icon}
            </span>
            <h3 className='font-bold mb-1'>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
