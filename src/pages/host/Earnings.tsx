import { Link } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostEarnings = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        <Link to="/host/menu" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Earnings & Payouts</h1>
          <button className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Report
          </button>
        </div>

        {/* Earnings Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Earnings</span>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold">₦2,450,000</p>
            <p className="text-xs text-green-500 mt-1">+15% this month</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">This Month</span>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">₦285,000</p>
            <p className="text-xs text-blue-500 mt-1">127 trips</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Pending</span>
              <DollarSign className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold">₦45,000</p>
            <p className="text-xs text-muted-foreground mt-1">Processes in 2 days</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Avg per Trip</span>
              <DollarSign className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold">₦65,000</p>
            <p className="text-xs text-purple-500 mt-1">+8% vs last month</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {[
              { date: "Dec 26, 2025", guest: "Adebayo K.", vehicle: "Mercedes S-Class", amount: "₦85,000", status: "Completed" },
              { date: "Dec 25, 2025", guest: "Chioma N.", vehicle: "BMW 7 Series", amount: "₦72,000", status: "Completed" },
              { date: "Dec 24, 2025", guest: "Tunde O.", vehicle: "Range Rover Sport", amount: "₦95,000", status: "Pending" },
              { date: "Dec 23, 2025", guest: "Funke A.", vehicle: "Lexus ES 350", amount: "₦68,000", status: "Completed" },
            ].map((transaction, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{transaction.guest}</p>
                  <p className="text-sm text-muted-foreground">{transaction.vehicle} • {transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{transaction.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    transaction.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-orange-500/10 text-orange-500"
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostEarnings;