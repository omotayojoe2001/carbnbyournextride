import { Check, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[600px] mx-auto px-6 md:px-10 py-8">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Your order has been placed successfully
            </p>
          </div>

          {/* Order Details */}
          <div className="border border-border rounded-xl p-6 text-left">
            <h3 className="font-semibold mb-4">Order Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-medium">CBN-FOOD-001234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">Jan 15, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Amount</span>
                <span className="font-medium">₦11,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method</span>
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-secondary rounded-xl p-6 text-left">
            <h3 className="font-semibold mb-3">Delivery Information</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Your order will be delivered during your trip. The driver will coordinate with you for the exact delivery time.
            </p>
            <p className="text-sm font-medium">
              Estimated delivery: 30-45 minutes
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download Receipt</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              to="/trip/active"
              className="btn-primary py-3 rounded-xl font-medium"
            >
              View Active Trip
            </Link>
            <Link
              to="/"
              className="btn-outline py-3 rounded-xl font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default BookingConfirmation;