import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { foodMenu } from "@/data/mockData";
import { Clock, Plus, ShoppingBag, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const FoodMenu = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showCartAlert, setShowCartAlert] = useState(false);

  const categories = ["All", "Grills", "Main Dishes", "Soups", "Drinks", "Snacks"];

  const filteredMenu = activeCategory === "All" 
    ? foodMenu 
    : foodMenu.filter(item => item.category === activeCategory);

  const addToCart = (item: typeof foodMenu[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    setShowCartAlert(true);
    setTimeout(() => setShowCartAlert(false), 3000);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-8">
        {/* Hero Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">24/7 Available</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Carbnb Food Menu</h1>
          <p className="text-muted-foreground max-w-xl">
            No roadside stops needed. Order delicious Nigerian cuisine and have it delivered 
            to your pickup point or during your journey. Our drivers don't stop for food - 
            we bring it to you.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-4 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "category-pill-active" : "category-pill"}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-1 lg:md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-8 pb-4 snap-x snap-mandatory">
          {filteredMenu.map(item => (
            <div key={item.id} className="flex-shrink-0 w-64 md:w-auto snap-start border border-border rounded-xl overflow-hidden hover:shadow-card-hover smooth-transition">
              <div className="aspect-video relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.available24h && (
                  <div className="absolute top-3 left-3 bg-foreground text-background text-xs font-medium px-2 py-1 rounded-full">
                    24/7
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold">₦{item.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 smooth-transition"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Alert */}
        {showCartAlert && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-[60] animate-slide-up">
            <p className="text-sm font-medium">Item added to cart!</p>
          </div>
        )}

        {/* Floating Cart */}
        {cart.length > 0 && (
          <div className="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-4 rounded-full shadow-elevated flex items-center gap-4 z-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">{cartCount} items</span>
            </div>
            <div className="w-px h-6 bg-background/20" />
            <span className="font-semibold">₦{cartTotal.toLocaleString()}</span>
            <button 
              onClick={() => navigate('/cart')}
              className="px-4 py-2 bg-background text-foreground rounded-full text-sm font-medium hover:bg-background/90 smooth-transition"
            >
              View Cart
            </button>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default FoodMenu;