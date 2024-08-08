import React from 'react';

const CheckIcon = ({ className, rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='16'
      fill='none'
      viewBox='0 0 23 16'
      className={className}
      {...rest}
    >
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1.68 7.831l6.497 6.497L21.169 1.335'
      ></path>
    </svg>
  );
};

export default CheckIcon;
