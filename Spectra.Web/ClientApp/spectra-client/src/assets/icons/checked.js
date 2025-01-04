const CheckedIcon = ({ checked = false, className }) => {
  return (
    <>
      {checked && (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={9} cy={9} r={9} fill='#10B0C1' />
          <path
            d='M4.76562 9.18832C5.82136 10.1487 7.469 11.6475 7.469 11.6475L12.7068 6.88281'
            stroke='white'
            strokeWidth={2}
            strokeLinecap='round'
          />
        </svg>
      )}

      {!checked && (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={9} cy={9} r='8.5' stroke='#939393' />
        </svg>
      )}
    </>
  );
};

export default CheckedIcon;
