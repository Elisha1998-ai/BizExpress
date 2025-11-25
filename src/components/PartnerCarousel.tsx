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
  { name: "Healthcare", image: healthcare },
  { name: "Wellness & Fitness", image: wellness },
  { name: "Food & Hospitality", image: food },
  { name: "Legal", image: legal },
  { name: "Logistics Company", image: logistics },
  { name: "Beauty", image: beauty },
  { name: "Agriculture", image: agriculture },
  { name: "Cake Industry", image: cakeIndustry },
  { name: "Event Planning", image: eventPlanning },
  { name: "Real Estate", image: realEstate },
  { name: "Fashion Industry", image: fashion },
];

export const PartnerCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of industries */}
        {industries.map((industry, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 md:w-56 mx-2"
          >
            <div className="relative h-56 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-base md:text-lg">
                  {industry.name}
                </h3>
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
            <div className="relative h-56 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-base md:text-lg">
                  {industry.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
