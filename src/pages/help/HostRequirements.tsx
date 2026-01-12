import HelpArticle from "@/components/HelpArticle";

const HostRequirements = () => {
  return (
    <HelpArticle title="Host requirements" category="Hosting">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Vehicle requirements</h2>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Minimum value</p>
              <p className="text-sm text-muted-foreground">₦40,000,000 or equivalent</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Vehicle age</p>
              <p className="text-sm text-muted-foreground">Must be less than 5 years old</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Condition</p>
              <p className="text-sm text-muted-foreground">Excellent, well-maintained, no visible damage</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Documentation</p>
              <p className="text-sm text-muted-foreground">Valid registration, insurance, and inspection certificates</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Driver requirements</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Valid driver's license (minimum 5 years experience)</li>
            <li>Clean driving record</li>
            <li>Background check clearance</li>
            <li>Professional appearance and demeanor</li>
            <li>Willingness to wear corporate attire or uniform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Host responsibilities</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Keep vehicle clean and well-maintained</li>
            <li>Ensure driver availability for confirmed bookings</li>
            <li>Respond to booking requests promptly</li>
            <li>Maintain valid insurance coverage</li>
            <li>Follow Carbnb policies and guidelines</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Accepted vehicle types</h2>
          <p className="text-muted-foreground">
            Luxury sedans, SUVs, executive cars, wedding cars, convertibles, and other premium vehicles 
            that meet our quality standards.
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default HostRequirements;
