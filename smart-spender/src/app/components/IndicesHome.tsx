import React from "react";

const indicesData = [
  { name: "NIFTY", value: "23,350.40", change: "+159.75 (0.69%)" },
  { name: "SENSEX", value: "76,905.51", change: "+557.45 (0.73%)" },
  { name: "BANKNIFTY", value: "50,593.55", change: "+530.70 (1.06%)" },
];

const Indices = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="pb-2 text-xl w-auto font-semibold text-zinc-400">
            Indices
          </div>
          <a href="#" className="text-zinc-600 pr-3 pb-2 text-sm">
            All indices
          </a>
        </div>
        <div className="h-[1px] align-center bg-gradient-to-r from-neutral-700/70 to-zinc-900 mb-4"></div>
      </div>

      <div className="flex space-x-4 overflow-x-auto">
        {indicesData.map((index, idx) => {
          const isPositive = index.change.startsWith("+");

          return (
            <div
              key={idx}
              className="bg-zinc-800/50 p-4 rounded-lg min-w-[200px]"
            >
              <p className="text-sm text-gray-400">{index.name}</p>
              <p className="text-lg font-semibold text-zinc-300">
                {index.value}
              </p>
              <p
                className={`text-sm ${
                  isPositive ? "text-green-400" : "text-red-400"
                }`}
              >
                {index.change}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Indices;
