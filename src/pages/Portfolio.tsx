import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import clientCocomillea from "@/assets/client-cocomillea.png";
import clientElitetidy from "@/assets/client-elitetidy.png";
import clientGoldnlilies from "@/assets/client-goldnlilies.png";
import clientLightningArtz from "@/assets/client-lightning-artz.png";

const projects = [
  {
    name: "CocoMillea",
    image: clientCocomillea,
    industry: "Beauty & Skincare",
    services: ["Branding & Strategy", "Social Media Management", "Content Creation"],
    description:
      "Transformed CocoMillea from a local skincare brand into a recognizable online presence with consistent branding, engaging content, and a social media strategy that tripled their engagement.",
    results: [
      { label: "Engagement", before: "~50 likes/post", after: "200+ likes/post" },
      { label: "Followers", before: "800", after: "5,000+" },
      { label: "Monthly Sales", before: "₦150K", after: "₦600K+" },
    ],
  },
  {
    name: "EliteTidy",
    image: clientElitetidy,
    industry: "Cleaning Services",
    services: ["CAC Registration", "Business Planning", "Ads Management"],
    description:
      "Helped EliteTidy become a legally registered business, developed a structured growth plan, and launched targeted ad campaigns that brought in a steady stream of corporate clients.",
    results: [
      { label: "Client Base", before: "5 clients/month", after: "25+ clients/month" },
      { label: "Revenue", before: "₦200K/month", after: "₦1.2M/month" },
      { label: "Ad ROI", before: "N/A", after: "4.5x return" },
    ],
  },
  {
    name: "Gold N' Lilies",
    image: clientGoldnlilies,
    industry: "Event Planning & Decor",
    services: ["Branding & Strategy", "Content Creation", "Social Media Management"],
    description:
      "Elevated Gold N' Lilies' brand identity with a premium visual strategy, professional content, and a social media presence that positioned them as a go-to event planning brand.",
    results: [
      { label: "Brand Perception", before: "Unknown", after: "Premium positioning" },
      { label: "Inquiries", before: "3/month", after: "15+/month" },
      { label: "Average Booking Value", before: "₦100K", after: "₦350K" },
    ],
  },
  {
    name: "Lightning Artz",
    image: clientLightningArtz,
    industry: "Creative & Design",
    services: ["Business Planning", "Branding & Strategy", "Ads Management"],
    description:
      "Partnered with Lightning Artz to build a solid business foundation, refine their creative brand, and run ad campaigns that attracted high-value clients consistently.",
    results: [
      { label: "Client Quality", before: "Small gigs", after: "Corporate contracts" },
      { label: "Monthly Revenue", before: "₦80K", after: "₦500K+" },
      { label: "Online Visibility", before: "Minimal", after: "Top search results" },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real businesses. Real transformations. See how BizExpress has helped brands grow from the ground up.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    className="w-full h-72 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="text-sm font-medium">
                      {project.industry}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2 space-y-5">
                <h2 className="text-3xl font-bold text-foreground">{project.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Badge key={service} variant="outline" className="border-primary/40 text-primary">
                      {service}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Before / After */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.results.map((r) => (
                    <Card key={r.label} className="border border-primary/20">
                      <CardContent className="p-4 text-center space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {r.label}
                        </p>
                        <p className="text-sm text-muted-foreground line-through">{r.before}</p>
                        <p className="text-lg font-bold text-primary">{r.after}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-lg opacity-90 mb-8">
            Let's discuss how BizExpress can transform your business too.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 h-auto font-semibold">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
