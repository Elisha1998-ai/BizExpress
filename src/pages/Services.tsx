import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { SMEToolkitModal } from "@/components/SMEToolkitModal";
import { useState } from "react";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { motion } from "framer-motion";
import cacImage from "@/assets/cac logo.jpg";
import planningImage from "@/assets/business-planning-new.png";
import brandingImage from "@/assets/branding.jpg";
import socialMediaImage from "@/assets/social-media.jpg";
import adsImage from "@/assets/ads-management.jpg";
import contentImage from "@/assets/content-creation.jpg";
import consultationImage from "@/assets/consultation-meeting.jpg";
import img12 from "../img12.jpg";
import heroImage from "../img15.jpg";

const heroImg = heroImage;

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

      {/* Hero Section - Redesigned to match About page */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Our Services" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12 z-10 pb-20">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-white border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Target className="w-3 h-3 text-primary" />
              Our Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]"
            >
              Everything Your Business Needs to Dominate.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed font-light"
            >
              From legal recognition to strategic growth, we provide the tools and expertise to build your empire.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden hover:shadow-xl transition-shadow border-none bg-[#f9f9f9]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-8 px-8 pb-10">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3 text-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-base font-medium text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20 space-y-8">
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 h-auto font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-full"
              onClick={() => setIsToolkitModalOpen(true)}
            >
              Download Our Free SME Toolkit
            </Button>
            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base sm:text-lg px-8 py-5 sm:px-10 sm:py-6 h-auto font-semibold rounded-full shadow-lg shadow-primary/20">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MinimalFooter />
    </div>
  );
};

export default Services;
