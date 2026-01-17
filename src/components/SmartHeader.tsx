import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";

const SmartHeader = () => {
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Define detail/inner pages that shouldn't show full header
  const detailPages = [
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

  const isDetailPage = detailPages.some(page => location.pathname.includes(page));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isDetailPage) {
        // Show back button when scrolling up on detail pages
        if (currentScrollY < lastScrollY && currentScrollY > 100) {
          setShowBackButton(true);
        } else if (currentScrollY > lastScrollY) {
          setShowBackButton(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isDetailPage]);

  const getBackPath = () => {
    if (location.pathname.includes('/car/')) return '/';
    if (location.pathname.includes('/booking/')) return '/';
    if (location.pathname.includes('/cart')) return '/food';
    if (location.pathname.includes('/checkout')) return '/cart';
    if (location.pathname.includes('/payment')) return '/checkout';
    if (location.pathname.includes('/host/')) return '/host/dashboard';
    if (location.pathname.includes('/help/')) return '/help';
    return '/';
  };

  const getBackLabel = () => {
    if (location.pathname.includes('/car/')) return 'Back to listings';
    if (location.pathname.includes('/cart')) return 'Back to menu';
    if (location.pathname.includes('/checkout')) return 'Back to cart';
    if (location.pathname.includes('/host/')) return 'Back to dashboard';
    return 'Back';
  };

  // Show full header on main pages
  if (!isDetailPage) {
    return <Header />;
  }

  // Show back button on detail pages when scrolling up
  if (showBackButton) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            {getBackLabel()}
          </button>
        </div>
      </div>
    );
  }

  // Hide header completely on detail pages
  return null;
};

export default SmartHeader;