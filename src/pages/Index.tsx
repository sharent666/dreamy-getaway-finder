
import React from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyCard from "@/components/PropertyCard";
import PopularDestinations from "@/components/PopularDestinations";
import Footer from "@/components/Footer";

// Sample data for property listings
const properties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    location: "Malibu, California",
    distance: "50 miles away",
    dates: "Nov 12-17",
    price: 350,
    rating: 4.98,
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "New York City, New York",
    distance: "2,329 miles away",
    dates: "Oct 21-26",
    price: 175,
    rating: 4.85,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    ]
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    distance: "1,400 miles away",
    dates: "Dec 5-10",
    price: 220,
    rating: 4.92,
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  },
  {
    id: 4,
    title: "Beachfront Bungalow",
    location: "Miami, Florida",
    distance: "1,200 miles away",
    dates: "Jan 15-20",
    price: 190,
    rating: 4.79,
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    ]
  },
  {
    id: 5,
    title: "Historic Townhouse",
    location: "Charleston, South Carolina",
    distance: "800 miles away",
    dates: "Sep 8-13",
    price: 165,
    rating: 4.95,
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  },
  {
    id: 6,
    title: "Lakeside Retreat",
    location: "Lake Tahoe, California",
    distance: "1,850 miles away",
    dates: "Aug 12-17",
    price: 280,
    rating: 4.88,
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    ]
  },
  {
    id: 7,
    title: "Desert Oasis Villa",
    location: "Scottsdale, Arizona",
    distance: "1,400 miles away",
    dates: "Nov 3-8",
    price: 210,
    rating: 4.91,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    ]
  },
  {
    id: 8,
    title: "Skyline Penthouse",
    location: "Chicago, Illinois",
    distance: "700 miles away",
    dates: "Oct 15-20",
    price: 325,
    rating: 4.97,
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryFilter />
      
      <main className="flex-grow">
        {/* Property Listings */}
        <section className="container-custom py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </section>
        
        <PopularDestinations />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
