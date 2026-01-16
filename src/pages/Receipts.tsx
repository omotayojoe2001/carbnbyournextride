import { ArrowLeft, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Receipts = () => {
  const receipts = [
    { id: "CBN-2026-001234", date: "Jan 15, 2026", car: "Mercedes S-Class", amount: 85000, status: "Paid" },
    { id: "CBN-2025-005678", date: "Dec 20, 2025", car: "BMW 7 Series", amount: 120000, status: "Paid" },
    { id: "CBN-2025-009012", date: "Nov 10, 2025", car: "Rolls Royce Ghost", amount: 250000, status: "Paid" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to profile
        </Link>

        <h1 className="text-2xl font-bold mb-8">Receipts & Invoices</h1>

        <div className="space-y-4">
          {receipts.map(receipt => (
            <div key={receipt.id} className="border border-border rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">{receipt.car}</p>
                  <p className="text-sm text-muted-foreground">{receipt.date} · {receipt.id}</p>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mt-1 inline-block">
                    {receipt.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">₦{receipt.amount.toLocaleString()}</p>
                <button className="flex items-center gap-2 text-sm font-medium hover:underline mt-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Receipts;