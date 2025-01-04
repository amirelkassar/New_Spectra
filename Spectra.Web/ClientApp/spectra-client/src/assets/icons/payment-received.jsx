const PaymentReceived = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width={52}
      height={50}
      viewBox='0 0 52 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width={52} height={50} rx={10} fill='#10B0C1' />
      <path
        d='M42.2914 23.031C42.2747 17.8405 42.1114 15.0886 40.3379 13.3168C38.386 11.3633 35.2424 11.3633 28.9569 11.3633H22.2896C16.004 11.3633 12.8604 11.3633 10.9086 13.3168C8.95508 15.2686 8.95508 18.4122 8.95508 24.6978C8.95508 30.9834 8.95508 34.127 10.9086 36.0788C12.8604 38.0323 16.004 38.0323 22.2896 38.0323H24.7898'
        stroke='white'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <path
        d='M37.2907 28.0312V38.0321M37.2907 38.0321L40.6243 34.6985M37.2907 38.0321L33.957 34.6985'
        stroke='white'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.2896 31.3642H15.6223M8.95508 21.3633H42.2914'
        stroke='white'
        strokeWidth={2}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default PaymentReceived;
