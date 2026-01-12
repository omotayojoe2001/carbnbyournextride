import HelpArticle from "@/components/HelpArticle";

const SafetyGuidelines = () => {
  return (
    <HelpArticle title="Safety guidelines" category="During your trip">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Before your trip</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Verify your driver's identity matches the app profile</li>
            <li>Check the vehicle registration matches booking details</li>
            <li>Share your trip details with a friend or family member</li>
            <li>Keep your phone charged throughout the journey</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">During your trip</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Always wear your seatbelt</li>
            <li>Keep personal belongings secure</li>
            <li>Use the in-app emergency button if needed</li>
            <li>Follow driver instructions for safety protocols</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Our driver standards</h2>
          <p className="text-muted-foreground mb-4">All Carbnb drivers:</p>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Fully vetted</p>
              <p className="text-sm text-muted-foreground">Background checks and document verification</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Professionally trained</p>
              <p className="text-sm text-muted-foreground">Defensive driving and customer service training</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Uniformed</p>
              <p className="text-sm text-muted-foreground">Corporate attire or standard uniform</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Rated</p>
              <p className="text-sm text-muted-foreground">Continuously monitored through passenger reviews</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Emergency contacts</h2>
          <p className="text-muted-foreground">
            24/7 Support: +234 800 CARBNB<br />
            Emergency: Use the in-app emergency button
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default SafetyGuidelines;
