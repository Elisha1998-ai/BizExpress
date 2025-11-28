import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cakeIndustry from "@/assets/industry-cake.png";
import eventPlanning from "@/assets/industry-event.png";
import realEstate from "@/assets/industry-realestate.png";
import fashion from "@/assets/industry-fashion.png";
import healthcare from "@/assets/industry-healthcare.png";
import wellness from "@/assets/industry-wellness.png";
import food from "@/assets/industry-food.png";
import legal from "@/assets/industry-legal.png";
import logistics from "@/assets/industry-logistics.png";
import beauty from "@/assets/industry-beauty.png";
import agriculture from "@/assets/industry-agriculture.png";

const industries = [
  { 
    name: "Cakes & Pastries", 
    image: cakeIndustry,
    description: "Custom cakes, pastries, and confectionery businesses"
  },
  { 
    name: "Real Estate", 
    image: realEstate,
    description: "Property development, sales, and management services"
  },
  { 
    name: "Healthcare", 
    image: healthcare,
    description: "Medical practices, clinics, and health services"
  },
  { 
    name: "Wellness & Fitness", 
    image: wellness,
    description: "Gyms, spas, and wellness centers"
  },
  { 
    name: "Legal", 
    image: legal,
    description: "Law firms and legal consultancy services"
  },
  { 
    name: "Agriculture", 
    image: agriculture,
    description: "Farming, agribusiness, and food production"
  },
  { 
    name: "Beauty & Spa", 
    image: beauty,
    description: "Salons, beauty studios, and spa services"
  },
  { 
    name: "Fashion", 
    image: fashion,
    description: "Clothing brands, boutiques, and fashion design"
  },
  { 
    name: "Food & Hospitality", 
    image: food,
    description: "Restaurants, catering, and hospitality businesses"
  },
  { 
    name: "Event Planning", 
    image: eventPlanning,
    description: "Wedding, corporate, and social event services"
  },
  { 
    name: "Logistics & Transportation", 
    image: logistics,
    description: "Delivery, freight, and transportation companies"
  },
];

export const PartnerCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240; // Approximate card width + margin
      const newScrollLeft = direction === "left" 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full relative group">
      {/* Left Arrow */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Right Arrow */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div 
        ref={scrollRef}
        className="flex animate-scroll overflow-x-hidden hover:[animation-play-state:paused]"
      >
        {/* First set of industries */}
        {industries.map((industry, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 md:w-56 mx-2"
          >
            <div className="relative h-56 md:h-64 rounded-lg overflow-hidden group/card cursor-pointer">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 transition-opacity duration-300 group-hover/card:opacity-0">
                <h3 className="text-white font-bold text-base md:text-lg">
                  {industry.name}
                </h3>
              </div>
              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <h3 className="text-primary-foreground font-bold text-base md:text-lg text-center mb-2">
                  {industry.name}
                </h3>
                <p className="text-primary-foreground/90 text-sm text-center">
                  {industry.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {industries.map((industry, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 md:w-56 mx-2"
          >
            <div className="relative h-56 md:h-64 rounded-lg overflow-hidden group/card cursor-pointer">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 transition-opacity duration-300 group-hover/card:opacity-0">
                <h3 className="text-white font-bold text-base md:text-lg">
                  {industry.name}
                </h3>
              </div>
              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <h3 className="text-primary-foreground font-bold text-base md:text-lg text-center mb-2">
                  {industry.name}
                </h3>
                <p className="text-primary-foreground/90 text-sm text-center">
                  {industry.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};