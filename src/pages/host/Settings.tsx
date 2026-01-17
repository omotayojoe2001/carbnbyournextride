import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostSettings = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/host/menu" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Booking Requests</p>
                  <p className="text-sm text-muted-foreground">Get notified of new booking requests</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Messages</p>
                  <p className="text-sm text-muted-foreground">Get notified of new messages</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payouts</p>
                  <p className="text-sm text-muted-foreground">Get notified when payouts are processed</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Payout Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Payout Method</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg">
                  <option>Bank Transfer</option>
                  <option>Mobile Money</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Payout Schedule</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg">
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Profile to Guests</p>
                  <p className="text-sm text-muted-foreground">Allow guests to view your profile</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Share Contact Info</p>
                  <p className="text-sm text-muted-foreground">Share phone number with confirmed guests</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
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

export default HostSettings;