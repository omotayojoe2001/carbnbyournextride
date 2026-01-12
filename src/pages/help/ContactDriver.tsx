import HelpArticle from "@/components/HelpArticle";

const ContactDriver = () => {
  return (
    <HelpArticle title="Contacting your driver" category="During your trip">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Before your trip</h2>
          <p className="text-muted-foreground mb-4">
            Once your booking is confirmed, you'll receive your driver's contact information via email and in your app. 
            You can message or call your driver directly through the Carbnb app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">During your trip</h2>
          <p className="text-muted-foreground mb-4">
            If you need to communicate with your driver during the trip, simply speak to them directly. 
            All our drivers are professional and trained to accommodate passenger requests within our policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Emergency contact</h2>
          <p className="text-muted-foreground mb-4">
            In case of emergency, you can:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Use the emergency button in the app</li>
            <li>Call our 24/7 support line: +234 800 CARBNB</li>
            <li>Message us through the app's live chat</li>
          </ul>
        </section>

        <div className="p-4 bg-secondary rounded-xl mt-6">
          <p className="font-medium mb-2">Driver dress code</p>
          <p className="text-sm text-muted-foreground">
            All Carbnb drivers wear either corporate attire or standard uniform based on your preference 
            selected during booking. This ensures a professional experience for all trips.
          </p>
        </div>
      </div>
    </HelpArticle>
  );
};

export default ContactDriver;
