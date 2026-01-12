import { useState, useRef, useEffect } from "react";
import { ArrowUpDown, Check } from "lucide-react";

const sortOptions = [
  { id: "recommended", label: "Recommended" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
  { id: "reviews", label: "Most Reviews" },
  { id: "newest", label: "Newest Listed" },
];

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = sortOptions.find((o) => o.id === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-foreground smooth-transition"
      >
        <ArrowUpDown className="w-4 h-4" />
        <span className="text-sm font-medium">{selectedOption?.label || "Sort"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-elevated z-50 animate-fade-in overflow-hidden">
          <div className="py-2">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onChange(option.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary smooth-transition text-left"
              >
                <span className={value === option.id ? "font-medium" : ""}>{option.label}</span>
                {value === option.id && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
