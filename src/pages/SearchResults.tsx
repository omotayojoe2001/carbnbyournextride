import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import CategoryFilter from "@/components/CategoryFilter";
import CarCard from "@/components/CarCard";
import SortDropdown from "@/components/SortDropdown";
import MapView from "@/components/MapView";
import { cars } from "@/data/mockData";
import { MapPin } from "lucide-react";

const SearchResults = () => {
  const [sortBy, setSortBy] = useState("recommended");
  const [showMap, setShowMap] = useState(false);
  const [activeCategory, setActiveCategory] = useState("luxury");

  const sortedCars = useMemo(() => {
    const filtered = [...cars];
    
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.pricePerMile - b.pricePerMile);
      case "price-high":
        return filtered.sort((a, b) => b.pricePerMile - a.pricePerMile);
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "reviews":
        return filtered.sort((a, b) => b.reviews - a.reviews);
      case "newest":
        return filtered.reverse();
      default:
        return filtered;
    }
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Categories */}
        <CategoryFilter onCategoryChange={setActiveCategory} />

        {/* Results Header */}
        <div className="flex items-center justify-between py-4 border-b border-border">
          <div>
            <h1 className="text-xl font-semibold">{sortedCars.length} luxury cars available</h1>
            <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-4">
            <SortDropdown value={sortBy} onChange={setSortBy} />
            <button
              onClick={() => setShowMap(!showMap)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg smooth-transition ${
                showMap ? "border-foreground bg-secondary" : "border-border hover:border-foreground"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{showMap ? "Hide map" : "Show map"}</span>
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {showMap ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
            {/* Map */}
            <div className="hidden lg:block sticky top-24 h-[calc(100vh-200px)] rounded-xl overflow-hidden">
              <MapView onClose={() => setShowMap(false)} />
            </div>
            
            {/* Cars List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
            {sortedCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="flex justify-center py-8">
          <button className="btn-outline px-8 py-3 rounded-lg font-medium">
            Load more cars
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default SearchResults;
