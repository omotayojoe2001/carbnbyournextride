import { ArrowLeft, Search, ChevronRight, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import LiveChat from "@/components/LiveChat";
import { useState } from "react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpTopics = [
    {
      category: "Booking",
      items: [
        { title: "How to make a booking", path: "/help/booking" },
        { title: "Cancellation policy", path: "/help/cancellation" },
        { title: "Modifying a reservation", path: "/help/modify-reservation" },
        { title: "Payment methods", path: "/help/payments" },
      ],
    },
    {
      category: "During your trip",
      items: [
        { title: "Contacting your driver", path: "/help/contact-driver" },
        { title: "Our no-stop policy", path: "/help/no-stop-policy" },
        { title: "Ordering food during trips", path: "/help/food-ordering" },
        { title: "Safety guidelines", path: "/help/safety" },
      ],
    },
    {
      category: "Hosting",
      items: [
        { title: "How to list your car", path: "/help/list-car" },
        { title: "Host requirements", path: "/help/host-requirements" },
        { title: "Earnings and payouts", path: "/help/earnings" },
        { title: "Driver management", path: "/help/driver-management" },
      ],
    },
    {
      category: "Account",
      items: [
        { title: "Managing your profile", path: "/help/profile" },
        { title: "Verification process", path: "/help/verification" },
        { title: "Privacy and data", path: "/help/privacy" },
        { title: "Delete account", path: "/help/delete-account" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-muted-foreground mb-8">
          How can we help you today?
        </p>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        {/* Help Topics */}
        <div className="space-y-8 mb-12">
          {helpTopics.map((topic) => (
            <div key={topic.category}>
              <h2 className="text-lg font-semibold mb-4">{topic.category}</h2>
              <div className="border border-border rounded-xl overflow-hidden">
                {topic.items.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between p-4 hover:bg-secondary smooth-transition ${
                      index !== topic.items.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Options */}
        <div className="border-t border-border pt-8">
          <h2 className="text-lg font-semibold mb-4">Still need help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-foreground smooth-transition">
              <MessageCircle className="w-6 h-6" />
              <div className="text-left">
                <p className="font-medium">Live chat</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-foreground smooth-transition">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <p className="font-medium">Call us</p>
                <p className="text-sm text-muted-foreground">+234 800 CARBNB</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-foreground smooth-transition">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">help@carbnb.com</p>
              </div>
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
      <LiveChat />
    </div>
  );
};

export default Help;
