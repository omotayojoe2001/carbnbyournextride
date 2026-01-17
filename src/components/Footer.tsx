import { Link, useLocation } from "react-router-dom";
import { Globe, Car } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  
  // Only show footer on these pages
  const showFooterPages = [
    '/help',
    '/about',
    '/contact',
    '/terms',
    '/insurance',
    '/driver-conduct',
    '/support',
  ];

  const shouldShowFooter = showFooterPages.some(page => location.pathname.includes(page));

  if (!shouldShowFooter) {
    return null;
  }
  const footerLinks = {
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Safety information", href: "/help/safety" },
      { label: "Cancellation options", href: "/help/cancellation" },
      { label: "Insurance Policy", href: "/insurance" },
      { label: "Contact Us", href: "/contact" },
    ],
    hosting: [
      { label: "List your car", href: "/become-host" },
      { label: "Host Dashboard", href: "/host/dashboard" },
      { label: "Driver Code of Conduct", href: "/driver-conduct" },
      { label: "Refer a Host", href: "/refer" },
      { label: "Find a Co-host", href: "/cohost" },
    ],
    carbnb: [
      { label: "About Us", href: "/about" },
      { label: "Food Menu", href: "/food" },
      { label: "Gift Cards", href: "/gift-cards" },
      { label: "Experiences", href: "/experiences" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-border">
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground hover:underline smooth-transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hosting</h4>
            <ul className="space-y-3">
              {footerLinks.hosting.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground hover:underline smooth-transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Carbnb</h4>
            <ul className="space-y-3">
              {footerLinks.carbnb.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground hover:underline smooth-transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 Carbnb, Inc.</span>
            <span>·</span>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <span>·</span>
            <Link to="/help/privacy" className="hover:underline">Privacy</Link>
            <span>·</span>
            <Link to="/insurance" className="hover:underline">Insurance</Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm font-medium hover:underline">
              <Globe className="w-4 h-4" />
              <span>English (NG)</span>
            </button>
            <span className="text-sm font-medium">₦ NGN</span>
            <div className="flex items-center gap-1">
              <Car className="w-5 h-5" />
              <span className="text-sm font-bold">carbnb</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;