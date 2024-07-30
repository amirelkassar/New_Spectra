const CircleCheck = ({ className = '', fill = '#10B0C1' }) => {
  return (
    <svg
      width={19}
      height={18}
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.69141 9.4L8.29141 11L12.2914 7'
        stroke={fill}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.49609 2.07041C6.71171 1.36713 8.0917 0.997846 9.49609 1.00001C13.9145 1.00001 17.4961 4.58161 17.4961 9C17.4961 13.4184 13.9145 17 9.49609 17C5.07769 17 1.49609 13.4184 1.49609 9C1.49609 7.54321 1.88569 6.17601 2.56649 5.00001'
        stroke={fill}
        strokeWidth={2}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default CircleCheck;
