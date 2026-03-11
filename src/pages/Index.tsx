import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Package, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { Header } from "@/components/Header";
import { SMEToolkitModal } from "@/components/SMEToolkitModal";
import heroImage from "@/assets/hero-business.jpg";

const Index = () => {
  const [isToolkitModalOpen, setIsToolkitModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SMEToolkitModal open={isToolkitModalOpen} onOpenChange={setIsToolkitModalOpen} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional African entrepreneur" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center py-32 px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in text-white drop-shadow-lg">
            Turn Your Small Business Into a Revenue Machine.
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90 drop-shadow-md">
            BizExpress gives small business owners the tools, strategies, and visibility they need to stand out, attract customers, and scale with confidence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all">
              Let's Grow Your Business
            </Button>
          </Link>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Why Choose BizExpress?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Small businesses don't just need to exist — they need to be visible, profitable, and credible. That's where we come in.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Social Media Management</h3>
                <p className="text-muted-foreground">Build a strong online presence and engage your audience.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Business Planning</h3>
                <p className="text-muted-foreground">Actionable roadmaps for real growth, not theory.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Ads Management</h3>
                <p className="text-muted-foreground">Drive traffic, capture leads, and convert sales.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Package className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Branding & Content Creation</h3>
                <p className="text-muted-foreground">Make your business unforgettable.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">CAC Registration</h3>
                <p className="text-muted-foreground">Get legally recognized and positioned for opportunities.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Business Consultation</h3>
                <p className="text-muted-foreground">Expert guidance to help you make smarter, faster business decisions.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setIsToolkitModalOpen(true)}
            >
              Download Our Free SME Toolkit
            </Button>
          </div>
        </div>
      </section>



      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Real results from real businesses</p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgMGgydi0yaC0ydjJ6bS0yLTJoMnYyaC0ydi0yem0wIDBoLTJ2Mmgydi0yem0tMiAyaDJ2MmgtMnYtMnptMCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready To Turn Your Business Into A Multi-Million Empire?
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Don't just start a business. Plan first. Start smart. Start with BizExpress.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
              Book For Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li><a href="https://www.instagram.com/p/DJ4CDCDIn49/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="/faqs" className="hover:text-primary transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Phone: <a href="tel:08050663704" className="hover:text-primary transition-colors">08050663704</a></li>
                <li>Email: <a href="mailto:bizxpressng@gmail.com" className="hover:text-primary transition-colors">bizxpressng@gmail.com</a></li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/bizexpress.ng/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://web.facebook.com/people/BizExpress-NG/61573904937574/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Free Resources</h3>
              <p className="text-muted-foreground mb-3">Download our Free SME Toolkit to kickstart your journey.</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                onClick={() => setIsToolkitModalOpen(true)}
              >
                Download Free Toolkit
              </Button>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 BizExpress. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
