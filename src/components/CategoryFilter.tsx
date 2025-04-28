
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Category {
  id: number;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 1, name: "Beach", icon: "🏖️" },
  { id: 2, name: "Mountain", icon: "🏔️" },
  { id: 3, name: "Cabins", icon: "🏡" },
  { id: 4, name: "Countryside", icon: "🌄" },
  { id: 5, name: "Ski-in/out", icon: "⛷️" },
  { id: 6, name: "Lakefront", icon: "🏞️" },
  { id: 7, name: "Tiny homes", icon: "🏠" },
  { id: 8, name: "Design", icon: "🎨" },
  { id: 9, name: "Amazing pools", icon: "🏊" },
  { id: 10, name: "Trending", icon: "🔥" },
  { id: 11, name: "Luxe", icon: "✨" },
  { id: 12, name: "Iconic cities", icon: "🏙️" },
  { id: 13, name: "Mansions", icon: "🏰" },
  { id: 14, name: "Tropical", icon: "🌴" },
];

const CategoryFilter: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = React.useState<number | null>(null);

  const handleCategoryClick = (id: number) => {
    setActiveCategory(id === activeCategory ? null : id);
  };

  return (
    <div className="bg-white sticky top-[72px] z-40 border-b border-gray-200">
      <div className="container-custom py-4">
        <ScrollArea className="w-full whitespace-nowrap pb-3">
          <div className="flex space-x-8 px-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex flex-col items-center space-y-2 min-w-14 transition-opacity ${
                  activeCategory === null || activeCategory === category.id
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-xs font-medium whitespace-nowrap">
                  {category.name}
                </span>
                {activeCategory === category.id && (
                  <div className="h-0.5 w-full bg-black rounded-full"></div>
                )}
                {activeCategory !== category.id && (
                  <div className="h-0.5 w-full bg-transparent"></div>
                )}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryFilter;
