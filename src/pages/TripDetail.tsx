import { ArrowLeft, MapPin, Calendar, Clock, Phone, MessageCircle, Navigation, DollarSign } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const TripDetail = () => {
  const { id } = useParams();

  // Mock trip data
  const trip = {
    id,
    car: "Mercedes S-Class",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
    driver: "James Okonkwo",
    driverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 4.9,
    trips: 127,
    date: "Jan 15, 2026",
    time: "10:00 AM",
    pickup: "Victoria Island, Lagos",
    dropoff: "Murtala Muhammed Airport",
    status: "Confirmed",
    estimatedDistance: "25 miles",
    estimatedDuration: "45 minutes",
    pricePerMile: 1500,
    pricePerHour: 8000,
    bookingId: "CBN-2026-001234"
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/profile/trips" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to trips
        </Link>

        <div className="space-y-6">
          {/* Status Banner */}
          <div className="bg-foreground text-background rounded-2xl p-6 text-center">
            <p className="text-sm opacity-80 mb-1">Booking Status</p>
            <p className="text-2xl font-bold">{trip.status}</p>
            <p className="text-xs opacity-70 mt-2">Booking ID: {trip.bookingId}</p>
          </div>

          {/* Car Image */}
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img src={trip.image} alt={trip.car} className="w-full h-full object-cover" />
          </div>

          {/* Trip Details */}
          <div className="border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">{trip.car}</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-medium">{trip.date} at {trip.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Route</p>
                  <p className="font-medium">{trip.pickup}</p>
                  <p className="text-sm text-muted-foreground">to {trip.dropoff}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Distance</p>
                  <p className="font-medium">{trip.estimatedDistance}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Duration</p>
                  <p className="font-medium">{trip.estimatedDuration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Driver Info */}
          <div className="border border-border rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Your Driver</h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={trip.driverImage}
                alt={trip.driver}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{trip.driver}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">{trip.rating}</span>
                  <span className="text-xs text-muted-foreground">({trip.trips} trips)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`tel:+2348012345678`}
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary smooth-transition"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Driver</span>
              </a>
              <Link
                to="/messages"
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary smooth-transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Message</span>
              </Link>
            </div>
          </div>

          {/* Pricing */}
          <div className="border border-border rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Pricing Details</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Price per mile</span>
                <span className="font-medium">₦{trip.pricePerMile.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Price per hour</span>
                <span className="font-medium">₦{trip.pricePerHour.toLocaleString()}</span>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Final amount will be calculated based on actual distance traveled and time spent
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              to="/help"
              className="flex-1 btn-outline px-6 py-3 rounded-lg font-medium text-center"
            >
              Get Help
            </Link>
            <button className="flex-1 btn-primary px-6 py-3 rounded-lg font-medium">
              Modify Booking
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default TripDetail;