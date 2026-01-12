import HelpArticle from "@/components/HelpArticle";
import { Link } from "react-router-dom";

const ManageProfile = () => {
  return (
    <HelpArticle title="Managing your profile" category="Account">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-3">Updating your information</h2>
          <p className="text-muted-foreground mb-4">
            Keep your profile up to date to ensure smooth communication and service:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Name and contact information</li>
            <li>Profile photo</li>
            <li>Phone number and email</li>
            <li>Emergency contact details</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">How to edit your profile</h2>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Go to your Profile page</li>
            <li>Click on "Personal info"</li>
            <li>Click "Edit" next to the field you want to update</li>
            <li>Save your changes</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Profile photo guidelines</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Use a clear, recent photo of yourself</li>
            <li>Face should be clearly visible</li>
            <li>No filters or heavy editing</li>
            <li>Professional appearance preferred</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Why it matters</h2>
          <p className="text-muted-foreground">
            A complete profile helps drivers identify you at pickup and ensures you receive 
            important notifications about your bookings.
          </p>
        </section>

        <Link to="/profile/personal-info" className="btn-primary inline-block px-6 py-3 rounded-lg font-medium mt-4">
          Edit Your Profile
        </Link>
      </div>
    </HelpArticle>
  );
};

export default ManageProfile;
