import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, FileText, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

import clientCocomilla from "@/assets/client-cocomilla.jpg";
import clientElitetidy from "@/assets/client-elitetidy-logo.jpg";
import clientLightningArtz from "@/assets/client-lightningartz-logo.jpg";
import clientPlanPadi from "@/assets/client-planpadi.jpg";
import clientTasteOfLagos from "@/assets/client-tasteoflagos.jpg";
import clientWaitingRoom from "@/assets/client-waitingroom.jpg";
import clientODClothings from "@/assets/client-odclothings.jpg";
import waitingRoomStats from "@/assets/waitingroom-stats.png";

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
  statsImage?: string;
}

const businessPlanProjects: Project[] = [
  {
    name: "Cocomilla Cakery",
    image: clientCocomilla,
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
    name: "The Waiting Room Podcast",
    image: clientWaitingRoom,
    industry: "Media & Entertainment",
    services: ["Social Media Management"],
    description:
      "Managed social media for The Waiting Room Podcast, building their online audience through strategic content scheduling, engaging visuals, and community interaction that delivered real viewership growth.",
    statsImage: waitingRoomStats,
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

const ProjectCard = ({ project, index, variant = "default" }: { project: Project; index: number; variant?: string }) => (
  <div
    className={`flex flex-col ${
      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
    } gap-8 lg:gap-14 items-start`}
  >
    {/* Image */}
    <div className="w-full lg:w-5/12 sticky top-24">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-card border border-border">
        <img
          src={project.image}
          alt={`${project.name}`}
          className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm text-xs font-medium px-3 py-1">
            {project.industry}
          </Badge>
        </div>
      </div>
    </div>

    {/* Details */}
    <div className="w-full lg:w-7/12 space-y-6">
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{project.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services.map((service) => (
            <Badge key={service} variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs px-3 py-1">
              {service}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed text-[15px]">{project.description}</p>
      </div>

      {/* Before / After Metrics */}
      {project.results && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.results.map((r) => (
            <Card key={r.label} className="border border-primary/15 bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {r.label}
                </p>
                <p className="text-xs text-muted-foreground/70 line-through">{r.before}</p>
                <p className="text-base font-bold text-primary">{r.after}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Before / After Screenshots */}
      {project.beforeAfterImages && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <p className="text-xs font-bold uppercase tracking-wider text-destructive">
                  {project.beforeAfterImages.beforeLabel || "Before"}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-destructive/20 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={project.beforeAfterImages.before}
                  alt={`${project.name} before`}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.beforeAfterImages.afterLabel || "After"}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={project.beforeAfterImages.after}
                  alt={`${project.name} after`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Image */}
      {project.statsImage && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Growth Results</p>
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg max-w-xs">
            <img
              src={project.statsImage}
              alt={`${project.name} stats`}
              className="w-full object-cover"
            />
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8 text-sm font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-5 tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Real businesses. Real transformations. See how BizExpress has helped brands grow from the ground up.
          </p>
          <div className="flex gap-6 mt-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4 text-primary" />
              <span><strong className="text-foreground">3</strong> Business Plans</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Share2 className="h-4 w-4 text-primary" />
              <span><strong className="text-foreground">4</strong> Social Media Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Planning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Business Planning</h2>
          </div>
          <p className="text-muted-foreground mb-14 max-w-xl">
            We crafted detailed business plans to set these brands up for success.
          </p>
          <div className="space-y-24">
            {businessPlanProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Social Media Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Share2 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Social Media Management</h2>
          </div>
          <p className="text-muted-foreground mb-14 max-w-xl">
            We managed and grew these brands' social media presence with real, measurable results.
          </p>
          <div className="space-y-24">
            {socialMediaProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-5xl font-bold mb-5 tracking-tight">Want Results Like These?</h2>
          <p className="text-lg opacity-90 mb-10">
            Let's discuss how BizExpress can transform your business too.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
