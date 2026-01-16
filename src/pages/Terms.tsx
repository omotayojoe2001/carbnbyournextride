import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Carbnb's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
            <p className="text-muted-foreground mb-2">
              Carbnb is a premium chauffeured car rental platform that connects guests with luxury vehicles and professional drivers. Our services include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Luxury vehicle rentals with professional drivers</li>
              <li>Dual pricing model (distance + time based)</li>
              <li>In-app food and beverage ordering</li>
              <li>No roadside stops policy</li>
              <li>24/7 customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-2">As a user of Carbnb, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Treat drivers and vehicles with respect</li>
              <li>Pay all fees and charges on time</li>
              <li>Follow the no roadside stops policy</li>
              <li>Report any issues immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Host Responsibilities</h2>
            <p className="text-muted-foreground mb-2">As a host on Carbnb, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Provide vehicles that meet our quality standards</li>
              <li>Ensure drivers are properly licensed and trained</li>
              <li>Maintain comprehensive insurance coverage</li>
              <li>Keep vehicles clean and well-maintained</li>
              <li>Honor confirmed bookings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Pricing and Payments</h2>
            <p className="text-muted-foreground">
              All prices are set by vehicle owners. Carbnb charges a platform fee on each booking. Final trip costs are calculated based on actual distance traveled and time spent. Payment is processed securely through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Cancellation Policy</h2>
            <p className="text-muted-foreground">
              Cancellations made 24 hours or more before the scheduled pickup time receive a full refund. Cancellations made less than 24 hours before pickup are subject to a 50% cancellation fee. No-shows are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Liability and Insurance</h2>
            <p className="text-muted-foreground">
              All trips are covered by comprehensive insurance. Carbnb is not liable for personal belongings left in vehicles. Guests are responsible for any damage caused to vehicles during their trip.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Prohibited Activities</h2>
            <p className="text-muted-foreground mb-2">The following activities are strictly prohibited:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Smoking in vehicles</li>
              <li>Illegal activities</li>
              <li>Harassment of drivers</li>
              <li>Requesting unauthorized stops</li>
              <li>Exceeding passenger capacity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Termination</h2>
            <p className="text-muted-foreground">
              Carbnb reserves the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-muted-foreground">
              For questions about these terms, please contact us at legal@carbnb.com or visit our Help Center.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Terms;