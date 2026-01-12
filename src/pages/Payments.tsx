import { ArrowLeft, CreditCard, Plus, Gift, Receipt } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">Payments & payouts</h1>
        <p className="text-muted-foreground mb-8">
          Manage your payment methods and view your payment history.
        </p>

        {/* Payment Methods */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Payment methods</h2>
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/26</p>
                </div>
              </div>
              <button className="text-sm font-medium underline">Remove</button>
            </div>
            <div className="border-t border-border p-4">
              <button className="flex items-center gap-2 text-sm font-medium">
                <Plus className="w-4 h-4" />
                Add payment method
              </button>
            </div>
          </div>
        </section>

        {/* Gift Cards */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Gift cards</h2>
          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Gift className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Carbnb Gift Card</p>
                <p className="text-sm text-muted-foreground">Current balance: ₦0</p>
              </div>
              <button className="btn-outline px-4 py-2 rounded-lg text-sm font-medium">
                Redeem
              </button>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Transaction history</h2>
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="p-8 text-center">
              <Receipt className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-1">No transactions yet</p>
              <p className="text-sm text-muted-foreground">
                When you make a booking, your transaction history will appear here.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Payments;
