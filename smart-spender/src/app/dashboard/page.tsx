"use client";
// import React from "react";
import { useRouter } from "next/navigation";
import Chatbot from "../components/Chatbot/Chatbot";
import WalletCard from "../components/Dashboard/WalletCard";
import TipsCard from "../components/Dashboard/TipsCard";
import RiskCard from "../components/Dashboard/RiskCard";
import TaxCalculator from "../components/Dashboard/TaxCalculator";
import Indices from "../components/Dashboard/Indices";
import TopGainer from "../components/Dashboard/TopStocks";
import TopStocks from "../components/Dashboard/TopStocks";
import Image from "next/image";
import PortfolioTable from "../components/Dashboard/PortfolioCard";
import NewsCard from "../components/Dashboard/NewsCard";

// import { FiSearch } from "react-icons/fi";
// import Dashboard from "../pages/dashboard";

function Page() {
  const router = useRouter();
  const riskValue = 14; // Example value

  // Define thresholds and messages
  let riskMessage = "";
  let borderColor = "";
  let bgColor = "";

  if (riskValue > 75) {
    riskMessage = "High Risk! Proceed with extreme caution.";
    borderColor = "border-red-500/40";
    bgColor = "bg-red-500/10";
  } else if (riskValue > 50) {
    riskMessage = "Moderate Risk! Analyze before proceeding.";
    borderColor = "border-orange-500/40";
    bgColor = "bg-orange-500/10";
  } else if (riskValue > 25) {
    riskMessage = "Mild Risk! Consider your options.";
    borderColor = "border-yellow-500/40";
    bgColor = "bg-yellow-500/10";
  } else {
    riskMessage = "Great time! You can go for it.";
    borderColor = "border-emerald-500/40";
    bgColor = "bg-emerald-500/10";
  }

  return (
    <div className="flex font-[Manrope] gap-4 p-6 h-[calc(100vh)] pt-24 bg-zinc-950 text-white overflow-y-auto">
      {/* Profile Section */}
      <div className="flex-col basis-2/3">
        <div className="flex gap-4 mb-4 justify-between">
          <div className="p-2 text-xl tracking-tight">Good Morning, Meet!</div>
          <div className="flex border-[1px] bg-zinc-900 border-zinc-700/40 w-70 text-zinc-500 rounded-xl p-2">
            {/* <FiSearch /> */}
            Search
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col p-4 w-3/5 border-[1px] justify-left bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <PortfolioTable />
          </div>
          <div className="flex flex-col p-4 w-2/5 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <div className="pb-2 text-xl w-auto font-semibold text-zinc-400">
              Risk Predictor
            </div>
            <div className="h-[1px] align-center bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>
            <div className="flex justify-center items-center scale-[90%] h-full w-full">
              <RiskCard value={riskValue} />
            </div>
            <div
              className={`p-3 text-center w-full rounded-lg border-[1px] ${borderColor} ${bgColor} text-zinc-400`}
            >
              {riskMessage}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex w-full p-4 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TipsCard />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex flex-col p-4 w-full border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TaxCalculator />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col p-4 w-full border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <Indices />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex mb-4 flex-col p-4 w-full border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <NewsCard />
          </div>
        </div>
        {/* <div className="flex gap-4 mb-4">
          <div className="flex flex-col p-4 basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TopStocks />
          </div>
          <div className="flex flex-col p-4 basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TopGainer />
          </div>
        </div> */}
      </div>

      {/* Stock Screen */}
      <div
        className="basis-1/3 border-[1px] border-zinc-700/40 bg-zinc-900 
      p-4 rounded-2xl shadow-lg flex items-center justify-center 
      sticky top-0 min-h-[600px] max-h-screen"
      >
        <div className="absolute h-40 w-full bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-900/0 h-50 top-0 rounded-2xl"></div>

        <Chatbot />
      </div>
    </div>
  );
}

export default Page;
