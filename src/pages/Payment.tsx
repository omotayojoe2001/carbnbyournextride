import { useState } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Payment = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      navigate('/booking-confirmation');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[600px] mx-auto px-6 md:px-10 py-8">
        <Link to="/checkout" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to checkout
        </Link>

        <div className="flex items-center justify-center gap-2 mb-6">
          <Lock className="w-5 h-5 text-green-600" />
          <h1 className="text-2xl font-bold">Secure Payment</h1>
        </div>

        <div className="space-y-6">
          {/* Card Details */}
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Card Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="bg-foreground text-background rounded-xl p-6 text-center">
            <p className="text-sm opacity-80 mb-1">Amount to Pay</p>
            <p className="text-3xl font-bold">₦11,000</p>
          </div>

          {/* Security Notice */}
          <div className="bg-secondary rounded-xl p-4 text-sm text-center">
            <p className="text-muted-foreground">
              Your payment information is encrypted and secure. We never store your card details.
            </p>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full btn-primary py-4 rounded-xl font-semibold text-lg disabled:opacity-50"
          >
            {processing ? "Processing..." : "Pay ₦11,000"}
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Payment;