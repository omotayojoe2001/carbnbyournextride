import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Car, Calendar, MessageSquare, Menu } from "lucide-react";

const HostMobileNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/host/dashboard" },
    { icon: Car, label: "Vehicles", path: "/host/vehicles" },
    { icon: Calendar, label: "Bookings", path: "/host/bookings" },
    { icon: MessageSquare, label: "Messages", path: "/host/messages" },
    { icon: Menu, label: "Menu", path: "/host/menu" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-40">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full smooth-transition ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default HostMobileNav;
