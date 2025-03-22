"use client";
import styles from "./Chart.module.css";
import Chart from "../../../Chart";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";

import ShinyText from "../../components/animation/ShinyText";
import AnimatedContent from "../../components/animation/AnimatedContent";

const indices = ["Nifty", "Sensex", "Nasdaq", "S&P"];

const mockIndices = [
  {
    id: 'nifty50',
    name: 'Nifty 50 Index',
    value: 23350.40,
    change: 0.69,
    currency: 'INR',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'sensex',
    name: 'S&P BSE SENSEX Index',
    value: 76905.51,
    change: 0.73,
    currency: 'INR',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'bselargecap',
    name: 'S&P BSE LargeCap Index',
    value: 8977.75,
    change: 0.76,
    currency: 'INR',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'bsemidcap',
    name: 'S&P BSE MidCap Index',
    value: 41831.57,
    change: 1.14,
    currency: 'INR',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'niftybank',
    name: 'Nifty Bank Index',
    value: 48921.35,
    change: 0.52,
    currency: 'INR',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'bsesmallcap',
    name: 'S&P BSE SmallCap',
    value: 47235.10,
    change: 1.32,
    currency: 'INR',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'nasdaq',
    name: 'NASDAQ Composite',
    value: 16795.55,
    change: -0.34,
    currency: 'USD',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  },
  {
    id: 'dowjones',
    name: 'Dow Jones Industrial',
    value: 39175.35,
    change: 0.12,
    currency: 'USD',
    logo: '/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png'
  }
];

// Dummy stock data (Replace with API later)
const stockData = [
  { symbol: "AAPL", price: "180.23", change: "+1.5%" },
  { symbol: "TSLA", price: "250.89", change: "-0.8%" },
  { symbol: "GOOGL", price: "2800.55", change: "+2.1%" },
  { symbol: "ETH", price: "3,200", change: "+0.5%" },
];

export default function HeroSection() {
  const [selectedButton, setSelectedButton] = useState("Nifty-50 index");
const [selectedTicker, setSelectedTicker] = useState("^NSEI");

const handleButtonClick = (buttonName: string) => {
  const buttonMap: Record<string, string> = {
    "Nifty-50 index": "^NSEI",
    "Nifty-500 index": "^CRSLDX",
    "S&P BSE SENSEX Index": "^BSESN",
    "S&P BSE LargeCap Index": "LRGCAP.BO"
  };

  setSelectedButton(buttonName); // Store the button name
  setSelectedTicker(buttonMap[buttonName] || buttonName); // Store the ticker symbol
};
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
        <div className="overflow-x-hidden w-full md:overflow-hidden text-center md:text-left">
          <div className="text-5xl font-bold bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 pb-4 text-transparent bg-clip-text tracking-tight">
            Market Summary >
          </div>
          {/* <div className="grid grid-cols-4 gap-8 p-4 bg-transparent rounded-lg overflow-x-auto scrollbar-hide"> */}



          <div className={styles.stockHistoryDetail}>
            <button 
              className={selectedButton === 'Nifty-50 index' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
              onClick={() => handleButtonClick('Nifty-50 index')}
            >                
              <div className={styles.stockHistoryDetailTitle}>Nifty-50 index</div>
              <div className={styles.stockHistoryDetailValue}>₹23350.4 +0.69%</div>
            </button>
            <button 
              className={selectedButton === 'Nifty-500 index' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
              onClick={() => handleButtonClick('Nifty-500 index')}
            >                
              <div className={styles.stockHistoryDetailTitle}>Nifty-500 index</div>
              <div className={styles.stockHistoryDetailValue}>₹21273.9  +0.97%</div>
            </button>
            <button 
              className={selectedButton === 'S&P BSE SENSEX Index' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
              onClick={() => handleButtonClick('S&P BSE SENSEX Index')}
            >                
              <div className={styles.stockHistoryDetailTitle}>S&P BSE SENSEX Index</div>
              <div className={styles.stockHistoryDetailValue}>₹76905.51 +0.73%</div>
            </button>
            <button 
              className={selectedButton === 'S&P BSE LargeCap Index' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
              onClick={() => handleButtonClick('S&P BSE LargeCap Index')}
            >                
              <div className={styles.stockHistoryDetailTitle}>S&P BSE LargeCap Index</div>
              <div className={styles.stockHistoryDetailValue}>₹8977.75 +0.76%</div>
            </button>
          </div>
          <div id="overview" className={styles.chart}>
              <Chart selectedTicker={selectedTicker} />
            </div>

          
    </div>
      </section>
    </div>
  );
}
