import { Link } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, Users, Car, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostReports = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-6">
        <Link to="/host/menu" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <button className="btn-primary px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Bookings</span>
              <Calendar className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-xl font-bold">127</p>
            <p className="text-xs text-blue-500 mt-1">+15% this month</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Avg Trip Duration</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-xl font-bold">2.3 days</p>
            <p className="text-xs text-green-500 mt-1">+0.2 vs last month</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Repeat Customers</span>
              <Users className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-xl font-bold">34%</p>
            <p className="text-xs text-purple-500 mt-1">+5% this month</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Fleet Utilization</span>
              <Car className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-xl font-bold">78%</p>
            <p className="text-xs text-orange-500 mt-1">+3% this month</p>
          </div>
        </div>

        {/* Performance by Vehicle */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          <h3 className="font-semibold mb-4">Vehicle Performance</h3>
          <div className="space-y-3">
            {[
              { name: "Mercedes S-Class", bookings: 23, revenue: "₦450K", utilization: "85%" },
              { name: "BMW 7 Series", bookings: 19, revenue: "₦380K", utilization: "76%" },
              { name: "Range Rover Sport", bookings: 17, revenue: "₦520K", utilization: "68%" },
              { name: "Lexus ES 350", bookings: 15, revenue: "₦320K", utilization: "60%" },
            ].map((vehicle, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{vehicle.name}</p>
                  <p className="text-xs text-muted-foreground">{vehicle.bookings} bookings • {vehicle.utilization} utilization</p>
                </div>
                <p className="font-semibold text-sm">{vehicle.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-4">Peak Booking Days</h3>
            <div className="space-y-2">
              {["Friday", "Saturday", "Sunday", "Thursday"].map((day, idx) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-sm">{day}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${90 - idx * 15}%` }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{90 - idx * 15}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-4">Customer Ratings</h3>
            <div className="space-y-2">
              {[
                { stars: "5 Stars", count: 89, percentage: 70 },
                { stars: "4 Stars", count: 28, percentage: 22 },
                { stars: "3 Stars", count: 8, percentage: 6 },
                { stars: "2 Stars", count: 2, percentage: 2 },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center justify-between">
                  <span className="text-sm">{rating.stars}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-secondary rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${rating.percentage}%` }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{rating.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostReports;