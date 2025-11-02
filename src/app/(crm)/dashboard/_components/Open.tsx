import React from "react";

interface OpenProps {
  className?: string;
  color?: string;
}

export const Open: React.FC<OpenProps> = ({ className, color = "#292929" }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5H3Z"
        fill={color}
      />
    </svg>
  );
};
