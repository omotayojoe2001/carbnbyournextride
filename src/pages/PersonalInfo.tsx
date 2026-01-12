import { ArrowLeft, Camera, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "Guest",
    lastName: "User",
    email: "guest@carbnb.com",
    phone: "+234 800 000 0000",
    address: "Lagos, Nigeria",
    emergencyContact: "",
    governmentId: "Not provided",
  });

  const fields = [
    { key: "firstName", label: "First name" },
    { key: "lastName", label: "Last name" },
    { key: "email", label: "Email address" },
    { key: "phone", label: "Phone number" },
    { key: "address", label: "Address" },
    { key: "emergencyContact", label: "Emergency contact" },
    { key: "governmentId", label: "Government ID" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">Personal info</h1>
        <p className="text-muted-foreground mb-8">
          Manage your personal information, including phone numbers and email address where you can be reached.
        </p>

        {/* Profile Photo */}
        <div className="flex items-center gap-6 p-6 border border-border rounded-xl mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-background text-2xl font-semibold">G</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center hover:bg-secondary smooth-transition">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <p className="font-medium">Profile photo</p>
            <p className="text-sm text-muted-foreground">Upload a photo to help hosts and drivers recognize you</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.key} className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div>
                <p className="text-sm text-muted-foreground">{field.label}</p>
                <p className="font-medium">{formData[field.key as keyof typeof formData] || "Not provided"}</p>
              </div>
              <button className="text-sm font-medium underline">Edit</button>
            </div>
          ))}
        </div>

        {/* Verified Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <h2 className="text-lg font-semibold mb-4">Verified info</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Email address</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Phone number</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default PersonalInfo;
