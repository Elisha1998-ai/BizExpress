import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SMEToolkitModal } from "@/components/SMEToolkitModal";
import { useState } from "react";
import cacImage from "@/assets/cac-registration.jpg";
import planningImage from "@/assets/business-planning-new.png";
import brandingImage from "@/assets/branding.jpg";
import socialMediaImage from "@/assets/social-media.jpg";
import adsImage from "@/assets/ads-management.jpg";
import contentImage from "@/assets/content-creation.jpg";
import consultationImage from "@/assets/consultation-meeting.jpg";

const services = [
  {
    title: "1. CAC Registration",
    image: cacImage,
    alt: "CAC Registration Services",
    description: "Get your business legally recognized in days, not months.",
    items: ["Business name registration", "Limited Liability Company setup", "Specialized sectors (Real Estate, Fashion, Food, NGOs, etc.)"],
  },
  {
    title: "2. Business Planning",
    image: planningImage,
    alt: "Business Planning Services",
    description: "Turn your ideas into scalable, investor-ready businesses.",
    items: ["Feasibility studies", "Financial projections", "Market research", "Pitch decks", "Growth strategies"],
  },
  {
    title: "3. Branding & Strategy",
    image: brandingImage,
    alt: "Branding and Strategy Services",
    description: "Transform your business into a brand people can't ignore.",
    items: ["Logo & visual identity", "Brand storytelling", "Go-to-market strategy"],
  },
  {
    title: "4. Content Creation",
    image: contentImage,
    alt: "Content Creation Services",
    description: "We craft content that sells, educates, and builds a connection with your audience.",
    items: ["Social media content", "Blog posts & articles", "Video & graphics"],
  },
  {
    title: "5. Ads Management",
    image: adsImage,
    alt: "Ads Management Services",
    description: "Run targeted ad campaigns that get real results — more visibility, more leads, more sales.",
    items: ["Facebook & Instagram ads", "Google Ads campaigns", "Performance tracking & optimization"],
  },
  {
    title: "6. Business Consultation",
    image: consultationImage,
    alt: "Business Consultation Services",
    description: "Personalized advice to solve challenges, unlock opportunities, and grow sustainably.",
    items: ["One-on-one consultations", "Strategic planning", "Problem-solving support"],
  },
  {
    title: "7. Social Media Management",
    image: socialMediaImage,
    alt: "Social Media Management Services",
    description: "Build a powerful online presence with consistent, engaging content across all platforms.",
    items: ["Platform strategy & scheduling", "Community engagement & growth", "Analytics & performance tracking"],
  },
];

const Services = () => {
  const [isToolkitModalOpen, setIsToolkitModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SMEToolkitModal open={isToolkitModalOpen} onOpenChange={setIsToolkitModalOpen} />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything your business needs to launch, grow, and dominate — all in one place.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-56 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 text-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 space-y-6">
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setIsToolkitModalOpen(true)}
            >
              Download Our Free SME Toolkit
            </Button>
            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base sm:text-lg px-8 py-6 h-auto font-semibold">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
