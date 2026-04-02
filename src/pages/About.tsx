import { Header } from "@/components/Header";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import team1 from "@/assets/Testimony.jpeg";
import team2 from "@/assets/Tiana.jpeg";
import team3 from "@/assets/Moses.jpeg";
import team4 from "@/assets/Fred.jpeg";
import team5 from "@/assets/Ope.png";
import team6 from "@/assets/Ayomide.png";
import img12 from "../img12.jpg";
import img13 from "../img13.jpg";
const heroImg = img12;


const teamMembers = [
  {
    name: "Adedeji Adeyinka Wilfred",
    role: "Team Lead Graphic Designer",
    image: team4,
    bio: "I'm a dedicated Graphic Designer with four years of experience focused on creating designs, including logos, detailed brand packages, and strategic marketing assets that are not just aesthetically pleasing but aligned with brand objectives. My approach centers on clarity and effectiveness, coupled with a commitment to continuous learning and integrating the latest industry trends into every project."
  },
  {
    name: "Adepetun Opeyemi",
    role: "Marketing Strategist",
    image: team5,
    bio: "Adepetun Opeyemi is a growth-focused Marketing Strategist with more than six years of experience transforming business challenges into profitable opportunities. He has collaborated with a wide range of companies, including global brands to build marketing frameworks that strengthen brand identity, increase demand, and drive sustainable revenue growth. His approach combines sharp market insight, consumer psychology, and data-backed strategy, helping businesses stand out, scale up, and stay ahead."
  },
  {
    name: "Moses Adeleke",
    role: "Brand Strategist and Designer",
    image: team3,
    bio: "Moses Adeleke is a brand strategist and designer with over half a decade of experience and a faith-driven entrepreneur. He is passionate about helping businesses and organizations define and communicate their unique value proposition through cohesive and impactful branding. He takes a holistic, customer-centric view of branding and works with clients to understand their target audience, business goals, and brand values."
  },
  {
    name: "Christianah Olaniyi",
    role: "Project/Product Manager",
    image: team2,
    bio: "Christianah Olaniyi is a strategic and detail-driven Project/Product Manager who combines analytical thinking with a strong sense of user empathy. She's skilled at turning complex ideas into actionable roadmaps, aligning cross-functional teams, and driving products from concept to launch with clear business impact. Known for her structured approach and curiosity, she thrives in fast-paced environments, balancing innovation with execution to deliver results that matter."
  },
  {
    name: "Testimony Adeniji",
    role: "Social Media Marketing Lead",
    image: team1,
    bio: "A creative and data-driven social media strategist with over 3 years of experience in digital marketing, content creation, and brand growth. Passionate about helping brands build authentic online communities and drive measurable engagement through thoughtful storytelling and strategic campaigns."
  },
  {
    name: "John Ayomide Adetimiro",
    role: "Visual Designer",
    image: team6,
    bio: "A Visual Designer with 3yrs experience, I help brands and businesses stand out with clean, creative, and professional designs.\n\nLogos • Flyers • Branding • Social Media Designs"
  }
];

const faqs = [
  {
    question: "How long does a standard CAC registration take?",
    answer: "Our standard processing time for Business Name and Limited Liability Company (LTD) registration is 3-7 working days, subject to CAC server availability."
  },
  {
    question: "Can BizExpress help my established business scale?",
    answer: "Absolutely. While we love startups, we specialize in helping existing businesses structure for growth through advanced business planning, ads management, and market expansion strategies."
  },
  {
    question: "Is the SME Toolkit truly free?",
    answer: "Yes! Our mission is to empower entrepreneurs. The SME Toolkit is a completely free resource designed to give you a head start in structuring your business."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have successfully worked with businesses in Real Estate, Healthcare, Fashion, Food & Hospitality, Legal, and Tech. Our strategies are adaptable to any sector."
  },
  {
    question: "Do you offer post-registration support?",
    answer: "Yes, we provide continuous support including tax compliance, annual returns filing, and ongoing business consultation to keep your company in good standing."
  }
];

const AboutPage = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section - Redesigned to match Home page */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 sm:px-8 lg:px-12 z-10 pb-20">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-white border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Target className="w-3 h-3 text-primary" />
              Our Story
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]"
            >
              Building the Future of Nigerian Entrepreneurship.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed font-normal"
            >
              BizExpress was founded with a single, clear purpose: to bridge the gap between brilliant ideas and thriving, scalable business empires.
            </motion.p>

          </div>
        </div>
      </section>

      {/* Our Values / Mission */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="h-[500px] lg:h-[650px] w-full bg-muted rounded-[15px] overflow-hidden">
                <img 
                  src={img13} 
                  alt="Our Mission" 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
              </div>
              {/* Green square removed as requested */}
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                  Visibility. Growth. <br /> Structure. Reliable
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  We don't just provide services; we provide the foundation. Small businesses don't just need to exist — they need to be visible, profitable, and credible.
                </p>
              </div>
              
              <div className="grid gap-6">
                {[
                  "Helping SMEs achieve legal recognition through CAC.",
                  "Creating actionable roadmaps for real growth.",
                  "Driving targeted traffic that results in sales.",
                  "Building memorable brands that resonate globally."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <section className="py-24 bg-[#f9f9f9] overflow-hidden">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 mb-16">
          <div className="text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              The Minds Behind BizExpress
            </h2>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed">
              Strategic advisors, and creative thinkers dedicated to your success.
            </p>
          </div>
        </div>

        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
              containScroll: "trimSnaps"
            }} 
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, i) => {
                const isExpanded = expandedBio === i;
                const shouldTruncate = member.bio.length > 150;
                const displayBio = isExpanded ? member.bio : 
                  (shouldTruncate ? member.bio.substring(0, 150) + '...' : member.bio);
                
                return (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group">
                      <div className="relative mb-6 overflow-hidden rounded-[15px] aspect-[4/3] bg-muted transition-all duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className={`w-full h-full object-cover ${i === 2 ? 'object-top' : ''}`} 
                          style={i === 5 ? { objectPosition: 'center top' } : {}}
                        />
                      </div>
                      <div className="text-left space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed pr-4">
                          {displayBio}
                          {shouldTruncate && (
                            <button
                              onClick={() => setExpandedBio(isExpanded ? null : i)}
                              className="text-primary font-semibold hover:underline ml-1"
                            >
                              {isExpanded ? 'See less' : 'See more...'}
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Carousel Carets - Visible on all screens, positioned for mobile usability */}
            <div className="flex items-center justify-end gap-2 mt-8 md:hidden">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all" />
            </div>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <HelpCircle className="w-3 h-3" />
                Common Inquiries
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                Everything You Need to Know
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Got questions? We've got answers. If your question isn't covered here, feel free to reach out to our team.
              </p>
              <Button onClick={() => window.location.href="/contact"} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Support
              </Button>
            </div>
            
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-[#f9f9f9] rounded-2xl px-8 transition-all hover:bg-[#f1f1f1]">
                    <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 pr-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to give your business the <br /> BizExpress advantage?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
                onClick={() => window.location.href="/contact"}
                className="bg-white text-primary hover:bg-gray-100 px-6 py-2.5 h-auto text-sm font-semibold rounded-md shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Get Started Today
            </Button>
            <Button 
                variant="outline" 
                onClick={() => window.location.href="/about"}
                className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-2.5 h-auto text-sm font-semibold rounded-md transition-all hover:scale-105 active:scale-95"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <MinimalFooter />
    </div>
  );
};

export default AboutPage;
