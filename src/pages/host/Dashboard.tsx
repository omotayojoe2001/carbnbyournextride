import { Link } from "react-router-dom";
import { DollarSign, Car, Calendar, Star, MessageSquare, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostDashboardNew = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Host Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, Emmanuel</p>
          </div>
          <Link to="/host/vehicles/add" className="btn-primary px-6 py-3 rounded-lg font-semibold">
            + Add Vehicle
          </Link>
        </div>

        {/* Earnings Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Today</span>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold">₦45,000</p>
            <p className="text-xs text-green-500 mt-1">+12% from yesterday</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">This Week</span>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">₦285,000</p>
            <p className="text-xs text-blue-500 mt-1">+8% from last week</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">This Month</span>
              <DollarSign className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold">₦1,240,000</p>
            <p className="text-xs text-purple-500 mt-1">+15% from last month</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Pending Payout</span>
              <Clock className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold">₦156,000</p>
            <p className="text-xs text-muted-foreground mt-1">Processes in 2 days</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Car className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Active Trips</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Upcoming Bookings</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Car className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Total Vehicles</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.92</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Action Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Action Items</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">3 Pending Booking Requests</p>
                    <p className="text-sm text-muted-foreground mt-1">Respond within 24 hours to maintain your response rate</p>
                    <Link to="/host/bookings?status=pending" className="text-sm font-medium text-primary hover:underline mt-2 inline-block">
                      Review requests →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">Vehicle Insurance Expiring Soon</p>
                    <p className="text-sm text-muted-foreground mt-1">Mercedes S-Class insurance expires in 15 days</p>
                    <Link to="/host/vehicles/1" className="text-sm font-medium text-primary hover:underline mt-2 inline-block">
                      Update documents →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">5 Unread Messages</p>
                    <p className="text-sm text-muted-foreground mt-1">Guests are waiting for your response</p>
                    <Link to="/host/messages" className="text-sm font-medium text-primary hover:underline mt-2 inline-block">
                      View messages →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, color: "text-green-500", title: "Booking Completed", desc: "Mercedes S-Class - ₦85,000 earned", time: "2 hours ago" },
                  { icon: Calendar, color: "text-blue-500", title: "New Booking", desc: "BMW 7 Series - Dec 28-30", time: "5 hours ago" },
                  { icon: Star, color: "text-yellow-500", title: "New Review", desc: "5 stars from Adebayo K.", time: "1 day ago" },
                  { icon: DollarSign, color: "text-green-500", title: "Payout Received", desc: "₦450,000 deposited to your account", time: "2 days ago" },
                  { icon: Car, color: "text-purple-500", title: "Vehicle Added", desc: "Range Rover Sport listed successfully", time: "3 days ago" },
                ].map((activity, idx) => {
                  const Icon = activity.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <Icon className={`w-5 h-5 ${activity.color} mt-0.5`} />
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.desc}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Response Rate</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Acceptance Rate</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Cancellation Rate</span>
                    <span className="font-medium">2%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Vehicles */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Top Performing Vehicles</h3>
              <div className="space-y-4">
                {[
                  { name: "Mercedes S-Class", earnings: "₦450K", bookings: 23 },
                  { name: "BMW 7 Series", earnings: "₦380K", bookings: 19 },
                  { name: "Range Rover Sport", earnings: "₦520K", bookings: 17 },
                ].map((vehicle, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{vehicle.name}</p>
                      <p className="text-xs text-muted-foreground">{vehicle.bookings} bookings</p>
                    </div>
                    <p className="font-semibold text-sm">{vehicle.earnings}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/host/earnings" className="block text-sm text-primary hover:underline">View Detailed Earnings</Link>
                <Link to="/host/calendar" className="block text-sm text-primary hover:underline">Manage Calendar</Link>
                <Link to="/host/drivers" className="block text-sm text-primary hover:underline">Driver Management</Link>
                <Link to="/host/reports" className="block text-sm text-primary hover:underline">Download Reports</Link>
                <Link to="/host/settings" className="block text-sm text-primary hover:underline">Business Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostDashboardNew;
