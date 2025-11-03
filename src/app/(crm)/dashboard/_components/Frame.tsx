import React from "react";
import { ArrowDownload } from "./ArrowDownload";
import { FieldFrame } from "./FieldFrame";
import { Open } from "./Open";
import { StyleFilledTypeDefault } from "./StyleFilledTypeDefault";
import { StyleOutlinedTypeLtr } from "./StyleOutlinedTypeLtr";

interface FrameProps {
  className?: string;
}

export const Frame: React.FC<FrameProps> = ({ className = "" }) => {
  return (
    <div className="flex w-full max-w-full items-end justify-between relative flex-wrap gap-4 overflow-hidden">
      <div className="inline-flex items-end gap-2 relative flex-[0_0_auto] min-w-0">
        <div className="flex flex-col min-w-0 items-start gap-0.5 relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist-Medium',Helvetica] font-medium text-gray-400 text-xs tracking-[0.12px] leading-4">
            Hi Marvin,
          </div>

          <div className="relative self-stretch [font-family:'Geist-Medium',Helvetica] font-medium text-gray-600 text-[22px] tracking-[0] leading-6">
            Good morning!
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-white rounded-md border border-solid border-gray-200 min-w-0 max-w-xs">
          <StyleFilledTypeDefault
            className="!relative !w-3 !h-3"
            color="#FAAD14"
          />
          <p className="relative flex-1 mt-[-1.00px] font-normal text-gray-600 text-xs leading-4 truncate min-w-0">
            <span className="text-gray-500">
              You have 12 pending tasks check it{" "}
            </span>
            <span className="font-medium text-gray-900 underline cursor-pointer">
              here
            </span>
          </p>

          <Open className="!relative !w-3 !h-3" color="#292929" />
        </div>
      </div>

      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] min-w-0">
        <FieldFrame
          className="!border-gray-200 !h-[unset] !left-[unset] !px-3 !py-2 !w-auto !min-w-[160px] !max-w-[200px] !top-[unset]"
          destructive={false}
          divClassName="!px-2 !py-1 ![align-self:unset] !mr-[-0.50px] !mt-[unset] !ml-[-0.50px] !flex-[unset] !truncate !w-fit"
          icon={
            <StyleOutlinedTypeLtr
              className="!relative !w-[18px] !h-[18px]"
              color="#61646C"
            />
          }
          iconsLeft={false}
          stateProp="filled"
          text="1 March - 31 March 2025"
        />
        <div className="flex w-[90px] items-center justify-center gap-2 px-3 py-2 relative bg-white rounded-md overflow-hidden border border-solid border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 relative flex-1 self-stretch grow">
            <ArrowDownload
              className="!relative !w-[16px] !h-[16px] !aspect-[1]"
              color="#61646C"
            />
            <div className="relative flex items-center justify-center w-fit font-medium text-gray-600 text-sm leading-4 whitespace-nowrap">
              Export
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
