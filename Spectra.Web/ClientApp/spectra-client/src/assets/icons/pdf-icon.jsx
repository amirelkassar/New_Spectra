import React from 'react';

const PdfIcon = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width={44}
      height={44}
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M34.6475 0.466797L43.4767 9.40985V43.4181H10.4941V43.5291H43.5894V9.52241L34.6475 0.466797Z'
        fill='#909090'
      />
      <path
        d='M34.5374 0.355469H10.3809V43.4178H43.4761V9.41108L34.5374 0.355469Z'
        fill='#F4F4F4'
      />
      <path
        d='M10.1399 2.66797H0V13.1946H31.8956V2.66797H10.1399Z'
        fill='#7A7B7C'
      />
      <path
        d='M32.0671 13.0167H0.208008V2.48242H32.0671V13.0167Z'
        fill='#DD2025'
      />
      <path
        d='M10.7693 4.2616H8.69531V11.6627H10.3266V9.1664L10.6868 9.18644C11.0369 9.18175 11.3838 9.1208 11.7135 9.00604C12.0033 8.91043 12.2696 8.75767 12.4958 8.55734C12.7277 8.36837 12.91 8.1284 13.0274 7.85732C13.1881 7.40818 13.2449 6.93018 13.194 6.45727C13.185 6.11936 13.124 5.78467 13.0131 5.46428C12.9132 5.2327 12.7646 5.02394 12.5769 4.85136C12.3892 4.67878 12.1664 4.54618 11.923 4.46204C11.713 4.3865 11.4955 4.33275 11.2739 4.30169C11.1066 4.2752 10.9373 4.2618 10.7677 4.2616M10.4678 7.79873H10.3266V5.51671H10.6329C10.768 5.50724 10.9036 5.5274 11.0297 5.5757C11.1558 5.62401 11.2691 5.69923 11.3612 5.79579C11.5521 6.04406 11.6541 6.34626 11.6516 6.65617C11.6516 7.03548 11.6516 7.37933 11.2993 7.62141C11.0456 7.75721 10.7567 7.81983 10.4678 7.79873ZM16.2931 4.24155C16.117 4.24155 15.9456 4.25389 15.825 4.25851L15.4473 4.26776H14.2096V11.6689H15.6663C16.223 11.6828 16.7771 11.5912 17.2976 11.3991C17.7167 11.2382 18.0877 10.978 18.3767 10.642C18.6598 10.3046 18.862 9.91003 18.9686 9.48711C19.0937 9.00901 19.1545 8.51715 19.1495 8.02385C19.1805 7.44124 19.1341 6.85718 19.0114 6.28612C18.8939 5.86624 18.6765 5.47908 18.3767 5.1559C18.1415 4.89456 17.8522 4.6844 17.5277 4.53914C17.2497 4.41394 16.9572 4.32178 16.6565 4.26468C16.5369 4.24563 16.4159 4.23686 16.2947 4.23847M16.0059 10.3089H15.8472V5.58455H15.8679C16.195 5.54779 16.5261 5.60516 16.82 5.74953C17.0352 5.91656 17.2107 6.12699 17.3341 6.3663C17.4673 6.61814 17.5441 6.89456 17.5594 7.17734C17.5737 7.51656 17.5594 7.7941 17.5594 8.02385C17.5653 8.28848 17.5478 8.55312 17.5071 8.81484C17.4571 9.08323 17.3668 9.34301 17.2389 9.5858C17.0944 9.81221 16.8971 10.0024 16.6629 10.1409C16.4672 10.2642 16.2353 10.3217 16.0027 10.3043M24.0639 4.26776H20.2079V11.6689H21.8392V8.73312H23.9021V7.35774H21.8392V5.64314H24.0607V4.26776'
        fill='#464648'
      />
      <path
        d='M30.9697 28.5038C30.9697 28.5038 36.0286 27.6126 36.0286 29.2917C36.0286 30.9708 32.8946 30.2878 30.9697 28.5038ZM27.2295 28.6318C26.4256 28.8039 25.6423 29.0566 24.8921 29.3858L25.5268 27.998C26.1616 26.6103 26.8201 24.7184 26.8201 24.7184C27.5757 25.9583 28.457 27.1216 29.4511 28.1908C28.7028 28.2991 27.9611 28.4474 27.2295 28.6349V28.6318ZM25.2269 18.6094C25.2269 17.1461 25.7141 16.7468 26.0933 16.7468C26.4726 16.7468 26.8995 16.9241 26.9137 18.1946C26.79 19.4721 26.5147 20.7315 26.0933 21.9476C25.5142 20.9273 25.2153 19.7792 25.2253 18.614L25.2269 18.6094ZM17.8497 34.8241C16.2977 33.922 21.1043 31.1451 21.9755 31.0556C21.9707 31.0572 19.4746 35.7677 17.8497 34.8241ZM37.5059 29.4906C37.4901 29.3364 37.3473 27.6295 34.2212 27.702C32.9181 27.6798 31.6156 27.7691 30.3286 27.9688C29.0812 26.7487 28.0074 25.3719 27.1359 23.875C27.6846 22.332 28.0172 20.7243 28.1245 19.0951C28.0785 17.2448 27.6231 16.184 26.1632 16.1994C24.7033 16.2148 24.4906 17.456 24.6826 19.3032C24.8706 20.5446 25.2253 21.7566 25.7379 22.9082C25.7379 22.9082 25.0635 24.9482 24.1717 26.9773C23.2799 29.0065 22.6705 30.0704 22.6705 30.0704C21.1195 30.5604 19.6595 31.2892 18.3464 32.229C17.0388 33.4117 16.5072 34.3199 17.1959 35.228C17.7894 36.0113 19.8666 36.1886 21.7232 33.8249C22.708 32.6028 23.6091 31.3193 24.4208 29.9825C24.4208 29.9825 27.2517 29.2285 28.1324 29.0219C29.0131 28.8153 30.0779 28.6518 30.0779 28.6518C30.0779 28.6518 32.6629 31.179 35.1558 31.0896C37.6488 31.0001 37.5282 29.6417 37.5123 29.4937'
        fill='#DD2025'
      />
      <path
        d='M34.417 0.474609V9.53022H43.3557L34.417 0.474609Z'
        fill='#909090'
      />
      <path
        d='M34.5391 0.355469V9.41108H43.4778L34.5391 0.355469Z'
        fill='#F4F4F4'
      />
      <path
        d='M10.6482 4.14441H8.57422V11.5456H10.2118V9.05075L10.5736 9.0708C10.9238 9.06611 11.2707 9.00515 11.6003 8.89039C11.8901 8.79478 12.1565 8.64203 12.3826 8.4417C12.6129 8.25221 12.7934 8.01227 12.9095 7.74167C13.0701 7.29254 13.127 6.81453 13.0761 6.34162C13.0671 6.00372 13.0061 5.66903 12.8952 5.34864C12.7953 5.11706 12.6467 4.9083 12.459 4.73571C12.2713 4.56313 12.0485 4.43053 11.805 4.3464C11.5942 4.27012 11.3755 4.21585 11.1528 4.1845C10.9855 4.15802 10.8162 4.14461 10.6466 4.14441M10.3467 7.68154H10.2055V5.39952H10.5133C10.6485 5.39005 10.7841 5.41021 10.9102 5.45852C11.0363 5.50682 11.1496 5.58204 11.2417 5.6786C11.4326 5.92687 11.5346 6.22907 11.5321 6.53899C11.5321 6.9183 11.5321 7.26214 11.1798 7.50422C10.9261 7.64002 10.6372 7.7011 10.3483 7.68M16.172 4.12436C15.9959 4.12436 15.8245 4.1367 15.7039 4.14132L15.331 4.15058H14.0933V11.5517H15.55C16.1066 11.5656 16.6607 11.474 17.1813 11.2819C17.6004 11.1211 17.9714 10.8608 18.2603 10.5248C18.5435 10.1874 18.7457 9.79284 18.8522 9.36993C18.9774 8.89182 19.0382 8.39996 19.0331 7.90666C19.0642 7.32406 19.0178 6.74 18.8951 6.16893C18.7776 5.74905 18.5602 5.3619 18.2603 5.03871C18.0251 4.77738 17.7359 4.56721 17.4114 4.42195C17.1334 4.29675 16.8409 4.2046 16.5402 4.14749C16.4206 4.12845 16.2995 4.11968 16.1784 4.12128M15.8896 10.1918H15.7309V5.46736H15.7515C16.0787 5.43061 16.4097 5.48797 16.7036 5.63235C16.9189 5.79938 17.0943 6.00981 17.2178 6.24911C17.351 6.50096 17.4278 6.77737 17.4431 7.06015C17.4574 7.39937 17.4431 7.67691 17.4431 7.90666C17.449 8.17129 17.4314 8.43593 17.3907 8.69766C17.3408 8.96605 17.2504 9.22582 17.1226 9.46861C16.9781 9.69503 16.7807 9.88519 16.5465 10.0237C16.3509 10.1471 16.1189 10.2045 15.8864 10.1871M23.9428 4.15058H20.0868V11.5517H21.7181V8.61593H23.781V7.24056H21.7181V5.52596H23.9396V4.15058'
        fill='white'
      />
    </svg>
  );
};

export default PdfIcon;