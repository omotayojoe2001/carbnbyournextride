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
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    hasDriver: false,
    driverName: "",
    driverPhone: ""
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
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
              <label className="block text-sm font-medium mb-2">Upload Photos</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Upload at least 5 high-quality photos</p>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Owner Information</h2>
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
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Driver Assignment</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hasDriver"
                  checked={formData.hasDriver}
                  onChange={(e) => setFormData({...formData, hasDriver: e.target.checked})}
                />
                <label htmlFor="hasDriver" className="text-sm">I have my own driver</label>
              </div>
              
              {formData.hasDriver && (
                <div className="space-y-4 pl-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Driver Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg"
                      value={formData.driverName}
                      onChange={(e) => setFormData({...formData, driverName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Driver Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg"
                      value={formData.driverPhone}
                      onChange={(e) => setFormData({...formData, driverPhone: e.target.value})}
                    />
                  </div>
                </div>
              )}
              
              {!formData.hasDriver && (
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm">We'll assign a vetted professional driver to your vehicle. All drivers are uniformed and background-checked.</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button onClick={handleBack} className="btn-outline px-6 py-3 rounded-lg">
              Back
            </button>
          )}
          <div className="ml-auto">
            {step < 3 ? (
              <button onClick={handleNext} className="btn-primary px-6 py-3 rounded-lg">
                Next
              </button>
            ) : (
              <button className="btn-primary px-6 py-3 rounded-lg">
                Submit Application
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default GetStarted;