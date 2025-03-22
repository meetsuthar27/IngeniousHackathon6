import { useState, useEffect } from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const tips = [
  "Consistency beats motivation. Show up daily.",
  "Success is a sum of small efforts repeated daily.",
  "Progress, not perfection. Keep moving forward.",
  "Resting is part of the process, not quitting.",
  "Discipline will take you places motivation won't.",
];

export default function TipsCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex-col mx-auto rounded-2xl">
      <div className="pb-2 text-xl w-auto font-semibold text-zinc-400">
        Tips from AI
      </div>
      <div className="h-[1px] align-center bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>
      <div className="flex flex-col items-center justify-center text-center space-between">
        <div className="flex flex-grow flex-col items-center text-center">
          {/* <FaQuoteLeft className="text-3xl text-gray-400 mb-2" /> */}
          <p className="text-lg font-medium">{tips[index]}</p>
          {/* <FaQuoteRight className="text-3xl text-gray-400 mt-2" /> */}
        </div>

        {/* Indicators */}
        <div className="flex mt-5 gap-1">
          {tips.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full  transition-all ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
