import { ArrowLeft, Shield, Phone, AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const SafetyCenter = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Safety Center</h1>
        </div>
        <p className="text-muted-foreground mb-8">Your safety is our top priority</p>

        <div className="space-y-6">
          {/* Emergency Contacts */}
          <div className="border border-border rounded-xl p-6 bg-red-50 dark:bg-red-950">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-semibold">Emergency Contacts</h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">24/7 Emergency Hotline</p>
                <a href="tel:+2348002272626" className="text-lg font-bold text-red-600">
                  +234 800 CARBNB (227262)
                </a>
              </div>
              <div>
                <p className="font-medium">Police Emergency</p>
                <a href="tel:112" className="text-lg font-bold">112</a>
              </div>
              <div>
                <p className="font-medium">Medical Emergency</p>
                <a href="tel:767" className="text-lg font-bold">767</a>
              </div>
            </div>
          </div>

          {/* Safety Features */}
          <div className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Safety Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">Verified Drivers</h3>
                <p className="text-sm text-muted-foreground">
                  All drivers undergo background checks and professional training
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">Trip Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Share your trip details with friends and family in real-time
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">Insurance Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive insurance on every trip
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock customer support and emergency assistance
                </p>
              </div>
            </div>
          </div>

          {/* Safety Guidelines */}
          <div className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Safety Guidelines</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 mt-0.5 text-yellow-600" />
                <div>
                  <p className="font-medium">Verify your driver</p>
                  <p className="text-muted-foreground">
                    Check driver photo, name, and vehicle details before entering
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Share trip details</p>
                  <p className="text-muted-foreground">
                    Use the share trip feature to let loved ones track your journey
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Stay connected</p>
                  <p className="text-muted-foreground">
                    Keep your phone charged and accessible during trips
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Issue */}
          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Report a Safety Issue</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              If you experience any safety concerns during or after your trip, please report it immediately.
            </p>
            <Link to="/report-issue" className="btn-primary px-6 py-3 rounded-lg font-medium inline-block">
              Report an Issue
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default SafetyCenter;