import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

import clientCocomilla from "@/assets/client-cocomilla.jpg";
import clientElitetidy from "@/assets/client-elitetidy-logo.jpg";
import clientLightningArtz from "@/assets/client-lightningartz-logo.jpg";
import clientPlanPadi from "@/assets/client-planpadi.jpg";
import clientTasteOfLagos from "@/assets/client-tasteoflagos.jpg";
import clientWaitingRoom from "@/assets/client-waitingroom.jpg";
import clientODClothings from "@/assets/client-odclothings.jpg";
import waitingRoomStats from "@/assets/waitingroom-stats.png";
import tasteOfLagosAfter from "@/assets/tasteoflagos-after.png";
import goldnliliesAfter from "@/assets/goldnlilies-after.png";

interface Project {
  name: string;
  image: string;
  industry: string;
  services: string[];
  description: string;
  results?: { label: string; before: string; after: string }[];
  resultImage?: string;
  resultImageLabel?: string;
  number: number;
}

const projects: Project[] = [
  {
    number: 1,
    name: "Taste Of Lagos",
    image: clientTasteOfLagos,
    industry: "Food & Hospitality",
    services: ["Social Media Management"],
    description:
      "Took over Taste of Lagos' Instagram and transformed it from a page with limited reach and minimal engagement into a growing brand with a consistent content strategy. Our efforts generated over 56,000 views, 2,000+ reach and engagement, gained 300 new followers, and helped increase revenue and in-store foot traffic by 20%.",
    resultImage: tasteOfLagosAfter,
    resultImageLabel: "Results & Growth",
  },
  {
    number: 2,
    name: "Gold N' Lilies (Plan Padi)",
    image: clientPlanPadi,
    industry: "Event Planning & Vendor Sourcing",
    services: ["Social Media Management"],
    description:
      "Managed the social media presence for Gold N' Lilies by creating engaging content and running targeted paid ad campaigns that significantly increased visibility and engagement. We grew the page from 0 to 500 followers, generated 100+ vendors and clients through a strategic Instagram commenting method, and achieved over 30,000 views and 3,000 engagements across all platforms.",
    resultImage: goldnliliesAfter,
    resultImageLabel: "Results & Growth",
  },
  {
    number: 3,
    name: "The Waiting Room Podcast",
    image: clientWaitingRoom,
    industry: "Media & Entertainment",
    services: ["Social Media Management"],
    description:
      "Managed social media for The Waiting Room Podcast by implementing strategic content scheduling, engaging visuals, and active community interaction to grow their online audience. These efforts increased their YouTube channel growth by 20% and boosted views and engagement across social media platforms by 20%.",
    resultImage: waitingRoomStats,
    resultImageLabel: "Growth Results",
  },
  {
    number: 4,
    name: "EliteTidy",
    image: clientElitetidy,
    industry: "Cleaning Services",
    services: ["Business Planning"],
    description:
      "Created a structured business plan for EliteTidy, helping them formalize operations, set pricing strategies, and plan for sustainable growth to launch their cleaning services business.",
    results: [
      { label: "Operations", before: "Unstructured", after: "Fully planned" },
      { label: "Pricing Strategy", before: "Ad-hoc", after: "Market-researched" },
      { label: "Business Model", before: "Informal", after: "Launch-ready" },
    ],
  },
  {
    number: 5,
    name: "OD Clothings",
    image: clientODClothings,
    industry: "Fashion & Apparel",
    services: ["Social Media Management"],
    description:
      "Handled OD Clothings' social media presence, creating fashion-forward content, running targeted campaigns, and growing their brand visibility across platforms.",
  },
  {
    number: 6,
    name: "Cocomilla Cakery",
    image: clientCocomilla,
    industry: "Cake & Confectionery",
    services: ["Business Planning"],
    description:
      "Developed a comprehensive business plan for Cocomilla Cakery, outlining growth strategies, financial projections, and a clear roadmap to scale their cake business — helping them secure a business grant.",
    results: [
      { label: "Business Structure", before: "Informal", after: "Fully documented" },
      { label: "Grant", before: "No application", after: "Grant secured ✅" },
      { label: "Growth Roadmap", before: "None", after: "Clear milestones" },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const isEven = project.number % 2 === 0;

  return (
    <div className="group relative">
      {/* Number accent */}
      <div className="absolute -left-4 sm:-left-8 top-0 text-[120px] font-black text-primary/[0.04] leading-none select-none pointer-events-none">
        {String(project.number).padStart(2, "0")}
      </div>

      <div
        className={`relative flex flex-col ${
          isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 lg:gap-16 items-start`}
      >
        {/* Image side */}
        <div className="w-full lg:w-5/12">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-white">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 sm:h-56 object-contain p-4"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 shadow-md">
                {project.industry}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="w-full lg:w-7/12 space-y-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">
                Project {String(project.number).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <Badge
                  key={service}
                  variant="outline"
                  className="border-primary/20 text-primary bg-primary/5 text-xs px-3 py-1.5 font-medium"
                >
                  {service}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground leading-[1.8] text-[15px]">
              {project.description}
            </p>
          </div>

          {/* Metric cards */}
          {project.results && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.results.map((r) => (
                <Card
                  key={r.label}
                  className="border border-border/60 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <CardContent className="p-4 text-center space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      {r.label}
                    </p>
                    <p className="text-xs text-muted-foreground/60 line-through">{r.before}</p>
                    <p className="text-sm font-bold text-primary">{r.after}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Result screenshot */}
          {project.resultImage && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.resultImageLabel || "Results"}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-white">
                <img
                  src={project.resultImage}
                  alt={`${project.name} results`}
                  className="w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-20 w-60 h-60 bg-accent/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto relative">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-10 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Work
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
            Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Real businesses. Real transformations. See how BizExpress has helped brands grow from the ground up.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary-foreground)/0.08),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-primary-foreground">
            Want Results Like These?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg mx-auto">
            Let's discuss how BizExpress can transform your business too.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
