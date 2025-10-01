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
    quote: "Before BizExpress, my business was invisible. Within 3 months, I was getting consistent sales online and finally registered my company.",
    author: "Sarah A.",
    role: "Fashion Retail Owner"
  },
  {
    quote: "The ads management service brought me 10x more leads than I was getting on my own. BizExpress knows what works.",
    author: "Michael O.",
    role: "Tech Services"
  },
  {
    quote: "From branding to social media management, BizExpress made my business look professional and helped me attract premium clients.",
    author: "Chioma N.",
    role: "Beauty & Wellness"
  },
  {
    quote: "The business consultation helped me avoid costly mistakes. I'm now scaling with confidence thanks to their expert guidance.",
    author: "David T.",
    role: "Real Estate"
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
