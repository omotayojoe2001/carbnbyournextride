import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Calendar, Clock, Users, Shield, Car } from "lucide-react";
import { cars } from "@/data/mockData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const Booking = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id) || cars[0];
  const [step, setStep] = useState(1);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hours, setHours] = useState(2);
  const [passengers, setPassengers] = useState(1);
  const [dressCode, setDressCode] = useState("corporate");

  const estimatedMiles = 25;
  const milesTotal = estimatedMiles * car.pricePerMile;
  const timeTotal = hours * car.pricePerHour;
  const serviceFee = Math.round((milesTotal + timeTotal) * 0.1);
  const total = milesTotal + timeTotal + serviceFee;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to={`/car/${id}`} className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to car details
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Complete your booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Trip Details */}
            <div className="border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Trip details</h2>
                <span className="text-sm text-muted-foreground">Step 1 of 3</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Pickup location
                  </label>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Drop-off location
                  </label>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="Enter drop-off address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Estimated hours
                    </label>
                    <select
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-background"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 24].map((h) => (
                        <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Passengers
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-background"
                    >
                      {[1, 2, 3, 4].map((p) => (
                        <option key={p} value={p}>{p} passenger{p > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Driver Preferences */}
            <div className="border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Driver preferences</h2>
                <span className="text-sm text-muted-foreground">Step 2 of 3</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Select your preferred driver dress code:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDressCode("corporate")}
                    className={`p-4 border rounded-xl text-left smooth-transition ${
                      dressCode === "corporate" 
                        ? "border-foreground bg-secondary" 
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    <div className="font-medium mb-1">Corporate attire</div>
                    <div className="text-sm text-muted-foreground">Suit and tie, professional look</div>
                  </button>
                  <button
                    onClick={() => setDressCode("uniform")}
                    className={`p-4 border rounded-xl text-left smooth-transition ${
                      dressCode === "uniform" 
                        ? "border-foreground bg-secondary" 
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    <div className="font-medium mb-1">Carbnb uniform</div>
                    <div className="text-sm text-muted-foreground">Standard Carbnb branded uniform</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Confirmation */}
            <div className="border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Important policies</h2>
                <span className="text-sm text-muted-foreground">Step 3 of 3</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <Shield className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">No roadside stops</p>
                    <p className="text-sm text-muted-foreground">
                      Drivers do not stop for food or unplanned detours. Use our in-app food menu for meals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <Car className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Pickup only stops</p>
                    <p className="text-sm text-muted-foreground">
                      Stops are only permitted for passenger pickup and private event locations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <input type="checkbox" id="agree" className="mt-1" />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  I agree to Carbnb's Terms of Service and understand the no-stop policy for safety and damage prevention.
                </label>
              </div>
            </div>

            <button className="w-full btn-primary py-4 rounded-xl font-semibold text-lg">
              Confirm booking
            </button>
          </div>

          {/* Right - Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border rounded-xl p-6">
              {/* Car Preview */}
              <div className="flex gap-4 pb-6 border-b border-border">
                <img
                  src={car.images[0]}
                  alt={car.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{car.title}</h3>
                  <p className="text-sm text-muted-foreground">{car.location}</p>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <span>★ {car.rating}</span>
                    <span className="text-muted-foreground">({car.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Driver */}
              <div className="py-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <img
                    src={car.driver.image}
                    alt={car.driver.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{car.driver.name}</p>
                    <p className="text-sm text-muted-foreground">Your driver · ★ {car.driver.rating}</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="py-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>₦{car.pricePerMile.toLocaleString()} × {estimatedMiles} miles</span>
                  <span>₦{milesTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>₦{car.pricePerHour.toLocaleString()} × {hours} hours</span>
                  <span>₦{timeTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>₦{serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-border font-semibold text-base">
                  <span>Total</span>
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

export default Booking;