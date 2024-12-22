const Dashboard = ({ ...props }) => {
  return (
    <svg
      width={15}
      height={14}
      viewBox='0 0 15 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14.0526 1H1V4.91579H14.0526V1Z'
        stroke='currentColor'
        strokeLinejoin='round'
      />
      <path
        d='M1 12.7579L4.97322 8.74421L7.12005 10.8L9.74461 8.17969L11.2065 9.60504'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.0526 4.64572V13.1299M1 4.64572V9.21414M3.94206 13.4001H14.0526M5.24211 2.95801H12.0947M2.95789 2.95703H3.28421'
        stroke='currentColor'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Dashboard;
