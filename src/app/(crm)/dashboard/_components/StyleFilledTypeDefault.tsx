import React from "react";

interface StyleFilledTypeDefaultProps {
  className?: string;
  color?: string;
}

export const StyleFilledTypeDefault: React.FC<StyleFilledTypeDefaultProps> = ({ className, color = "#FAAD14" }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill={color} />
    </svg>
  );
};
