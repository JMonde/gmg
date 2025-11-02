import React from "react";

interface GaugeChartProps {
  value?: number; // Percentage value (0-100)
  size?: number;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value = 63,
  size = 200
}) => {
  // Calculate the arc path based on percentage
  const percentage = Math.max(0, Math.min(100, value));
  const angle = (percentage / 100) * 180 - 90; // Convert to angle (-90 to 90 degrees)
  const radians = (angle * Math.PI) / 180;

  // Calculate end point of the arc
  const centerX = size / 2;
  const centerY = 100;
  const radius = 80;
  const startX = centerX - radius;
  const startY = centerY;
  const endX = centerX + radius * Math.cos(radians);
  const endY = centerY + radius * Math.sin(radians);

  // Create the arc path
  const largeArcFlag = percentage > 50 ? 1 : 0;
  const arcPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

  return (
    <div className="relative w-48 h-32 mx-auto">
      {/* Gauge SVG */}
      <svg
        viewBox={`0 0 ${size} 120`}
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
      >
        {/* Background arc */}
        <path
          d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Performance arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Center text */}
        <text
          x={centerX}
          y="85"
          textAnchor="middle"
          className="text-2xl font-bold fill-gray-900"
        >
          {percentage}%
        </text>
        <text
          x={centerX}
          y="105"
          textAnchor="middle"
          className="text-sm fill-gray-600"
        >
          Performance
        </text>
      </svg>
    </div>
  );
};
