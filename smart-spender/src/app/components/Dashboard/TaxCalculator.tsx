"use client";

import { useState } from "react";

export default function TaxCalculator() {
  const [quantity, setQuantity] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [holdingPeriod, setHoldingPeriod] = useState("");
  const [taxResult, setTaxResult] = useState<{
    totalProfit: number;
    taxAmount: number;
    taxable: boolean;
  } | null>(null);
  const [error, setError] = useState("");

  const calculateTax = async () => {
    setError("");
    setTaxResult(null);

    if (!quantity || !buyingPrice || !sellingPrice || !holdingPeriod) {
      setError("All fields are required");
      return;
    }

    const res = await fetch("/api/calculate-tax", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: Number(quantity),
        buyingPrice: Number(buyingPrice),
        sellingPrice: Number(sellingPrice),
        holdingPeriod: Number(holdingPeriod),
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setTaxResult(data);
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="mx-auto flex-col w-full">
      <div className="flex-col">
        <div className="pb-2 text-xl w-auto font-semibold text-zinc-400">
          Tax Calculator
        </div>
        <div className="h-[1px] align-center bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>
      </div>
      <div className="flex">
        <div className="w-1/2 text-sm">
          <div className="space-y-3">
            <div className="flex ">
              <div className="relative flex items-center mr-4 basis-2/6 bg-zinc-800/50 text-white rounded-md focus-within:ring-2 focus-within:ring-emerald-700">
                <label
                  htmlFor="quantity"
                  className="absolute left-3 text-sm pr-2 border-r-[1px] border-zinc-600 text-zinc-400"
                >
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full p-2 pl-22 bg-transparent text-white focus:outline-none"
                />
              </div>
              <div className="relative flex mr-4 items-center basis-4/6 bg-zinc-800/50 text-white rounded-md focus-within:ring-2 focus-within:ring-emerald-700">
                <label
                  htmlFor="quantity"
                  className="absolute left-3 text-sm pr-2 border-r-[1px] border-zinc-600 text-zinc-400"
                >
                  Holding Time (in years)
                </label>
                <input
                  type="number"
                  value={holdingPeriod}
                  onChange={(e) => setHoldingPeriod(e.target.value)}
                  className="w-full p-2 pl-45 bg-transparent text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex ">
              <div className="relative flex items-center mr-4 basis-1/2 bg-zinc-800/50 text-white rounded-md focus-within:ring-2 focus-within:ring-emerald-700">
                <label
                  htmlFor="buyprice"
                  className="absolute left-3 text-sm pr-2 border-r-[1px] border-zinc-600 text-zinc-400"
                >
                  Buy Price
                </label>
                <input
                  id="buyprice"
                  type="number"
                  value={buyingPrice}
                  onChange={(e) => setBuyingPrice(e.target.value)}
                  className="w-full p-2 pl-23 bg-transparent text-white focus:outline-none"
                />
              </div>
              <div className="relative flex mr-4 items-center basis-1/2 bg-zinc-800/50 text-white rounded-md focus-within:ring-2 focus-within:ring-emerald-700">
                <label
                  htmlFor="sellprice"
                  className="absolute left-3 text-sm pr-2 border-r-[1px] border-zinc-600 text-zinc-400"
                >
                  Sell Price
                </label>
                <input
                  id="sellprice"
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  className="w-full p-2 pl-23 bg-transparent text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex">
              <button
                onClick={calculateTax}
                className="w-full bg-zinc-500 mr-4 hover:bg-emerald-600 text-white font-bold p-2 rounded-md transition"
              >
                Calculate Tax
              </button>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
        </div>

        {/* Result Section */}
        <div className="w-1/2 p-6 flex rounded-md items-center justify-center bg-zinc-800/50">
          {taxResult ? (
            <div className="text-center">
              <h3 className="text-xl font-bold">Tax Calculation</h3>
              <p className="mt-2 text-lg">
                Total Profit:{" "}
                <span className="font-semibold">
                  ₹{taxResult.totalProfit.toFixed(2)}
                </span>
              </p>
              {taxResult.taxable ? (
                <>
                  <p>
                    Tax Rate:{" "}
                    <span className="font-semibold">
                      {taxResult.totalProfit > 125000
                        ? Number(holdingPeriod) <= 1
                          ? "20%"
                          : "12.5%"
                        : "0%"}
                    </span>
                  </p>
                  <p>
                    Tax Amount:{" "}
                    <span className="font-semibold">
                      ₹{taxResult.taxAmount.toFixed(2)}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-green-400 font-bold">No Tax Applicable</p>
              )}
            </div>
          ) : (
            <p className="text-zinc-600">Enter details to calculate tax</p>
          )}
        </div>
      </div>
    </div>
  );
}
