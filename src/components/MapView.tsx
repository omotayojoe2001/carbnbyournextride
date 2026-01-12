import { MapPin, X, ZoomIn, ZoomOut, Navigation } from "lucide-react";
import { cars } from "@/data/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MapViewProps {
  onClose: () => void;
}

const MapView = ({ onClose }: MapViewProps) => {
  const [zoom, setZoom] = useState(12);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  // Mock car positions on map
  const carPositions = cars.slice(0, 8).map((car, index) => ({
    ...car,
    x: 15 + (index % 4) * 22,
    y: 20 + Math.floor(index / 4) * 35,
  }));

  const selected = carPositions.find((c) => c.id === selectedCar);

  return (
    <div className="w-full h-full bg-secondary relative overflow-hidden">
      {/* Map Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: `${50 * (zoom / 12)}px ${50 * (zoom / 12)}px`,
        }}
      />

      {/* Map Labels */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-muted-foreground/50 text-sm font-medium">
          Victoria Island
        </div>
        <div className="absolute top-1/3 right-1/4 text-muted-foreground/50 text-sm font-medium">
          Ikoyi
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-muted-foreground/50 text-sm font-medium">
          Lekki
        </div>
        <div className="absolute top-1/2 right-1/3 text-muted-foreground/50 text-sm font-medium">
          Lagos Island
        </div>
      </div>

      {/* Car Markers */}
      {carPositions.map((car) => (
        <button
          key={car.id}
          onClick={() => setSelectedCar(selectedCar === car.id ? null : car.id)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 smooth-transition hover:scale-110 ${
            selectedCar === car.id ? "z-20" : ""
          }`}
          style={{ left: `${car.x}%`, top: `${car.y}%` }}
        >
          <div className={`px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg ${
            selectedCar === car.id 
              ? "bg-foreground text-background scale-110" 
              : "bg-background text-foreground border border-border"
          }`}>
            ₦{(car.pricePerMile / 1000).toFixed(0)}k
          </div>
        </button>
      ))}

      {/* Selected Car Popup */}
      {selected && (
        <div 
          className="absolute z-30 w-72 bg-background rounded-xl shadow-elevated overflow-hidden animate-fade-in"
          style={{ 
            left: `${Math.min(Math.max(selected.x, 20), 80)}%`, 
            top: `${selected.y + 8}%`,
            transform: "translateX(-50%)"
          }}
        >
          <div className="relative">
            <img
              src={selected.images[0]}
              alt={selected.title}
              className="w-full h-40 object-cover"
            />
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full hover:bg-background smooth-transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <Link to={`/car/${selected.id}`} className="block p-4">
            <h3 className="font-semibold">{selected.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{selected.location}</p>
            <div className="flex items-center gap-1 mt-2 text-sm">
              <span>★ {selected.rating}</span>
              <span className="text-muted-foreground">({selected.reviews})</span>
            </div>
            <div className="mt-2 font-semibold">
              ₦{selected.pricePerMile.toLocaleString()}/mile + ₦{selected.pricePerHour.toLocaleString()}/hr
            </div>
          </Link>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button 
          onClick={() => setZoom(Math.min(zoom + 2, 20))}
          className="p-3 bg-background border border-border rounded-lg shadow-sm hover:shadow-md smooth-transition"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setZoom(Math.max(zoom - 2, 8))}
          className="p-3 bg-background border border-border rounded-lg shadow-sm hover:shadow-md smooth-transition"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button className="p-3 bg-background border border-border rounded-lg shadow-sm hover:shadow-md smooth-transition">
          <Navigation className="w-5 h-5" />
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full shadow-sm hover:shadow-md smooth-transition"
      >
        <X className="w-4 h-4" />
        <span className="text-sm font-medium">Close map</span>
      </button>
    </div>
  );
};

export default MapView;
