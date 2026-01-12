import { useState } from "react";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CarCardProps {
  id: string;
  images: string[];
  title: string;
  location: string;
  driver: {
    name: string;
    rating: number;
    image: string;
  };
  pricePerMile: number;
  pricePerHour: number;
  rating: number;
  reviews: number;
  isGuestFavorite?: boolean;
}

const CarCard = ({
  id,
  images,
  title,
  location,
  driver,
  pricePerMile,
  pricePerHour,
  rating,
  reviews,
  isGuestFavorite = false,
}: CarCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link to={`/car/${id}`} className="group block">
      <div
        className="relative aspect-square overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <img
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover smooth-transition group-hover:scale-105"
        />

        {/* Guest Favorite Badge */}
        {isGuestFavorite && (
          <div className="absolute top-3 left-3 guest-badge">
            Guest favorite
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="favorite-btn"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorited ? "fill-foreground stroke-foreground" : "stroke-foreground"
            }`}
            strokeWidth={1.5}
          />
        </button>

        {/* Image Navigation */}
        {isHovered && images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/90 rounded-full hover:bg-background smooth-transition hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/90 rounded-full hover:bg-background smooth-transition hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full smooth-transition ${
                  index === currentImage ? "bg-background" : "bg-background/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-3 space-y-1">
        <div className="flex items-start justify-between">
          <h3 className="card-title">{title}</h3>
          <div className="rating-badge">
            <Star className="w-4 h-4 fill-foreground" />
            <span className="font-medium">{rating.toFixed(2)}</span>
          </div>
        </div>
        
        <p className="text-subtle">{location}</p>
        
        {/* Driver Info */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={driver.image}
            alt={driver.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground">
            Driver: {driver.name} · ★ {driver.rating.toFixed(1)}
          </span>
        </div>

        {/* Dual Pricing */}
        <div className="flex items-center gap-3 mt-2">
          <span className="price-tag">
            <span className="text-foreground">₦{pricePerMile.toLocaleString()}</span>
            <span className="text-muted-foreground font-normal">/mile</span>
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="price-tag">
            <span className="text-foreground">₦{pricePerHour.toLocaleString()}</span>
            <span className="text-muted-foreground font-normal">/hr</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;