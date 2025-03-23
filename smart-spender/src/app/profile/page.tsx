// pages/profile.tsx
import React from "react";
import Image from "next/image";

const Page: React.FC = () => {
  const user = {
    avatar: "https://i.pravatar.cc/600",
    name: "John Doe",
    accountId: "123456789",
  };

  const wishlist = [
    {
      name: "Nippon India Silver ETF",
      shares: 25,
      price: "¥94.18",
      change: "-1.66 (-1.73%)",
    },
    {
      name: "SBI ETF Nifty Next 50",
      price: "¥666.41",
      change: "+8.00 (+1.22%)",
    },
    {
      name: "Motilal Oswal MOSt Shares NASDAQ-100 ETF",
      price: "¥185.39",
      change: "-1.82 (-0.97%)",
    },
    {
      name: "Nippon India ETF Nifty Next 50 Junior BeES",
      price: "¥671.83",
      change: "+4.87 (+0.73%)",
    },
    {
      name: "ICICI Prudential Gold ETF",
      shares: 4,
      price: "¥76.36",
      change: "-0.49 (-0.64%)",
    },
  ];

  const totalBalance = "¥10,000";
  const amountSpent = "¥5,000";

  const faqs = [
    {
      question: "How do I add funds to my account?",
      answer:
        'You can add funds through the "Add Funds" section in your account settings.',
    },
    {
      question: "How do I buy stocks?",
      answer:
        'Navigate to the "Market" section, search for the stock, and click "Buy".',
    },
    {
      question: "What are the trading hours?",
      answer: "Trading hours are from 9:15 AM to 3:30 PM, Monday to Friday.",
    },
  ];

  return (
    <div className="p-6 flex gap-4 font-[Manrope] bg-gray-100 pt-24 bg-zinc-950 min-h-screen">
      <div className="flex-col basis-1/3">
        {/* User Profile Section */}
        <div className="bg-zinc-900/70 p-6 mb-4 rounded-lg shadow-md flex items-center space-x-6">
          {/* <Image
            src={user.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full"
          /> */}
          <div>
            <h1 className="text-2xl tracking-tight text-[var(--acc)]/60 font-bold">
              {user.name}
            </h1>
            <p className="text-gray-600">
              <span className="font-bold p-2">Account ID</span>
              {user.accountId}
            </p>
          </div>
          <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-zinc-900/70 p-6 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <p className="text-gray-700">
                Bought 10 shares of Nippon India Silver ETF
              </p>
              <p className="text-gray-500 text-sm">2023-10-01</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-gray-700">
                Sold 5 shares of ICICI Prudential Gold ETF
              </p>
              <p className="text-gray-500 text-sm">2023-09-28</p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-zinc-900/70 p-6 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-zinc-900/70 p-6 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <p className="text-gray-700">
            If you need further assistance, please contact our support team at{" "}
            <a href="mailto:support@stockwebsite.com" className="text-blue-500">
              support@stockwebsite.com
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex-col basis-2/3">
        {/* Portfolio Section */}
        <div className="bg-zinc-900/70 p-6 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold">{totalBalance}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Amount Spent</p>
              <p className="text-2xl font-bold">{amountSpent}</p>
            </div>
          </div>
        </div>

        {/* Wishlist Section */}
        <div className="bg-zinc-900/70 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
          <div className="space-y-4">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg">{item.name}</h3>
                {item.shares && (
                  <p className="text-gray-700">Shares: {item.shares}</p>
                )}
                <p className="text-gray-700">Price: {item.price}</p>
                <p
                  className={`${
                    item.change.includes("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Change: {item.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
