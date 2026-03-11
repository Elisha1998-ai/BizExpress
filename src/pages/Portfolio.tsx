import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import clientCocomillea from "@/assets/client-cocomillea.png";
import clientElitetidy from "@/assets/client-elitetidy-logo.jpg";
import clientLightningArtz from "@/assets/client-lightningartz-logo.jpg";
import clientPlanPadi from "@/assets/client-planpadi.jpg";
import clientTasteOfLagos from "@/assets/client-tasteoflagos.jpg";
import clientWaitingRoom from "@/assets/client-waitingroom.jpg";
import clientODClothings from "@/assets/client-odclothings.jpg";

import tasteOfLagosBefore from "@/assets/tasteoflagos-before.png";
import tasteOfLagosAfter from "@/assets/tasteoflagos-after.png";
import goldnliliesBefore from "@/assets/goldnlilies-before.png";
import goldnliliesAfter from "@/assets/goldnlilies-after.png";

interface Project {
  name: string;
  image: string;
  industry: string;
  services: string[];
  description: string;
  results?: { label: string; before: string; after: string }[];
  beforeAfterImages?: { before: string; after: string; beforeLabel?: string; afterLabel?: string };
}

const businessPlanProjects: Project[] = [
  {
    name: "Cocomilla Cakery",
    image: clientCocomillea,
    industry: "Cake & Confectionery",
    services: ["Business Planning"],
    description:
      "Developed a comprehensive business plan for Cocomilla Cakery, outlining growth strategies, financial projections, and a clear roadmap to scale their cake business.",
    results: [
      { label: "Business Structure", before: "Informal", after: "Fully documented" },
      { label: "Revenue Target", before: "No projections", after: "12-month forecast" },
      { label: "Growth Roadmap", before: "None", after: "Clear milestones" },
    ],
  },
  {
    name: "EliteTidy",
    image: clientElitetidy,
    industry: "Cleaning Services",
    services: ["Business Planning"],
    description:
      "Created a structured business plan for EliteTidy, helping them formalize operations, set pricing strategies, and plan for sustainable growth in the cleaning services industry.",
    results: [
      { label: "Operations", before: "Unstructured", after: "Fully planned" },
      { label: "Pricing Strategy", before: "Ad-hoc", after: "Market-researched" },
      { label: "Business Model", before: "Informal", after: "Investor-ready" },
    ],
  },
  {
    name: "Lightning Artz",
    image: clientLightningArtz,
    industry: "Creative & Design",
    services: ["Business Planning"],
    description:
      "Partnered with Lightning Artz to build a solid business plan, defining their creative brand positioning, target market, and financial strategy to attract high-value clients.",
    results: [
      { label: "Brand Positioning", before: "Unclear", after: "Well-defined" },
      { label: "Target Market", before: "Broad", after: "Focused segments" },
      { label: "Financial Plan", before: "None", after: "Comprehensive" },
    ],
  },
];

const socialMediaProjects: Project[] = [
  {
    name: "Gold N' Lilies (Plan Padi)",
    image: clientPlanPadi,
    industry: "Event Planning & Vendor Sourcing",
    services: ["Social Media Management"],
    description:
      "Managed the social media presence for Gold N' Lilies, running paid ad campaigns and creating engaging content that grew their follower base and increased interactions significantly.",
    beforeAfterImages: {
      before: goldnliliesBefore,
      after: goldnliliesAfter,
      beforeLabel: "Before We Joined",
      afterLabel: "After Our Management",
    },
  },
  {
    name: "Taste Of Lagos",
    image: clientTasteOfLagos,
    industry: "Food & Hospitality",
    services: ["Social Media Management"],
    description:
      "Took over Taste Of Lagos' Instagram, transforming it from a page with limited reach and minimal engagement into a growing brand with consistent content strategy and impressive growth metrics.",
    beforeAfterImages: {
      before: tasteOfLagosBefore,
      after: tasteOfLagosAfter,
      beforeLabel: "Before We Joined the Brand",
      afterLabel: "After Our Management",
    },
  },
  {
    name: "The Waiting Room Podcast",
    image: clientWaitingRoom,
    industry: "Media & Entertainment",
    services: ["Social Media Management"],
    description:
      "Managed social media for The Waiting Room Podcast, building their online audience through strategic content scheduling, engaging visuals, and community interaction.",
  },
  {
    name: "OD Clothings",
    image: clientODClothings,
    industry: "Fashion & Apparel",
    services: ["Social Media Management"],
    description:
      "Handled OD Clothings' social media presence, creating fashion-forward content, running targeted campaigns, and growing their brand visibility across platforms.",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <div
    className={`flex flex-col ${
      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
    } gap-8 lg:gap-12 items-center`}
  >
    {/* Image */}
    <div className="w-full lg:w-1/2">
      <div className="relative rounded-2xl overflow-hidden shadow-xl group bg-muted flex items-center justify-center">
        <img
          src={project.image}
          alt={`${project.name} logo`}
          className="w-full h-72 sm:h-96 object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="text-sm font-medium">
            {project.industry}
          </Badge>
        </div>
      </div>
    </div>

    {/* Details */}
    <div className="w-full lg:w-1/2 space-y-5">
      <h3 className="text-3xl font-bold text-foreground">{project.name}</h3>
      <div className="flex flex-wrap gap-2">
        {project.services.map((service) => (
          <Badge key={service} variant="outline" className="border-primary/40 text-primary">
            {service}
          </Badge>
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

      {/* Before / After Metrics */}
      {project.results && (
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
      )}

      {/* Before / After Screenshots */}
      {project.beforeAfterImages && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-destructive text-center">
                {project.beforeAfterImages.beforeLabel || "Before"}
              </p>
              <img
                src={project.beforeAfterImages.before}
                alt={`${project.name} before`}
                className="rounded-lg border border-border shadow-sm w-full"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary text-center">
                {project.beforeAfterImages.afterLabel || "After"}
              </p>
              <img
                src={project.beforeAfterImages.after}
                alt={`${project.name} after`}
                className="rounded-lg border border-border shadow-sm w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

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

      {/* Business Planning Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-2">Business Planning</h2>
          <p className="text-muted-foreground mb-12">
            We crafted detailed business plans to set these brands up for success.
          </p>
          <div className="space-y-20">
            {businessPlanProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-2">Social Media Management</h2>
          <p className="text-muted-foreground mb-12">
            We managed and grew these brands' social media presence with real, measurable results.
          </p>
          <div className="space-y-20">
            {socialMediaProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
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
