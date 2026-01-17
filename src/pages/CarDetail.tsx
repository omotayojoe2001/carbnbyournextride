import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share, Heart, Star, Shield, Check, Award, Users, Car as CarIcon, Fuel, Settings, Calendar, MapPin, Plus, X } from "lucide-react";
import { cars } from "@/data/mockData";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id) || cars[0];
  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itinerary, setItinerary] = useState([{ location: "", description: "" }]);

  const addStop = () => {
    setItinerary([...itinerary, { location: "", description: "" }]);
  };

  const removeStop = (index: number) => {
    setItinerary(itinerary.filter((_, i) => i !== index));
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const days = calculateDays();
  const dailyRate = car.pricePerMile * 50; // Approximate daily rate
  const subtotal = dailyRate * days;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-6">
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
            <img src={car.images[0]} alt={car.title} className="w-full h-full object-cover aspect-square" />
          </div>
          {car.images.slice(1, 5).map((img, idx) => (
            <div key={idx}>
              <img src={img || car.images[0]} alt={`${car.title} ${idx + 2}`} className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Car hosted by */}
            <div className="pb-8 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Luxury car with professional driver</h2>
                  <p className="text-muted-foreground mt-1">4 passengers · Automatic · Premium</p>
                </div>
                <Link to={`/driver/${car.driver.id}`}>
                  <img src={car.driver.image} alt={car.driver.name} className="w-14 h-14 rounded-full object-cover hover:opacity-80" />
                </Link>
              </div>
            </div>

            {/* Vehicle Specifications */}
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">Vehicle Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Transmission</p>
                    <p className="text-sm text-muted-foreground">Automatic</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Fuel className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Fuel Type</p>
                    <p className="text-sm text-muted-foreground">Petrol</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Seats</p>
                    <p className="text-sm text-muted-foreground">4 passengers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Engine</p>
                    <p className="text-sm text-muted-foreground">3.0L V6</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Driver */}
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">Your Driver</h3>
              <div className="flex items-start gap-4">
                <Link to={`/driver/${car.driver.id}`}>
                  <img src={car.driver.image} alt={car.driver.name} className="w-16 h-16 rounded-full object-cover hover:opacity-80" />
                </Link>
                <div className="flex-1">
                  <Link to={`/driver/${car.driver.id}`} className="font-semibold hover:underline">{car.driver.name}</Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 fill-foreground stroke-foreground" />
                    <span>{car.driver.rating.toFixed(2)} rating</span>
                    <span>· 127 trips</span>
                    <span>· 8 years experience</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Professional chauffeur with extensive experience in luxury vehicles. Known for punctuality and excellent service.
                  </p>
                  <Link to={`/driver/${car.driver.id}`} className="text-sm font-medium underline mt-2 inline-block">
                    View driver profile
                  </Link>
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
                  <p className="font-medium">No roadside stops policy</p>
                  <p className="text-sm text-muted-foreground">Drivers proceed directly to destinations. Order food via our in-app menu instead.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Comprehensive insurance</p>
                  <p className="text-sm text-muted-foreground">Full coverage included for every trip</p>
                </div>
              </div>
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

            {/* Rental Policies */}
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-semibold mb-4">Rental Policies</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">Mileage</p>
                  <p className="text-muted-foreground">Unlimited mileage included</p>
                </div>
                <div>
                  <p className="font-medium">Fuel Policy</p>
                  <p className="text-muted-foreground">Full-to-full (return with full tank)</p>
                </div>
                <div>
                  <p className="font-medium">Cancellation</p>
                  <p className="text-muted-foreground">Free cancellation up to 24 hours before pickup</p>
                </div>
                <div>
                  <p className="font-medium">Late Return</p>
                  <p className="text-muted-foreground">₦5,000 per hour after scheduled return time</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-6 h-6 fill-foreground" />
                <span className="text-xl font-semibold">{car.rating.toFixed(2)}</span>
                <span className="text-muted-foreground">· {car.reviews} reviews</span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-border pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={`https://i.pravatar.cc/40?img=${i}`} alt="Guest" className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-medium">Guest {i}</p>
                        <p className="text-xs text-muted-foreground">December 2025</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Excellent service! The driver was professional and the car was immaculate. Highly recommend!
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border rounded-xl p-6 shadow-elevated">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-semibold">₦{dailyRate.toLocaleString()}</span>
                <span className="text-muted-foreground">per day</span>
              </div>

              {/* Rental Dates */}
              <div className="border border-border rounded-xl overflow-hidden mb-4">
                <div className="p-4 border-b border-border">
                  <label className="text-xs font-semibold uppercase">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full mt-1 text-sm bg-transparent outline-none"
                  />
                </div>
                <div className="p-4">
                  <label className="text-xs font-semibold uppercase">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full mt-1 text-sm bg-transparent outline-none"
                  />
                </div>
              </div>

              {days > 0 && (
                <p className="text-sm text-muted-foreground mb-4">
                  {days} day{days > 1 ? 's' : ''} rental
                </p>
              )}

              {/* Itinerary */}
              <div className="mb-4">
                <label className="text-xs font-semibold uppercase mb-2 block">Trip Itinerary (Optional)</label>
                <div className="space-y-2">
                  {itinerary.map((stop, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        placeholder={`Stop ${index + 1} location`}
                        value={stop.location}
                        onChange={(e) => {
                          const newItinerary = [...itinerary];
                          newItinerary[index].location = e.target.value;
                          setItinerary(newItinerary);
                        }}
                        className="flex-1 px-3 py-2 text-sm border border-border rounded-lg"
                      />
                      {itinerary.length > 1 && (
                        <button onClick={() => removeStop(index)} className="p-2 hover:bg-secondary rounded-lg">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button onClick={addStop} className="flex items-center gap-2 text-sm font-medium hover:underline">
                    <Plus className="w-4 h-4" />
                    Add stop
                  </button>
                </div>
              </div>

              <Link to={`/booking/${id}`} className="block w-full btn-primary text-center py-3 rounded-lg font-semibold mb-4">
                Reserve
              </Link>

              <p className="text-center text-sm text-muted-foreground mb-6">
                You won't be charged yet
              </p>

              {/* Price Breakdown */}
              {days > 0 && (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="underline">₦{dailyRate.toLocaleString()} × {days} day{days > 1 ? 's' : ''}</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>₦{serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border font-semibold">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>
              )}
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