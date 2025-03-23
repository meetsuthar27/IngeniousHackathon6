"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { LuChartSpline } from "react-icons/lu";
import { AiOutlineBank } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";

const categories = {
  "Global Markets": FiGlobe,
  "Stock Trends": LuChartSpline,
  Corporate: FaUserTie,
  Banking: AiOutlineBank,
  Investment: FaMoneyBill,
};

const newsData = [
  {
    headline: "Tech Stocks Surge as AI Developments Gain Traction",
    category: "Stock Trends",
    topic: "AI Market Growth",
    insight: "AI suggests a bullish trend in tech stocks.",
    details:
      "Recent advancements in artificial intelligence have led to a surge in tech stock prices. Investors are optimistic...",
    source: "International News",
  },
  {
    headline: "RBI Announces New Policy for Digital Payments",
    category: "Banking",
    topic: "India's Financial Sector",
    insight: "AI suggests monitoring banking stocks for potential shifts.",
    details:
      "The Reserve Bank of India has introduced a new framework for digital payments aimed at enhancing security and efficiency...",
    source: "Indian News",
  },
  {
    headline: "Global Markets Respond to Fed Rate Hike",
    category: "Global Markets",
    topic: "Interest Rates Impact",
    insight: "Markets show mixed reactions to the recent Fed policy changes.",
    details:
      "The Federal Reserve has increased interest rates again in an attempt to curb inflation, affecting various markets...",
    source: "Economic Times",
  },
  {
    headline: "Investment Trends Shift Amid Economic Uncertainty",
    category: "Investment",
    topic: "Market Volatility",
    insight: "Investment strategies are shifting towards safer assets.",
    details:
      "As uncertainty grows in global markets, investors are moving their portfolios towards bonds and gold...",
    source: "Financial Express",
  },
];

const NewsCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-zinc-900 font-[Manrope] overflow-hidden max-w-[67em]">
      <div className="pb-2 text-xl text-zinc-400 font-semibold">
        Latest News
      </div>
      <div className="h-[1px] bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: isHovered ? 0 : ["0%", "-100%"] }} // Moves left infinitely
          transition={{
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Render Two Sets of News for Smooth Looping */}
          {[...newsData, ...newsData].map((news, index) => {
            const Icon = categories[news.category];

            return (
              <div
                key={index}
                className="w-64 min-w-[250px] bg-white/40 dark:bg-zinc-800/60 border-[1px] border-zinc-800 shadow-md p-4 rounded-xl flex flex-col text-sm justify-between"
              >
                <div className="flex items-center mb-2">
                  <Icon className="text-blue-600/50 dark:text-[var(--acc)]/50 text-2xl mr-2" />
                  <span className="text-gray-800 dark:text-gray-300 text-sm font-medium">
                    {news.category}
                  </span>
                </div>
                <div className="h-[1px] bg-gradient-to-r from-neutral-700/70 to-zinc-800/40 mb-4"></div>
                <h3 className="text-md font-regular text-gray-900 dark:text-zinc-200">
                  {news.headline}
                </h3>
                <p className="text-gray-700 dark:text-zinc-400 text-sm mt-2">
                  {news.insight}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsCard;
