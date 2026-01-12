import HelpArticle from "@/components/HelpArticle";

const DeleteAccount = () => {
  return (
    <HelpArticle title="Delete account" category="Account">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Before you delete</h2>
          <p className="text-muted-foreground mb-4">
            Deleting your account is permanent. Please consider:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>All your data will be permanently removed</li>
            <li>Trip history and reviews will be deleted</li>
            <li>Any gift card balance will be forfeited</li>
            <li>Active bookings will be cancelled</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Requirements before deletion</h2>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">No active bookings</p>
              <p className="text-sm text-muted-foreground">Complete or cancel all pending trips</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">No pending payouts (hosts)</p>
              <p className="text-sm text-muted-foreground">Wait for all earnings to be processed</p>
            </div>
            <div className="p-4 border border-border rounded-xl">
              <p className="font-medium">No active disputes</p>
              <p className="text-sm text-muted-foreground">Resolve any open issues first</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How to delete your account</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Go to Profile → Login & security</li>
            <li>Scroll to "Danger zone"</li>
            <li>Click "Delete account"</li>
            <li>Enter your password to confirm</li>
            <li>Click "Permanently delete"</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">After deletion</h2>
          <p className="text-muted-foreground">
            Your account and all associated data will be deleted within 30 days. 
            Some information may be retained for legal or regulatory purposes.
          </p>
        </section>

        <div className="p-4 bg-secondary rounded-xl mt-6">
          <p className="font-medium mb-2">Need a break instead?</p>
          <p className="text-sm text-muted-foreground">
            Consider deactivating your account temporarily. Contact support to pause your account 
            without losing your data.
          </p>
        </div>
      </div>
    </HelpArticle>
  );
};

export default DeleteAccount;
