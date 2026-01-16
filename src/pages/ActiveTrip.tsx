import { useState, useEffect } from "react";
import { MapPin, Phone, MessageCircle, UtensilsCrossed, Navigation, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNav";

const ActiveTrip = () => {
  const [distancePrice, setDistancePrice] = useState(12500);
  const [timePrice, setTimePrice] = useState(24000);
  const [distance, setDistance] = useState(8.3);
  const [duration, setDuration] = useState(48);

  // Simulate live meter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => prev + 0.1);
      setDistancePrice(prev => prev + 150);
      setDuration(prev => prev + 1);
      setTimePrice(prev => prev + 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Active Trip</h1>
        <div className="flex items-center gap-4">
          <button className="p-2">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Map View */}
      <div className="relative h-[45vh] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15857.04!2d3.42!3d6.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x103bf52a8d2e1c8b%3A0x1e2b3c4d5e6f7a8b!2sVictoria%20Island%2C%20Lagos!3m2!1d6.4281!2d3.4219!4m5!1s0x103bf52a8d2e1c8b%3A0x1e2b3c4d5e6f7a8b!2sLekki%20Phase%201%2C%20Lagos!3m2!1d6.4474!2d3.4736!5e0!3m2!1sen!2sng!4v1234567890"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>

        {/* Floating Pricing Cards */}
        <div className="absolute top-4 left-4 space-y-3 w-40">
          {/* Distance-based Price */}
          <div className="bg-foreground text-background rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs opacity-80">Distance</span>
              <Navigation className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold">₦{distancePrice.toLocaleString()}</p>
            <p className="text-xs opacity-80 mt-1">{distance.toFixed(1)} miles</p>
            <div className="mt-3 h-1 bg-background/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-3/4 rounded-full"></div>
            </div>
          </div>

          {/* Time-based Price */}
          <div className="bg-foreground text-background rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs opacity-80">Time</span>
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold">₦{timePrice.toLocaleString()}</p>
            <p className="text-xs opacity-80 mt-1">{duration} minutes</p>
            <div className="mt-3 h-1 bg-background/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-2/3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Driver & Car Section */}
      <div className="px-6 py-6">
        <div className="bg-background border border-border rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Driver Info */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Driver"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Chukwudi Okafor</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-xs text-muted-foreground">(127 trips)</span>
                </div>
              </div>
            </div>

            {/* Car Image */}
            <div className="w-24 h-16 rounded-lg overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=200&h=150&fit=crop"
                alt="Car"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary smooth-transition">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary smooth-transition">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Message</span>
            </button>
          </div>
        </div>

        {/* Food Order Option */}
        <Link
          to="/food"
          className="mt-4 flex items-center justify-between bg-secondary rounded-2xl p-4 hover:bg-secondary/80 smooth-transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium">Order food & drinks</p>
              <p className="text-xs text-muted-foreground">Delivered to your location</p>
            </div>
          </div>
          <span className="text-sm font-medium">→</span>
        </Link>

        {/* Trip Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mt-1"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Pickup Location</p>
              <p className="text-xs text-muted-foreground">Victoria Island, Lagos</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mt-1"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Destination</p>
              <p className="text-xs text-muted-foreground">Lekki Phase 1, Lagos</p>
            </div>
          </div>
        </div>

        {/* Total Estimate */}
        <div className="mt-6 bg-foreground text-background rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-80">Current Total</span>
            <span className="text-2xl font-bold">₦{(distancePrice + timePrice).toLocaleString()}</span>
          </div>
          <p className="text-xs opacity-70 mt-2">Final amount calculated at trip end</p>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default ActiveTrip;