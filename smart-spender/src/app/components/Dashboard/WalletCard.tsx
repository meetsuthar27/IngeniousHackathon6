export default function WalletCard() {
  return (
    <div className="w-full bg-zinc-900 text-white rounded-2xl">
      {/* Top Section */}
      <div className="flex justify-between p-4 items-center bg-gradient-to-r rounded-t-xl from-zinc-800 via-zinc-700 to-zinc-800 ">
        <div className="flex items-center  gap-2">
          <div className="w-10 h-10 bg-radial-[at_50%_75%] from-zinc-200 via-zinc-600 to-zinc-900 to-90% border-[1px] border-neutral-600 shadow-lg rounded-full flex items-center justify-center">
            {/* Wallet Icon (Replace with an actual icon if needed) */}
            <span className="text-zinc-900">M</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Main Wallet</h3>
            <p className="text-gray-400 text-sm">0x124412</p>
          </div>
        </div>
        <button className="text-gray-400 text-sm">Manage</button>
      </div>

      {/* Balance Section */}
      <div className="p-4">
        <p className="text-gray-400 text-sm">Total Balance</p>
        <h2 className="text-4xl font-bold">32,126.00</h2>
        <div className="flex items-center text-green-500 mt-1">
          <p className="text-sm">15% from previous</p>
        </div>
      </div>
    </div>
  );
}
