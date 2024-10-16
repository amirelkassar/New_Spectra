const MonitorWhite = ({
  className = '',
  fill = 'white',
}) => {
  return (
    <svg
      className={className}
      width={36}
      height={36}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V28C0 28.5304 0.210714 29.0391 0.585786 29.4142C0.960859 29.7893 1.46957 30 2 30H17V34H10V36H26V34H19V30H34C34.5304 30 35.0391 29.7893 35.4142 29.4142C35.7893 29.0391 36 28.5304 36 28V2C36 1.46957 35.7893 0.960859 35.4142 0.585786C35.0391 0.210714 34.5304 0 34 0H2ZM6 25.38V24.714C6 22.196 9.73 19.829 13.333 19.008C13.918 18.875 13.852 19.718 14 20H21.833C21.985 19.711 22.332 18.932 22.667 19.008C23.42 19.18 24.178 19.419 24.907 19.713L24.93 19.702L24.937 19.716L24.942 19.726C27.685 20.842 30 22.732 30 24.714V28H33V4H3V28H6V25.38ZM9.495 22.84C10.0729 22.4257 10.6914 22.0713 11.341 21.782C11.3664 22.2932 11.4503 22.7999 11.591 23.292L11.597 23.31C11.1984 23.5621 10.9018 23.947 10.7595 24.3966C10.6172 24.8463 10.6383 25.3317 10.8192 25.7673C11.0001 26.2028 11.3291 26.5604 11.7481 26.777C12.167 26.9935 12.6491 27.055 13.109 26.9506C13.5689 26.8462 13.9771 26.5826 14.2616 26.2064C14.546 25.8302 14.6884 25.3656 14.6635 24.8947C14.6386 24.4237 14.4481 23.9767 14.1256 23.6326C13.8031 23.2884 13.3694 23.0694 12.901 23.014L12.871 22.918C12.7353 22.4384 12.6667 21.9424 12.667 21.444L12.793 21.683H23.04L23.27 21.246C23.4487 21.304 23.6267 21.3653 23.804 21.43C23.809 21.65 23.791 21.902 23.756 22.16C23.7177 22.4444 23.6569 22.7253 23.574 23H22.667C22.5431 23.0003 22.4217 23.0349 22.3163 23.1001C22.2109 23.1652 22.1257 23.2583 22.07 23.369L21.404 24.702C21.359 24.795 21.3351 24.8967 21.334 25V26.333C21.334 26.702 21.632 27 22 27H23.333V25.667H22.667V25.157L23.079 24.333H24.921L25.333 25.157V25.667H24.667V27H26C26.0876 27 26.1743 26.9827 26.2552 26.9492C26.3362 26.9157 26.4097 26.8666 26.4716 26.8046C26.5336 26.7427 26.5827 26.6692 26.6162 26.5882C26.6497 26.5073 26.667 26.4206 26.667 26.333V25C26.6659 24.8967 26.642 24.795 26.597 24.702L25.93 23.368C25.8742 23.2575 25.7889 23.1646 25.6835 23.0997C25.5781 23.0347 25.4568 23.0002 25.333 23H24.956C25.0334 22.671 25.0869 22.3368 25.116 22C25.927 22.41 26.623 22.879 27.136 23.357C27.868 24.04 28 24.515 28 24.713V28H8V24.713C8 24.439 8.264 23.738 9.495 22.84ZM13.333 25C13.3339 25.0882 13.3174 25.1758 13.2844 25.2576C13.2514 25.3395 13.2025 25.414 13.1407 25.4769C13.0788 25.5398 13.0051 25.5898 12.9238 25.6242C12.8425 25.6585 12.7552 25.6765 12.667 25.677C12.5787 25.6766 12.4913 25.6588 12.4099 25.6245C12.3285 25.5902 12.2547 25.5401 12.1927 25.4772C12.1307 25.4143 12.0818 25.3398 12.0487 25.2579C12.0156 25.176 11.9991 25.0883 12 25C12 24.617 12.308 24.323 12.667 24.323C13.026 24.323 13.333 24.617 13.333 25ZM18 3C18.2652 3 18.5196 2.89464 18.7071 2.70711C18.8946 2.51957 19 2.26522 19 2C19 1.73478 18.8946 1.48043 18.7071 1.29289C18.5196 1.10536 18.2652 1 18 1C17.7348 1 17.4804 1.10536 17.2929 1.29289C17.1054 1.48043 17 1.73478 17 2C17 2.26522 17.1054 2.51957 17.2929 2.70711C17.4804 2.89464 17.7348 3 18 3Z'
        fill={fill}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 16C19.0609 16 20.0783 15.5785 20.8284 14.8284C21.5786 14.0782 22 13.0608 22 12C22 10.9391 21.5786 9.92169 20.8284 9.17154C20.0783 8.4214 19.0609 7.99997 18 7.99997C16.9391 7.99997 15.9217 8.4214 15.1716 9.17154C14.4214 9.92169 14 10.9391 14 12C14 13.0608 14.4214 14.0782 15.1716 14.8284C15.9217 15.5785 16.9391 16 18 16ZM18 18C19.5913 18 21.1174 17.3678 22.2426 16.2426C23.3679 15.1174 24 13.5913 24 12C24 10.4087 23.3679 8.88255 22.2426 7.75733C21.1174 6.63211 19.5913 5.99997 18 5.99997C16.4087 5.99997 14.8826 6.63211 13.7574 7.75733C12.6321 8.88255 12 10.4087 12 12C12 13.5913 12.6321 15.1174 13.7574 16.2426C14.8826 17.3678 16.4087 18 18 18Z'
        fill={fill}
      />
    </svg>
  );
};

export default MonitorWhite;
