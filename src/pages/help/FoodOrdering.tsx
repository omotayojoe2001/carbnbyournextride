import HelpArticle from "@/components/HelpArticle";
import { Link } from "react-router-dom";

const FoodOrdering = () => {
  return (
    <HelpArticle title="Ordering food during trips" category="During your trip">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">In-app food ordering</h2>
          <p className="text-muted-foreground mb-4">
            Since our vehicles don't make roadside stops, we've made it easy to order food through our app. 
            Browse our 24-hour menu and have your order ready at your destination.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How it works</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Open the Food Menu in the app</li>
            <li>Browse categories (Suya, Grills, Drinks, etc.)</li>
            <li>Add items to your cart</li>
            <li>Select delivery to your destination</li>
            <li>Food will be ready when you arrive</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Available 24 hours</h2>
          <p className="text-muted-foreground mb-4">
            Our food service operates around the clock, so whether you're on an early morning airport run 
            or a late-night event, you can always order.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Popular items</h2>
          <div className="grid gap-4">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Suya Selection</p>
              <p className="text-sm text-muted-foreground">Classic Nigerian grilled meat skewers</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Event Platters</p>
              <p className="text-sm text-muted-foreground">Perfect for corporate events and celebrations</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Beverages</p>
              <p className="text-sm text-muted-foreground">Chilled drinks and refreshments</p>
            </div>
          </div>
        </section>

        <Link to="/food" className="btn-primary inline-block px-6 py-3 rounded-lg font-medium mt-4">
          Browse Food Menu
        </Link>
      </div>
    </HelpArticle>
  );
};

export default FoodOrdering;
