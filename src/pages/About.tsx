import { ArrowLeft, Shield, Users, Car, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const About = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="space-y-12">
          {/* Hero */}
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Carbnb</h1>
            <p className="text-xl text-muted-foreground">
              Nigeria's premier chauffeured luxury car rental platform
            </p>
          </section>

          {/* Mission */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To revolutionize luxury transportation in Nigeria by connecting discerning travelers with premium vehicles and professional drivers, ensuring every journey is safe, comfortable, and memorable.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive insurance and vetted drivers for every trip
                </p>
              </div>
              <div className="border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Premium vehicles and professional service standards
                </p>
              </div>
              <div className="border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting car owners and creating opportunities
                </p>
              </div>
              <div className="border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Dual pricing model and seamless booking experience
                </p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, Carbnb was born from a simple observation: Nigeria's luxury car owners had valuable assets sitting idle, while travelers struggled to find reliable, premium transportation.
              </p>
              <p>
                We created a platform that benefits everyone - car owners earn income from their vehicles, professional drivers find steady work, and guests enjoy safe, luxurious travel without the hassles of traditional car rentals.
              </p>
              <p>
                Our unique no-roadside-stops policy, combined with in-app food delivery, ensures trips are efficient and comfortable. The dual pricing model (distance + time) provides transparency and fairness for all parties.
              </p>
              <p>
                Today, Carbnb serves thousands of guests across Nigeria, connecting them with hundreds of luxury vehicles and professional drivers.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-foreground text-background rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">500+</p>
                <p className="text-sm opacity-80">Luxury Vehicles</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-sm opacity-80">Professional Drivers</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">50K+</p>
                <p className="text-sm opacity-80">Completed Trips</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">4.9</p>
                <p className="text-sm opacity-80">Average Rating</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Carbnb Community</h2>
            <p className="text-muted-foreground mb-6">
              Whether you're looking to travel in style or earn from your luxury vehicle
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="btn-primary px-8 py-3 rounded-lg font-medium">
                Book a Ride
              </Link>
              <Link to="/become-host" className="btn-outline px-8 py-3 rounded-lg font-medium">
                Become a Host
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default About;