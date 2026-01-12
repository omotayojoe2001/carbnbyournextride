import HelpArticle from "@/components/HelpArticle";

const ModifyReservation = () => {
  return (
    <HelpArticle title="Modifying a reservation" category="Booking">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">What can be modified?</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Pickup date and time</li>
            <li>Pickup and drop-off locations</li>
            <li>Number of passengers</li>
            <li>Trip duration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How to modify your booking</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Go to your Trips page</li>
            <li>Select the booking you want to modify</li>
            <li>Click "Modify reservation"</li>
            <li>Make your changes and confirm</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Modification fees</h2>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">More than 24 hours before</p>
              <p className="text-sm text-muted-foreground">Free modifications (price difference may apply)</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Less than 24 hours before</p>
              <p className="text-sm text-muted-foreground">₦5,000 modification fee + any price difference</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-secondary rounded-xl mt-6">
          <p className="font-medium mb-2">Note</p>
          <p className="text-sm text-muted-foreground">
            If your modification requires a different vehicle or driver, 
            availability is subject to confirmation.
          </p>
        </div>
      </div>
    </HelpArticle>
  );
};

export default ModifyReservation;
