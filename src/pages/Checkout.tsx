import { useState } from "react";
import { ArrowLeft, CreditCard, Wallet } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const orderTotal = 11000;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to cart
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>

        <div className="space-y-6">
          {/* Delivery Details */}
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Delivery Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Address</label>
                <textarea
                  placeholder="Enter delivery address"
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Payment Method</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary">
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Wallet className="w-5 h-5" />
                <span className="font-medium">Carbnb Wallet</span>
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-secondary rounded-xl p-6">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₦10,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>₦1,000</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">₦{orderTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={() => navigate('/payment')}
            className="w-full btn-primary py-4 rounded-xl font-semibold text-lg"
          >
            Continue to Payment
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Checkout;