import { Link } from "react-router-dom";
import { ArrowLeft, Edit } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostProfile = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/host/menu" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Business Profile</h1>
          <button className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <Edit className="w-5 h-5" />
            Edit Profile
          </button>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <img src="https://i.pravatar.cc/100?img=50" alt="Host" className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-semibold">Emmanuel O.</h2>
              <p className="text-muted-foreground">Host since 2023</p>
              <p className="text-sm text-muted-foreground mt-1">Lagos, Nigeria</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Vehicles</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm text-muted-foreground">Trips</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">4.92</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-muted-foreground">Response Rate</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground">Email</label>
                <p className="font-medium">emmanuel@example.com</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Phone</label>
                <p className="font-medium">+234 801 234 5678</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Address</label>
                <p className="font-medium">Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Business Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground">Business Name</label>
                <p className="font-medium">Emmanuel's Luxury Cars</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Tax ID</label>
                <p className="font-medium">12345678901</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Bank Account</label>
                <p className="font-medium">****1234 - First Bank</p>
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

export default HostProfile;