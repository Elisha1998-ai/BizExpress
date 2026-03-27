import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; 
import { useState, useEffect, useCallback } from "react"; 
import { Card } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button"; 
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
} from "@/components/ui/carousel"; 
import type { UseEmblaCarouselType } from "embla-carousel-react"; 
import { Link } from "react-router-dom";
import cacImage from "@/assets/cac logo.jpg";
import planningImage from "@/assets/business-planning-new.png";
import brandingImage from "@/assets/branding.jpg";
import socialMediaImage from "@/assets/social-media.jpg";
import adsImage from "@/assets/ads-management.jpg";
import contentImage from "@/assets/content-creation.jpg";
import consultationImage from "@/assets/consultation-meeting.jpg";

type CarouselApi = UseEmblaCarouselType[1];

interface GalleryHoverCarouselItem { 
  id: string; 
  title: string; 
  summary: string; 
  url: string; 
  image: string; 
} 
 
export default function GalleryHoverCarousel({ 
  heading = "Our Services", 
  items = [ 
    { 
      id: "cac", 
      title: "CAC Registration", 
      summary: "Get your business legally recognized in days, not months. Business name, Limited Liability, and specialized sector registration.", 
      url: "/contact", 
      image: cacImage, 
    }, 
    { 
      id: "planning", 
      title: "Business Planning", 
      summary: "Turn your ideas into scalable, investor-ready businesses with feasibility studies and financial projections.", 
      url: "/contact", 
      image: planningImage, 
    }, 
    { 
      id: "branding", 
      title: "Branding & Strategy", 
      summary: "Transform your business into a brand people can't ignore with logo design and visual identity.", 
      url: "/contact", 
      image: brandingImage, 
    }, 
    { 
      id: "social", 
      title: "Social Media Management", 
      summary: "Build a strong online presence and engage your audience consistently across platforms.", 
      url: "/contact", 
      image: socialMediaImage, 
    }, 
    { 
      id: "content", 
      title: "Content Creation", 
      summary: "We craft content that sells, educates, and builds a connection with your audience.", 
      url: "/contact", 
      image: contentImage, 
    }, 
    { 
      id: "ads", 
      title: "Ads Management", 
      summary: "Run targeted ad campaigns on Facebook, Instagram, and Google that get real results.", 
      url: "/contact", 
      image: adsImage, 
    }, 
    { 
      id: "consultation", 
      title: "Business Consultation", 
      summary: "Personalized advice to solve challenges, unlock opportunities, and grow sustainably.", 
      url: "/contact", 
      image: consultationImage, 
    } 
  ], 
}: { 
  heading?: string; 
  items?: GalleryHoverCarouselItem[]; 
}) { 
  const [carouselApi, setCarouselApi] = useState<CarouselApi>(); 
  const [canScrollPrev, setCanScrollPrev] = useState(false); 
  const [canScrollNext, setCanScrollNext] = useState(false); 
 
  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => { 
    if (!carouselApi) return; 
    onSelect(carouselApi);
    carouselApi.on("select", onSelect); 
    carouselApi.on("reInit", onSelect);
    return () => { 
      carouselApi.off("select", onSelect); 
      carouselApi.off("reInit", onSelect);
    }; 
  }, [carouselApi, onSelect]); 
 
  return ( 
    <section id="services" className="py-32 bg-background overflow-hidden"> 
      <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12"> 
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16"> 
          <div className="max-w-2xl text-left"> 
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight"> 
              {heading}
            </h2> 
            <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
              Explore our collection of innovative solutions and professional services designed to transform and scale your business.
            </p>
          </div> 
          <div className="flex gap-2 mt-6 md:mt-0"> 
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => carouselApi?.scrollPrev()} 
              disabled={!canScrollPrev} 
              className="h-12 w-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" 
            > 
              <ChevronLeft className="h-6 w-6 text-primary" /> 
            </Button> 
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => carouselApi?.scrollNext()} 
              disabled={!canScrollNext} 
              className="h-12 w-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" 
            > 
              <ChevronRight className="h-6 w-6 text-primary" /> 
            </Button> 
          </div> 
        </div> 
 
        <div className="w-full"> 
          <Carousel 
            setApi={setCarouselApi} 
            opts={{ 
              align: "start",
              loop: false,
              breakpoints: { "(max-width: 768px)": { dragFree: true } } 
            }} 
            className="w-full" 
          > 
            <CarouselContent className="-ml-4 md:-ml-6"> 
              {items.map((item) => ( 
                <CarouselItem key={item.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"> 
                  <Link to={item.url} className="group block relative w-full h-[400px] md:h-[450px]"> 
                    <Card className="overflow-hidden h-full w-full rounded-[10px] border-2 border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"> 
                      {/* Image */} 
                      <div className="relative h-full w-full transition-all duration-700 ease-in-out group-hover:h-1/2"> 
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110" 
                        /> 
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                        
                        {/* Title Overlay (Visible when not hovered) */}
                        <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-300">
                          <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.title}</h3>
                        </div>
                      </div> 
 
                      {/* Content Section (Revealed on hover) */} 
                      <div className="absolute bottom-0 left-0 w-full h-1/2 p-8 transition-all duration-500 translate-y-full group-hover:translate-y-0 bg-background/95 backdrop-blur-md flex flex-col justify-center border-t border-border/50"> 
                        <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3> 
                        <p className="text-muted-foreground text-base leading-relaxed line-clamp-4"> 
                          {item.summary} 
                        </p> 
                        <div className="mt-6 flex items-center text-foreground font-semibold group/link">
                          Learn More 
                          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover/link:translate-x-2" />
                        </div>
                      </div> 
                    </Card> 
                  </Link> 
                </CarouselItem> 
              ))} 
            </CarouselContent> 
          </Carousel> 
        </div> 
      </div> 
    </section> 
  ); 
} 
