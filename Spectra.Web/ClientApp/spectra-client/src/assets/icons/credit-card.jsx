const CreditCardIcon = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width={57}
      height={45}
      viewBox='0 0 57 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 15.735H55M9.2971 34.595H17.7464M24.6594 34.595H33.1087M5.84058 43H51.1594C53.2805 43 55 41.1644 55 38.9V6.1C55 3.83563 53.2805 2 51.1594 2H5.84058C3.71949 2 2 3.83563 2 6.1V38.9C2 41.1644 3.71949 43 5.84058 43Z'
        stroke='#10B0C1'
        strokeWidth={4}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default CreditCardIcon;
