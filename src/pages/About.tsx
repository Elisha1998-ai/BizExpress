import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-foreground">
            About BizExpress
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Empowering Nigerian entrepreneurs to build lasting business empires
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-foreground">
              BizExpress was founded with a simple mission: to remove the barriers that prevent 
              talented entrepreneurs from turning their ideas into thriving businesses. We understand 
              the unique challenges of the Nigerian business landscape, and we've built our services 
              to address them directly.
            </p>
            <p className="text-foreground">
              From fast-track CAC registration to comprehensive business planning and powerful branding 
              strategies, we provide the complete toolkit entrepreneurs need to launch, scale, and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join hundreds of successful entrepreneurs who trust BizExpress
            </p>
            <a href="/#services">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Explore Our Services
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
