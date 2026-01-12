import { ArrowLeft, Bell, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const Notifications = () => {
  const [settings, setSettings] = useState({
    emailBookings: true,
    emailPromotions: false,
    emailMessages: true,
    pushBookings: true,
    pushMessages: true,
    smsBookings: false,
    smsReminders: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">Notifications</h1>
        <p className="text-muted-foreground mb-8">
          Choose how and when you want to be notified.
        </p>

        {/* Email Notifications */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Email notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Booking updates</p>
                <p className="text-sm text-muted-foreground">Confirmations, reminders, and changes</p>
              </div>
              <button 
                onClick={() => toggleSetting("emailBookings")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.emailBookings ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.emailBookings ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Messages</p>
                <p className="text-sm text-muted-foreground">When hosts or drivers message you</p>
              </div>
              <button 
                onClick={() => toggleSetting("emailMessages")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.emailMessages ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.emailMessages ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Promotions and tips</p>
                <p className="text-sm text-muted-foreground">Discounts, travel tips, and inspiration</p>
              </div>
              <button 
                onClick={() => toggleSetting("emailPromotions")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.emailPromotions ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.emailPromotions ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Push Notifications */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Push notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Booking updates</p>
                <p className="text-sm text-muted-foreground">Real-time updates on your trips</p>
              </div>
              <button 
                onClick={() => toggleSetting("pushBookings")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.pushBookings ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.pushBookings ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Messages</p>
                <p className="text-sm text-muted-foreground">New message notifications</p>
              </div>
              <button 
                onClick={() => toggleSetting("pushMessages")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.pushMessages ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.pushMessages ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>
        </section>

        {/* SMS Notifications */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-5 h-5" />
            <h2 className="text-lg font-semibold">SMS notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Booking confirmations</p>
                <p className="text-sm text-muted-foreground">Text confirmations for bookings</p>
              </div>
              <button 
                onClick={() => toggleSetting("smsBookings")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.smsBookings ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.smsBookings ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="font-medium">Trip reminders</p>
                <p className="text-sm text-muted-foreground">Reminders before your scheduled trips</p>
              </div>
              <button 
                onClick={() => toggleSetting("smsReminders")}
                className={`w-12 h-6 rounded-full smooth-transition ${settings.smsReminders ? "bg-foreground" : "bg-border"}`}
              >
                <div className={`w-5 h-5 bg-background rounded-full smooth-transition ${settings.smsReminders ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Notifications;
