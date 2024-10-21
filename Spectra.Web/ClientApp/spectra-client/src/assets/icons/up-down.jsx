const UpDown = ({ ...props }) => {
  return (
    <svg
      width={28}
      height={28}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        opacity='0.03'
        width={28}
        height={28}
        rx={5}
        fill='#010036'
      />
      <path
        d='M10.8945 20.5638V8.03711'
        stroke='#010036'
        strokeLinecap='round'
      />
      <path
        d='M7.23438 12.0062L10.8939 8.03711L14.6659 12.0062'
        stroke='#010036'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g opacity='0.3'>
        <path
          d='M17.5 8.16862V21.002'
          stroke='#010036'
          strokeLinecap='round'
        />
        <path
          d='M14 16.3353L17.447 21.002L21 16.3353'
          stroke='#010036'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default UpDown;
