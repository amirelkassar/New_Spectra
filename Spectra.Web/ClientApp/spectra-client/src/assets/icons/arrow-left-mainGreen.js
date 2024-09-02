const ArrowLeftMainGreen = ({ className,path='#10B0C1' }) => {
  return (
    <svg
      width={13}
      height={22}
      viewBox='0 0 13 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M11.5 2L3 11L11.5 20.5'
        stroke={path}
        strokeWidth={3}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ArrowLeftMainGreen;
