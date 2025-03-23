"use client";
import styles from "./Chart.module.css";
import Chart from "../Chart";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaSignInAlt } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import TestimonialSection from '../app/components/TestimonialSection';
import { useRef, useState, useEffect } from "react";
import StockList from "./StockList";

// import { ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";

import ShinyText from "./components/animation/ShinyText";
import AnimatedContent from "./components/animation/AnimatedContent";
import Indices from "./components/IndicesHome";

const indices = ["Nifty", "Sensex", "Nasdaq", "S&P"];

interface Stock {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
}

const mockIndices = [
  {
    id: "nifty50",
    name: "Nifty 50 Index",
    value: 23350.4,
    change: 0.69,
    currency: "INR",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "sensex",
    name: "S&P BSE SENSEX Index",
    value: 76905.51,
    change: 0.73,
    currency: "INR",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "bselargecap",
    name: "S&P BSE LargeCap Index",
    value: 8977.75,
    change: 0.76,
    currency: "INR",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "bsemidcap",
    name: "S&P BSE MidCap Index",
    value: 41831.57,
    change: 1.14,
    currency: "INR",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "niftybank",
    name: "Nifty Bank Index",
    value: 48921.35,
    change: 0.52,
    currency: "INR",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "bsesmallcap",
    name: "S&P BSE SmallCap",
    value: 47235.1,
    change: 1.32,
    currency: "INR",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "nasdaq",
    name: "NASDAQ Composite",
    value: 16795.55,
    change: -0.34,
    currency: "USD",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
  {
    id: "dowjones",
    name: "Dow Jones Industrial",
    value: 39175.35,
    change: 0.12,
    currency: "USD",
    logo: "/lovable-uploads/48b524a8-c212-4f59-ab4b-6840433984f1.png",
  },
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
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  const gainersUrl =
    'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=umepr4cg53OkpHOuVSwTkQXdTTqXixMT';
  const losersUrl =
    'https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=umepr4cg53OkpHOuVSwTkQXdTTqXixMT';

  // useEffect(() => {
  //   const fetchStockData = async () => {
  //     try {
  //       const gainersResponse = await axios.get(
  //         "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=umepr4cg53OkpHOuVSwTkQXdTTqXix"
  //       );
  //       const losersResponse = await axios.get(
  //         "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=umepr4cg53OkpHOuVSwTkQXdTTqXix"
  //       );

  //       setGainers(gainersResponse.data.slice(0, 5));
  //       setLosers(losersResponse.data.slice(0, 5));
  //     } catch (error) {
  //       console.error("Error fetching stock data", error);
  //     }
  //   };

  //   fetchStockData();
  // }, []);

  const handleButtonClick = (buttonName: string) => {
    const buttonMap: Record<string, string> = {
      "Nifty-50 index": "^NSEI",
      "Nifty-500 index": "^CRSLDX",
      "S&P BSE SENSEX Index": "^BSESN",
      "S&P BSE LargeCap Index": "LRGCAP.BO",
    };

    setSelectedButton(buttonName); // Store the button name
    setSelectedTicker(buttonMap[buttonName] || buttonName); // Store the ticker symbol
  };

  const session = useSession();

  return (
    <div className="bg-black font-[Manrope]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-blue-400/40 dark:bg-blue-500/30 rounded-full opacity-60 blur-3xl" />
        <div className="absolute -left-40 top-1/2 w-[500px] h-[500px] bg-purple-400/40 dark:bg-purple-500/30 rounded-full opacity-60 blur-3xl" />
      </div>
      {/* <div className="absolute left-0 bottom-6 flex justify-center items-center">
        <div className="bg-[var(--acc)]  blur-[10rem] opacity-40 w-[1000px] h-[500px] rounded-full"></div>
      </div>
      <div className="absolute right-0 top-0 flex justify-center items-center">
        <div className="bg-[var(--acc)] blur-[10rem] opacity-40 w-[1000px] h-[200px] rounded-full"></div>
      </div> */}
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
          <div className="z-105 mr-30 absolute scale-[100%] hover:scale-[110%] rounded-lg top-[50%] left-[8%] shadow-xl transition duration-700 w-80">
            <img src="/Ccc.svg" alt="Icon" />
          </div>

          <div className="z-102 absolute scale-[100%] hover:scale-[110%] rounded-lg top-[55%] left-[32%] shadow-xl transition duration-700 w-60">
            <img src="/Comp2.png" alt="Icon" />
          </div>
          <div className="z-101 absolute scale-[100%] hover:scale-[110%] blur-3xl rounded-lg top-[55%] left-[32%] bg-black shadow-xl transition duration-700 w-50 h-30 flex"></div>
          <div className="z-101 absolute blur-sm rounded-full top-[82%] left-[32%] bg-black  w-60 h-1 flex"></div>
          <div className="z-100 mr-30 scale-[100%] hover:scale-[110%] rounded-lg top-[50%] left-[35%] shadow-xl transition duration-700 w-140">
            <img src="/Chart.png" alt="Icon" />
          </div>
          <div className="z-101  mr-30 absolute blur-sm rounded-full top-[77%] left-[10%] bg-black  w-140 h-1 flex"></div>

          <div className="z-103 justify-left">
            <h1 className="text-7xl font-black bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 inline-block text-transparent bg-clip-text tracking-tightest">
              FinAura.ai
            </h1>

            <p className="text-4xl mt-2 font-semibold text-gray-600 tracking-tight">
              A crazy solution for Stock market rookies!
            </p>
            {/* import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa"; */}

            <div className="flex  mt-10 space-x-4">
              {/* <Link href="/"> */}
              {session?.data?.user && (
        <button onClick={() => signOut()} className="px-4 py-2 hover:bg-zinc-900/40 text-zinc-200 border border-[1px] hover:border-zinc-700/70 rounded-lg flex items-center space-x-2 bg-emerald-900/70 cursor-pointer border-emerald-800 transition">
        <PiSignIn className="text-lg" />
        <span>Sign Out</span>
      </button>
      )}
      {!session?.data?.user && (
        <button
        onClick={() => signIn("google")}
        className="px-4 py-2 hover:bg-zinc-900/40 text-zinc-200 border border-[1px] hover:border-zinc-700/70 rounded-lg flex items-center space-x-2 bg-emerald-900/70 cursor-pointer border-emerald-800 transition"
      >
        <FcGoogle className="text-xl  " />
        <span>Login with Google</span>
      </button>
      )}
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* <div className="bg-gradient-to-r from-zinc-950 pb-[1px] via-gray-200 to-zinc-950"></div> */}

      <section className="relative flex flex-col md:flex-col items-center justify-between p-20 bg-gradient-to-b from-zinc-950 to-black text-white">
        {/* Left Section */}
        <div className="overflow-x-hidden w-full md:overflow-hidden text-center md:text-left">
          <div className="text-5xl font-bold bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 pb-4 text-transparent bg-clip-text tracking-tight">
            Market Summary
          </div>
          {/* <div className="grid grid-cols-4 gap-8 p-4 bg-transparent rounded-lg overflow-x-auto scrollbar-hide"> */}

          <div className={`${styles.stockHistoryDetail} font-[Manrope]`}>
            <button
              className={
                selectedButton === "Nifty-50 index"
                  ? `${styles.stockHistoryDetails} ${styles.selectedButton}`
                  : styles.stockHistoryDetails
              }
              onClick={() => handleButtonClick("Nifty-50 index")}
            >
              <div className={styles.stockHistoryDetailTitle}>
                Nifty-50 index
              </div>
              <div className={styles.stockHistoryDetailValue}>
                ₹23350.4 +0.69%
              </div>
            </button>
            <button
              className={
                selectedButton === "Nifty-500 index"
                  ? `${styles.stockHistoryDetails} ${styles.selectedButton}`
                  : styles.stockHistoryDetails
              }
              onClick={() => handleButtonClick("Nifty-500 index")}
            >
              <div className={styles.stockHistoryDetailTitle}>
                Nifty-500 index
              </div>
              <div className={styles.stockHistoryDetailValue}>
                ₹21273.9 +0.97%
              </div>
            </button>
            <button
              className={
                selectedButton === "S&P BSE SENSEX Index"
                  ? `${styles.stockHistoryDetails} ${styles.selectedButton}`
                  : styles.stockHistoryDetails
              }
              onClick={() => handleButtonClick("S&P BSE SENSEX Index")}
            >
              <div className={styles.stockHistoryDetailTitle}>
                S&P BSE SENSEX Index
              </div>
              <div className={styles.stockHistoryDetailValue}>
                ₹76905.51 +0.73%
              </div>
            </button>
            <button
              className={
                selectedButton === "S&P BSE LargeCap Index"
                  ? `${styles.stockHistoryDetails} ${styles.selectedButton}`
                  : styles.stockHistoryDetails
              }
              onClick={() => handleButtonClick("S&P BSE LargeCap Index")}
            >
              <div className={styles.stockHistoryDetailTitle}>
                S&P BSE LargeCap Index
              </div>
              <div className={styles.stockHistoryDetailValue}>
                ₹8977.75 +0.76%
              </div>
            </button>
          </div>
          <div id="overview" className={styles.chart}>
            <Chart selectedTicker={selectedTicker} />
          </div>
        </div>
        
        <div className="mt-[5rem] overflow-x-hidden w-full md:overflow-hidden text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mr-7">
          {/* <div className="text-5xl font-bold bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 pb-4 text-transparent bg-clip-text tracking-tight">
           Stock Gainers */}
           <StockList url={gainersUrl} title="Stock Gainers" />
          {/* </div> */}
          {/* <div className="text-5xl font-bold bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 pb-4 text-transparent bg-clip-text tracking-tight">
            Stock Losers */}
            <StockList url={losersUrl} title="Stock Losers" />

          {/* </div> */}
          </div>
        </div>
        <TestimonialSection />

        <div>
          <div>Testimonials</div>
        </div>
        
      </section>
      
    </div>
  );
}
