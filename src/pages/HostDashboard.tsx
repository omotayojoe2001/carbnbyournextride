import { ArrowLeft, DollarSign, Car, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const HostDashboard = () => {
  const stats = {
    totalEarnings: 2450000,
    thisMonth: 450000,
    activeVehicles: 2,
    totalTrips: 45,
    upcomingBookings: 8,
    avgRating: 4.8
  };

  const recentBookings = [
    { id: 1, guest: "Adebayo M.", car: "Mercedes S-Class", date: "Jan 20", amount: 85000, status: "Confirmed" },
    { id: 2, guest: "Sarah O.", car: "BMW 7 Series", date: "Jan 18", amount: 120000, status: "Completed" },
    { id: 3, guest: "Michael C.", car: "Mercedes S-Class", date: "Jan 15", amount: 95000, status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to profile
        </Link>

        <h1 className="text-3xl font-bold mb-8">Host Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Earnings</span>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold">₦{stats.totalEarnings.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">All time</p>
          </div>

          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">This Month</span>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">₦{stats.thisMonth.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">+15% from last month</p>
          </div>

          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Active Vehicles</span>
              <Car className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold">{stats.activeVehicles}</p>
            <p className="text-xs text-muted-foreground mt-1">{stats.totalTrips} total trips</p>
          </div>

          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Upcoming</span>
              <Calendar className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold">{stats.upcomingBookings}</p>
            <p className="text-xs text-muted-foreground mt-1">Confirmed bookings</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link to="/profile/vehicles" className="border border-border rounded-xl p-4 hover:bg-secondary smooth-transition">
            <Car className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">Manage Vehicles</h3>
            <p className="text-sm text-muted-foreground">View and edit your listings</p>
          </Link>
          <Link to="/profile/reservations" className="border border-border rounded-xl p-4 hover:bg-secondary smooth-transition">
            <Calendar className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">Reservations</h3>
            <p className="text-sm text-muted-foreground">Manage bookings and calendar</p>
          </Link>
          <Link to="/profile/earnings" className="border border-border rounded-xl p-4 hover:bg-secondary smooth-transition">
            <DollarSign className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">Earnings</h3>
            <p className="text-sm text-muted-foreground">View detailed earnings report</p>
          </Link>
        </div>

        {/* Recent Bookings */}
        <div className="border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {recentBookings.map(booking => (
              <div key={booking.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium">{booking.guest}</p>
                  <p className="text-sm text-muted-foreground">{booking.car} • {booking.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₦{booking.amount.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === "Confirmed" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/profile/reservations" className="block text-center mt-4 text-sm font-medium hover:underline">
            View all bookings
          </Link>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default HostDashboard;