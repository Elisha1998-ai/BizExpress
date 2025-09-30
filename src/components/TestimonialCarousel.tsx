import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "BizExpress helped me register my company and refine my business plan in less than 2 weeks. Today, I'm running a profitable venture with strong branding.",
    author: "Adebayo O.",
    role: "Tech Startup Founder"
  },
  {
    quote: "The branding strategy they developed for us completely transformed our market presence. Our revenue increased by 300% in just 6 months.",
    author: "Chioma N.",
    role: "Fashion Retail Owner"
  },
  {
    quote: "Fast, professional, and reliable. They handled all our CAC registration needs and provided excellent business planning support.",
    author: "Ibrahim K.",
    role: "Real Estate Developer"
  }
];

export const TestimonialCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="border-primary/20">
              <CardContent className="pt-6 pb-8">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg italic text-foreground mb-6 min-h-[120px]">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
