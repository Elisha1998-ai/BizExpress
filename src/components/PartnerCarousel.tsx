import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import img4 from "../img4.jpg";
import img5 from "../img5.jpg";
import img6 from "../img6.jpg";
import img7 from "../img7.jpg";
import img8 from "../img8.jpg";
import img9 from "../img9.jpg";
import img10 from "../img10.jpg";
import img11 from "../img11.jpg";

const industries = [
  { 
    name: "Cakes & Pastries", 
    image: img2,
    description: "Custom cakes, pastries, and confectionery businesses"
  },
  { 
    name: "Real Estate", 
    image: img3,
    description: "Property development, sales, and management services"
  },
  { 
    name: "Healthcare", 
    image: img4,
    description: "Medical practices, clinics, and health services"
  },
  { 
    name: "Wellness & Fitness", 
    image: img5,
    description: "Gyms, spas, and wellness centers"
  },
  { 
    name: "Legal", 
    image: img6,
    description: "Law firms and legal consultancy services"
  },
  { 
    name: "Agriculture", 
    image: img7,
    description: "Farming, agribusiness, and food production"
  },
  { 
    name: "Spa & Beauty", 
    image: img8,
    description: "Salons, beauty studios, and spa services"
  },
  { 
    name: "Fashion", 
    image: img9,
    description: "Clothing brands, boutiques, and fashion design"
  },
  { 
    name: "Food & Hospitality", 
    image: img10,
    description: "Restaurants, catering, and hospitality businesses"
  },
  { 
    name: "Event Planning", 
    image: img11,
    description: "Wedding, corporate, and social event services"
  },
];

export const PartnerCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth / 2;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth / 2;
      
      let newScrollLeft = direction === "left" 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      if (newScrollLeft >= maxScroll) {
        newScrollLeft = 0;
      } else if (newScrollLeft < 0) {
        newScrollLeft = maxScroll - scrollAmount;
      }
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full relative group">


      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden mask-faded"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* First set of industries */}
        {industries.map((industry, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-64 md:w-72 mx-3"
          >
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group/card cursor-pointer">
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
            className="flex-shrink-0 w-64 md:w-72 mx-3"
          >
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group/card cursor-pointer">
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