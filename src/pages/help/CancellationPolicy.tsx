import HelpArticle from "@/components/HelpArticle";

const CancellationPolicy = () => {
  return (
    <HelpArticle title="Cancellation policy" category="Booking">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Flexible Cancellation</h2>
          <p className="text-muted-foreground mb-4">
            Cancel up to 24 hours before your scheduled pickup for a full refund. Cancellations made 
            within 24 hours may be subject to a cancellation fee.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Cancellation Timeline</h2>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">More than 24 hours before</p>
              <p className="text-sm text-muted-foreground">Full refund, no questions asked</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">12-24 hours before</p>
              <p className="text-sm text-muted-foreground">50% refund of total booking amount</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Less than 12 hours before</p>
              <p className="text-sm text-muted-foreground">No refund (driver has already been assigned)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How to Cancel</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Go to your Trips page</li>
            <li>Find the booking you want to cancel</li>
            <li>Click "Cancel booking"</li>
            <li>Confirm your cancellation</li>
          </ol>
          <p className="text-muted-foreground mt-4">
            Refunds are processed within 5-7 business days to your original payment method.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Exceptions</h2>
          <p className="text-muted-foreground">
            In cases of emergency or extenuating circumstances (natural disasters, medical emergencies, etc.), 
            please contact our support team for special consideration.
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default CancellationPolicy;
