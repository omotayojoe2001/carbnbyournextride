import { ArrowLeft, MapPin, Calendar, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const Trips = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Mock trips
  const upcomingTrips = [
    {
      id: "1",
      car: "Mercedes S-Class",
      image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80",
      driver: "James Okonkwo",
      date: "Jan 15, 2026",
      time: "10:00 AM",
      pickup: "Victoria Island, Lagos",
      dropoff: "Murtala Muhammed Airport",
      status: "Confirmed",
    },
  ];

  const pastTrips = [
    {
      id: "2",
      car: "BMW 7 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
      driver: "Chidi Nwosu",
      date: "Dec 20, 2025",
      time: "2:00 PM",
      pickup: "Ikoyi, Lagos",
      dropoff: "Eko Hotel",
      status: "Completed",
    },
    {
      id: "3",
      car: "Rolls Royce Ghost",
      image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=400&q=80",
      driver: "Emmanuel Adeyemi",
      date: "Nov 10, 2025",
      time: "6:00 PM",
      pickup: "Lekki Phase 1",
      dropoff: "Oriental Hotel",
      status: "Completed",
    },
  ];

  const trips = activeTab === "upcoming" ? upcomingTrips : pastTrips;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your trips</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-4 text-sm font-medium smooth-transition ${
              activeTab === "upcoming" ? "border-b-2 border-foreground" : "text-muted-foreground"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-4 text-sm font-medium smooth-transition ${
              activeTab === "past" ? "border-b-2 border-foreground" : "text-muted-foreground"
            }`}
          >
            Past trips
          </button>
        </div>

        {/* Trips List */}
        {trips.length > 0 ? (
          <div className="space-y-6">
            {trips.map((trip) => (
              <Link 
                key={trip.id} 
                to={`/trip/${trip.id}`}
                className="block border border-border rounded-xl overflow-hidden hover:shadow-card-hover smooth-transition"
              >
                <div className="flex">
                  <img
                    src={trip.image}
                    alt={trip.car}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{trip.car}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        trip.status === "Confirmed" 
                          ? "bg-foreground text-background" 
                          : "bg-secondary"
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Driver: {trip.driver}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {trip.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {trip.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border p-4 bg-secondary/50">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <div>
                      <p>{trip.pickup}</p>
                      <p className="text-muted-foreground">to {trip.dropoff}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No {activeTab} trips</h2>
            <p className="text-muted-foreground mb-6">
              {activeTab === "upcoming" 
                ? "Book your next ride to see it here"
                : "Your completed trips will appear here"
              }
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

export default Trips;
