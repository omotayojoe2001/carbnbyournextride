import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal, Crown, Car, Zap, CircleDot, Bus, Flag, Clock, CalendarDays, Plane, Building2, PartyPopper, Gem, Users } from "lucide-react";

const categories = [
  { id: "luxury", label: "Luxury", icon: Crown },
  { id: "suv", label: "SUV", icon: Car },
  { id: "sedan", label: "Sedan", icon: Car },
  { id: "electric", label: "Electric", icon: Zap },
  { id: "convertible", label: "Convertible", icon: CircleDot },
  { id: "minivan", label: "Minivan", icon: Bus },
  { id: "sports", label: "Sports", icon: Flag },
  { id: "classic", label: "Classic", icon: Gem },
  { id: "executive", label: "Executive", icon: Users },
  { id: "wedding", label: "Wedding", icon: Gem },
  { id: "airport", label: "Airport", icon: Plane },
  { id: "corporate", label: "Corporate", icon: Building2 },
  { id: "events", label: "Events", icon: PartyPopper },
  { id: "hourly", label: "Hourly", icon: Clock },
  { id: "daily", label: "Daily", icon: CalendarDays },
];

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("luxury");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    onCategoryChange?.(id);
  };

  return (
    <div className="relative flex items-center gap-4 py-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 p-2 bg-background border border-border rounded-full shadow-sm hover:shadow-md smooth-transition"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Categories */}
      <div
        ref={scrollRef}
        className="flex items-center gap-3 overflow-x-auto hide-scrollbar px-12 scroll-smooth"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={
                activeCategory === category.id
                  ? "category-pill-active flex items-center gap-2 whitespace-nowrap"
                  : "category-pill flex items-center gap-2 whitespace-nowrap"
              }
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-20 z-10 p-2 bg-background border border-border rounded-full shadow-sm hover:shadow-md smooth-transition"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Filters Button */}
      <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl hover:border-foreground smooth-transition whitespace-nowrap">
        <SlidersHorizontal className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
      </button>
    </div>
  );
};

export default CategoryFilter;
