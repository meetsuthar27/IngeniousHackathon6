"use client";
// import React from "react";
import { useRouter } from "next/navigation";
import Chatbot from "../components/Chatbot/Chatbot";
// import Dashboard from "../pages/dashboard";

function Page() {
  const router = useRouter();

  return (
    <div className="flex font-[Manrope] gap-4 p-6 h-screen bg-zinc-950 text-white">
      {/* Profile Section */}
      <div className="basis-1/4 bg-zinc-800 p-4 rounded-2xl shadow-lg flex flex-col items-center">
        <h2 className="text-lg font-semibold mt-2">Meet Suthar</h2>
        <p className="text-sm text-gray-400">Retail Investor</p>
      </div>

      {/* Risk Management */}
      <div className="basis-1/4 bg-yellow-700 px-4 pt-4 rounded-2xl shadow-lg flex flex-col items-center">
        <h3 className="text-lg font-semibold">Risk Level</h3>
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-xl font-bold">
          🔥 High
        </div>
        <select className="mt-3 p-2 rounded-md bg-gray-800 text-white w-full">
          <option>Select Stock</option>
          <option>Apple</option>
          <option>Microsoft</option>
        </select>
      </div>

      {/* Tax Calculation */}
      <div className="basis-1/2 bg-green-800 p-4 rounded-2xl shadow-lg flex flex-col">
        <h3 className="text-lg font-semibold">Tax Calculation</h3>
        <div className="flex gap-2 mt-3">
          <input
            type="text"
            placeholder="Stock Name"
            className="p-2 rounded-md bg-gray-700 w-1/2"
          />
          <input
            type="number"
            placeholder="Qty"
            className="p-2 rounded-md bg-gray-700 w-1/2"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <input type="date" className="p-2 rounded-md bg-gray-700 w-1/2" />
          <input type="date" className="p-2 rounded-md bg-gray-700 w-1/2" />
        </div>
        <button className="mt-3 p-2 bg-gray-950 rounded-md">
          Calculate Tax
        </button>
      </div>

      {/* Stock Screen */}
      <div className="basis-1/3 border-[1px] border-[var(--gr1)] bg-zinc-950 bg-radial-[at_50%_75%] from-[var(--gr1)] via-var(--gr1)] to-zinc-950 to-90% p-4 rounded-2xl shadow-lg flex items-center justify-center">
        <Chatbot />
      </div>
    </div>
  );
}

export default Page;
