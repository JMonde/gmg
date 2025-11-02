import React from "react";

interface ArrowDownloadProps {
  className?: string;
  color?: string;
}

export const ArrowDownload: React.FC<ArrowDownloadProps> = ({ className, color = "#61646C" }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12.375L4.5 7.875L5.55 6.825L8.25 9.525V3.75H9.75V9.525L12.45 6.825L13.5 7.875L9 12.375ZM3.75 15.75C3.3375 15.75 2.98438 15.6031 2.69063 15.3094C2.39688 15.0156 2.25 14.6625 2.25 14.25V12.75H3.75V14.25H14.25V12.75H15.75V14.25C15.75 14.6625 15.6031 15.0156 15.3094 15.3094C15.0156 15.6031 14.6625 15.75 14.25 15.75H3.75Z"
        fill={color}
      />
    </svg>
  );
};
