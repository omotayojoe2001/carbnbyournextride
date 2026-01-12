import HelpArticle from "@/components/HelpArticle";

const HowToBook = () => {
  return (
    <HelpArticle title="How to make a booking" category="Booking">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Step 1: Search for a car</h2>
          <p className="text-muted-foreground mb-4">
            Use the search bar at the top of the page to enter your destination, dates, and number of passengers. 
            Our smart search will show you available luxury vehicles with professional drivers in your area.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 2: Browse and compare</h2>
          <p className="text-muted-foreground mb-4">
            Review the available cars, their features, driver ratings, and pricing. Each listing shows:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Vehicle type and photos</li>
            <li>Driver profile and rating</li>
            <li>Price per mile and price per hour</li>
            <li>Available dates and pickup locations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 3: Select your car</h2>
          <p className="text-muted-foreground mb-4">
            Click on a car to view full details including driver information, vehicle features, 
            and customer reviews. Make sure to check the driver's uniform preference (corporate or standard).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Step 4: Complete your booking</h2>
          <p className="text-muted-foreground mb-4">
            Enter your trip details, select any additional options, and complete payment. 
            You'll receive instant confirmation with your driver's contact information.
          </p>
        </section>

        <div className="p-4 bg-secondary rounded-xl mt-6">
          <p className="font-medium mb-2">Important Note</p>
          <p className="text-sm text-muted-foreground">
            All vehicles come with a professional driver. Carbnb does not offer self-drive rentals 
            to ensure safety and premium service for all passengers.
          </p>
        </div>
      </div>
    </HelpArticle>
  );
};

export default HowToBook;
