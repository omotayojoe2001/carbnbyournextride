import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { experiences } from "@/data/mockData";
import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-8">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Carbnb Experiences</h1>
          <p className="text-muted-foreground max-w-xl">
            Curated journeys with professional drivers. From city tours to airport transfers, 
            discover premium experiences crafted for every occasion.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map(exp => (
            <Link to={`/experience/${exp.id}`} key={exp.id} className="group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-foreground" />
                    <span className="text-sm font-medium">{exp.rating}</span>
                    <span className="text-sm text-muted-foreground">({exp.reviews})</span>
                  </div>
                  <div>
                    <span className="font-semibold">From ₦{exp.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Create your own experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Need a custom journey? We can arrange personalized trips for weddings, 
            corporate events, or special occasions.
          </p>
          <Link to="/contact" className="inline-block btn-primary px-8 py-3 rounded-lg font-semibold">
            Contact Us
          </Link>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Experiences;