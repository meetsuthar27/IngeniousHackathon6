"use client";
// import React from "react";
import { useRouter } from "next/navigation";
// import Dashboard from "../pages/dashboard";

function Page() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-6 h-screen bg-gray-900 text-white">
      {/* Profile Section */}
      <div className="col-span-1 row-span-1 bg-zinc-800 p-4 rounded-2xl shadow-lg flex flex-col items-center">
        {/* <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        /> */}
        <h2 className="text-lg font-semibold mt-2">Meet Suthar</h2>
        <p className="text-sm text-gray-400">Retail Investor</p>
      </div>

      {/* Tips Carousel */}
      <div className="col-span-2 row-span-1 bg-blue-800 p-4 rounded-2xl shadow-lg flex items-center justify-center">
        <p className="text-xl font-semibold">
          "Invest in what you understand." - Warren Buffett
        </p>
      </div>

      {/* Risk Management */}
      <div className="col-span-1 row-span-1 bg-yellow-700 p-4 rounded-2xl shadow-lg flex flex-col items-center">
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
      <div className="col-span-2 row-span-1 bg-green-800 p-4 rounded-2xl shadow-lg flex flex-col">
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

      {/* Stock Screen (Empty) */}
      <div className="col-span-2 row-span-2 bg-gray-800 p-4 rounded-2xl shadow-lg flex items-center justify-center">
        <h3 className="text-lg font-semibold">Stock Screen</h3>
      </div>
    </div>
  );
}

export default Page;
