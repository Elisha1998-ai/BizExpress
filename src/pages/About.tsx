import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, CheckCircle, TrendingUp, Package, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">About BizExpress</h1>
          <p className="text-xl text-muted-foreground">
            Empowering Nigerian entrepreneurs to build lasting business empires
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Writeup */}
          <div className="prose prose-lg max-w-none mb-16 space-y-4">
            <p className="text-foreground text-lg leading-relaxed">
              BizExpress was founded with a simple mission: to remove the barriers that prevent
              talented entrepreneurs from turning their ideas into thriving businesses. We understand
              the unique challenges of the Nigerian business landscape, and we've built our services
              to address them directly.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              From fast-track CAC registration to comprehensive business planning, powerful branding
              strategies, and social media management — we provide the complete toolkit entrepreneurs
              need to launch, scale, and succeed. We don't just serve businesses; we partner with them
              to create lasting impact and sustainable growth.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Whether you're just starting out or looking to take your existing business to the next level,
              BizExpress is your one-stop partner for visibility, credibility, and profitability.
            </p>
          </div>

          {/* Mission, Team, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower every entrepreneur with the tools and knowledge to build successful businesses
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Our Team</h3>
                <p className="text-muted-foreground">
                  Experienced business consultants, legal experts, and branding specialists
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3 text-foreground">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, and commitment to your entrepreneurial success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How We Help You Win */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl mb-16">
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

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join hundreds of successful entrepreneurs who trust BizExpress
            </p>
            <Link to="/services">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
