import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { IoArrowUpOutline } from "react-icons/io5";

const stockData = [
  {
    company: "RELIANCE",
    price: 2250.5,
    change: 15.75,
    equity: 500.0,
    today: 20.0,
    total: 100.0,
  },
  {
    company: "TCS",
    price: 3200.0,
    change: -10.5,
    equity: 300.0,
    today: -5.0,
    total: 50.0,
  },
  {
    company: "INFY",
    price: 1450.25,
    change: 5.25,
    equity: 400.0,
    today: 10.0,
    total: 80.0,
  },
  {
    company: "HDFCBANK",
    price: 1600.75,
    change: -8.0,
    equity: 350.0,
    today: -12.0,
    total: 60.0,
  },
  {
    company: "ITC",
    price: 405.8,
    change: 2.1,
    equity: 600.0,
    today: 5.0,
    total: 90.0,
  },
  {
    company: "TATAMOTORS",
    price: 702.85,
    change: 12.5,
    equity: 450.0,
    today: 15.0,
    total: 110.0,
  },
  {
    company: "WIPRO",
    price: 264.35,
    change: -3.5,
    equity: 200.0,
    today: -2.0,
    total: 40.0,
  },
  {
    company: "BAJFINANCE",
    price: 6100.6,
    change: 25.0,
    equity: 150.0,
    today: 30.0,
    total: 120.0,
  },
  {
    company: "MARUTI",
    price: 8800.9,
    change: -20.0,
    equity: 100.0,
    today: -15.0,
    total: 70.0,
  },
  {
    company: "SBIN",
    price: 550.45,
    change: 8.75,
    equity: 500.0,
    today: 10.0,
    total: 85.0,
  },
  {
    company: "HINDALCO",
    price: 450.3,
    change: -6.0,
    equity: 250.0,
    today: -5.0,
    total: 55.0,
  },
  {
    company: "ONGC",
    price: 160.2,
    change: 3.5,
    equity: 600.0,
    today: 4.0,
    total: 95.0,
  },
  {
    company: "COALINDIA",
    price: 210.15,
    change: -2.5,
    equity: 400.0,
    today: -3.0,
    total: 50.0,
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
      <div className="pb-2 text-xl w-auto text-zinc-400 font-semibold">
        Your Portfolio
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
                      stock.change >= 0 ? "text-green-400" : "text-red-400"
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
                      stock.today >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stock.today >= 0 ? `+${stock.today}` : stock.today}
                  </td>
                  <td
                    className={`p-2 ${
                      stock.total >= 0 ? "text-green-400" : "text-red-400"
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
