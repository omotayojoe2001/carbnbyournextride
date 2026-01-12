import { ArrowLeft, Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { cars } from "@/data/mockData";

const Wishlist = () => {
  // Mock saved cars (first 4)
  const savedCars = cars.slice(0, 4);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Wishlist</h1>

        {savedCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedCars.map((car) => (
              <Link key={car.id} to={`/car/${car.id}`} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <img
                    src={car.images[0]}
                    alt={car.title}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                  <button 
                    className="absolute top-3 right-3 p-2 hover:scale-110 smooth-transition"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart className="w-6 h-6 fill-foreground stroke-background" />
                  </button>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{car.title}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-foreground" />
                      <span>{car.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {car.location}
                  </p>
                  <p className="mt-2 font-semibold">
                    ₦{car.pricePerMile.toLocaleString()}/mile + ₦{car.pricePerHour.toLocaleString()}/hr
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No saved cars yet</h2>
            <p className="text-muted-foreground mb-6">
              Start exploring and save your favorite cars to your wishlist
            </p>
            <Link to="/" className="btn-primary px-6 py-3 rounded-lg font-medium inline-block">
              Explore cars
            </Link>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Wishlist;
