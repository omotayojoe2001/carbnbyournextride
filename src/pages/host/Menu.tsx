import { Link } from "react-router-dom";
import { DollarSign, Calendar, Users, Settings, FileText, BarChart3, HelpCircle, LogOut, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostMenu = () => {
  const menuSections = [
    {
      title: "Business",
      items: [
        { icon: DollarSign, label: "Earnings & Payouts", path: "/host/earnings" },
        { icon: Calendar, label: "Calendar & Availability", path: "/host/calendar" },
        { icon: Users, label: "Driver Management", path: "/host/drivers" },
        { icon: BarChart3, label: "Reports & Analytics", path: "/host/reports" },
      ],
    },
    {
      title: "Account",
      items: [
        { icon: User, label: "Business Profile", path: "/host/profile" },
        { icon: Settings, label: "Settings", path: "/host/settings" },
        { icon: FileText, label: "Policies & Rules", path: "/host/policies" },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Host Help Center", path: "/help" },
        { icon: FileText, label: "Host Resources", path: "/host/resources" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Menu</h1>
          <p className="text-muted-foreground mt-1">Manage your hosting business</p>
        </div>

        {/* Host Info Card */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/100?img=50" alt="Host" className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Emmanuel O.</h2>
              <p className="text-sm text-muted-foreground">Host since 2023</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <span>⭐ 4.92 rating</span>
                <span>5 vehicles</span>
                <span>127 trips</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section) => (
            <div key={section.title} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold">{section.title}</h3>
              </div>
              <div>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 p-4 hover:bg-secondary border-b border-border last:border-0"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <span className="flex-1">{item.label}</span>
                      <span className="text-muted-foreground">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Switch to Guest Mode */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <Link to="/" className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Switch to Guest Mode</p>
              <p className="text-sm text-muted-foreground">Browse and book vehicles</p>
            </div>
            <span className="text-primary">→</span>
          </Link>
        </div>

        {/* Logout */}
        <button className="w-full mt-4 bg-card border border-border rounded-xl p-4 flex items-center justify-center gap-2 text-red-500 hover:bg-secondary">
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Logout</span>
        </button>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostMenu;
