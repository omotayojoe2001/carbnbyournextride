import HelpArticle from "@/components/HelpArticle";

const EarningsPayouts = () => {
  return (
    <HelpArticle title="Earnings and payouts" category="Hosting">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">How you earn</h2>
          <p className="text-muted-foreground mb-4">
            Your earnings are calculated based on two components:
          </p>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Price per mile</p>
              <p className="text-sm text-muted-foreground">Set your own rate for distance traveled</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Price per hour</p>
              <p className="text-sm text-muted-foreground">Set your rate for time spent on trip</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Service fees</h2>
          <p className="text-muted-foreground mb-4">
            Carbnb charges a 15% service fee on each booking to cover platform costs, 
            customer support, and payment processing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Payout schedule</h2>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Standard payouts</p>
              <p className="text-sm text-muted-foreground">Processed weekly on Mondays</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Processing time</p>
              <p className="text-sm text-muted-foreground">1-3 business days to reach your account</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Payout methods</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Direct bank transfer (Nigerian banks)</li>
            <li>International wire transfer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Tracking your earnings</h2>
          <p className="text-muted-foreground">
            View detailed earnings statements, trip history, and payout records in your host dashboard. 
            Download monthly reports for your records.
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default EarningsPayouts;
