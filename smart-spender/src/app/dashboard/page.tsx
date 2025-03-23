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

// import { FiSearch } from "react-icons/fi";
// import Dashboard from "../pages/dashboard";

function Page() {
  const router = useRouter();

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
          <div className="flex flex-col basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <div className="flex p-4 items-center gap-4">
              <img
                className="w-15 h-15 border-zinc-700/40 border-[1px] rounded-full"
                src="https://i.pravatar.cc/600"
                alt=""
              ></img>
              <div className="font-medium text-xl dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <WalletCard />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col p-4 basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TipsCard />
          </div>
          <div className="flex flex-col p-4 basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <div className="pb-2 text-xl w-auto font-semibold text-zinc-400">
              Risk Predictor
            </div>
            <div className="h-[1px] align-center bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>
            <div className="scale-[90%]">
              <RiskCard value={90} />
            </div>
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
          <div className="flex flex-col p-4 basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TopStocks />
          </div>
          <div className="flex flex-col p-4 basis-1/2 border-[1px] bg-zinc-900 border-zinc-700/40 text-zinc-500 rounded-xl">
            <TopGainer />
          </div>
        </div>
      </div>

      {/* Stock Screen */}
      <div className="basis-1/3 border-[1px] border-zinc-700/40 bg-zinc-950 
      bg-radial-[at_50%_75%] from-[var(--gr1)] via-[var(--gr1)] to-zinc-950 to-90% 
      p-4 rounded-2xl shadow-lg flex items-center justify-center 
      sticky top-0 min-h-[500px] max-h-screen">
    <Chatbot />
  </div>
    </div>
  );
}

export default Page;
