import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share, Heart, Star, MapPin, Clock, Shield, Check, Award, Users } from "lucide-react";
import { cars } from "@/data/mockData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id) || cars[0];
  const [selectedDate, setSelectedDate] = useState("");
  const [hours, setHours] = useState(1);
  const [passengers, setPassengers] = useState(1);

  const estimatedMiles = 25;
  const milesTotal = estimatedMiles * car.pricePerMile;
  const timeTotal = hours * car.pricePerHour;
  const serviceFee = Math.round((milesTotal + timeTotal) * 0.1);
  const total = milesTotal + timeTotal + serviceFee;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-6">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to listings
        </Link>

        {/* Title Row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{car.title}</h1>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <Star className="w-4 h-4 fill-foreground" />
              <span className="font-medium">{car.rating.toFixed(2)}</span>
              <span className="text-muted-foreground">· {car.reviews} reviews</span>
              <span className="text-muted-foreground">· {car.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary smooth-transition">
              <Share className="w-4 h-4" />
              <span className="text-sm font-medium underline">Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary smooth-transition">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium underline">Save</span>
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 rounded-2xl overflow-hidden mb-8">
          <div className="col-span-2 row-span-2">
            <img
              src={car.images[0]}
              alt={car.title}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          {car.images.slice(1, 5).map((img, idx) => (
            <div key={idx}>
              <img
                src={img || car.images[0]}
                alt={`${car.title} ${idx + 2}`}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host & Driver Info */}
            <div className="pb-8 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Luxury sedan with professional driver</h2>
                  <p className="text-muted-foreground mt-1">4 passengers · Professional chauffeur included</p>
                </div>
                <img
                  src={car.driver.image}
                  alt={car.driver.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Driver Details */}
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">Meet your driver</h3>
              <div className="flex items-start gap-4">
                <img
                  src={car.driver.image}
                  alt={car.driver.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{car.driver.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 fill-foreground stroke-foreground" />
                    <span>{car.driver.rating.toFixed(2)} rating</span>
                    <span>· 3 years with Carbnb</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Vetted professional driver in corporate uniform. Background checked and trained for premium service.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="pb-8 border-b border-border space-y-4">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Guest favorite</p>
                  <p className="text-sm text-muted-foreground">One of the most loved cars on Carbnb</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">No roadside stops</p>
                  <p className="text-sm text-muted-foreground">Drivers don't stop for food - order from our in-app menu instead</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">24/7 availability</p>
                  <p className="text-sm text-muted-foreground">Book any time, our drivers are always ready</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">About this car</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience luxury travel with our premium {car.title}. This vehicle comes equipped with leather seats, 
                climate control, and a professional sound system. Your dedicated driver will ensure a smooth, safe journey 
                to any destination. Perfect for corporate events, airport transfers, weddings, or special occasions.
              </p>
              <button className="mt-4 font-medium underline">Show more</button>
            </div>

            {/* What's included */}
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">What's included</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Professional driver",
                  "Air conditioning",
                  "Leather seats",
                  "WiFi available",
                  "Phone charger",
                  "Water bottles",
                  "Insurance coverage",
                  "24/7 support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border rounded-xl p-6 shadow-elevated">
              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-semibold">₦{car.pricePerMile.toLocaleString()}</span>
                <span className="text-muted-foreground">/mile</span>
                <span className="text-muted-foreground mx-2">+</span>
                <span className="text-2xl font-semibold">₦{car.pricePerHour.toLocaleString()}</span>
                <span className="text-muted-foreground">/hr</span>
              </div>

              {/* Booking Form */}
              <div className="border border-border rounded-xl overflow-hidden mb-4">
                <div className="p-4 border-b border-border">
                  <label className="text-xs font-semibold uppercase">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full mt-1 text-sm bg-transparent outline-none"
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-border">
                    <label className="text-xs font-semibold uppercase">Hours</label>
                    <select
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full mt-1 text-sm bg-transparent outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 24].map((h) => (
                        <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div className="p-4">
                    <label className="text-xs font-semibold uppercase">Passengers</label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="w-full mt-1 text-sm bg-transparent outline-none"
                    >
                      {[1, 2, 3, 4].map((p) => (
                        <option key={p} value={p}>{p} passenger{p > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <Link to={`/booking/${id}`} className="block w-full btn-primary text-center py-3 rounded-lg font-semibold mb-4">
                Reserve
              </Link>

              <p className="text-center text-sm text-muted-foreground mb-6">
                You won't be charged yet
              </p>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="underline">₦{car.pricePerMile.toLocaleString()} × {estimatedMiles} miles (est.)</span>
                  <span>₦{milesTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">₦{car.pricePerHour.toLocaleString()} × {hours} hour{hours > 1 ? 's' : ''}</span>
                  <span>₦{timeTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Carbnb service fee</span>
                  <span>₦{serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-border font-semibold">
                  <span>Total before trip</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default CarDetail;