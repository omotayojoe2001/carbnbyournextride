import HelpArticle from "@/components/HelpArticle";

const DriverManagement = () => {
  return (
    <HelpArticle title="Driver management" category="Hosting">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Assigning drivers</h2>
          <p className="text-muted-foreground mb-4">
            Each vehicle on Carbnb must have an assigned driver. You can:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Be the driver yourself</li>
            <li>Assign an employee driver</li>
            <li>Use Carbnb's driver matching service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Adding a driver</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Go to your vehicle listing</li>
            <li>Click "Manage drivers"</li>
            <li>Add driver details and documents</li>
            <li>Submit for verification</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Driver verification</h2>
          <p className="text-muted-foreground mb-4">
            All drivers must pass our verification process:
          </p>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Document verification</p>
              <p className="text-sm text-muted-foreground">License, ID, and driving history</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Background check</p>
              <p className="text-sm text-muted-foreground">Criminal record and reference checks</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Training</p>
              <p className="text-sm text-muted-foreground">Carbnb service standards orientation</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Driver ratings</h2>
          <p className="text-muted-foreground">
            Drivers are rated by passengers after each trip. Maintain a minimum 4.5-star rating 
            to remain active on the platform. Low-rated drivers may be removed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Uniform requirements</h2>
          <p className="text-muted-foreground">
            Drivers must wear either corporate attire (suit/professional dress) or Carbnb standard uniform. 
            The passenger's preference is indicated in each booking.
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default DriverManagement;
