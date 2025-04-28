
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    description: "Tropical paradise with crystal-clear water"
  },
  {
    id: 2,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Majestic mountain landscapes"
  },
  {
    id: 3,
    name: "Santorini",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Stunning white and blue architecture"
  },
];

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Popular destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
