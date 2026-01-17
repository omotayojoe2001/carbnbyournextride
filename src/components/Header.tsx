import { useState, useEffect } from "react";
import { Car, Utensils, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const location = useLocation();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isHomePage = location.pathname === "/";

  const navTabs = [
    { id: "cars", label: "Cars", icon: Car, path: "/" },
    { id: "experiences", label: "Experiences", icon: Sparkles, path: "/experiences" },
    { id: "food", label: "Food Menu", icon: Utensils, path: "/food" },
  ];

  // Pages that should hide the header
  const hideHeaderPages = [
    '/car/',
    '/booking/',
    '/trip/',
    '/cart',
    '/checkout',
    '/payment',
    '/booking-confirmation',
    '/driver/',
    '/review/',
    '/messages',
    '/host/messages/',
    '/host/bookings/',
    '/host/vehicles/add',
    '/host/vehicles/',
    '/host/earnings',
    '/host/calendar',
    '/host/profile',
    '/host/settings',
    '/host/policies',
    '/host/reports',
    '/host/drivers',
    '/host/resources',
    '/receipts',
    '/promotions',
    '/safety-center',
    '/report-issue',
    '/about',
    '/contact',
    '/terms',
    '/insurance',
    '/driver-conduct',
    '/help/',
  ];

  const shouldHideHeader = hideHeaderPages.some(page => location.pathname.includes(page));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (shouldHideHeader) {
        // On detail pages, show header when scrolling up (any upward movement)
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, shouldHideHeader]);

  // Always show header on main pages, hide on detail pages unless scrolling up
  if (shouldHideHeader && !isVisible) {
    return null;
  }

  // Always show on main pages
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Top Row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Car className="w-8 h-8" strokeWidth={1.5} />
            <span className="text-xl font-bold tracking-tight hidden sm:block">carbnb</span>
          </Link>

          {/* Center Nav Tabs */}
          <nav className="hidden md:flex items-center gap-8">
            {navTabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={isActive ? "nav-tab-active" : "nav-tab"}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{tab.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/become-host"
              className="hidden lg:block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-full smooth-transition"
            >
              Become a host
            </Link>
            <LanguageSelector />
            <ProfileMenu />
          </div>
        </div>

        {/* Search Bar - Only on Homepage */}
        {isHomePage && (
          <div className="pb-4">
            <SearchBar expanded={isSearchExpanded} onExpandChange={setIsSearchExpanded} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
