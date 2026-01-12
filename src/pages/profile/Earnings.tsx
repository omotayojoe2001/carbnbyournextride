import { ArrowLeft, TrendingUp, Download, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const Earnings = () => {
  const [period, setPeriod] = useState("this-month");

  const stats = {
    totalEarnings: 4270000,
    pendingPayout: 320000,
    completedTrips: 42,
    avgTripValue: 101667,
  };

  const transactions = [
    { id: "1", date: "Jan 10, 2026", description: "Trip: VI to Airport", amount: 85000, type: "credit" },
    { id: "2", date: "Jan 8, 2026", description: "Payout to GTBank", amount: -1200000, type: "payout" },
    { id: "3", date: "Jan 5, 2026", description: "Trip: Ikoyi to Eko Hotel", amount: 45000, type: "credit" },
    { id: "4", date: "Jan 3, 2026", description: "Trip: Lekki to VI", amount: 35000, type: "credit" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Earnings</h1>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg bg-background text-sm"
          >
            <option value="this-month">This month</option>
            <option value="last-month">Last month</option>
            <option value="this-year">This year</option>
            <option value="all-time">All time</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8">
          <div className="p-4 sm:p-6 border border-border rounded-xl">
            <p className="text-xs sm:text-sm text-muted-foreground">Total earnings</p>
            <p className="text-lg sm:text-2xl font-bold mt-1">₦{stats.totalEarnings.toLocaleString()}</p>
          </div>
          <div className="p-4 sm:p-6 border border-border rounded-xl">
            <p className="text-xs sm:text-sm text-muted-foreground">Pending payout</p>
            <p className="text-lg sm:text-2xl font-bold mt-1">₦{stats.pendingPayout.toLocaleString()}</p>
          </div>
          <div className="p-4 sm:p-6 border border-border rounded-xl">
            <p className="text-xs sm:text-sm text-muted-foreground">Completed trips</p>
            <p className="text-lg sm:text-2xl font-bold mt-1">{stats.completedTrips}</p>
          </div>
          <div className="p-4 sm:p-6 border border-border rounded-xl">
            <p className="text-xs sm:text-sm text-muted-foreground">Avg. trip value</p>
            <p className="text-lg sm:text-2xl font-bold mt-1">₦{stats.avgTripValue.toLocaleString()}</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent transactions</h2>
          <button className="text-sm font-medium flex items-center gap-2 hover:underline">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>

        <div className="border border-border rounded-xl overflow-hidden">
          {transactions.map((tx, index) => (
            <div
              key={tx.id}
              className={`flex items-center justify-between p-4 ${
                index !== transactions.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base truncate">{tx.description}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{tx.date}</p>
              </div>
              <span className={`font-semibold text-sm sm:text-base whitespace-nowrap ml-4 ${
                tx.type === "payout" ? "text-muted-foreground" : ""
              }`}>
                {tx.type === "payout" ? "" : "+"}₦{Math.abs(tx.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Earnings;
