import HelpArticle from "@/components/HelpArticle";

const NoStopPolicy = () => {
  return (
    <HelpArticle title="Our no-stop policy" category="During your trip">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Why we have this policy</h2>
          <p className="text-muted-foreground mb-4">
            For the safety and security of our passengers and drivers, Carbnb vehicles do not make 
            roadside stops for purchasing items, food, or other activities during transit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">What this means</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>No stops at roadside vendors or markets</li>
            <li>No stops at fuel stations for non-fuel purposes</li>
            <li>No unscheduled stops along the route</li>
            <li>All stops must be for pickup/drop-off purposes only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Exceptions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Scheduled pickup locations</p>
              <p className="text-sm text-muted-foreground">Pre-arranged stops can be added to your booking</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Private events</p>
              <p className="text-sm text-muted-foreground">Event bookings may include multiple venue stops</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Emergencies</p>
              <p className="text-sm text-muted-foreground">Medical or safety emergencies always take priority</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Need food during your trip?</h2>
          <p className="text-muted-foreground">
            Use our in-app Food Menu to order meals delivered to your pickup location or event venue. 
            We offer 24-hour food options including suya and other local favorites.
          </p>
        </section>

        <div className="p-4 bg-secondary rounded-xl mt-6">
          <p className="font-medium mb-2">Safety first</p>
          <p className="text-sm text-muted-foreground">
            This policy helps prevent accidents, theft, and unexpected damages. 
            It also ensures predictable journey times for all passengers.
          </p>
        </div>
      </div>
    </HelpArticle>
  );
};

export default NoStopPolicy;
