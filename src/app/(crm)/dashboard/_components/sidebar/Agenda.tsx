import React from "react";

const agendaItems = [
  {
    time: "1:30 PM",
    text: "For Jeff Karsten Lilia added task/activity Accept invoice: Crawford"
  },
  {
    time: "2:00 PM",
    text: "Team meeting - Q1 planning discussion"
  },
  {
    time: "3:15 PM",
    text: "Client call - Sarah Johnson project review"
  },
  {
    time: "4:00 PM",
    text: "For David Wilson Anna scheduled meeting Client presentation"
  },
  {
    time: "4:30 PM",
    text: "Internal review - Project milestone check"
  }
];

export const Agenda: React.FC = () => {
  return (
    <div className="bg-brand-white rounded-lg px-4 pt-4 pb-2 mb-6">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-brand-gray-600 text-base font-medium">Agenda</h2>
        <select className="px-3 py-2 text-sm border border-brand-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>All users</option>
          <option>My tasks</option>
          <option>Team tasks</option>
        </select>
      </div>

      <div className="mb-4">
        <div className="text-3xl font-bold text-brand-gray-900">324</div>
        <div className="text-sm text-brand-gray-600">tasks for March 2025</div>
        <div className="text-sm text-green-600 font-medium mt-1">+2.5%</div>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 text-sm font-medium text-white bg-brand-primary-600 rounded-full hover:bg-brand-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary-500">
          Show completed
        </button>
        <button className="px-4 py-2 text-sm font-medium text-brand-gray-700 bg-brand-white border border-brand-gray-300 rounded-full hover:bg-brand-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary-500">
          View details
        </button>
      </div>

      <div className="divide-brand-gray-200 divide-y max-h-80 overflow-y-auto">
        {agendaItems.map((item, index) => (
          <div key={index} className="hover:bg-brand-gray-100 flex cursor-pointer items-start justify-between rounded px-1 py-2">
            <div className="flex-1 min-w-0 pr-3">
              <p className="text-brand-gray-600 text-sm font-normal leading-relaxed">
                {item.text}
              </p>
            </div>
            <div className="text-xs text-brand-gray-500 font-medium whitespace-nowrap">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
