import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Check, Car, Shield, DollarSign, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BecomeHost = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn steady income",
      description: "Generate consistent revenue from your luxury vehicle. Our dual pricing model (miles + hours) maximizes your earnings.",
    },
    {
      icon: Shield,
      title: "Full insurance coverage",
      description: "Your car is protected with comprehensive insurance throughout every journey.",
    },
    {
      icon: Users,
      title: "Vetted drivers available",
      description: "We provide professional, uniformed drivers or you can bring your own. All drivers are background-checked.",
    },
    {
      icon: Car,
      title: "Premium client base",
      description: "Connect with high-value clients looking for luxury transport for events, corporate needs, and special occasions.",
    },
  ];

  const requirements = [
    "Minimum vehicle value of ₦40,000,000",
    "Vehicle must be 2020 or newer",
    "Valid vehicle registration and insurance",
    "Regular maintenance records",
    "Professional interior condition",
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Turn your luxury car into a revenue stream
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join Nigeria's premium car rental network. List your vehicle, we provide the drivers, 
                and you earn from every mile and hour.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-started" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
                  Get started
                </Link>
                <Link to="/learn-more" className="btn-outline px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2">
                  Learn more <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80"
                alt="Luxury car"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why host with Carbnb?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-background rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-foreground text-background rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">List your car</h3>
              <p className="text-sm text-muted-foreground">
                Submit your vehicle details and photos. We'll verify eligibility within 48 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-foreground text-background rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Assign a driver</h3>
              <p className="text-sm text-muted-foreground">
                Choose from our vetted drivers or register your own. All in uniform, all professional.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-foreground text-background rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Start earning</h3>
              <p className="text-sm text-muted-foreground">
                Accept bookings and earn from both miles traveled and time spent. Get paid weekly.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-secondary py-16">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold text-center mb-8">Vehicle requirements</h2>
            <p className="text-center text-muted-foreground mb-8">
              We maintain high standards to ensure the best experience for our guests.
            </p>
            <div className="bg-background rounded-2xl p-8">
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start hosting?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of car owners earning premium income with Carbnb.
          </p>
          <Link to="/get-started" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
            List your car today
          </Link>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default BecomeHost;