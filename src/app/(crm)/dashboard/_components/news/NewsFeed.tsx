"use client";

import React, { Fragment } from "react";
import { Filter } from "lucide-react";

const newsItems = [
  {
    id: 1,
    day: "23",
    month: "Mar",
    text: "For Jeff Karsten Lilia added task/activity Accept invoice: Crawford",
    time: "Last week (Mar 20) 4:35 pm",
    isHighlighted: false
  },
  {
    id: 2,
    day: "22",
    month: "Mar",
    text: "Western Feed Mills - Cedar Vale - Chaurauqua",
    time: "Last week (Mar 20) 4:35 pm",
    isHighlighted: true,
    details: [
      "Farmers Cooperative Association - Baxter Springs - Cherokee - (620) 8562365",
      "Kephart Feed and Farm Supply - Galesburg - Neosho", 
      "For Jeff Karsten Lilia added task/activity Accept invoice: Crawford"
    ]
  },
  {
    id: 3,
    day: "21",
    month: "Mar",
    text: "For David Wilson Anna scheduled meeting Client presentation",
    time: "Last week (Mar 20) 4:35 pm",
    isHighlighted: false
  },
  {
    id: 4,
    day: "20",
    month: "Mar",
    text: "For Emily Davis John updated status Project milestone achieved",
    time: "Last week (Mar 20) 4:35 pm",
    isHighlighted: false
  },
  {
    id: 5,
    day: "19",
    month: "Mar",
    text: "For Robert Brown Lisa added note Client feedback received",
    time: "Last week (Mar 20) 4:35 pm",
    isHighlighted: false
  }
];

export const NewsFeed: React.FC = () => {
  return (
    <div className="self-stretch h-[497px] bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
      <div className="px-[16px] pt-[16px] pb-0 w-full inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="justify-start text-black text-sm font-semibold leading-5 line-clamp-1">News Feed</div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="w-20 px-2 py-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex-1 self-stretch flex justify-center items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-500" />
              <div className="justify-center text-zinc-700 text-xs font-medium leading-4">Filter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[16px] pt-[16px] pb-0 w-full flex flex-col justify-start items-start gap-2 overflow-x-hidden">
        {newsItems.map((item) => (
          item.isHighlighted ? (
            <div key={item.id} className="self-stretch h-48 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-100">
              <div className="w-14 h-14 left-[1px] top-[1px] absolute bg-blue-50 rounded-tl-[10px]" />
              <div className="w-full left-[16px] top-[6px] absolute inline-flex justify-start items-center gap-5">
                <div className="w-6 inline-flex flex-col justify-start items-center">
                  <div className="self-stretch text-center justify-start text-blue-700 text-xl font-bold leading-8">{item.day}</div>
                  <div className="self-stretch text-center justify-start text-blue-600 text-xs font-medium leading-4">{item.month}</div>
                </div>
                <div className="flex-1 self-stretch flex justify-start items-center gap-4">
                  <div className="flex-1 justify-start text-zinc-700 text-base font-medium leading-6">{item.text}</div>
                  <div className="text-right justify-start text-neutral-500 text-xs font-normal leading-4">{item.time}</div>
                </div>
              </div>
              <div className="w-full h-32 left-[1px] top-[56px] absolute opacity-40 bg-neutral-50 rounded-bl-lg rounded-br-lg shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.08)]" />
              <div className="w-[calc(100%-30px)] left-[15px] top-[70px] absolute flex flex-col justify-start items-start gap-2">
                {item.details?.map((detail, idx) => (
                  <Fragment key={idx}>
                    <div className="self-stretch justify-start text-zinc-700 text-sm font-medium leading-6 line-clamp-2">{detail}</div>
                    {idx < item.details.length - 1 && (
                      <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-200"></div>
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="w-full h-0 left-0 top-[56px] absolute outline outline-1 outline-offset-[-0.50px] outline-blue-100"></div>
            </div>
          ) : (
            <div key={item.id} className="self-stretch h-14 px-4 py-3.5 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-100 inline-flex justify-start items-center gap-5">
              <div className="w-14 h-14 left-[1px] top-[1px] absolute bg-blue-50 rounded-tl-[10px] rounded-bl-[10px]" />
              <div className="w-6 inline-flex flex-col justify-start items-center">
                <div className="self-stretch text-center justify-start text-blue-700 text-xl font-bold leading-8">{item.day}</div>
                <div className="self-stretch text-center justify-start text-blue-600 text-xs font-medium leading-4">{item.month}</div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <div className="flex-1 justify-start text-zinc-700 text-base font-medium leading-6">{item.text}</div>
                  <div className="text-right justify-start text-neutral-500 text-xs font-normal leading-4">{item.time}</div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};
