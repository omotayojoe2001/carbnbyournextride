import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    pricePerMile: "",
    pricePerHour: "",
    description: "",
  });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/host/vehicles" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to vehicles
        </Link>

        <h1 className="text-3xl font-bold mb-8">Add New Vehicle</h1>

        <div className="bg-card border border-border rounded-xl p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Make</label>
                <input
                  type="text"
                  value={formData.make}
                  onChange={(e) => setFormData({...formData, make: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="Mercedes-Benz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Model</label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="S-Class"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="2023"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="Black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Price per Mile (₦)</label>
                <input
                  type="number"
                  value={formData.pricePerMile}
                  onChange={(e) => setFormData({...formData, pricePerMile: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="2500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price per Hour (₦)</label>
                <input
                  type="number"
                  value={formData.pricePerHour}
                  onChange={(e) => setFormData({...formData, pricePerHour: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="15000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-2 border border-border rounded-lg h-24"
                placeholder="Describe your vehicle..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Photos</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Click to upload photos</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn-primary px-8 py-3 rounded-lg font-semibold">
                Add Vehicle
              </button>
              <Link to="/host/vehicles" className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default AddVehicle;