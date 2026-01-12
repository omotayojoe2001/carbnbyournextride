import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Support = () => {
  const tickets = [
    {
      id: "1",
      subject: "Booking cancellation refund",
      status: "Resolved",
      date: "Jan 5, 2026",
    },
    {
      id: "2", 
      subject: "Driver did not show up",
      status: "In progress",
      date: "Jan 2, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">Support history</h1>

        {tickets.length > 0 ? (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="border border-border rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold">{ticket.subject}</h3>
                  <span className={`inline-block self-start text-xs px-2 py-1 rounded-full ${
                    ticket.status === "Resolved" ? "bg-secondary" : "bg-foreground text-background"
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{ticket.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <Clock className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">No support tickets</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Your support history will appear here
            </p>
            <Link to="/help" className="btn-primary px-6 py-3 rounded-lg font-medium inline-block">
              Visit Help Center
            </Link>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Support;
