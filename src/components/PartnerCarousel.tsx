import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import cakeIndustry from "@/assets/industry-cake.png";
import eventPlanning from "@/assets/industry-event.png";
import realEstate from "@/assets/industry-realestate.png";
import fashion from "@/assets/industry-fashion.png";

const industries = [
  { name: "Cake Industry", image: cakeIndustry },
  { name: "Event Planning", image: eventPlanning },
  { name: "Real Estate", image: realEstate },
  { name: "Fashion Industry", image: fashion },
];

export const PartnerCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {industries.map((industry, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl md:text-2xl">
                  {industry.name}
                </h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
