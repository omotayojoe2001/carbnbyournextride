import { Gift, Copy, Check, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const ReferHost = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "HOST2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = {
    referred: 3,
    approved: 2,
    earned: 100000,
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Refer a Host</h1>
        <p className="text-muted-foreground mb-6 md:mb-8">
          Earn ₦50,000 for every host you refer who lists their first vehicle.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-8">
          <div className="p-4 border border-border rounded-xl text-center">
            <Users className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold">{stats.referred}</p>
            <p className="text-xs text-muted-foreground">Referred</p>
          </div>
          <div className="p-4 border border-border rounded-xl text-center">
            <Check className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold">{stats.approved}</p>
            <p className="text-xs text-muted-foreground">Approved</p>
          </div>
          <div className="p-4 border border-border rounded-xl text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold">₦{(stats.earned / 1000)}k</p>
            <p className="text-xs text-muted-foreground">Earned</p>
          </div>
        </div>

        {/* Referral Code */}
        <div className="p-4 sm:p-6 bg-secondary rounded-xl mb-6 md:mb-8">
          <p className="font-medium mb-3">Your referral code</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 px-4 py-3 bg-background border border-border rounded-lg font-mono font-medium text-center sm:text-left">
              {referralCode}
            </div>
            <button
              onClick={handleCopy}
              className="btn-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
        </div>

        {/* How it works */}
        <section>
          <h2 className="text-lg font-semibold mb-4">How it works</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium">Share your code</p>
                <p className="text-sm text-muted-foreground">Send your referral code to potential hosts</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium">They sign up</p>
                <p className="text-sm text-muted-foreground">They use your code when listing their vehicle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium">You earn</p>
                <p className="text-sm text-muted-foreground">Get ₦50,000 when their first vehicle is approved</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default ReferHost;
