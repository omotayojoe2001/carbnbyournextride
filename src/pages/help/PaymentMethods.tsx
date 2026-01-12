import HelpArticle from "@/components/HelpArticle";

const PaymentMethods = () => {
  return (
    <HelpArticle title="Payment methods" category="Booking">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Accepted payment methods</h2>
          <div className="grid gap-4">
            <div className="p-4 border border-border rounded-xl flex items-center gap-4">
              <div className="w-12 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-background text-xs font-bold">VISA</span>
              </div>
              <span>Visa Credit/Debit Cards</span>
            </div>
            <div className="p-4 border border-border rounded-xl flex items-center gap-4">
              <div className="w-12 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-background text-xs font-bold">MC</span>
              </div>
              <span>Mastercard Credit/Debit Cards</span>
            </div>
            <div className="p-4 border border-border rounded-xl flex items-center gap-4">
              <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                <span className="text-foreground text-xs font-bold">₦</span>
              </div>
              <span>Bank Transfer</span>
            </div>
            <div className="p-4 border border-border rounded-xl flex items-center gap-4">
              <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                <span className="text-foreground text-xs font-bold">GC</span>
              </div>
              <span>Carbnb Gift Cards</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Payment security</h2>
          <p className="text-muted-foreground mb-4">
            All payments are processed securely using industry-standard encryption. 
            We never store your full card details on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">When are you charged?</h2>
          <p className="text-muted-foreground">
            Your payment is processed immediately upon booking confirmation. 
            The total amount includes the estimated distance and time charges based on your trip details.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Additional charges</h2>
          <p className="text-muted-foreground">
            If your actual trip exceeds the estimated distance or time, additional charges 
            will be calculated at the same per-mile and per-hour rates and charged to your payment method on file.
          </p>
        </section>
      </div>
    </HelpArticle>
  );
};

export default PaymentMethods;
