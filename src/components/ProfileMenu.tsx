import { useState, useRef, useEffect } from "react";
import { Menu, HelpCircle, Home, UserPlus, Gift, CreditCard, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 pl-3 border border-border rounded-full hover:shadow-md smooth-transition"
      >
        <Menu className="w-5 h-5" strokeWidth={1.5} />
        <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
          <span className="text-background text-xs font-medium">G</span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-elevated z-50 animate-fade-in overflow-hidden">
          <div className="py-2">
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary smooth-transition"
            >
              <LogIn className="w-5 h-5" />
              <span className="font-medium">Log in or sign up</span>
            </Link>
          </div>
          
          <div className="border-t border-border py-2">
            <Link 
              to="/help" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary smooth-transition"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Help Center</span>
            </Link>
            
            <div className="px-4 py-3 hover:bg-secondary smooth-transition">
              <Link to="/become-host" onClick={() => setIsOpen(false)} className="block">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Become a host</p>
                    <p className="text-xs text-muted-foreground">It's easy to start hosting and earn extra income.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <Link 
              to="/refer" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary smooth-transition"
            >
              <UserPlus className="w-5 h-5" />
              <span>Refer a Host</span>
            </Link>
            
            <Link 
              to="/cohost" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary smooth-transition"
            >
              <UserPlus className="w-5 h-5" />
              <span>Find a co-host</span>
            </Link>
            
            <Link 
              to="/gift-cards" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary smooth-transition"
            >
              <Gift className="w-5 h-5" />
              <span>Gift cards</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
