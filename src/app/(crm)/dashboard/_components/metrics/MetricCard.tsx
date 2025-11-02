import React from "react";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, icon }) => {
  return (
    <div className="bg-brand-white rounded-lg px-4 pt-4 pb-2">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-brand-gray-600 text-base font-medium font-sans">{title}</h2>
        <div className="text-brand-gray-400">
          {icon}
        </div>
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold text-brand-gray-900 font-sans">{value}</span>
      </div>

      <div className="text-sm text-green-600 font-medium font-sans">
        {trend}
      </div>
    </div>
  );
};
