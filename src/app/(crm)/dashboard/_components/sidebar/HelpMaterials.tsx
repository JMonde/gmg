import React from "react";

const helpItems = [
  { icon: "❓", label: "Support" },
  { icon: "🔒", label: "Security & Terms of Service" },
  { icon: "💰", label: "Pricing & Features" },
  { icon: "❓", label: "FAQ" },
  { icon: "📚", label: "Tutorial" },
  { icon: "🎥", label: "Tutorial Videos" }
];

export const HelpMaterials: React.FC = () => {
  return (
    <div className="bg-brand-white rounded-lg px-4 pt-4 pb-2">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-brand-gray-600 text-base font-medium">Help Materials</h2>
        <button className="no-background">
          <span className="text-brand-primary-500 hover:bg-brand-gray-100 cursor-pointer rounded p-1 text-xs font-medium">
            Hide
          </span>
        </button>
      </div>

      <div className="divide-brand-gray-200 divide-y">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="hover:bg-brand-gray-100 flex cursor-pointer items-center gap-3 rounded px-1 py-2"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-brand-gray-600 text-sm font-normal">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
