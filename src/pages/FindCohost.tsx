import { Users, Search, Star, Shield, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const FindCohost = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const cohosts = [
    {
      id: "1",
      name: "Adebayo Ogunlade",
      location: "Lagos, Nigeria",
      rating: 4.9,
      reviews: 48,
      vehicles: 5,
      specialties: ["Luxury", "Corporate"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      id: "2",
      name: "Ngozi Eze",
      location: "Lagos, Nigeria",
      rating: 4.8,
      reviews: 32,
      vehicles: 3,
      specialties: ["Events", "Wedding"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      id: "3",
      name: "Chukwuemeka Nwachukwu",
      location: "Abuja, Nigeria",
      rating: 4.9,
      reviews: 56,
      vehicles: 8,
      specialties: ["Airport", "Executive"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Find a co-host</h1>
        <p className="text-muted-foreground mb-6 md:mb-8">
          Partner with experienced hosts to manage your vehicles and maximize earnings.
        </p>

        {/* Search */}
        <div className="relative mb-6 md:mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or location..."
            className="w-full pl-12 pr-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8">
          <div className="p-4 border border-border rounded-xl text-center">
            <Shield className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Vetted partners</p>
          </div>
          <div className="p-4 border border-border rounded-xl text-center">
            <Star className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Top-rated hosts</p>
          </div>
          <div className="p-4 border border-border rounded-xl text-center">
            <Users className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Shared success</p>
          </div>
        </div>

        {/* Co-host List */}
        <div className="space-y-4">
          {cohosts.map((cohost) => (
            <div key={cohost.id} className="border border-border rounded-xl p-4 sm:p-6">
              <div className="flex gap-4">
                <img
                  src={cohost.image}
                  alt={cohost.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{cohost.name}</h3>
                      <p className="text-sm text-muted-foreground">{cohost.location}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-foreground" />
                      <span>{cohost.rating}</span>
                      <span className="text-muted-foreground">({cohost.reviews})</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cohost.specialties.map((spec) => (
                      <span key={spec} className="text-xs px-2 py-1 bg-secondary rounded-full">
                        {spec}
                      </span>
                    ))}
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {cohost.vehicles} vehicles
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default FindCohost;
