import { ArrowLeft, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const DriverConduct = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <UserCheck className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Driver Code of Conduct</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-8">Professional standards for all Carbnb drivers</p>

        <div className="space-y-6">
          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Professional Appearance</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Wear clean, professional attire at all times</li>
              <li>Maintain good personal hygiene</li>
              <li>Present a neat and tidy appearance</li>
              <li>Wear company-provided uniform if applicable</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Vehicle Standards</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Keep vehicle clean inside and out before each trip</li>
              <li>Ensure vehicle is in good working condition</li>
              <li>Maintain comfortable temperature</li>
              <li>Stock water bottles and amenities</li>
              <li>Remove personal items from vehicle</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Guest Interaction</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Greet guests professionally and courteously</li>
              <li>Assist with luggage when appropriate</li>
              <li>Respect guest privacy and personal space</li>
              <li>Maintain professional conversation</li>
              <li>Do not ask for personal contact information</li>
              <li>Never discriminate based on race, religion, gender, or orientation</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Driving Standards</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Follow all traffic laws and regulations</li>
              <li>Drive safely and defensively</li>
              <li>Use GPS navigation for optimal routes</li>
              <li>Avoid sudden braking or acceleration</li>
              <li>Never use phone while driving</li>
              <li>Maintain appropriate speed</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6 bg-red-50 dark:bg-red-950">
            <h2 className="text-xl font-semibold mb-3 text-red-600">No Roadside Stops Policy</h2>
            <p className="text-muted-foreground mb-3">
              Carbnb operates a strict no roadside stops policy. Drivers must:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Never make unauthorized stops during trips</li>
              <li>Proceed directly from pickup to destination</li>
              <li>Decline guest requests for roadside stops</li>
              <li>Inform guests about our food delivery service instead</li>
              <li>Report any pressure to make unauthorized stops</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Communication</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Respond promptly to guest messages</li>
              <li>Confirm pickup details in advance</li>
              <li>Notify guests of any delays immediately</li>
              <li>Use in-app messaging for all communication</li>
              <li>Be clear and professional in all interactions</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Prohibited Behaviors</h2>
            <p className="text-muted-foreground mb-3">
              The following behaviors will result in immediate suspension:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Driving under the influence of alcohol or drugs</li>
              <li>Harassment or inappropriate behavior toward guests</li>
              <li>Requesting tips or additional payments</li>
              <li>Smoking in or around the vehicle</li>
              <li>Using guest information for personal purposes</li>
              <li>Accepting cash payments outside the platform</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Emergency Procedures</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Know emergency contact numbers</li>
              <li>Report accidents immediately</li>
              <li>Follow safety protocols in emergencies</li>
              <li>Keep first aid kit accessible</li>
              <li>Document incidents with photos when safe</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Consequences of Violations</h2>
            <p className="text-muted-foreground mb-3">
              Violations of this code of conduct may result in:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• First offense: Warning and mandatory retraining</li>
              <li>• Second offense: Temporary suspension (7-30 days)</li>
              <li>• Third offense: Permanent removal from platform</li>
              <li>• Serious violations: Immediate termination</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default DriverConduct;