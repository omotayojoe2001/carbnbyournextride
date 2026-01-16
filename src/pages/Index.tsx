import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import CategoryFilter from "@/components/CategoryFilter";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/mockData";
import { ChevronRight, Navigation, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const guestFavorites = cars.filter((car) => car.isGuestFavorite);
  const popularCars = cars.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Categories */}
        <CategoryFilter />

        {/* Guest Favorites Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Guest favorites in Lagos</h2>
            <Link to="/search" className="flex items-center gap-1 text-sm font-medium hover:underline">
              Show all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-1 sm:md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-4 snap-x snap-mandatory">
            {guestFavorites.map((car) => (
              <div key={car.id} className="flex-shrink-0 w-64 md:w-auto snap-start">
                <CarCard {...car} />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Cars Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Popular luxury cars</h2>
            <Link to="/search" className="flex items-center gap-1 text-sm font-medium hover:underline">
              Show all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-1 sm:md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-4 snap-x snap-mandatory">
            {popularCars.map((car) => (
              <div key={car.id} className="flex-shrink-0 w-64 md:w-auto snap-start">
                <CarCard {...car} />
              </div>
            ))}
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-8">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Drive with confidence, every mile
              </h2>
              <p className="text-muted-foreground mb-6">
                Every Carbnb ride comes with a vetted, professional driver. No roadside stops, 
                no unnecessary detours. Just premium transport for your journey. Need food? 
                Order from our in-app menu and have it delivered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/food" className="btn-primary px-6 py-3 rounded-lg font-medium">
                  Explore Food Menu
                </Link>
                <Link to="/become-host" className="btn-outline px-6 py-3 rounded-lg font-medium">
                  Become a Host
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-8 mb-8">
          <h2 className="section-title mb-6">How our pricing works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Miles-based pricing</h3>
              <p className="text-sm text-muted-foreground">
                Pay for the distance traveled. Our meter calculates the exact miles covered during your journey.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Time-based pricing</h3>
              <p className="text-sm text-muted-foreground">
                Separate timer for time spent. Perfect for events, wait times, and extended bookings.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Transparent totals</h3>
              <p className="text-sm text-muted-foreground">
                Both meters display in real-time. You always know exactly what you're paying for.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;