import { ArrowLeft, Shield, Smartphone, Key, Eye, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Security = () => {
  const securityOptions = [
    { 
      icon: Key, 
      title: "Password", 
      description: "Last updated 3 months ago",
      action: "Update"
    },
    { 
      icon: Smartphone, 
      title: "Two-factor authentication", 
      description: "Add an extra layer of security to your account",
      action: "Set up"
    },
    { 
      icon: Eye, 
      title: "Active sessions", 
      description: "View and manage your active login sessions",
      action: "Manage"
    },
    { 
      icon: Lock, 
      title: "Connected accounts", 
      description: "Connect social accounts for easier login",
      action: "Connect"
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        {/* Back Link */}
        <Link to="/profile" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Profile
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">Login & security</h1>
        <p className="text-muted-foreground mb-8">
          Manage your account security settings and connected devices.
        </p>

        {/* Security Options */}
        <div className="space-y-4">
          {securityOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.title} className="flex items-center justify-between p-6 border border-border rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{option.title}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
                <button className="text-sm font-medium underline">{option.action}</button>
              </div>
            );
          })}
        </div>

        {/* Danger Zone */}
        <div className="mt-8 pt-8 border-t border-border">
          <h2 className="text-lg font-semibold mb-4 text-destructive">Danger zone</h2>
          <div className="p-6 border border-destructive/30 rounded-xl bg-destructive/5">
            <p className="font-medium mb-2">Delete your account</p>
            <p className="text-sm text-muted-foreground mb-4">
              Permanently delete your Carbnb account and all associated data. This action cannot be undone.
            </p>
            <button className="text-sm font-medium text-destructive underline">Delete account</button>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Security;
