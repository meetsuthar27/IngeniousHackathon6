import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { IoArrowUpOutline } from "react-icons/io5";

const stockData = [
  {
    company: "RELIANCE Industries",
    price: 1276.35,
    change: 7.2,
    equity: 500.0,
    today: 1269.15,
    total: 100.0,
  },
  {
    company: "TCS",
    price: 3587.1,
    change: 14.95,
    equity: 300.0,
    today: 3616.25,
    total: 50.0,
  },
  {
    company: "INFY",
    price: 1592.5,
    change: -23.0,
    equity: 400.0,
    today: 1615.0,
    total: 80.0,
  },
  {
    company: "HDFCBANK",
    price: 1770.85,
    change: 1.6,
    equity: 350.0,
    today: 1774.1,
    total: 60.0,
  },
  {
    company: "ITC",
    price: 405.55,
    change: 1.6,
    equity: 600.0,
    today: 407.5,
    total: 90.0,
  },
  {
    company: "TATAMOTORS",
    price: 702.95,
    change: 12.9,
    equity: 450.0,
    today: 705.0,
    total: 110.0,
  },

  {
    company: "BAJFINANCE",
    price: 8916.1,
    change: 236.49,
    equity: 150.0,
    today: 9089,
    total: 120.0,
  },
];

const PortfolioTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(stockData.length / rowsPerPage);

  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="text-white w-full">
      <div className="flex justify-between">
        <div className="pb-2 text-xl w-auto text-zinc-400 font-semibold">
          Your Portfolio
        </div>
        <button className="text-[0.7em] text-emerald-500 bg-emerald-900 rounded-full px-3 py-1">
          Add more
        </button>
      </div>
      <div className="h-[1px] align-center bg-linear-to-r mb-4 from-neutral-700/70 to-zinc-900"></div>

      <div className="overflow-x-auto">
        <table className="w-full text-[0.8em] border border-zinc-700/50 rounded-2xl">
          <thead>
            <tr
              className="bg-zinc-800/50 text-zinc-400 font-light text-left hover:bg-gradient-to-r hover:via-zinc-700 transition delay-200
"
            >
              <th className="p-2">Company</th>
              <th className="p-2">Last Price</th>
              <th className="p-2">Change</th>
              <th className="p-2">Equity</th>
              <th className="p-2">Today's Return</th>
              <th className="p-2">Total Return</th>
            </tr>
          </thead>
          <tbody>
            {stockData
              .slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
              .map((stock, index) => (
                <tr
                  key={index}
                  className="border-t text-zinc-400 items-center border-zinc-700/50 hover:bg-emerald-950/50 transition"
                >
                  <td className="p-2">{stock.company}</td>
                  <td className="p-2 gap-1 items-center flex">
                    <LuIndianRupee />
                    {stock.price.toFixed(2)}
                  </td>
                  <td
                    className={`p-2 ${
                      stock.change >= 0 ? "text-emerald-500" : "text-red-400"
                    }`}
                  >
                    {stock.change >= 0 ? `+${stock.change}` : stock.change}
                  </td>
                  <td className="p-2 gap-1 items-center flex">
                    <LuIndianRupee />
                    {stock.equity.toFixed(2)}
                  </td>
                  <td
                    className={`p-2 ${
                      stock.today >= 0 ? "text-emerald-500" : "text-red-400"
                    }`}
                  >
                    {stock.today >= 0 ? `+${stock.today}` : stock.today}
                  </td>
                  <td
                    className={`p-2 ${
                      stock.total >= 0 ? "text-emerald-500" : "text-red-400"
                    }`}
                  >
                    {stock.total >= 0 ? `+${stock.total}` : stock.total}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-2 py-2 bg-zinc-700/40 text-gray-300 rounded-lg hover:bg-emerald-800 disabled:opacity-50"
        >
          <GoArrowLeft />
        </button>
        <span className="text-gray-400 text-[0.8em]">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="px-2 py-2 bg-zinc-700/40 text-gray-300 rounded-lg hover:bg-emerald-800 disabled:opacity-50"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PortfolioTable;
