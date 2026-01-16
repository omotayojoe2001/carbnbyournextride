import { ArrowLeft, Tag, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Promotions = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const promos = [
    { code: "FIRST20", discount: "20% off", description: "First ride discount", expiry: "Valid until Feb 28, 2026", active: true },
    { code: "LUXURY50", discount: "₦50,000 off", description: "Luxury car bookings", expiry: "Valid until Jan 31, 2026", active: true },
    { code: "WEEKEND15", discount: "15% off", description: "Weekend rides", expiry: "Valid until Dec 31, 2025", active: false }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Tag className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Promotions & Offers</h1>
        </div>
        <p className="text-muted-foreground mb-8">Save on your next ride with exclusive promo codes</p>

        <div className="space-y-4">
          {promos.map(promo => (
            <div key={promo.code} className={`border rounded-xl p-6 ${promo.active ? 'border-border' : 'border-border opacity-50'}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-green-600">{promo.discount}</span>
                    {!promo.active && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Expired</span>
                    )}
                  </div>
                  <p className="font-semibold mb-1">{promo.description}</p>
                  <p className="text-sm text-muted-foreground">{promo.expiry}</p>
                </div>
                {promo.active && (
                  <button
                    onClick={() => copyCode(promo.code)}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm font-medium">{promo.code}</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-border rounded-xl p-6 bg-secondary">
          <h3 className="font-semibold mb-3">How to use promo codes</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-5">
            <li>Copy your preferred promo code</li>
            <li>Select your car and proceed to booking</li>
            <li>Enter the promo code at checkout</li>
            <li>Discount will be applied automatically</li>
          </ol>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Promotions;