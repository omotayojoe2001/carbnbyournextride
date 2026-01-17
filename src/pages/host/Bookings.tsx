import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Eye, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostBookings = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const bookings = {
    pending: [
      { id: "B001", guest: "Adebayo K.", vehicle: "Mercedes S-Class", dates: "Dec 28-30, 2025", amount: "₦85,000", image: "https://i.pravatar.cc/100?img=1" },
      { id: "B002", guest: "Chioma N.", vehicle: "BMW 7 Series", dates: "Dec 29-31, 2025", amount: "₦72,000", image: "https://i.pravatar.cc/100?img=2" },
      { id: "B003", guest: "Tunde O.", vehicle: "Range Rover Sport", dates: "Jan 2-5, 2026", amount: "₦120,000", image: "https://i.pravatar.cc/100?img=3" },
    ],
    upcoming: [
      { id: "B004", guest: "Funke A.", vehicle: "Lexus ES 350", dates: "Jan 10-12, 2026", amount: "₦68,000", image: "https://i.pravatar.cc/100?img=4" },
      { id: "B005", guest: "Emeka I.", vehicle: "Mercedes S-Class", dates: "Jan 15-17, 2026", amount: "₦85,000", image: "https://i.pravatar.cc/100?img=5" },
    ],
    active: [
      { id: "B006", guest: "Ngozi P.", vehicle: "BMW 7 Series", dates: "Dec 26-28, 2025", amount: "₦72,000", image: "https://i.pravatar.cc/100?img=6" },
      { id: "B007", guest: "Yemi S.", vehicle: "Range Rover Sport", dates: "Dec 25-27, 2025", amount: "₦90,000", image: "https://i.pravatar.cc/100?img=7" },
    ],
    completed: [
      { id: "B008", guest: "Kemi L.", vehicle: "Mercedes S-Class", dates: "Dec 20-22, 2025", amount: "₦85,000", image: "https://i.pravatar.cc/100?img=8" },
      { id: "B009", guest: "Bola M.", vehicle: "Toyota Camry", dates: "Dec 18-19, 2025", amount: "₦32,000", image: "https://i.pravatar.cc/100?img=9" },
    ],
    cancelled: [
      { id: "B010", guest: "Segun O.", vehicle: "Lexus ES 350", dates: "Dec 15-17, 2025", amount: "₦68,000", image: "https://i.pravatar.cc/100?img=10" },
    ],
  };

  const tabs = [
    { key: "pending", label: "Pending", count: bookings.pending.length },
    { key: "upcoming", label: "Upcoming", count: bookings.upcoming.length },
    { key: "active", label: "Active", count: bookings.active.length },
    { key: "completed", label: "Completed", count: bookings.completed.length },
    { key: "cancelled", label: "Cancelled", count: bookings.cancelled.length },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground mt-1">Manage your reservations</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings[activeTab as keyof typeof bookings].map((booking) => (
            <div key={booking.id} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <img src={booking.image} alt={booking.guest} className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{booking.guest}</h3>
                      <span className="text-xs text-muted-foreground">#{booking.id}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{booking.vehicle}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium">{booking.dates}</span>
                      <span className="text-primary font-semibold">{booking.amount}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {activeTab === "pending" && (
                    <>
                      <button 
                        onClick={() => alert('Booking accepted!')}
                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => alert('Booking declined!')}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  <Link to={`/host/bookings/${booking.id}`} className="p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                    <Eye className="w-5 h-5" />
                  </Link>
                  <Link to={`/host/messages?guest=${booking.guest}`} className="p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                    <MessageSquare className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostBookings;
