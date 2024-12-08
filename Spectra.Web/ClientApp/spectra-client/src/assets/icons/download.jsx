const Download = ({ ...props }) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.00014 8.5791C1.00014 5.737 2.89487 1.00017 9.52644 1.00017C16.158 1.00017 18.0527 5.737 18.0527 8.5791'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.52344 18.9521L9.52344 5.73662'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.2109 13.3158L9.52674 19L3.84254 13.3158'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Download;
