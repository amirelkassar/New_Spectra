const SearchIcon = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='19'
      fill='none'
      viewBox='0 0 19 19'
    >
      <path
        fill='#fff'
        d='M13.391 11.658a7.075 7.075 0 001.032-3.68 7.114 7.114 0 10-14.23 0 7.114 7.114 0 007.118 7.112 7.071 7.071 0 003.679-1.033l4.84 4.84 2.4-2.402-4.839-4.837zm-6.081.722a4.407 4.407 0 01-4.402-4.398A4.409 4.409 0 017.31 3.58a4.41 4.41 0 014.402 4.403A4.411 4.411 0 017.31 12.38z'
      ></path>
    </svg>
  );
};

export default SearchIcon;
