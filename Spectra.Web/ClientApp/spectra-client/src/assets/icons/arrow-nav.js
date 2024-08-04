const ArrowNav = ({ className,path='#10B0C1' }) => {
  return (
    <svg
      className={className}
      width='13'
      height='22'
      viewBox='0 0 13 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.5 2L10 11L1.5 20.5'
        stroke={path}
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ArrowNav;
