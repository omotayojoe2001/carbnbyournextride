import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Eye, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostBookings = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [showAcceptAlert, setShowAcceptAlert] = useState(false);
  const [showDeclineAlert, setShowDeclineAlert] = useState(false);

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

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground mt-1">Manage your reservations</p>
        </div>

        {/* Alerts */}
        {showAcceptAlert && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-[60]">
            <p className="text-sm font-medium">Booking accepted!</p>
          </div>
        )}
        {showDeclineAlert && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg z-[60]">
            <p className="text-sm font-medium">Booking declined!</p>
          </div>
        )}

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
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-semibold text-sm">Guest</th>
                  <th className="text-left p-3 font-semibold text-sm hidden md:table-cell">Vehicle</th>
                  <th className="text-left p-3 font-semibold text-sm hidden md:table-cell">Dates</th>
                  <th className="text-left p-3 font-semibold text-sm">Amount</th>
                  {activeTab === "pending" && <th className="text-left p-3 font-semibold text-sm">Action</th>}
                  <th className="text-left p-3 font-semibold text-sm">View</th>
                </tr>
              </thead>
              <tbody>
                {bookings[activeTab as keyof typeof bookings].map((booking) => (
                  <tr key={booking.id} className="border-t border-border hover:bg-secondary/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <img src={booking.image} alt={booking.guest} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-sm">{booking.guest}</p>
                          <p className="text-xs text-muted-foreground md:hidden">{booking.vehicle} • {booking.dates}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      <p className="text-sm">{booking.vehicle}</p>
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      <p className="text-sm">{booking.dates}</p>
                    </td>
                    <td className="p-3">
                      <p className="font-semibold text-sm text-primary">{booking.amount}</p>
                    </td>
                    {activeTab === "pending" && (
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button 
                            onClick={() => {
                              setShowAcceptAlert(true);
                              setTimeout(() => setShowAcceptAlert(false), 3000);
                            }}
                            className="p-1.5 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                          >
                            <Check className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => {
                              setShowDeclineAlert(true);
                              setTimeout(() => setShowDeclineAlert(false), 3000);
                            }}
                            className="p-1.5 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    )}

                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <Link to={`/car/${booking.id}`} className="p-1.5 hover:bg-secondary rounded text-xs">
                          <Eye className="w-3 h-3" />
                        </Link>
                        <Link to={`/host/messages?guest=${booking.guest}`} className="p-1.5 hover:bg-secondary rounded text-xs">
                          <MessageSquare className="w-3 h-3" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostBookings;
