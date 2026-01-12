import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { ArrowLeft, DollarSign, Clock, Shield, Users, Calculator, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/become-host" className="flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Become a Host
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Everything you need to know about hosting</h1>
          <p className="text-xl text-muted-foreground">Detailed information about earning, requirements, and support</p>
        </div>

        {/* Earnings Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6" />
            <h2 className="text-2xl font-bold">How much can you earn?</h2>
          </div>
          <div className="bg-secondary rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Dual Pricing Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Miles-based pricing</h4>
                <p className="text-sm text-muted-foreground mb-2">₦800 - ₦2,000 per mile</p>
                <p className="text-xs text-muted-foreground">Depends on vehicle class and demand</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Time-based pricing</h4>
                <p className="text-sm text-muted-foreground mb-2">₦5,000 - ₦15,000 per hour</p>
                <p className="text-xs text-muted-foreground">For events, waiting time, and extended bookings</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Example Earnings</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Airport transfer (25 miles, 1 hour)</span>
                <span className="font-medium">₦25,000 - ₦65,000</span>
              </div>
              <div className="flex justify-between">
                <span>Wedding event (50 miles, 6 hours)</span>
                <span className="font-medium">₦70,000 - ₦190,000</span>
              </div>
              <div className="flex justify-between">
                <span>Corporate daily rental (100 miles, 8 hours)</span>
                <span className="font-medium">₦120,000 - ₦320,000</span>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Detailed Requirements</h2>
          </div>
          <div className="space-y-6">
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Vehicle Standards</h3>
              <ul className="space-y-2 text-sm">
                <li>• Minimum value: ₦40,000,000</li>
                <li>• Model year: 2020 or newer</li>
                <li>• Luxury brands: Mercedes-Benz, BMW, Audi, Lexus, Range Rover, etc.</li>
                <li>• Pristine interior and exterior condition</li>
                <li>• All safety features functional</li>
                <li>• Regular maintenance records required</li>
              </ul>
            </div>
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-sm">
                <li>• Valid vehicle registration</li>
                <li>• Comprehensive insurance policy</li>
                <li>• Owner identification documents</li>
                <li>• Vehicle inspection certificate</li>
                <li>• Driver's license (if providing own driver)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Insurance & Protection */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Insurance & Protection</h2>
          </div>
          <div className="bg-secondary rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">What's Covered</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Comprehensive vehicle insurance</li>
                  <li>• Third-party liability coverage</li>
                  <li>• Theft and damage protection</li>
                  <li>• Driver accident coverage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Your Responsibilities</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Maintain valid personal insurance</li>
                  <li>• Report incidents within 24 hours</li>
                  <li>• Keep vehicle in good condition</li>
                  <li>• Follow safety protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Driver Management */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Driver Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Use Our Drivers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Professional, uniformed drivers</li>
                <li>• Background checked and trained</li>
                <li>• No recruitment hassle</li>
                <li>• We handle driver payments</li>
              </ul>
            </div>
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Bring Your Own Driver</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Must pass background check</li>
                <li>• Professional training required</li>
                <li>• Uniform provided by Carbnb</li>
                <li>• You manage driver payments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-6 h-6" />
            <h2 className="text-2xl font-bold">24/7 Support</h2>
          </div>
          <div className="bg-secondary rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Host Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated support team for all host-related queries</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Emergency Assistance</h3>
                <p className="text-sm text-muted-foreground">24/7 emergency support for incidents and breakdowns</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Technical Help</h3>
                <p className="text-sm text-muted-foreground">App support and booking management assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-muted-foreground mb-6">Join our premium network of luxury car hosts</p>
          <Link to="/get-started" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Get Started Now
          </Link>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default LearnMore;