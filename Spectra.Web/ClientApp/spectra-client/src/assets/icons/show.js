const ShowIcon = ({ ...props }) => {
  return (
    <svg
      width={22}
      height={17}
      viewBox='0 0 22 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x={2}
        y={5}
        width={18}
        height={7}
        rx={1}
        stroke='currentColor'
        strokeWidth={2}
      />
      <path
        d='M1.95215 1H20.5236'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <path
        d='M1.95215 16H20.5236'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ShowIcon;
