"use client";

import React from "react";
import { NewsFeed } from "./news/NewsFeed";
import { Agenda } from "./sidebar/Agenda";
import Reports from "./sidebar/Reports";
import { HelpMaterials } from "./sidebar/HelpMaterials";
import { ExternalLink, TrendingDown, TrendingUp } from "lucide-react";

export const DashboardContent: React.FC = () => {
  return (
    <div className="w-full gap-6 h-full">
      {/* Main Content Area */}
      <div className="space-y-6">
        {/* Row 1: Performance & 4 Stats Cards */}
        <div className="grid grid-cols-1 gap-6">
          <div className="self-stretch inline-flex justify-start items-center gap-3 lg:grid lg:grid-cols-2 lg:gap-6 lg:flex lg:flex-row">
            {/* Performance Section - takes 1/2 of dashboard content width */}
            <div className="w-full h-72 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden shadow-sm">
            
              <div className="w-40 h-40 left-[23px] top-[16px] absolute relative">
                {/* Semicircular gauge with squared corners and thicker stroke */}
                <svg width="160" height="80" viewBox="0 0 160 80" className="absolute top-0 left-0">
                  {/* Background arc */}
                  <path
                    d="M20,70 A60,60 0 0,1 140,70"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                    strokeLinecap="butt"
                  />
                  {/* Value arc */}
                  <path
                    d="M20,70 A60,60 0 0,1 140,70"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="16"
                    strokeLinecap="butt"
                    strokeDasharray={`${(63 / 100) * Math.PI * 60} ${Math.PI * 60}`}
                    strokeDashoffset={-Math.PI * 60}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">63%</span>
                  <div className="left-[70px] top-[200px]  justify-start text-black/40 text-xs leading-5">Performance</div>
                </div>
              </div>
              <div className="w-44 left-[228px] top-[16px] absolute inline-flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-[5px] w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-3 inline-flex justify-start items-center gap-px">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <div
                          key={index}
                          className={`w-full h-4 ${index < 10 ? "bg-blue-600" : "bg-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-right justify-start text-black text-xs font-semibold leading-5 flex-shrink-0">58%</div>
                  </div>
                  <div className="w-full inline-flex justify-start items-center">
                    <div className="justify-start text-black/70 text-xs leading-5">Guy Hawkins</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-[5px] w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-3 inline-flex justify-start items-center gap-px">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <div
                          key={index}
                          className={`w-full h-4 ${index < 9 ? "bg-blue-600" : "bg-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-right justify-start text-black text-xs font-semibold leading-5 flex-shrink-0">44%</div>
                  </div>
                  <div className="w-full inline-flex justify-start items-center">
                    <div className="justify-start text-black/70 text-xs leading-5">Dianne Russell</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-[5px] w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-3 inline-flex justify-start items-center gap-px">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <div
                          key={index}
                          className={`w-full h-4 ${index < 3 ? "bg-red-500" : "bg-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-right justify-start text-black text-xs font-semibold leading-5 flex-shrink-0">13%</div>
                  </div>
                  <div className="w-full inline-flex justify-start items-center">
                    <div className="justify-start text-black/70 text-xs leading-5">Jenny Wilson</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-[5px] w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-3 inline-flex justify-start items-center gap-px">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <div
                          key={index}
                          className={`w-full h-4 ${index < 7 ? "bg-green-500" : "bg-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-right justify-start text-black text-xs font-semibold leading-5 flex-shrink-0">36%</div>
                  </div>
                  <div className="w-full inline-flex justify-start items-center">
                    <div className="justify-start text-black/70 text-xs leading-5">Kathryn Murphy</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-[5px] w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-3 inline-flex justify-start items-center gap-px">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <div
                          key={index}
                          className={`w-full h-4 ${index < 10 ? "bg-blue-600" : "bg-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-right justify-start text-black text-xs font-semibold leading-5 flex-shrink-0">48%</div>
                  </div>
                  <div className="w-full inline-flex justify-start items-center">
                    <div className="justify-start text-black/70 text-xs leading-5">Floyd Miles</div>
                  </div>
                </div>
              </div>
              <div className="w-48 h-0 left-[212px] top-0 absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-black/10"></div>
              <div data-destructive="False" data-icons-left="false" data-icons-right="true" data-input-action="false" data-state="Filled" data-tags-bar="false" className="w-44 px-2 py-1.5 left-[16px] top-[260px] absolute bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="self-stretch flex justify-center items-center gap-2">
                  <div className="text-right justify-center text-zinc-700 text-xs font-medium  leading-4">View details</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </div>
              <div className="left-[16px] top-[200px] absolute inline-flex justify-start items-center gap-7">
                <div className="inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                    <div className="w-3.5 h-3.5 relative">
                      <div className="w-3 h-0.5 left-[1.17px] top-[6.42px] absolute bg-red-500" />
                    </div>
                    <div className="justify-start text-black/50 text-[10px]   leading-5">Poor perf.</div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-1.5">
                    <div className="w-3.5 h-3.5 relative">
                      <div className="w-3 h-0.5 left-[1.17px] top-[6.42px] absolute bg-blue-600" />
                    </div>
                    <div className="justify-start text-black/50 text-[10px]   leading-5">Better perf.</div>
                  </div>
                </div>
                <div className="inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                    <div className="w-3.5 h-3.5 relative">
                      <div className="w-3 h-0.5 left-[1.17px] top-[6.42px] absolute bg-green-500" />
                    </div>
                    <div className="justify-start text-black/50 text-[10px]   leading-5">Similar perf.</div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-1.5">
                    <div className="w-3.5 h-3.5 relative">
                      <div className="w-3 h-0.5 left-[1.17px] top-[6.42px] absolute bg-amber-500" />
                    </div>
                    <div className="justify-start text-black/50 text-[10px]   leading-5">Super perf.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards Section - takes 1/2 of dashboard content width with 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="w-56 h-36 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden shadow-sm">
                <div className="left-[16px] top-[18px] absolute inline-flex flex-col justify-center items-start gap-3.5">
                  <div className="w-40 inline-flex justify-between items-center">
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Activities</div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <div className="justify-start text-zinc-700 text-3xl font-semibold  leading-6">5.715</div>
                  <div className="inline-flex justify-start items-center gap-[3px]">
                    <TrendingDown className="w-3.5 h-3.5 text-red-600" />
                    <div className="justify-start text-red-600 text-xs font-medium  leading-5">-0,10%</div>
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Since last month</div>
                  </div>
                </div>
              </div>
              <div className="w-56 h-36 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden shadow-sm">
                <div className="left-[16px] top-[18px] absolute inline-flex flex-col justify-center items-start gap-3.5">
                  <div className="w-40 inline-flex justify-between items-center">
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Orders / Jobs</div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <div className="justify-start text-zinc-700 text-3xl font-semibold  leading-6">1.510</div>
                  <div className="inline-flex justify-start items-center gap-[3px]">
                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                    <div className="justify-start text-green-500 text-xs font-bold  leading-5">+165</div>
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Since last month</div>
                  </div>
                </div>
              </div>
              <div className="w-56 h-36 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden shadow-sm">
                <div className="left-[16px] top-[18px] absolute inline-flex flex-col justify-center items-start gap-3.5">
                  <div className="w-40 inline-flex justify-between items-center">
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Opportunity</div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <div className="justify-start text-zinc-700 text-3xl font-semibold  leading-6">523</div>
                  <div className="inline-flex justify-start items-center gap-[3px]">
                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                    <div className="justify-start text-green-500 text-xs font-bold  leading-5">+123</div>
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Since last month</div>
                  </div>
                </div>
              </div>
              <div className="w-56 h-36 relative bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden shadow-sm">
                <div className="left-[16px] top-[18px] absolute inline-flex flex-col justify-center items-start gap-3.5">
                  <div className="w-40 inline-flex justify-between items-center">
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Sales implementation</div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <div className="justify-start text-zinc-700 text-3xl font-semibold  leading-6">915</div>
                  <div className="inline-flex justify-start items-center gap-[3px]">
                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                    <div className="justify-start text-green-500 text-xs font-bold  leading-5">+65</div>
                    <div className="justify-start text-black/50 text-xs font-medium  leading-5">Since last month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: News Feed */}
        <NewsFeed />
      </div>

    </div>
  );
};