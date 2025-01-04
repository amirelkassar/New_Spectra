const Blog = ({ ...props }) => {
  return (
    <svg
      width={15}
      height={15}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0 0V15H15V0H0ZM12.5 12.5H2.5V11.6667H12.5V12.5ZM12.5 10.8333H2.5V10H12.5V10.8333ZM12.5 7.5H2.5V2.5H12.5V7.5Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Blog;
