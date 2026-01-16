import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const LeaveReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [driverRating, setDriverRating] = useState(0);
  const [carRating, setCarRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Submit review logic here
    navigate('/profile/trips');
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[600px] mx-auto px-6 md:px-10 py-8">
        <Link to={`/trip/${id}`} className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to trip
        </Link>

        <h1 className="text-2xl font-bold mb-2">Leave a Review</h1>
        <p className="text-muted-foreground mb-8">Share your experience with this trip</p>

        <div className="space-y-6">
          {/* Driver Rating */}
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Rate Your Driver</h3>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setDriverRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= driverRating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {driverRating === 0 && "Tap to rate"}
              {driverRating === 1 && "Poor"}
              {driverRating === 2 && "Fair"}
              {driverRating === 3 && "Good"}
              {driverRating === 4 && "Very Good"}
              {driverRating === 5 && "Excellent"}
            </p>
          </div>

          {/* Car Rating */}
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Rate the Vehicle</h3>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setCarRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= carRating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {carRating === 0 && "Tap to rate"}
              {carRating === 1 && "Poor"}
              {carRating === 2 && "Fair"}
              {carRating === 3 && "Good"}
              {carRating === 4 && "Very Good"}
              {carRating === 5 && "Excellent"}
            </p>
          </div>

          {/* Comment */}
          <div className="border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Share Your Experience</h3>
            <textarea
              placeholder="Tell us about your trip..."
              rows={6}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={driverRating === 0 || carRating === 0}
            className="w-full btn-primary py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            Submit Review
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default LeaveReview;