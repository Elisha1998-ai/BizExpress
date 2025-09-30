import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  "TechVentures Ltd",
  "GreenPath Solutions",
  "NaijaBiz Hub",
  "StartSmart Nigeria",
  "Enterprise Growth Co",
  "Innovation Partners",
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
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
            <div className="h-20 flex items-center justify-center border border-border rounded-lg p-4 bg-card hover:border-primary transition-colors">
              <span className="font-semibold text-foreground text-sm md:text-base text-center">
                {partner}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
