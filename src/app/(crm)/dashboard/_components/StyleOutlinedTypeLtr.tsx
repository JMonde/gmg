import React from "react";

interface StyleOutlinedTypeLtrProps {
  className?: string;
  color?: string;
}

export const StyleOutlinedTypeLtr: React.FC<StyleOutlinedTypeLtrProps> = ({ className, color = "#61646C" }) => {
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
        d="M4.5 7.5H6V9H4.5V7.5ZM7.5 7.5H9V9H7.5V7.5ZM10.5 7.5H12V9H10.5V7.5ZM13.5 7.5H15V9H13.5V7.5ZM3 10.5H15V12H3V10.5ZM3 4.5H4.5V3H6V4.5H12V3H13.5V4.5H15C15.4125 4.5 15.7656 4.64688 16.0594 4.94063C16.3531 5.23438 16.5 5.5875 16.5 6V15C16.5 15.4125 16.3531 15.7656 16.0594 16.0594C15.7656 16.3531 15.4125 16.5 15 16.5H3C2.5875 16.5 2.23438 16.3531 1.94063 16.0594C1.64688 15.7656 1.5 15.4125 1.5 15V6C1.5 5.5875 1.64688 5.23438 1.94063 4.94063C2.23438 4.64688 2.5875 4.5 3 4.5ZM3 6V15H15V6H3Z"
        fill={color}
      />
    </svg>
  );
};
