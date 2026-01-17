import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const bookings = {
    "2025-12-28": { guest: "Adebayo K.", vehicle: "Mercedes S-Class" },
    "2025-12-29": { guest: "Chioma N.", vehicle: "BMW 7 Series" },
    "2025-12-30": { guest: "Tunde O.", vehicle: "Range Rover Sport" },
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        <Link to="/host/menu" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Calendar & Availability</h1>
          <button className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Block Dates
          </button>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                className="p-2 hover:bg-secondary rounded-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                className="p-2 hover:bg-secondary rounded-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-3 text-center font-medium text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDayOfMonth }, (_, i) => (
              <div key={i} className="p-3"></div>
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const booking = bookings[dateStr];
              
              return (
                <div key={day} className={`p-3 text-center border border-border rounded-lg hover:bg-secondary cursor-pointer ${
                  booking ? 'bg-primary/10 border-primary' : ''
                }`}>
                  <div className="font-medium">{day}</div>
                  {booking && (
                    <div className="text-xs text-primary mt-1">
                      {booking.guest}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Upcoming Bookings</h3>
          <div className="space-y-3">
            {Object.entries(bookings).map(([date, booking]) => (
              <div key={date} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-medium">{booking.guest}</p>
                  <p className="text-sm text-muted-foreground">{booking.vehicle}</p>
                </div>
                <p className="text-sm font-medium">{new Date(date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostCalendar;