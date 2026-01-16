import { ArrowLeft, CreditCard, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { id: 1, last4: "4242", brand: "Visa", expiry: "12/26", isDefault: true },
    { id: 2, last4: "5555", brand: "Mastercard", expiry: "08/25", isDefault: false }
  ]);

  const removeCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to profile
        </Link>

        <h1 className="text-2xl font-bold mb-8">Payment methods</h1>

        <div className="space-y-4 mb-6">
          {cards.map(card => (
            <div key={card.id} className="border border-border rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8" />
                <div>
                  <p className="font-medium">{card.brand} •••• {card.last4}</p>
                  <p className="text-sm text-muted-foreground">Expires {card.expiry}</p>
                  {card.isDefault && (
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full mt-1 inline-block">Default</span>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeCard(card.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-secondary">
          <Plus className="w-5 h-5" />
          <span className="font-medium">Add payment method</span>
        </button>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default PaymentMethods;