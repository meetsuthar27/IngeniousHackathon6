import React from "react";

interface GaugeProps {
  value: number; // Value between 0 and 100
}

const RiskCard: React.FC<GaugeProps> = ({ value }) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  // Convert value (0-100) to rotation (-90° to 90°)
  const needleRotation = (clampedValue / 100) * 180 - 90;

  return (
    <div className="relative flex aspect-[2] w-2/3 items-center justify-center overflow-hidden rounded-t-full rounded-b-xl">
      {/* Background gradient segments */}
      <div className="absolute top-0 aspect-square w-full rotate-[-90deg] bg-gradient-to-tr from-red-400 to-transparent"></div>
      {/* <div className="absolute top-0 aspect-square w-full rotate-[0deg] bg-gradient-to-tr from-yellow-400 to-transparent"></div> */}
      <div className="absolute border-[1px] border-white/40 rounded-full top-0 aspect-square w-full rotate-[0deg] bg-gradient-to-r from-emerald-600 via-yellow-400 to-red-800"></div>

      {/* Actual gauge with border */}
      <div className="absolute inset-4 flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full border-[10px] border-b-0 border-gray-300 bg-white">
        {/* Needle */}
        <div
          className="absolute bottom-0 left-1/2 h-[80%] w-1 bg-red-500 rounded-full origin-bottom transition-transform duration-500"
          style={{ transform: `rotate(${needleRotation}deg)` }}
        ></div>
        {/* Center Circle */}
        <div className="absolute bottom-[-13px] left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-gray-600"></div>
      </div>

      {/* Value Display */}
      <div className="absolute top-[55%] w-full text-center text-3xl font-bold text-gray-700">
        {clampedValue}%
      </div>
    </div>
  );
};

export default RiskCard;
