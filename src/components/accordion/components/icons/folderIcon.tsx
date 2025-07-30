import React from "react";

interface FolderIconProps {
  size?: number;
  color?: string;
}

export const FolderIcon: React.FC<FolderIconProps> = (
  { color = "#FFB86A" } // Default orange-300
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="16"
    viewBox="0 0 14 12"
    fill="none"
  >
    <path
      d="M13.6666 3.33333V11.3333C13.6666 11.7015 13.3681 12 12.9999 12H0.999919C0.631732 12 0.333252 11.7015 0.333252 11.3333V2.66667H12.9999C13.3681 2.66667 13.6666 2.96515 13.6666 3.33333ZM7.27605 1.33333H0.333252V0.666667C0.333252 0.29848 0.631732 0 0.999919 0H5.94272L7.27605 1.33333Z"
      fill={color}
    />
  </svg>
);
