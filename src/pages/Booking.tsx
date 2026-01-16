import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Calendar, Shield, Car, Plus, X } from "lucide-react";
import { cars } from "@/data/mockData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id) || cars[0];
  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itinerary, setItinerary] = useState([{ location: "", notes: "" }]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [agreed, setAgreed] = useState(false);

  const addStop = () => {
    setItinerary([...itinerary, { location: "", notes: "" }]);
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
  const dailyRate = car.pricePerMile * 50;
  const subtotal = dailyRate * days;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  const handleConfirm = () => {
    if (!agreed) {
      alert("Please agree to the terms and policies");
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        <Link to={`/car/${id}`} className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to car details
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Complete your booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Rental Period */}
            <div className="border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Rental period</h2>
                <span className="text-sm text-muted-foreground">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Start date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    End date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                  />
                </div>
              </div>

              {days > 0 && (
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="text-sm font-medium">
                    Total rental duration: {days} day{days > 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </div>

            {/* Trip Itinerary */}
            <div className="border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Trip itinerary</h2>
                <span className="text-sm text-muted-foreground">Step 2 of 3</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Add your planned destinations and stops (optional but recommended)
              </p>

              <div className="space-y-4">
                {itinerary.map((stop, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Stop {index + 1}</span>
                      {itinerary.length > 1 && (
                        <button onClick={() => removeStop(index)} className="text-red-500 hover:text-red-600">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Location/destination"
                        value={stop.location}
                        onChange={(e) => {
                          const newItinerary = [...itinerary];
                          newItinerary[index].location = e.target.value;
                          setItinerary(newItinerary);
                        }}
                        className="w-full px-4 py-2 border border-border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Notes (e.g., pickup time, event details)"
                        value={stop.notes}
                        onChange={(e) => {
                          const newItinerary = [...itinerary];
                          newItinerary[index].notes = e.target.value;
                          setItinerary(newItinerary);
                        }}
                        className="w-full px-4 py-2 border border-border rounded-lg"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addStop}
                  className="flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <Plus className="w-4 h-4" />
                  Add another stop
                </button>
              </div>
            </div>

            {/* Special Requests */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Special requests (optional)</h3>
              <textarea
                placeholder="Any special requirements or preferences for your trip..."
                rows={4}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg"
              />
            </div>

            {/* Policies */}
            <div className="border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Important policies</h2>
                <span className="text-sm text-muted-foreground">Step 3 of 3</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <Shield className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">No roadside stops policy</p>
                    <p className="text-sm text-muted-foreground">
                      Drivers proceed directly to planned destinations. No unauthorized stops for food or errands. Use our in-app food delivery service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <Car className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Cancellation policy</p>
                    <p className="text-sm text-muted-foreground">
                      Free cancellation up to 24 hours before start date. 50% refund for cancellations within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <Check className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Fuel policy</p>
                    <p className="text-sm text-muted-foreground">
                      Vehicle will be provided with a full tank. Please return with a full tank or pay refueling fee.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  I agree to Carbnb's Terms of Service, cancellation policy, and understand the no-stop policy for safety and service quality.
                </label>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              disabled={!agreed || days === 0}
              className="w-full btn-primary py-4 rounded-xl font-semibold text-lg disabled:opacity-50"
            >
              Confirm and pay
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
                    <span className="text-muted-foreground">({car.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Driver */}
              <div className="py-6 border-b border-border">
                <p className="text-sm font-medium mb-3">Your driver</p>
                <div className="flex items-center gap-3">
                  <img
                    src={car.driver.image}
                    alt={car.driver.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{car.driver.name}</p>
                    <p className="text-sm text-muted-foreground">★ {car.driver.rating} · 8 years exp</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              {days > 0 && (
                <div className="py-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>₦{dailyRate.toLocaleString()} × {days} day{days > 1 ? 's' : ''}</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>₦{serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border font-semibold text-base">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Final amount may vary based on actual usage and any additional services.
                  </p>
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

export default Booking;