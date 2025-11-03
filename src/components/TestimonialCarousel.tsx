import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I must say they did a very great job for me and promptly. They know their job. I highly recommend them if you need someone to work on your business plan and other business document preparations.",
    author: "CEO, Cocomillacakery",
    role: ""
  },
  {
    quote: "With just one strategic comment under a post, They helped boost our vendor list sign-ups by up to 30%.",
    author: "CEO, Goldnlilies",
    role: ""
  },
  {
    quote: "The process was super smooth and fast! My CAC registration was completed in less than a week. The team was professional, always available to answer my questions, and made everything stress-free. I highly recommend them for anyone looking to register their business quickly",
    author: "CEO, Zharn Closet",
    role: ""
  },
  {
    quote: "Excellent service! They helped me handle my CAC registration seamlessly, and it was ready in under a week. Communication was clear, and the process was straightforward. I'm really impressed with how efficient and reliable they are.",
    author: "CEO, FolaDorm",
    role: ""
  },
  {
    quote: "These guys are my go-to for business plans! They've done over 50+ for me and my clients, always on point, detailed, and delivered fast. I don't even think twice before referring people to them. They always deliver.",
    author: "CEO, Papilopidea",
    role: ""
  },
  {
    quote: "Incredible experience! The team developed our business plan, created an effective content strategy, and now manage our social media pages. Their creativity, consistency, and professionalism have truly elevated our brand presence in the UK. Highly recommend!",
    author: "CEO Elitetidy",
    role: ""
  },
  {
    quote: "The CAC registration process was incredibly smooth and fast. Everything was completed in less than a week, and the team made it so easy from start to finish. I'm really impressed with their professionalism and efficiency.",
    author: "CEO, Bebest Lash",
    role: ""
  },
  {
    quote: "Excellent service! My CAC registration was processed in just a few days. The communication was clear, and the entire process was stress-free. I highly recommend their services to anyone starting a new business.",
    author: "CEO, Chi Delight",
    role: ""
  },
  {
    quote: "I was amazed at how quickly everything was handled. My CAC certificate was ready in less than a week, and the team kept me updated every step of the way. They truly deliver on their promise of fast, reliable service.",
    author: "CEO, Fruit Relish",
    role: ""
  },
  {
    quote: "I had such a great experience! My CAC registration was completed faster than I expected, and the process was seamless. The team is efficient, professional, and very supportive.",
    author: "CEO, JustABites Cake",
    role: ""
  },
  {
    quote: "Working with the team was a turning point for my business. They guided me in developing a strong business concept that helped me win a grant. Their expertise, strategy, and support were outstanding.",
    author: "CEO, Lightning Artz",
    role: ""
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
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-foreground mb-6 min-h-[120px]">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                  {testimonial.role && <p className="text-muted-foreground">{testimonial.role}</p>}
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
