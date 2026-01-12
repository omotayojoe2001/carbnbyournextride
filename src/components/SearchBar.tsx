import { useState, useRef, useEffect } from "react";
import { Search, MapPin, X, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

interface SearchBarProps {
  expanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
}

const popularDestinations = [
  { name: "Lagos Island", region: "Lagos, Nigeria" },
  { name: "Victoria Island", region: "Lagos, Nigeria" },
  { name: "Lekki", region: "Lagos, Nigeria" },
  { name: "Ikoyi", region: "Lagos, Nigeria" },
  { name: "Ikeja", region: "Lagos, Nigeria" },
  { name: "Abuja", region: "FCT, Nigeria" },
  { name: "Port Harcourt", region: "Rivers, Nigeria" },
];

const SearchBar = ({ expanded = false, onExpandChange }: SearchBarProps) => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState<string | null>(null);
  const [where, setWhere] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = where
    ? popularDestinations.filter(
        (d) =>
          d.name.toLowerCase().includes(where.toLowerCase()) ||
          d.region.toLowerCase().includes(where.toLowerCase())
      )
    : popularDestinations;

  const totalPassengers = adults + children + infants;
  const passengersLabel = totalPassengers === 1 ? "1 passenger" : `${totalPassengers} passengers`;

  const handleFieldClick = (field: string) => {
    setActiveField(field);
    onExpandChange?.(true);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setActiveField(null);
      onExpandChange?.(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    setActiveField(null);
    onExpandChange?.(false);
    navigate("/search");
  };

  const handleDestinationClick = (destination: typeof popularDestinations[0]) => {
    setWhere(destination.name);
    setActiveField("when");
  };

  const formatDateRange = () => {
    if (!dateRange?.from) return "Add dates";
    if (!dateRange.to) return format(dateRange.from, "MMM d");
    return `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d")}`;
  };

  return (
    <div className="flex justify-center px-2 sm:px-0" ref={searchRef}>
      <div className="w-full max-w-3xl relative">
        {/* Mobile Search Bar */}
        <div className="md:hidden">
          <div
            className="flex flex-col gap-2 bg-background border border-border rounded-2xl p-3 search-bar-shadow"
          >
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-xl ${
                activeField === "where" ? "bg-secondary" : ""
              }`}
              onClick={() => handleFieldClick("where")}
            >
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wide">Where</span>
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                  className="text-xs text-muted-foreground bg-transparent outline-none placeholder:text-muted-foreground w-full"
                  onClick={(e) => e.stopPropagation()}
                  onFocus={() => handleFieldClick("where")}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div
                className={`flex-1 px-3 py-2 rounded-xl ${activeField === "when" ? "bg-secondary" : ""}`}
                onClick={() => handleFieldClick("when")}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide">When</span>
                <p className={`text-xs truncate ${dateRange?.from ? "text-foreground" : "text-muted-foreground"}`}>
                  {formatDateRange()}
                </p>
              </div>
              <div
                className={`flex-1 px-3 py-2 rounded-xl ${activeField === "who" ? "bg-secondary" : ""}`}
                onClick={() => handleFieldClick("who")}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide">Who</span>
                <p className={`text-xs truncate ${totalPassengers > 1 ? "text-foreground" : "text-muted-foreground"}`}>
                  {totalPassengers > 1 ? passengersLabel : "Add passengers"}
                </p>
              </div>
              <button 
                onClick={handleSearch}
                className="p-2.5 bg-foreground rounded-xl hover:bg-foreground/90 smooth-transition"
              >
                <Search className="w-4 h-4 text-background" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-background border border-border rounded-full search-bar-shadow hover:search-bar-shadow-hover smooth-transition cursor-pointer">
          <div
            className={`flex-1 flex items-center gap-3 px-6 py-3 rounded-full smooth-transition ${
              activeField === "where" ? "bg-secondary" : "hover:bg-secondary"
            }`}
            onClick={() => handleFieldClick("where")}
          >
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold">Where</span>
              <input
                type="text"
                placeholder="Search destinations"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                className="text-sm text-muted-foreground bg-transparent outline-none placeholder:text-muted-foreground w-full truncate"
                onClick={(e) => e.stopPropagation()}
                onFocus={() => handleFieldClick("where")}
              />
            </div>
          </div>
          <div className="search-divider" />
          <div
            className={`flex-1 flex items-center gap-3 px-6 py-3 rounded-full smooth-transition ${
              activeField === "when" ? "bg-secondary" : "hover:bg-secondary"
            }`}
            onClick={() => handleFieldClick("when")}
          >
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold">When</span>
              <span className={`text-sm truncate ${dateRange?.from ? "text-foreground" : "text-muted-foreground"}`}>
                {formatDateRange()}
              </span>
            </div>
          </div>
          <div className="search-divider" />
          <div
            className={`flex items-center gap-3 px-6 py-3 rounded-full smooth-transition ${
              activeField === "who" ? "bg-secondary" : "hover:bg-secondary"
            }`}
            onClick={() => handleFieldClick("who")}
          >
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold">Who</span>
              <span className={`text-sm truncate ${totalPassengers > 1 ? "text-foreground" : "text-muted-foreground"}`}>
                {totalPassengers > 1 ? passengersLabel : "Add passengers"}
              </span>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            className="m-2 p-3 bg-foreground rounded-full hover:bg-foreground/90 smooth-transition hover:scale-105"
          >
            <Search className="w-5 h-5 text-background" strokeWidth={2.5} />
          </button>
        </div>

        {/* Dropdowns */}
        {activeField === "where" && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-elevated p-4 z-50 animate-fade-in">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Popular destinations
            </p>
            <div className="space-y-1">
              {filteredDestinations.map((destination) => (
                <button
                  key={destination.name}
                  onClick={() => handleDestinationClick(destination)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary smooth-transition text-left"
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{destination.name}</p>
                    <p className="text-sm text-muted-foreground">{destination.region}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeField === "when" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background border border-border rounded-2xl shadow-elevated p-4 z-50 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Select dates</p>
              {dateRange?.from && (
                <button 
                  onClick={() => setDateRange(undefined)}
                  className="text-sm font-medium underline"
                >
                  Clear dates
                </button>
              )}
            </div>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
              className="rounded-xl"
            />
            <div className="flex justify-end mt-4">
              <button 
                onClick={() => setActiveField("who")}
                className="btn-primary px-6 py-2 rounded-lg font-medium"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {activeField === "who" && (
          <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-2xl shadow-elevated p-6 z-50 w-80 animate-fade-in">
            <div className="space-y-6">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Adults</p>
                  <p className="text-sm text-muted-foreground">Age 13+</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    disabled={adults <= 1}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-foreground smooth-transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center font-medium">{adults}</span>
                  <button
                    onClick={() => setAdults(Math.min(8, adults + 1))}
                    disabled={adults >= 8}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-foreground smooth-transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Children</p>
                  <p className="text-sm text-muted-foreground">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    disabled={children <= 0}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-foreground smooth-transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center font-medium">{children}</span>
                  <button
                    onClick={() => setChildren(Math.min(6, children + 1))}
                    disabled={children >= 6}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-foreground smooth-transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Infants</p>
                  <p className="text-sm text-muted-foreground">Under 2</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInfants(Math.max(0, infants - 1))}
                    disabled={infants <= 0}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-foreground smooth-transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center font-medium">{infants}</span>
                  <button
                    onClick={() => setInfants(Math.min(4, infants + 1))}
                    disabled={infants >= 4}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-foreground smooth-transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
              Maximum 4 passengers per vehicle. Larger groups may require multiple cars.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
