import HelpArticle from "@/components/HelpArticle";

const Verification = () => {
  return (
    <HelpArticle title="Verification process" category="Account">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Why verify?</h2>
          <p className="text-muted-foreground mb-4">
            Verification builds trust between passengers, hosts, and drivers. 
            Verified accounts may receive priority booking and access to premium vehicles.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Verification levels</h2>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Email verification</p>
              <p className="text-sm text-muted-foreground">Confirm your email address</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">Phone verification</p>
              <p className="text-sm text-muted-foreground">Verify your phone number via SMS</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">ID verification</p>
              <p className="text-sm text-muted-foreground">Upload government-issued ID</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How to verify</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Go to Profile → Personal info</li>
            <li>Click on the verification section</li>
            <li>Follow the prompts for each verification type</li>
            <li>Wait for confirmation (usually within 24 hours)</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Accepted documents</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>National ID card</li>
            <li>International passport</li>
            <li>Driver's license</li>
            <li>Voter's card</li>
          </ul>
        </section>

        <div className="p-4 bg-secondary rounded-xl mt-6">
          <p className="font-medium mb-2">Privacy note</p>
          <p className="text-sm text-muted-foreground">
            Your documents are encrypted and stored securely. We only use them for verification purposes.
          </p>
        </div>
      </div>
    </HelpArticle>
  );
};

export default Verification;
