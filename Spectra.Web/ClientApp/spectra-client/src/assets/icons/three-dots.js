const ThreeDotsIcon = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='4'
      height='18'
      fill='none'
      viewBox='0 0 4 18'
      {...props}
    >
      <circle
        cx='1.895'
        cy='1.895'
        r='1.895'
        fill='currentColor'
      ></circle>
      <circle
        cx='1.895'
        cy='9'
        r='1.895'
        fill='currentColor'
      ></circle>
      <circle
        cx='1.895'
        cy='16.106'
        r='1.895'
        fill='currentColor'
      ></circle>
    </svg>
  );
};

export default ThreeDotsIcon;
