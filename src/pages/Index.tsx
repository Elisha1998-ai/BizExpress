import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Package, ArrowRight, Instagram, Facebook, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { Header } from "@/components/Header";
import { SMEToolkitModal } from "@/components/SMEToolkitModal";
import TestimonialsSection from "@/components/ui/testimonial-v2";
import { CallToAction } from "@/components/ui/cta-3";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "../Hero.jpg";
import cacImage from "@/assets/cac-registration.jpg";
import planningImage from "@/assets/business-planning-new.png";
import brandingImage from "@/assets/branding.jpg";
import socialMediaImage from "@/assets/social-media.jpg";
import adsImage from "@/assets/ads-management.jpg";
import contentImage from "@/assets/content-creation.jpg";
import consultationImage from "@/assets/consultation-meeting.jpg";
import img1 from "../img1.jpg";

const Index = () => {
  const [isToolkitModalOpen, setIsToolkitModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SMEToolkitModal open={isToolkitModalOpen} onOpenChange={setIsToolkitModalOpen} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-end pb-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay: transparent at the top, full dark at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>
        </div>
        <div className="relative mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12 z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-6 leading-[1.1] animate-fade-in text-white drop-shadow-2xl">
              Turn Your Small Business Into a Revenue Machine.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-10 max-w-xl leading-relaxed text-white/90 drop-shadow-lg font-medium">
              BizExpress gives small business owners the tools, strategies, and visibility they need to stand out, attract customers, and scale with confidence.
            </p>
            <Link to="/contact">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-semibold px-8 py-6 h-auto text-base">
                Let's Grow Your Business
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Partners/Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Businesses That Partner With Us</h2>
            <p className="text-lg text-muted-foreground">We grow together, not just serve.</p>
          </div>
          <PartnerCarousel />
        </div>
      </section>



      {/* Why Choose BizExpress Section */}
      <section className="py-24 bg-[#f1f1f1]">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12">
          {/* Standardized Header */}
          <div className="text-left mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Why Choose BizExpress?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Small businesses don't just need to exist — they need to be visible, profitable, and credible. That's where we come in.
            </p>
          </div>
          {/* Main Content Card */}
          <div className="bg-background rounded-[10px] overflow-hidden border border-border/50 transition-all duration-500">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Column: Accordion */}
              <div className="flex-1 p-8 sm:p-12 lg:p-14 flex flex-col justify-center bg-background">
                <Accordion type="single" defaultValue="item-0" className="w-full space-y-3">
                  {[
                    {
                      title: "Social Media Management",
                      description: "Build a strong online presence and engage your audience with data-driven social strategies that convert followers into customers."
                    },
                    {
                      title: "Business Planning",
                      description: "Actionable roadmaps for real growth, not theory. We help you map out your path to profitability and scale."
                    },
                    {
                      title: "Ads Management",
                      description: "Drive targeted traffic, capture high-quality leads, and convert sales through optimized ad campaigns across multiple platforms."
                    },
                    {
                      title: "Branding & Content",
                      description: "Make your business unforgettable. We create compelling visual identities and content that resonates with your ideal audience."
                    },
                    {
                      title: "CAC Registration",
                      description: "Get legally recognized and positioned for opportunities. We handle the paperwork so you can focus on building your empire."
                    },
                    {
                      title: "Business Consultation",
                      description: "Expert guidance to help you make smarter, faster business decisions. Gain the clarity you need to move your business forward."
                    }
                  ].map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-[#f5f5f5] rounded-xl px-6 transition-all">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-lg font-semibold text-left">{item.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right Column: Image */}
              <div className="flex-1 relative min-h-[350px] lg:min-h-full overflow-hidden">
                <img 
                  src={img1} 
                  alt="BizExpress Growth" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 h-auto font-semibold rounded-full transition-all group"
              onClick={() => setIsToolkitModalOpen(true)}
            >
              Download Our Free SME Toolkit
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-accent/30 hidden">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12">
          <div className="text-left mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 text-foreground">Businesses That Partner With Us</h2>
            <p className="text-lg text-muted-foreground">We grow together, not just serve.</p>
          </div>
          <PartnerCarousel />
        </div>
      </section>

      {/* Services Section */}
      <GalleryHoverCarousel />

      {/* How We Help Section */}
      <section id="how-we-help" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">How We Help You Win</h2>
            <p className="text-xl text-primary font-semibold mb-6">Visibility. Growth. Structure.</p>
            <p className="text-lg text-muted-foreground max-w-3xl">
              BizExpress is a one-stop partner that takes you from idea → brand → growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Build trust with proper legal registration</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Get discovered through consistent branding and marketing</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Attract the right customers with content and ads that convert</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Make smarter decisions with expert consultations</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium text-sm">Scale faster with tailored business plans</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CallToAction />

      {/* Footer */}
      <MinimalFooter />
    </div>
  );
};

export default Index;
