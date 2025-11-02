import React from "react";
import { StyleOutlinedTypeLtr } from "./StyleOutlinedTypeLtr";

interface FieldFrameProps {
  className?: string;
  destructive?: boolean;
  divClassName?: string;
  icon?: React.ReactNode;
  iconsLeft?: boolean;
  stateProp?: string;
  text?: string;
}

export const FieldFrame: React.FC<FieldFrameProps> = ({
  className,
  destructive = false,
  divClassName,
  icon,
  iconsLeft = false,
  stateProp = "filled",
  text = "1 March - 31 March 2025",
}) => {
  return (
    <div className={`flex items-center justify-between px-3 py-2 relative bg-white rounded-md border border-solid ${destructive ? 'border-red-500' : 'border-gray-200'} min-w-0 ${className}`}>
      <div className={`flex items-center gap-2 relative flex-1 ${divClassName}`}>
        {iconsLeft && icon}
        <div className="relative flex-1 font-normal text-gray-600 text-sm leading-4 truncate">
          {text}
        </div>
        {!iconsLeft && icon}
      </div>
      {!icon && <StyleOutlinedTypeLtr className="!relative !w-[18px] !h-[18px]" color="#61646C" />}
    </div>
  );
};
