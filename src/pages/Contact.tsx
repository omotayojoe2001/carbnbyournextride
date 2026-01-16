import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground mb-8">
              Have questions? We're here to help. Reach out to us through any of these channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">24/7 Support Hotline</p>
                  <a href="tel:+2348002272626" className="text-sm font-medium hover:underline">
                    +234 800 CARBNB (227262)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  <a href="mailto:support@carbnb.com" className="text-sm font-medium hover:underline">
                    support@carbnb.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 9 PM WAT</p>
                  <button className="text-sm font-medium hover:underline">
                    Start a conversation
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Victoria Island<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Emergency support available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="host">Become a Host</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-lg"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Contact;