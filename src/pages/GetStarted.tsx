import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { ArrowLeft, Upload, Check } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleValue: "",
    description: "",
    pricePerMile: "",
    pricePerHour: "",
    amenities: [] as string[],
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    ownerIsDriver: false,
    driverName: "",
    driverPhone: "",
    driverLicense: ""
  });

  const availableAmenities = [
    "Professional driver",
    "Air conditioning", 
    "Leather seats",
    "WiFi available",
    "Phone charger",
    "Water bottles",
    "Insurance coverage",
    "24/7 support",
    "Bluetooth audio",
    "Premium sound system",
    "Tinted windows",
    "Sunroof",
    "GPS navigation",
    "Child car seats available"
  ];

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else if (step === 3) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-8">
        <Link to="/become-host" className="flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Become a Host
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List your luxury car</h1>
          <p className="text-muted-foreground">Step {step} of 3</p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`flex-1 h-2 rounded-full ${i <= step ? "bg-foreground" : "bg-secondary"}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Vehicle Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Make</label>
                <input
                  type="text"
                  placeholder="e.g., Mercedes-Benz"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({...formData, vehicleMake: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Model</label>
                <input
                  type="text"
                  placeholder="e.g., S-Class"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({...formData, vehicleModel: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  placeholder="2020"
                  min="2020"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData({...formData, vehicleYear: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Vehicle Value (₦)</label>
                <input
                  type="number"
                  placeholder="40000000"
                  min="40000000"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.vehicleValue}
                  onChange={(e) => setFormData({...formData, vehicleValue: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Upload Vehicle Photos</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Upload at least 5 high-quality photos</p>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Pricing & Amenities</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Vehicle Description</label>
              <textarea
                placeholder="Describe your vehicle's features, condition, and any special amenities..."
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price per Mile (₦)</label>
                <input
                  type="number"
                  placeholder="1500"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.pricePerMile}
                  onChange={(e) => setFormData({...formData, pricePerMile: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price per Hour (₦)</label>
                <input
                  type="number"
                  placeholder="8000"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.pricePerHour}
                  onChange={(e) => setFormData({...formData, pricePerHour: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">What's Included (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableAmenities.map((amenity) => (
                  <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => toggleAmenity(amenity)}
                      className="rounded"
                    />
                    <span className="text-sm">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Owner Information & Documents</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.ownerPhone}
                  onChange={(e) => setFormData({...formData, ownerPhone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  value={formData.ownerEmail}
                  onChange={(e) => setFormData({...formData, ownerEmail: e.target.value})}
                />
              </div>
            </div>

            {/* Driver Assignment */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-4">Driver Information</h3>
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="ownerIsDriver"
                  checked={formData.ownerIsDriver}
                  onChange={(e) => setFormData({...formData, ownerIsDriver: e.target.checked})}
                  className="rounded"
                />
                <label htmlFor="ownerIsDriver" className="text-sm font-medium">
                  I will be the driver for this vehicle
                </label>
              </div>

              {!formData.ownerIsDriver && (
                <div className="space-y-4 bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Please provide your driver's information
                  </p>
                  <div>
                    <label className="block text-sm font-medium mb-2">Driver Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg"
                      value={formData.driverName}
                      onChange={(e) => setFormData({...formData, driverName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Driver Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg"
                      value={formData.driverPhone}
                      onChange={(e) => setFormData({...formData, driverPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Driver License Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg"
                      value={formData.driverLicense}
                      onChange={(e) => setFormData({...formData, driverLicense: e.target.value})}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Registration</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Upload registration document</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Insurance Certificate</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Upload insurance document</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Owner ID (Driver's License/NIN)</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Upload valid ID</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Driver's License</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Upload driver's license</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in becoming a Carbnb host. We've received your application and will review it within 48 hours.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold mb-3">What happens next?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Document Verification (24-48 hours)</p>
                    <p className="text-muted-foreground">Our team will verify your vehicle and documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Vehicle Inspection</p>
                    <p className="text-muted-foreground">Schedule a physical inspection of your vehicle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Driver Assignment</p>
                    <p className="text-muted-foreground">We'll assign a vetted professional driver to your vehicle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                  <div>
                    <p className="font-medium">Go Live</p>
                    <p className="text-muted-foreground">Your vehicle will be listed and ready to accept bookings</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                We'll contact you at <strong>{formData.ownerEmail}</strong> with updates on your application status.
              </p>
              <Link to="/" className="btn-primary px-6 py-3 rounded-lg inline-block">
                Return to Home
              </Link>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && step < 4 && (
            <button onClick={handleBack} className="btn-outline px-6 py-3 rounded-lg">
              Back
            </button>
          )}
          <div className="ml-auto">
            {step < 3 ? (
              <button onClick={handleNext} className="btn-primary px-6 py-3 rounded-lg">
                Next
              </button>
            ) : step === 3 ? (
              <button onClick={handleNext} className="btn-primary px-6 py-3 rounded-lg">
                Submit Application
              </button>
            ) : null}
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default GetStarted;