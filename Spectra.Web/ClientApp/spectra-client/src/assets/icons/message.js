const MessageIcon = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      fill='none'
      viewBox='0 0 29 31'
    >
      <path
        stroke='#010036'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
        d='M9.144 16.286h10.714M9.144 9.143h10.714'
      ></path>
      <path
        stroke='#10B0C1'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
        d='M25.214 2H3.786A1.785 1.785 0 002 3.786v17.857a1.785 1.785 0 001.786 1.785h5.357v5.357l8.928-5.357h7.143A1.785 1.785 0 0027 21.643V3.786A1.785 1.785 0 0025.214 2z'
      ></path>
    </svg>
  );
};

export default MessageIcon;
