const UploadIcon = ({ className = '', fill = '#10B0C1' }) => {
  return (
    <svg
      className={className}
      width={38}
      height={37}
      viewBox='0 0 38 37'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2900_25876)'>
        <path
          d='M11.2919 27.7496C9.36833 27.7496 7.52354 27.0187 6.16337 25.7177C4.8032 24.4166 4.03906 22.652 4.03906 20.8121C4.03906 18.9722 4.8032 17.2076 6.16337 15.9066C7.52354 14.6055 9.36833 13.8746 11.2919 13.8746C11.7462 11.8507 13.0752 10.0721 14.9866 8.93004C15.9331 8.36457 16.994 7.97241 18.1088 7.77595C19.2236 7.57949 20.3705 7.58257 21.484 7.78503C22.5975 7.98748 23.6558 8.38534 24.5985 8.95589C25.5411 9.52644 26.3497 10.2585 26.978 11.1103C27.6063 11.9621 28.042 12.9169 28.2603 13.9202C28.4786 14.9236 28.4752 15.9558 28.2502 16.9579H29.7919C31.223 16.9579 32.5954 17.5264 33.6073 18.5383C34.6193 19.5503 35.1877 20.9227 35.1877 22.3538C35.1877 23.7848 34.6193 25.1573 33.6073 26.1692C32.5954 27.1811 31.223 27.7496 29.7919 27.7496H28.2502'
          stroke={fill}
          strokeWidth={3}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.375 23.125L19 18.5L23.625 23.125'
          stroke={fill}
          strokeWidth={3}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19 18.5V32.375'
          stroke={fill}
          strokeWidth={3}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2900_25876'>
          <rect
            width={37}
            height={37}
            fill='white'
            transform='translate(0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UploadIcon;
