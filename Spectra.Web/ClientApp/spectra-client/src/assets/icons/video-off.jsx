const VideoOff = ({ ...props }) => {
  return (
    <svg
      width={32}
      height={36}
      viewBox='0 0 32 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 12C2 8.68629 4.68629 6 8 6H17C20.3137 6 23 8.68629 23 12V12.5726L27.6584 10.2434C29.6531 9.24609 32 10.6966 32 12.9267V23.0726C32 25.3028 29.6531 26.7533 27.6584 25.7559L23 23.4267V24C23 27.3137 20.3137 30 17 30H8C4.68629 30 2 27.3137 2 24V12ZM23 20.0726L29 23.0726V12.9267L23 15.9267V20.0726Z'
        fill='currentColor'
      />
      <rect
        x='0.138454'
        y='1.76468'
        width='3.32298'
        height='40.82'
        rx='1.66149'
        transform='rotate(-33.7738 0.138454 1.76468)'
        fill='currentColor'
        stroke='white'
      />
    </svg>
  );
};

export default VideoOff;
