import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

const stockData = {
  gainers: {
    Large: [
      {
        name: "Reliance",
        price: "₹2,800.00",
        change: "+120.50 (4.50%)",
        logo: "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg ",
      },
      {
        name: "TCS",
        price: "₹3,450.20",
        change: "+98.30 (2.93%)",
        logo: "https://assets.upstox.com/content/assets/images/logos/NSE_EQ%7CINE467B01029.png",
      },
    ],
    Mid: [
      {
        name: "Persistent",
        price: "₹5,200.10",
        change: "+110.25 (2.17%)",
        logo: "https://s3-symbol-logo.tradingview.com/persistent-systems-ltd--600.png",
      },
      {
        name: "Mphasis",
        price: "₹2,250.00",
        change: "+75.10 (3.45%)",
        logo: "https://s3-symbol-logo.tradingview.com/mphasis--600.png",
      },
    ],
    Small: [
      {
        name: "Ramkrishna Forgings",
        price: "₹843.90",
        change: "+98.70 (13.24%)",
        logo: "https://t4.ftcdn.net/jpg/05/18/88/49/360_F_518884984_OYochCZNiWSfFKzghykazpkmMUP62QIW.jpg",
      },
      {
        name: "Tejas Networks",
        price: "₹799.90",
        change: "+89.40 (12.58%)",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/54898_profilepicture.png",
      },
    ],
  },
  losers: {
    Large: [
      {
        name: "Infosys",
        price: "₹1,550.00",
        change: "-45.80 (2.87%)",
        logo: "https://s3-symbol-logo.tradingview.com/infosys--600.png",
      },
      {
        name: "HDFC Bank",
        price: "₹1,420.30",
        change: "-35.40 (2.43%)",
        logo: "https://s3-symbol-logo.tradingview.com/hdfc-bank--600.png",
      },
    ],
    Mid: [
      {
        name: "LTIMindtree",
        price: "₹5,010.00",
        change: "-210.15 (4.02%)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OLOiRcdXLwWQMr5WprO0cI1Gw2YgL6cXZg&s",
      },
      {
        name: "Coforge",
        price: "₹4,750.50",
        change: "-180.75 (3.66%)",
        logo: "https://s3-symbol-logo.tradingview.com/coforge-ltd--600.png",
      },
    ],
    Small: [
      {
        name: "Zomato",
        price: "₹134.90",
        change: "-15.30 (10.19%)",
        logo: "https://i.pinimg.com/736x/f4/34/e3/f434e30f1c5a170fc4700661cc99c3ab.jpg",
      },
      {
        name: "Nazara Tech",
        price: "₹658.20",
        change: "-79.90 (10.83%)",
        logo: "https://s3-symbol-logo.tradingview.com/nazara-technologies-ltd--600.png",
      },
    ],
  },
};

const TopStocks = () => {
  const [activeTab, setActiveTab] = useState<"gainers" | "losers">("gainers");
  const [selectedCategory, setSelectedCategory] = useState<
    "Large" | "Mid" | "Small"
  >("Small");

  return (
    <div className="">
      {/* Tab Selection (Top Gainers | Top Losers) */}
      <div className="flex justify-between">
        <div className="justify-left space-x-4 mb-4">
          <button
            onClick={() => setActiveTab("gainers")}
            className={` text-xl font-semibold ${
              activeTab === "gainers"
                ? "text-green-400 border-b-1 border-green-400"
                : "text-zinc-400"
            }`}
          >
            Top Gainers
          </button>
          <button
            onClick={() => setActiveTab("losers")}
            className={` text-xl font-semibold ${
              activeTab === "losers"
                ? "text-red-400 border-b-1 border-red-400"
                : "text-zinc-400"
            }`}
          >
            Top Losers
          </button>
        </div>
        <div className="text-zinc-600 pr-3 pb-2 text-sm">See more</div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-neutral-700/70 to-zinc-900 mb-4"></div>

      {/* Category Selection (Large | Mid | Small) */}
      <div className="flex space-x-2 mb-4">
        {["Large", "Mid", "Small"].map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category as "Large" | "Mid" | "Small")
            }
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? "bg-green-700 text-white"
                : "bg-zinc-700 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Stock Cards */}
      <div className="flex space-x-4 overflow-x-auto">
        {stockData[activeTab][selectedCategory].map((stock, idx) => (
          <div key={idx} className="bg-zinc-800 p-4 rounded-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <img src={stock.logo} alt={stock.name} className="w-8 h-8" />
              {selectedCategory === "Small" && activeTab === "gainers" && (
                <PlusCircle className="text-green-400 w-5 h-5" />
              )}
            </div>
            <p className="text-sm text-gray-400">{stock.name}</p>
            <p className="text-lg font-semibold">{stock.price}</p>
            <p
              className={`text-sm ${
                activeTab === "gainers" ? "text-green-400" : "text-red-400"
              }`}
            >
              {stock.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStocks;
