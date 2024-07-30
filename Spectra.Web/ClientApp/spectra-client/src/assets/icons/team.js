import React from 'react';

const TeamIcon = ({ className = '' }) => {
  return (
    <svg
      width='42'
      height='42'
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M21 2.625C19.9557 2.625 18.9542 3.03984 18.2158 3.77827C17.4773 4.51669 17.0625 5.51821 17.0625 6.5625C17.0625 7.60679 17.4773 8.60831 18.2158 9.34673C18.9542 10.0852 19.9557 10.5 21 10.5C22.0443 10.5 23.0458 10.0852 23.7842 9.34673C24.5227 8.60831 24.9375 7.60679 24.9375 6.5625C24.9375 5.51821 24.5227 4.51669 23.7842 3.77827C23.0458 3.03984 22.0443 2.625 21 2.625ZM14.4375 6.5625C14.4375 4.82202 15.1289 3.15282 16.3596 1.92211C17.5903 0.691404 19.2595 0 21 0C22.7405 0 24.4097 0.691404 25.6404 1.92211C26.8711 3.15282 27.5625 4.82202 27.5625 6.5625C27.5625 8.30298 26.8711 9.97218 25.6404 11.2029C24.4097 12.4336 22.7405 13.125 21 13.125C19.2595 13.125 17.5903 12.4336 16.3596 11.2029C15.1289 9.97218 14.4375 8.30298 14.4375 6.5625ZM35.4375 5.25C34.7413 5.25 34.0736 5.52656 33.5813 6.01885C33.0891 6.51113 32.8125 7.17881 32.8125 7.875C32.8125 8.57119 33.0891 9.23887 33.5813 9.73115C34.0736 10.2234 34.7413 10.5 35.4375 10.5C36.1337 10.5 36.8014 10.2234 37.2937 9.73115C37.7859 9.23887 38.0625 8.57119 38.0625 7.875C38.0625 7.17881 37.7859 6.51113 37.2937 6.01885C36.8014 5.52656 36.1337 5.25 35.4375 5.25ZM30.1875 7.875C30.1875 6.48261 30.7406 5.14725 31.7252 4.16269C32.7098 3.17812 34.0451 2.625 35.4375 2.625C36.8299 2.625 38.1652 3.17812 39.1498 4.16269C40.1344 5.14725 40.6875 6.48261 40.6875 7.875C40.6875 9.26739 40.1344 10.6027 39.1498 11.5873C38.1652 12.5719 36.8299 13.125 35.4375 13.125C34.0451 13.125 32.7098 12.5719 31.7252 11.5873C30.7406 10.6027 30.1875 9.26739 30.1875 7.875ZM3.9375 7.875C3.9375 7.17881 4.21406 6.51113 4.70634 6.01885C5.19863 5.52656 5.86631 5.25 6.5625 5.25C7.25869 5.25 7.92637 5.52656 8.41865 6.01885C8.91094 6.51113 9.1875 7.17881 9.1875 7.875C9.1875 8.57119 8.91094 9.23887 8.41865 9.73115C7.92637 10.2234 7.25869 10.5 6.5625 10.5C5.86631 10.5 5.19863 10.2234 4.70634 9.73115C4.21406 9.23887 3.9375 8.57119 3.9375 7.875ZM6.5625 2.625C5.17011 2.625 3.83476 3.17812 2.85019 4.16269C1.86562 5.14725 1.3125 6.48261 1.3125 7.875C1.3125 9.26739 1.86562 10.6027 2.85019 11.5873C3.83476 12.5719 5.17011 13.125 6.5625 13.125C7.95489 13.125 9.29025 12.5719 10.2748 11.5873C11.2594 10.6027 11.8125 9.26739 11.8125 7.875C11.8125 6.48261 11.2594 5.14725 10.2748 4.16269C9.29025 3.17812 7.95489 2.625 6.5625 2.625ZM8.1375 34.1198L7.875 34.125C6.48261 34.125 5.14725 33.5719 4.16269 32.5873C3.17812 31.6027 2.625 30.2674 2.625 28.875V19.0312C2.625 18.8572 2.69414 18.6903 2.81721 18.5672C2.94028 18.4441 3.1072 18.375 3.28125 18.375H7.91175C8.01675 17.4116 8.358 16.5165 8.86988 15.75H3.28125C1.47 15.75 4.68249e-08 17.22 4.68249e-08 19.0312V28.875C-0.000122498 29.9988 0.240289 31.1096 0.705079 32.1328C1.16987 33.156 1.84827 34.0679 2.69471 34.8071C3.54114 35.5464 4.53599 36.0959 5.61242 36.4188C6.68885 36.7417 7.82192 36.8305 8.9355 36.6791C8.58284 35.8555 8.31544 34.9979 8.1375 34.1198ZM33.0645 36.6791C33.411 36.7264 33.7645 36.75 34.125 36.75C36.2136 36.75 38.2166 35.9203 39.6935 34.4435C41.1703 32.9666 42 30.9636 42 28.875V19.0312C42 17.22 40.53 15.75 38.7188 15.75H33.1301C33.6446 16.5165 33.9832 17.4116 34.0882 18.375H38.7188C38.8928 18.375 39.0597 18.4441 39.1828 18.5672C39.3059 18.6903 39.375 18.8572 39.375 19.0312V28.875C39.3752 29.5867 39.2307 30.2909 38.9503 30.945C38.6698 31.5991 38.2594 32.1893 37.7438 32.6799C37.2282 33.1704 36.6183 33.551 35.9511 33.7985C35.2838 34.046 34.5733 34.1553 33.8625 34.1198C33.6846 34.9979 33.4172 35.8555 33.0645 36.6791ZM13.7812 15.75C11.97 15.75 10.5 17.22 10.5 19.0312V31.5C10.5 34.2848 11.6062 36.9555 13.5754 38.9246C15.5445 40.8937 18.2152 42 21 42C23.7848 42 26.4555 40.8937 28.4246 38.9246C30.3938 36.9555 31.5 34.2848 31.5 31.5V19.0312C31.5 17.22 30.03 15.75 28.2188 15.75H13.7812ZM13.125 19.0312C13.125 18.8572 13.1941 18.6903 13.3172 18.5672C13.4403 18.4441 13.6072 18.375 13.7812 18.375H28.2188C28.3928 18.375 28.5597 18.4441 28.6828 18.5672C28.8059 18.6903 28.875 18.8572 28.875 19.0312V31.5C28.875 33.5886 28.0453 35.5916 26.5685 37.0685C25.0916 38.5453 23.0886 39.375 21 39.375C18.9114 39.375 16.9084 38.5453 15.4315 37.0685C13.9547 35.5916 13.125 33.5886 13.125 31.5V19.0312Z'
        fill='#10B0C1'
      />
    </svg>
  );
};

export default TeamIcon;
