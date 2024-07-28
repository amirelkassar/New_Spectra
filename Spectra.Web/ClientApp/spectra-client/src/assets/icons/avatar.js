import React from "react";

function AvatarIcon({className}) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="24" fill="#113361" />
      <circle cx="24" cy="16" r="13" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.3107 43.4979C30.0241 43.3681 40.0607 40.8981 41.153 35.0722C42.2759 29.0838 36.0067 28.2893 32.7317 29.458C32.3842 29.5821 31.9909 29.7271 31.5677 29.883C29.3628 30.6959 26.3484 31.8071 24.7783 31.8071C22.1128 31.8071 18.1389 30.3837 15.8964 29.5805C15.7773 29.5378 15.6631 29.4969 15.5542 29.458C12.2792 28.2893 6.01004 29.0838 7.13288 35.0722C8.25572 41.0607 19.1641 43.9712 24.3104 43.5033L24.3107 43.4979Z"
        fill="white"
      />
    </svg>
  );
}

export default AvatarIcon;
