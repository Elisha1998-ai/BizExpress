import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Package, ArrowRight } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { Header } from "@/components/Header";
import heroImage from "@/assets/hero-growth.jpg";
import cacImage from "@/assets/cac-registration.jpg";
import planningImage from "@/assets/business-planning.jpg";
import brandingImage from "@/assets/branding.jpg";
import socialMediaImage from "@/assets/social-media.jpg";
import adsImage from "@/assets/ads-management.jpg";
import contentImage from "@/assets/content-creation.jpg";
import consultationImage from "@/assets/consultation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Small business transformation success" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center py-32 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in text-foreground">
            Turn Your Small Business Into a Revenue Machine.
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            BizExpress gives small business owners the tools, strategies, and visibility they need to stand out, attract customers, and scale with confidence.
          </p>
          <Button size="lg" className="text-lg px-10 py-7 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all">
            Let's Grow Your Business
          </Button>
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
                <p className="text-muted-foreground">
                  Build a strong online presence and engage your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Business Planning</h3>
                <p className="text-muted-foreground">
                  Actionable roadmaps for real growth, not theory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Ads Management</h3>
                <p className="text-muted-foreground">
                  Drive traffic, capture leads, and convert sales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Package className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Branding & Content Creation</h3>
                <p className="text-muted-foreground">
                  Make your business unforgettable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">CAC Registration</h3>
                <p className="text-muted-foreground">
                  Get legally recognized and positioned for opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Business Consultation</h3>
                <p className="text-muted-foreground">
                  Expert guidance to help you make smarter, faster business decisions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Download Our SME Toolkit
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Businesses that Partner with us</h2>
            <p className="text-lg text-muted-foreground">We grow together, not just serve.</p>
          </div>
          <PartnerCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={cacImage} 
                alt="CAC Registration Services" 
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">1. CAC Registration</h3>
                <p className="text-muted-foreground mb-4">
                  Get your business legally recognized in days, not months.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Business name registration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Limited Liability Company setup</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized sectors (Real Estate, Fashion, Food, NGOs, etc.)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={planningImage} 
                alt="Business Planning Services" 
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">2. Business Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Turn your ideas into scalable, investor-ready businesses.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Financial projections</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Market research</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pitch decks</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Growth strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={brandingImage} 
                alt="Branding and Strategy Services" 
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">3. Branding & Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Transform your business into a brand people can't ignore.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Logo & visual identity</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Brand storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Go-to-market strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={contentImage} 
                alt="Content Creation Services" 
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">4. Content Creation</h3>
                <p className="text-muted-foreground mb-4">
                  We craft content that sells, educates, and builds a connection with your audience.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Social media content</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Blog posts & articles</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Video & graphics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={adsImage} 
                alt="Ads Management Services" 
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">5. Ads Management</h3>
                <p className="text-muted-foreground mb-4">
                  Run targeted ad campaigns that get real results — more visibility, more leads, more sales.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Facebook & Instagram ads</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Google Ads campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Performance tracking & optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={consultationImage} 
                alt="Business Consultation Services" 
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">6. Business Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Personalized advice to solve challenges, unlock opportunities, and grow sustainably.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>One-on-one consultations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Problem-solving support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">How We Help You Win</h2>
            <p className="text-xl text-primary font-semibold mb-6">Visibility. Growth. Structure.</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              BizExpress is a one-stop partner that takes you from idea → brand → growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            <Card className="text-center border-2 border-primary/20 hover:border-primary transition-all md:col-span-2 lg:col-span-2">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Scale faster with business plans tailored to your market and industry</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Ambitious Small Business Owners</h3>
                <p className="text-muted-foreground">Ready to make their mark</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Entrepreneurs Ready to Launch</h3>
                <p className="text-muted-foreground">Taking the first step</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Growing SMEs</h3>
                <p className="text-muted-foreground">That need structure, visibility, and are ready to scale</p>
              </CardContent>
            </Card>
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
            Ready to Turn Your Business Into a Multi-million?
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Don't just start a business. Plan first. Start smart. Start with BizExpress.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-12 py-7 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            Partner With Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#faqs" className="hover:text-primary transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Phone: [Your Phone]</li>
                <li>Email: [Your Email]</li>
                <li>Social Media: [Handles]</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Free Resources</h3>
              <p className="text-muted-foreground mb-3">Download our Free SME Toolkit to kickstart your journey.</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
