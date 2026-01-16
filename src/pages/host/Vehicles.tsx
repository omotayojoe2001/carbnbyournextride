import { Link } from "react-router-dom";
import { Plus, Edit, Eye, MoreVertical, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostVehicles = () => {
  const vehicles = [
    { id: "1", name: "Mercedes-Benz S-Class", status: "Active", bookings: 23, earnings: "₦450K", rating: 4.97, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80" },
    { id: "2", name: "BMW 7 Series Executive", status: "Active", bookings: 19, earnings: "₦380K", rating: 4.92, image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&q=80" },
    { id: "3", name: "Range Rover Sport HSE", status: "Active", bookings: 17, earnings: "₦520K", rating: 4.89, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=80" },
    { id: "4", name: "Toyota Camry Premium", status: "Inactive", bookings: 12, earnings: "₦180K", rating: 4.78, image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80" },
    { id: "5", name: "Lexus ES 350 Luxury", status: "Maintenance", bookings: 15, earnings: "₦320K", rating: 4.95, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Vehicles</h1>
            <p className="text-muted-foreground mt-1">Manage your fleet</p>
          </div>
          <Link to="/host/vehicles/add" className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Vehicle
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1">Total Vehicles</p>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1">Active</p>
            <p className="text-3xl font-bold text-green-500">3</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1">Inactive</p>
            <p className="text-3xl font-bold text-orange-500">1</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1">Maintenance</p>
            <p className="text-3xl font-bold text-red-500">1</p>
          </div>
        </div>

        {/* Vehicles List */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-4 font-semibold">Vehicle</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Status</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Bookings</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Earnings</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Rating</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-t border-border hover:bg-secondary/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={vehicle.image} alt={vehicle.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                          <p className="font-medium">{vehicle.name}</p>
                          <p className="text-sm text-muted-foreground">ID: {vehicle.id}</p>
                          <div className="md:hidden mt-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              vehicle.status === "Active" ? "bg-green-500/10 text-green-500" :
                              vehicle.status === "Inactive" ? "bg-orange-500/10 text-orange-500" :
                              "bg-red-500/10 text-red-500"
                            }`}>
                              {vehicle.status}
                            </span>
                            <span className="text-xs text-muted-foreground ml-2">{vehicle.bookings} trips · {vehicle.earnings}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        vehicle.status === "Active" ? "bg-green-500/10 text-green-500" :
                        vehicle.status === "Inactive" ? "bg-orange-500/10 text-orange-500" :
                        "bg-red-500/10 text-red-500"
                      }`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <p className="font-medium">{vehicle.bookings}</p>
                      <p className="text-xs text-muted-foreground">this month</p>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <p className="font-medium">{vehicle.earnings}</p>
                      <p className="text-xs text-muted-foreground">this month</p>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <p className="font-medium">{vehicle.rating}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Star className="w-3 h-3 fill-yellow-500 stroke-yellow-500" /> rating</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link to={`/car/${vehicle.id}`} className="p-2 hover:bg-secondary rounded-lg">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link to={`/host/vehicles/${vehicle.id}/edit`} className="p-2 hover:bg-secondary rounded-lg">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button className="p-2 hover:bg-secondary rounded-lg hidden md:block">
                          <MoreVertical className="w-4 h-4" />
                        </button>
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

export default HostVehicles;
