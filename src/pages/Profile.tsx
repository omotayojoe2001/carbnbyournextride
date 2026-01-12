import { Link, useLocation } from "react-router-dom";
import { 
  User, Settings, Heart, MapPin, CreditCard, Bell, Shield, HelpCircle, 
  LogOut, ChevronRight, Star, Car, Clock, FileText, Gift
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Profile = () => {
  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Personal info", path: "/profile/personal-info", description: "Provide personal details and how we can reach you" },
        { icon: Shield, label: "Login & security", path: "/profile/security", description: "Update your password and secure your account" },
        { icon: CreditCard, label: "Payments & payouts", path: "/profile/payments", description: "Review payments, payouts, and gift cards" },
        { icon: Bell, label: "Notifications", path: "/profile/notifications", description: "Choose notification preferences" },
      ],
    },
    {
      title: "Hosting",
      items: [
        { icon: Car, label: "Your vehicles", path: "/profile/vehicles", description: "Manage your listed vehicles" },
        { icon: Star, label: "Reservations", path: "/profile/reservations", description: "View and manage bookings" },
        { icon: FileText, label: "Earnings", path: "/profile/earnings", description: "Track your earnings and statements" },
      ],
    },
    {
      title: "Travel",
      items: [
        { icon: MapPin, label: "Your trips", path: "/profile/trips", description: "View past and upcoming trips" },
        { icon: Heart, label: "Wishlist", path: "/profile/wishlist", description: "View your saved cars" },
        { icon: Gift, label: "Gift cards", path: "/profile/gift-cards", description: "Send or redeem a gift card" },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help Center", path: "/help", description: "Get help with your bookings and account" },
        { icon: Clock, label: "Support history", path: "/profile/support", description: "View past support tickets" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1100px] mx-auto px-6 md:px-10 py-8">
        {/* Profile Header */}
        <div className="flex items-center gap-6 pb-8 border-b border-border mb-8">
          <div className="w-24 h-24 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background text-3xl font-semibold">G</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Guest</h1>
            <p className="text-muted-foreground mt-1">guest@carbnb.com</p>
            <Link to="/profile/personal-info" className="text-sm font-medium underline mt-2 inline-block">
              Edit profile
            </Link>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary smooth-transition group"
                    >
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-background smooth-transition">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sign Out */}
        <div className="mt-8 pt-8 border-t border-border">
          <button className="flex items-center gap-3 text-muted-foreground hover:text-foreground smooth-transition">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign out</span>
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Profile;
