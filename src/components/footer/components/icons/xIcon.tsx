import React from 'react';

export const XIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={`${size}`}
    height={`${size}`}
    viewBox="0 0 48 48"
  >
    <polygon fill="#62748E" points="41,6 9.929,42 6.215,42 37.287,6"></polygon>
    <polygon
      fill="#020618"
      fillRule="evenodd"
      points="31.143,41 7.82,7 16.777,7 40.1,41"
      clipRule="evenodd"
    ></polygon>
    <path
      fill="#62748E"
      d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
    ></path>
  </svg>
);
