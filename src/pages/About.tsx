import { Header } from "@/components/Header";
import { MinimalFooter } from "@/components/ui/minimal-footer";
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
import team1 from "@/assets/ads-management.jpg";
import team2 from "@/assets/branding.jpg";
import team3 from "@/assets/social-media.jpg";
import team4 from "@/assets/content-creation.jpg";
import team5 from "@/assets/consultation-meeting.jpg";
import img12 from "../img12.jpg";
import img13 from "../img13.jpg";
const heroImg = img12;


const teamMembers = [
  {
    name: "Christy Omolayo",
    role: "Founder & Lead Strategist",
    image: team1,
    bio: "Visionary leader with 10+ years experience in business development and scaling SMEs across Africa."
  },
  {
    name: "Daniel Adeyemi",
    role: "Legal & CAC Specialist",
    image: team2,
    bio: "Expert in Nigerian corporate law, ensuring seamless registration and compliance for hundreds of businesses."
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: team3,
    bio: "Branding maestro focused on creating unforgettable visual identities that resonate with global audiences."
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    image: team4,
    bio: "Full-stack developer focused on building high-performance websites and automated business solutions."
  },
  {
    name: "Aisha Bello",
    role: "Content Strategist",
    image: team5,
    bio: "Storyteller extraordinaire helping brands connect with their target audience through compelling content."
  },
  {
    name: "David Adeleke",
    role: "Financial Strategy",
    image: team1,
    bio: "Expert in financial modeling, funding acquisition, and corporate structuring."
  },
  {
    name: "Chioma Okoli",
    role: "Operations Manager",
    image: team2,
    bio: "Master of process optimization, ensuring efficient service delivery for all clients."
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
              Legal experts, strategic advisors, and creative thinkers dedicated to your success.
            </p>
          </div>
        </div>

        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6">
          <Carousel 
            opts={{ 
              align: "start",
              loop: false,
              dragFree: true
            }} 
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group">
                    <div className="relative mb-6 overflow-hidden rounded-[15px] aspect-[4/3] bg-muted transition-all duration-500">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="text-left space-y-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed pr-4">{member.bio}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
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
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 text-center space-y-8">
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
