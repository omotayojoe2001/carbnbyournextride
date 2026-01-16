import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const InsurancePolicy = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Insurance Policy</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-8">Comprehensive coverage for every trip</p>

        <div className="space-y-6">
          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Coverage Overview</h2>
            <p className="text-muted-foreground mb-4">
              Every Carbnb trip is protected by comprehensive insurance coverage, ensuring peace of mind for both guests and hosts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h3 className="font-semibold mb-2">For Guests</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Personal injury coverage</li>
                  <li>• Third-party liability</li>
                  <li>• Medical expenses</li>
                  <li>• Emergency assistance</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h3 className="font-semibold mb-2">For Hosts</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vehicle damage coverage</li>
                  <li>• Theft protection</li>
                  <li>• Liability coverage</li>
                  <li>• Loss of income protection</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Coverage Limits</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Vehicle Damage</span>
                <span className="font-medium">Up to ₦50,000,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Third-Party Liability</span>
                <span className="font-medium">Up to ₦100,000,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Medical Expenses</span>
                <span className="font-medium">Up to ₦5,000,000 per person</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Personal Belongings</span>
                <span className="font-medium">Up to ₦500,000</span>
              </div>
            </div>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">What's Not Covered</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Damage caused by prohibited activities (smoking, illegal acts)</li>
              <li>Pre-existing vehicle damage</li>
              <li>Intentional damage or negligence</li>
              <li>Items left in vehicle after trip completion</li>
              <li>Damage during unauthorized use</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Filing a Claim</h2>
            <p className="text-muted-foreground mb-4">
              If you need to file an insurance claim, follow these steps:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>Report the incident immediately through the app or call our 24/7 hotline</li>
              <li>Document the incident with photos and detailed description</li>
              <li>Complete the claim form within 24 hours</li>
              <li>Provide all required documentation (police report if applicable)</li>
              <li>Our insurance team will review and process your claim within 5-7 business days</li>
            </ol>
          </section>

          <section className="border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Deductibles</h2>
            <p className="text-muted-foreground mb-3">
              Standard deductibles apply to all claims:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Minor damage: ₦50,000 deductible</li>
              <li>• Major damage: ₦200,000 deductible</li>
              <li>• Theft: ₦500,000 deductible</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Emergency Contact</h2>
            <p className="text-muted-foreground mb-3">
              For insurance emergencies or questions:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>24/7 Hotline:</strong> +234 800 CARBNB (227262)</p>
              <p><strong>Email:</strong> insurance@carbnb.com</p>
              <p><strong>Claims Portal:</strong> carbnb.com/claims</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default InsurancePolicy;