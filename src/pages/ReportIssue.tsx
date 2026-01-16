import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const ReportIssue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    tripId: "",
    description: "",
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Issue reported successfully. Our team will contact you shortly.");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[700px] mx-auto px-6 md:px-10 py-8">
        <Link to="/safety-center" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to safety center
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold">Report an Issue</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          We take all reports seriously and will respond promptly
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Issue Category</label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-3 border border-border rounded-lg"
            >
              <option value="">Select category</option>
              <option value="safety">Safety Concern</option>
              <option value="driver">Driver Behavior</option>
              <option value="vehicle">Vehicle Condition</option>
              <option value="accident">Accident/Incident</option>
              <option value="harassment">Harassment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Trip ID (if applicable)</label>
            <input
              type="text"
              placeholder="CBN-2026-001234"
              value={formData.tripId}
              onChange={(e) => setFormData({...formData, tripId: e.target.value})}
              className="w-full px-4 py-3 border border-border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              required
              rows={6}
              placeholder="Please provide detailed information about the issue..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 border border-border rounded-lg"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="urgent"
              checked={formData.urgent}
              onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
            />
            <label htmlFor="urgent" className="text-sm">
              This is an urgent safety issue requiring immediate attention
            </label>
          </div>

          {formData.urgent && (
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-sm font-medium text-red-600 mb-2">Emergency Assistance</p>
              <p className="text-sm text-muted-foreground mb-3">
                For immediate emergencies, please call our 24/7 hotline:
              </p>
              <a href="tel:+2348002272626" className="text-lg font-bold text-red-600">
                +234 800 CARBNB (227262)
              </a>
            </div>
          )}

          <button type="submit" className="w-full btn-primary py-3 rounded-lg font-medium">
            Submit Report
          </button>
        </form>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default ReportIssue;