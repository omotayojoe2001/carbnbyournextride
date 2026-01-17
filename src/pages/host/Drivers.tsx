import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Edit, Eye, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostDrivers = () => {
  const drivers = [
    { id: "d1", name: "Emmanuel O.", phone: "+234 801 234 5678", rating: 4.95, trips: 127, vehicle: "Mercedes S-Class", status: "Active", image: "https://i.pravatar.cc/100?img=1" },
    { id: "d2", name: "Chinedu A.", phone: "+234 802 345 6789", rating: 4.88, trips: 89, vehicle: "BMW 7 Series", status: "Active", image: "https://i.pravatar.cc/100?img=2" },
    { id: "d3", name: "Adebayo K.", phone: "+234 803 456 7890", rating: 4.92, trips: 203, vehicle: "Range Rover Sport", status: "Inactive", image: "https://i.pravatar.cc/100?img=3" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <Link to="/host/menu" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Driver Management</h1>
            <p className="text-muted-foreground mt-1">Manage your drivers</p>
          </div>
          <button className="btn-primary px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm">
            <Plus className="w-4 h-4" />
            Add Driver
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Total Drivers</p>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Active</p>
            <p className="text-2xl font-bold text-green-500">2</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Avg Rating</p>
            <p className="text-2xl font-bold">4.92</p>
          </div>
        </div>

        {/* Drivers List */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-semibold text-sm">Driver</th>
                  <th className="text-left p-3 font-semibold text-sm hidden md:table-cell">Vehicle</th>
                  <th className="text-left p-3 font-semibold text-sm hidden md:table-cell">Rating</th>
                  <th className="text-left p-3 font-semibold text-sm hidden md:table-cell">Trips</th>
                  <th className="text-left p-3 font-semibold text-sm">Status</th>
                  <th className="text-left p-3 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id} className="border-t border-border hover:bg-secondary/50">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img src={driver.image} alt={driver.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-sm">{driver.name}</p>
                          <p className="text-xs text-muted-foreground">{driver.phone}</p>
                          <div className="md:hidden mt-1">
                            <span className="text-xs text-muted-foreground">{driver.vehicle} • {driver.trips} trips • </span>
                            <span className="text-xs flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-500 stroke-yellow-500" />
                              {driver.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      <p className="text-sm">{driver.vehicle}</p>
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500 stroke-yellow-500" />
                        <span className="text-sm">{driver.rating}</span>
                      </div>
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      <p className="text-sm">{driver.trips}</p>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        driver.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-orange-500/10 text-orange-500"
                      }`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <Link to={`/driver/${driver.id}`} className="p-1.5 hover:bg-secondary rounded">
                          <Eye className="w-3 h-3" />
                        </Link>
                        <button className="p-1.5 hover:bg-secondary rounded">
                          <Edit className="w-3 h-3" />
                        </button>
                        <a href={`tel:${driver.phone}`} className="p-1.5 hover:bg-secondary rounded">
                          <Phone className="w-3 h-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostDrivers;