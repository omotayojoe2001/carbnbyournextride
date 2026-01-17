import { useState } from "react";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Jollof Rice with Chicken", price: 3500, quantity: 2, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200" },
    { id: "2", name: "Suya Platter", price: 5000, quantity: 1, image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=200" },
    { id: "3", name: "Chapman Drink", price: 1500, quantity: 2, image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=200" },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 1000;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/food" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-border rounded-xl p-4 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm font-medium">₦{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Delivery Instructions */}
            <div className="border border-border rounded-xl p-4">
              <label className="block text-sm font-medium mb-2">Delivery Instructions (Optional)</label>
              <textarea
                placeholder="Add any special instructions for delivery..."
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-lg"
              />
            </div>

            {/* Summary */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg">₦{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full btn-primary py-4 rounded-xl font-semibold text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add items from the menu to get started</p>
            <Link to="/food" className="btn-primary px-6 py-3 rounded-lg font-medium inline-block">
              Browse Menu
            </Link>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Cart;