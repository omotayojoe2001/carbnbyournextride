import { ArrowLeft, Car, Plus, MoreVertical, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Vehicles = () => {
  const vehicles = [
    {
      id: "1",
      name: "Mercedes S-Class 2024",
      image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80",
      status: "Active",
      rating: 4.9,
      trips: 24,
      earnings: 2450000,
    },
    {
      id: "2",
      name: "BMW 7 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
      status: "Active",
      rating: 4.8,
      trips: 18,
      earnings: 1820000,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Your vehicles</h1>
          <Link to="/become-host" className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add vehicle</span>
          </Link>
        </div>

        {vehicles.length > 0 ? (
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="border border-border rounded-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full sm:w-48 h-40 sm:h-auto object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">{vehicle.name}</h3>
                        <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
                          vehicle.status === "Active" ? "bg-foreground text-background" : "bg-secondary"
                        }`}>
                          {vehicle.status}
                        </span>
                      </div>
                      <button className="p-2 hover:bg-secondary rounded-lg smooth-transition">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-foreground text-foreground" />
                        {vehicle.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {vehicle.trips} trips
                      </span>
                      <span className="font-medium text-foreground">
                        ₦{vehicle.earnings.toLocaleString()} earned
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <Car className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">No vehicles listed</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Start earning by listing your first vehicle
            </p>
            <Link to="/become-host" className="btn-primary px-6 py-3 rounded-lg font-medium inline-block">
              List your car
            </Link>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Vehicles;
