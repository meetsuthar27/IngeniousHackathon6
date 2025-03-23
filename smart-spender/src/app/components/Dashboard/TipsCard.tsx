import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const stockTips = [
  {
    title: "Trend Momentum",
    tip: "Reliance and Infosys show positive momentum; short-term traders may consider riding the trend with stop-loss protection.",
  },
  {
    title: "Dip Buying",
    tip: "TCS and HDFC Bank have dropped; long-term investors might see this as a buying opportunity if fundamentals remain strong.",
  },
  {
    title: "Volatility Alert",
    tip: "HDFC Bank's -12% daily move suggests high volatility; cautious trading with strict risk management is advised.",
  },
  {
    title: "Sector Diversification",
    tip: "Tech-heavy investments (TCS, INFY) could be balanced with defensive stocks like ITC for stability.",
  },
  {
    title: "Profit-Taking",
    tip: "Stocks like Reliance and ITC, which show gains, could be partially booked to secure profits and reinvest in undervalued opportunities.",
  },
];

export default function TipsCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stockTips.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex-col mx-auto rounded-2xl">
      <div className="pb-2 flex gap-3 text-xl w-auto font-semibold text-zinc-400">
        Tips from AI
        <span className="relative flex top-2 size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-emerald-600"></span>
        </span>
      </div>
      <div className="h-[1px] align-center bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>
      <div className="flex flex-col items-center justify-center text-center space-between">
        <div className="flex flex-grow flex-col items-center text-center p-4 border border-zinc-700 rounded-lg bg-zinc-800/50 w-full text-gray-300 font-light text-sm">
          {/* <FaQuoteLeft className="text-3xl text-gray-400 mb-2" /> */}
          <h3 className="text-xl font-semibold text-white mb-1">
            {stockTips[index].title}
          </h3>
          <p className="text-lg text-zinc-500 font-light">
            {stockTips[index].tip}
          </p>
          {/* <FaQuoteRight className="text-3xl text-gray-400 mt-2" /> */}
        </div>

        {/* Indicators */}
        <div className="flex mt-4 gap-1">
          {stockTips.map((_, i) => (
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
