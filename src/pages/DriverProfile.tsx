import { ArrowLeft, Star, Shield, Car, MapPin, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const DriverProfile = () => {
  const { id } = useParams();

  const driver = {
    id,
    name: "Chukwudi Okafor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 4.9,
    totalTrips: 127,
    yearsExperience: 8,
    verified: true,
    languages: ["English", "Igbo", "Yoruba"],
    bio: "Professional chauffeur with 8 years of experience. Specialized in luxury vehicles and corporate transport. Known for punctuality and excellent customer service.",
    vehicles: [
      { name: "Mercedes S-Class", image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=200" },
      { name: "BMW 7 Series", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200" }
    ],
    reviews: [
      { id: 1, guest: "Adebayo M.", rating: 5, comment: "Excellent driver! Very professional and punctual.", date: "Dec 2025" },
      { id: 2, guest: "Sarah O.", rating: 5, comment: "Smooth ride, great conversation. Highly recommend!", date: "Nov 2025" },
      { id: 3, guest: "Michael C.", rating: 4, comment: "Good service, clean car.", date: "Oct 2025" }
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/search" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to cars
        </Link>

        <div className="space-y-6">
          {/* Driver Header */}
          <div className="border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">{driver.name}</h1>
                  {driver.verified && (
                    <div className="bg-blue-100 text-blue-600 p-1 rounded-full">
                      <Shield className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {driver.rating} ({driver.totalTrips} trips)
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {driver.yearsExperience} years experience
                  </span>
                </div>
                <div className="flex gap-2">
                  {driver.languages.map(lang => (
                    <span key={lang} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="border border-border rounded-2xl p-6">
            <h2 className="font-semibold mb-3">About</h2>
            <p className="text-sm text-muted-foreground">{driver.bio}</p>
          </div>

          {/* Vehicles */}
          <div className="border border-border rounded-2xl p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Vehicles
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {driver.vehicles.map((vehicle, idx) => (
                <div key={idx} className="border border-border rounded-xl overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-24 object-cover" />
                  <p className="p-2 text-sm font-medium text-center">{vehicle.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="border border-border rounded-2xl p-6">
            <h2 className="font-semibold mb-4">Reviews ({driver.reviews.length})</h2>
            <div className="space-y-4">
              {driver.reviews.map(review => (
                <div key={review.id} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{review.guest}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default DriverProfile;