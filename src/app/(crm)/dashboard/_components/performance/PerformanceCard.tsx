import React from "react";
import { GaugeChart } from "./GaugeChart";

const legendItems = [
  { color: "#3b82f6", label: "Super perf." },
  { color: "#1e40af", label: "Better perf." },
  { color: "#ef4444", label: "Poor perf." },
  { color: "#9ca3af", label: "Similar perf." },
];

export const PerformanceCard: React.FC = () => {
  return (
    <div className="bg-brand-white rounded-lg px-4 pt-4 pb-2">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-brand-gray-600 text-base font-medium">Performance</h2>
        <button className="no-background">
          <svg className="w-5 h-5 text-brand-gray-400 hover:text-brand-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center mb-4">
        <GaugeChart value={Math.floor(Math.random() * 40) + 60} />
      </div>

      <div className="divide-brand-gray-200 divide-y mb-4">
        {legendItems.map((item, index) => (
          <div key={index} className="hover:bg-brand-gray-100 flex cursor-pointer items-center gap-2 rounded px-1 py-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-brand-gray-600 text-sm font-normal">{item.label}</span>
          </div>
        ))}
      </div>

      <button className="no-background">
        <span className="text-brand-primary-500 hover:bg-brand-gray-100 cursor-pointer rounded p-1 text-xs font-medium">
          View details
        </span>
      </button>
    </div>
  );
};
