import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import cocomillea from "@/assets/partner-cocomillea.png";
import goldnlilies from "@/assets/partner-goldnlilies.png";
import elitetidy from "@/assets/partner-elitetidy.png";
import lightningArtz from "@/assets/partner-lightning-artz.png";

const partners = [
  { name: "Cocomillacakery", logo: cocomillea },
  { name: "Goldnlilies", logo: goldnlilies },
  { name: "Elitetidy", logo: elitetidy },
  { name: "Lightning Artz", logo: lightningArtz },
  { name: "Fruit Relish", logo: null },
  { name: "JustABites Cake", logo: null },
  { name: "Chi Delight", logo: null },
  { name: "Bebest Lash", logo: null },
  { name: "Papilopidea", logo: null },
  { name: "FolaDorm", logo: null },
  { name: "Zharn Closet", logo: null },
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
            <div className="h-32 flex items-center justify-center border border-border rounded-lg p-6 bg-card hover:border-primary hover:shadow-lg transition-all">
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain filter hover:grayscale-0 transition-all"
                />
              ) : (
                <span className="font-semibold text-foreground text-base md:text-lg text-center">
                  {partner.name}
                </span>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
