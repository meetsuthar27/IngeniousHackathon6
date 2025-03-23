"use client";

import { useState } from "react";
import { FaArrowRight, FaGlobe, FaChartLine, FaBuilding } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
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
    headline: "Tech Stocks Surge as AI Developments Gain Traction",
    category: "Global Markets",
    topic: "AI Market Growth",
    insight: "AI suggests a bullish trend in tech stocks.",
    details:
      "Recent advancements in artificial intelligence have led to a surge in tech stock prices. Investors are optimistic...",
    source: "International News",
  },
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
    headline: "Tech Stocks Surge as AI Developments Gain Traction",
    category: "Corporate",
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
    headline: "RBI Announces New Policy for Digital Payments",
    category: "Banking",
    topic: "India's Financial Sector",
    insight: "AI suggests monitoring banking stocks for potential shifts.",
    details:
      "The Reserve Bank of India has introduced a new framework for digital payments aimed at enhancing security and efficiency...",
    source: "Indian News",
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
    headline: "RBI Announces New Policy for Digital Payments",
    category: "Investment",
    topic: "India's Financial Sector",
    insight: "AI suggests monitoring banking stocks for potential shifts.",
    details:
      "The Reserve Bank of India has introduced a new framework for digital payments aimed at enhancing security and efficiency...",
    source: "Indian News",
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
  // Add more news items...
];

const Page = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (news) => setSelectedNews(news);
  const closeModal = () => setSelectedNews(null);

  return (
    <div className="min-h-screen bg-zinc-900 pt-24 dark:bg-zinc-900 p-6 font-[Manrope]">
      <div className="text-center align-center mb-3">
        <h1 className="text-4xl mt-3 mb-2 font-bold text-gray-900 dark:text-zinc-300 tracking-tight">
          AI-Based Stock Recommendations
        </h1>
        <div className="dark:bg-[var(--acc)]/10 mx-[33em] rounded-full">
          <p className="text-black dark:text-[var(--acc)]/40 p-1 mt-2">
            These recommendations are based on the latest news and AI insights.
          </p>
        </div>
      </div>
      <div className="h-[1px] align-center bg-gradient-to-r from-neutral-700/70 to-zinc-900 mb-4"></div>

      {/* Sections */}
      {["International News", "Indian News"].map((section) => (
        <div key={section} className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-300 mb-4">
            Based on {section}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newsData
              .filter((news) => news.source === section)
              .map((news, index) => {
                const Icon = categories[news.category];
                return (
                  <div
                    key={index}
                    className="bg-white/40 dark:bg-zinc-800/40 dark:border-zinc-700/40 border-[1px] shadow-md p-4 rounded-lg flex flex-col justify-between"
                  >
                    <div className="flex items-center mb-3">
                      <Icon className="text-blue-600/50 dark:text-[var(--acc)]/50 text-2xl mr-2" />
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {news.category}
                      </span>
                    </div>
                    <div className="h-[1px] align-center bg-gradient-to-r from-neutral-700/70 to-zinc-800/40 mb-4"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {news.headline}
                    </h3>
                    <div className="flex flex-wrap">
                      <p className="text-gray-600 text-sm dark:text-[var(--acc)]/40 dark:bg-[var(--acc)]/10 text-sm mt-1 px-3 py-1 rounded-full">
                        {news.topic}
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                      {news.insight}
                    </p>
                    <button
                      onClick={() => openModal(news)}
                      className="mt-3 flex text-xs align-right items-center text-blue-600 dark:text-blue-400 font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-400"
            >
              <MdClose className="text-2xl" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {selectedNews.headline}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {selectedNews.details}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
