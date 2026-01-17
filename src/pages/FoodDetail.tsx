import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { foodMenu } from "@/data/mockData";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const FoodDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCartAlert, setShowCartAlert] = useState(false);
  
  const item = foodMenu.find(f => f.id === id) || foodMenu[0];
  
  const images = [
    item.image,
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
  ];

  const addToCart = () => {
    // Add to cart logic here
    setShowCartAlert(true);
    setTimeout(() => setShowCartAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-6">
        <Link to="/food" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 rounded-2xl overflow-hidden mb-6">
          <div className="col-span-3 row-span-2">
            <img src={images[selectedImage]} alt={item.name} className="w-full h-full object-cover aspect-square" />
          </div>
          {images.slice(1, 4).map((img, idx) => (
            <button key={idx} onClick={() => setSelectedImage(idx + 1)}>
              <img src={img} alt={`${item.name} ${idx + 2}`} className="w-full h-full object-cover aspect-square hover:opacity-80" />
            </button>
          ))}
        </div>

        {/* Cart Alert */}
        {showCartAlert && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-[60] animate-slide-up">
            <p className="text-sm font-medium">Added {quantity} {item.name} to cart!</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{item.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                <span className="font-medium">4.8</span>
                <span className="text-muted-foreground">· 156 reviews</span>
                <span className="text-muted-foreground">· {item.category}</span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>

            {/* Details */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span>{item.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-green-500">24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Time</span>
                  <span>30-45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₦1,000</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Reviews</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-border pb-4 last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={`https://i.pravatar.cc/40?img=${i}`} alt="User" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-medium text-sm">Customer {i}</p>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(star => (
                            <Star key={star} className="w-3 h-3 fill-yellow-500 stroke-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Delicious food! Fresh ingredients and great taste. Highly recommend!
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Order Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border rounded-xl p-6">
              <div className="mb-6">
                <p className="text-2xl font-bold">₦{item.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">per item</p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Special Instructions</label>
                <textarea
                  placeholder="Any special requests..."
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
              </div>

              {/* Total */}
              <div className="mb-6 p-4 bg-secondary rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total ({quantity} item{quantity > 1 ? 's' : ''})</span>
                  <span className="text-xl font-bold">₦{(item.price * quantity).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={addToCart}
                className="w-full btn-primary py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default FoodDetail;