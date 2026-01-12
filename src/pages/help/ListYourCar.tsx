import HelpArticle from "@/components/HelpArticle";
import { Link } from "react-router-dom";

const ListYourCar = () => {
  return (
    <HelpArticle title="How to list your car" category="Hosting">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Getting started</h2>
          <p className="text-muted-foreground mb-4">
            Listing your vehicle on Carbnb is straightforward. Follow these steps to start earning:
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 1: Check eligibility</h2>
          <p className="text-muted-foreground mb-4">
            Your vehicle must meet our minimum requirements:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Minimum vehicle value of ₦40,000,000</li>
            <li>Less than 5 years old</li>
            <li>Excellent condition with full documentation</li>
            <li>Valid insurance and registration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 2: Create your listing</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sign up as a host</li>
            <li>Add vehicle details and photos</li>
            <li>Set your pricing and availability</li>
            <li>Add or assign a driver</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 3: Verification</h2>
          <p className="text-muted-foreground mb-4">
            Our team will review your submission and may schedule a vehicle inspection. 
            This typically takes 2-3 business days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 4: Go live</h2>
          <p className="text-muted-foreground">
            Once approved, your listing goes live and you can start accepting bookings immediately.
          </p>
        </section>

        <Link to="/become-host" className="btn-primary inline-block px-6 py-3 rounded-lg font-medium mt-4">
          Become a Host
        </Link>
      </div>
    </HelpArticle>
  );
};

export default ListYourCar;
