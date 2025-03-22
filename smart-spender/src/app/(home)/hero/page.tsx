"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import ShinyText from "../../components/animation/ShinyText";
import AnimatedContent from "../../components/animation/AnimatedContent";

// Dummy stock data (Replace with API later)
const stockData = [
  { symbol: "AAPL", price: "180.23", change: "+1.5%" },
  { symbol: "TSLA", price: "250.89", change: "-0.8%" },
  { symbol: "GOOGL", price: "2800.55", change: "+2.1%" },
  { symbol: "ETH", price: "3,200", change: "+0.5%" },
];

export default function HeroSection() {
  const [stocks, setStocks] = useState(stockData);
  const [index, setIndex] = useState(0);

  // Rotate stock data every 3 seconds (simulating real-time updates)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % stockData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black font-[Manrope]">
      <div className="absolute left-0 bottom-6 flex justify-center items-center">
        <div className="bg-[var(--acc)]  blur-[10rem] opacity-40 w-[1000px] h-[500px] rounded-full"></div>
      </div>
      <div className="absolute right-0 top-0 flex justify-center items-center">
        <div className="bg-[var(--acc)] blur-[10rem] opacity-40 w-[1000px] h-[200px] rounded-full"></div>
      </div>
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div className="flex  bg-zinc-950/50 backdrop-blur-2xl justify-center h-[800px] items-center ">
          <div>LOGO</div>
          <div className="justify-left">
            <h1 className="text-7xl font-black bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 inline-block text-transparent bg-clip-text tracking-tightest">
              FinAura.ai
            </h1>

            <p className="text-4xl mt-2 font-semibold text-gray-600 tracking-tight">
              A crazy solution for Stock market rookies!
            </p>
          </div>
        </div>
      </AnimatedContent>
      <div className="bg-gradient-to-r from-zinc-950 pb-[1px] via-gray-200 to-zinc-950"></div>

      <section className="relative flex flex-col md:flex-row items-center justify-between p-20 bg-gradient-to-b from-zinc-950 to-black text-white">
        {/* Left Section */}
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <div className="text-5xl font-bold bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 pb-4 text-transparent bg-clip-text tracking-tight">
            Smarter Investing with AI
          </div>
          <p className="text-xl text-gray-300">
            AI-powered insights, real-time market data, and tax-smart
            strategies—all in one place.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/signup">
              <div className="bg-zinc-950 border-[1px] rounded-xl border-gray- hover:bg-blue-500 px-6 py-3 text-lg font-semibold">
                Get Started
              </div>
            </Link>
            <Link href="/login">
              <div
                //   variant="outline"
                className="border-gray-400 px-6 py-3 text-lg"
              >
                Login
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section - Animated Mockup */}
        <div
          className="flex justify-center w-full md:w-1/2"
          // initial={{ opacity: 0, x: 20 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1 }}
        >
          <div className="w-full right-0 max-w-2/4 p-6 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-white">
              Market Overview
            </h3>
            <div className="mt-3 space-y-2">
              {stocks.map((stock, idx) => (
                <div key={idx} className="flex justify-between text-gray-300">
                  <span>{stock.symbol}</span>
                  <span
                    className={
                      stock.change.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {stock.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
