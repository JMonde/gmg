import React from "react";

// Mock data generation - will be replaced with API data in the future
const generateMockSalesData = () => {
  const names = ["Guy Hawkins", "Dianne Russell", "Jenny Wilson", "Kathryn Murphy", "Floyd Miles"];
  return Array.from({ length: 5 }, (_, index) => ({
    name: names[index],
    percentage: Math.floor(Math.random() * 40) + 60, // Random percentage between 60-100
    target: 100,
  }));
};

export const SalesPerformanceCard: React.FC = () => {
  const salesData = generateMockSalesData();

  return (
    <div className="bg-brand-white rounded-lg px-4 pt-4 pb-2">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div>
          <h2 className="text-brand-gray-600 text-base font-medium font-sans">Activities</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-3xl font-bold text-brand-gray-900 font-sans">5.715</span>
            <span className="text-sm text-red-600 flex items-center gap-1">
              <span>🔻</span>
              -0,10% Since last month
            </span>
          </div>
        </div>
      </div>

      <div className="divide-brand-gray-200 divide-y">
        {salesData.map((person, index) => (
          <div key={index} className="hover:bg-brand-gray-100 flex cursor-pointer items-center gap-3 rounded px-1 py-2">
            <div className="w-8 h-8 bg-brand-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-brand-gray-600">
              {person.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-brand-gray-600 text-sm font-normal font-sans truncate">{person.name}</span>
                <span className="text-brand-gray-600 text-sm font-normal font-sans">{person.percentage}%</span>
              </div>
              <div className="relative">
                <div className="w-full bg-brand-gray-200 rounded-full h-2">
                  <div
                    className="bg-brand-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${person.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
