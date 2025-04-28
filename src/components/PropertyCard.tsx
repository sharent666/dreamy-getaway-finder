
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  distance?: string;
  dates?: string;
  price: number;
  rating: number;
  images: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  distance,
  dates,
  price,
  rating,
  images,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="border-none property-card-transition overflow-hidden">
      <CardContent className="p-0 relative">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={`${id}-image-${index}`}>
                <AspectRatio ratio={1} className="bg-muted">
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/70 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/70 hover:bg-white" />
        </Carousel>

        <button
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-6 w-6 ${
              isFavorite ? "fill-airbnb-primary text-airbnb-primary" : "text-white"
            }`}
          />
        </button>

        <div className="pt-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-base text-airbnb-dark truncate">{title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 fill-current" />
              <span className="text-airbnb-dark">{rating}</span>
            </div>
          </div>
          <p className="text-airbnb-light text-sm">{location}</p>
          {distance && <p className="text-airbnb-light text-sm">{distance}</p>}
          {dates && <p className="text-airbnb-light text-sm">{dates}</p>}
          <p className="mt-1">
            <span className="font-semibold text-airbnb-dark">${price}</span>{" "}
            <span className="text-airbnb-dark">night</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
