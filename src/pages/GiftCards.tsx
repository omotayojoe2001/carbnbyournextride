import { ArrowLeft, Gift, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const GiftCards = () => {
  const [copied, setCopied] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");

  const referralCode = "GUEST2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const giftCardOptions = [
    { amount: 25000, label: "₦25,000" },
    { amount: 50000, label: "₦50,000" },
    { amount: 100000, label: "₦100,000" },
    { amount: 250000, label: "₦250,000" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Gift cards</h1>

        {/* Send Gift Card */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Send a gift card</h2>
          <p className="text-muted-foreground mb-6">
            Give the gift of luxury travel. Carbnb gift cards never expire and can be used for any booking.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {giftCardOptions.map((option) => (
              <button
                key={option.amount}
                className="p-6 border border-border rounded-xl hover:border-foreground smooth-transition text-center"
              >
                <Gift className="w-8 h-8 mx-auto mb-2" />
                <span className="font-semibold">{option.label}</span>
              </button>
            ))}
          </div>

          <button className="btn-primary px-6 py-3 rounded-lg font-medium">
            Purchase gift card
          </button>
        </section>

        {/* Redeem Gift Card */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Redeem a gift card</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={redeemCode}
              onChange={(e) => setRedeemCode(e.target.value)}
              placeholder="Enter gift card code"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            <button className="btn-outline px-6 py-3 rounded-lg font-medium">
              Redeem
            </button>
          </div>
        </section>

        {/* Refer a Friend */}
        <section className="p-6 bg-secondary rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Refer a friend</h2>
          <p className="text-muted-foreground mb-4">
            Share your referral code and both you and your friend get ₦5,000 credit when they complete their first trip.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1 px-4 py-3 bg-background border border-border rounded-lg font-mono font-medium">
              {referralCode}
            </div>
            <button 
              onClick={handleCopy}
              className="btn-primary px-4 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default GiftCards;
