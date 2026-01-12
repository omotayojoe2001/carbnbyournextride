import HelpArticle from "@/components/HelpArticle";

const Privacy = () => {
  return (
    <HelpArticle title="Privacy and data" category="Account">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Your data rights</h2>
          <p className="text-muted-foreground mb-4">
            At Carbnb, we respect your privacy and give you control over your personal data:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Access your data anytime</li>
            <li>Request data correction</li>
            <li>Download your data</li>
            <li>Request data deletion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">What we collect</h2>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Account information</p>
              <p className="text-sm text-muted-foreground">Name, email, phone, profile photo</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Booking data</p>
              <p className="text-sm text-muted-foreground">Trip history, preferences, reviews</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Payment information</p>
              <p className="text-sm text-muted-foreground">Encrypted payment methods</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Device data</p>
              <p className="text-sm text-muted-foreground">App usage and preferences</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How we use your data</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Process and manage bookings</li>
            <li>Connect you with hosts and drivers</li>
            <li>Improve our services</li>
            <li>Send relevant notifications</li>
            <li>Ensure safety and security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Managing preferences</h2>
          <p className="text-muted-foreground">
            Control notification preferences, marketing communications, and data sharing settings 
            in your Profile → Notifications section.
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default Privacy;
