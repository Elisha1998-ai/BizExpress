import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Package, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Don't Just Build Businesses—<br />We Build Empires.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            From CAC registration to brand strategy, we give entrepreneurs the tools, structure, 
            and identity to launch and scale confidently.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
            Start Your Registration Today
          </Button>
        </div>
      </section>

      {/* Why BizExpress Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Why BizExpress?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">CAC Registration in Days</h3>
                <p className="text-muted-foreground">
                  Fast, hassle-free incorporation that gets you official in record time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Profitable Business Plans</h3>
                <p className="text-muted-foreground">
                  Blueprints that actually work in the Nigerian market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Branding That Demands Attention</h3>
                <p className="text-muted-foreground">
                  Build a brand people recognize and respect.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Package className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Tools That Save Time & Money</h3>
                <p className="text-muted-foreground">
                  Ready-to-use templates, kits, and resources for entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Free SME Toolkit
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Businesses That Partner With Us</h2>
          <p className="text-muted-foreground mb-8">We grow together, not just serve</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="h-20 flex items-center justify-center border border-border rounded-lg p-4">
              <span className="font-semibold text-foreground">Partner Logo</span>
            </div>
            <div className="h-20 flex items-center justify-center border border-border rounded-lg p-4">
              <span className="font-semibold text-foreground">Partner Logo</span>
            </div>
            <div className="h-20 flex items-center justify-center border border-border rounded-lg p-4">
              <span className="font-semibold text-foreground">Partner Logo</span>
            </div>
            <div className="h-20 flex items-center justify-center border border-border rounded-lg p-4">
              <span className="font-semibold text-foreground">Partner Logo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
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
                    <span>Specialized sectors (Oil & Gas, Real Estate, NGOs, etc.)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">2. Business Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Roadmaps designed to attract investors and generate revenue.
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
                    <span>Growth strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
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

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">4. SME Tools & Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Practical kits that simplify entrepreneurship.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Business pitch decks</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Accounting templates</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Marketing playbooks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Aspiring Entrepreneurs</h3>
                <p className="text-muted-foreground">Launching their first venture</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Growing SMEs</h3>
                <p className="text-muted-foreground">Ready to scale</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Established Businesses</h3>
                <p className="text-muted-foreground">Looking for rebranding or compliance upgrades</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Success Stories</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <p className="text-lg italic text-foreground mb-4">
                "BizExpress helped me register my company and refine my business plan in less than 2 weeks. 
                Today, I'm running a profitable venture with strong branding."
              </p>
              <p className="font-semibold text-primary">– Client Testimonial</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Build Your Empire?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Don't just start a business. Start strong. Start smart. Start with BizExpress.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
            Get Started Today
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
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Download Free SME Toolkit
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
