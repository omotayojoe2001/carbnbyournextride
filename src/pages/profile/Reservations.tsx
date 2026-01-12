import { ArrowLeft, Calendar, MapPin, Clock, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const Reservations = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "cancelled">("upcoming");

  const reservations = {
    upcoming: [
      {
        id: "1",
        guest: "Oluwaseun Adeyemi",
        car: "Mercedes S-Class",
        date: "Jan 20, 2026",
        time: "10:00 AM",
        pickup: "Victoria Island",
        dropoff: "Murtala Muhammed Airport",
        amount: 85000,
        status: "Confirmed",
      },
    ],
    past: [
      {
        id: "2",
        guest: "Chidinma Okafor",
        car: "BMW 7 Series",
        date: "Jan 5, 2026",
        time: "2:00 PM",
        pickup: "Ikoyi",
        dropoff: "Eko Hotel",
        amount: 45000,
        status: "Completed",
      },
    ],
    cancelled: [],
  };

  const currentReservations = reservations[activeTab];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Reservations</h1>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-6 md:mb-8 border-b border-border overflow-x-auto hide-scrollbar">
          {["upcoming", "past", "cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`pb-3 sm:pb-4 text-sm font-medium whitespace-nowrap smooth-transition ${
                activeTab === tab ? "border-b-2 border-foreground" : "text-muted-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {currentReservations.length > 0 ? (
          <div className="space-y-4">
            {currentReservations.map((reservation) => (
              <div key={reservation.id} className="border border-border rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold">{reservation.guest}</h3>
                    <p className="text-sm text-muted-foreground">{reservation.car}</p>
                  </div>
                  <span className={`inline-block self-start text-xs px-2 py-1 rounded-full ${
                    reservation.status === "Confirmed" ? "bg-foreground text-background" : "bg-secondary"
                  }`}>
                    {reservation.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{reservation.date} at {reservation.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{reservation.pickup} → {reservation.dropoff}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 pt-4 border-t border-border">
                  <span className="font-semibold">₦{reservation.amount.toLocaleString()}</span>
                  {activeTab === "upcoming" && (
                    <div className="flex gap-2">
                      <button className="flex-1 sm:flex-none btn-outline px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                        <X className="w-4 h-4" /> Decline
                      </button>
                      <button className="flex-1 sm:flex-none btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                        <Check className="w-4 h-4" /> Accept
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <Calendar className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">No {activeTab} reservations</h2>
            <p className="text-sm text-muted-foreground">
              {activeTab === "upcoming" ? "New bookings will appear here" : "Your completed trips will show here"}
            </p>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Reservations;
