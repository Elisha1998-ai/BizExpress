import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What services does BizExpress offer?",
      answer: "BizExpress offers a comprehensive suite of services including CAC Registration, Business Planning, Branding & Strategy, Content Creation, Ads Management, and Business Consultation. We provide end-to-end support for small businesses looking to establish, grow, and scale their operations."
    },
    {
      question: "How long does CAC registration take?",
      answer: "With BizExpress, CAC registration typically takes just a few days, not months. We handle all the paperwork and processes to ensure your business is legally recognized quickly and efficiently."
    },
    {
      question: "Do you work with businesses in specific industries?",
      answer: "We work with businesses across various sectors including Real Estate, Fashion, Food & Beverage, NGOs, Technology, Retail, and more. Our services are tailored to meet the unique needs of each industry."
    },
    {
      question: "What is included in your business planning service?",
      answer: "Our business planning service includes feasibility studies, financial projections, market research, pitch deck creation, and growth strategies. We help transform your ideas into scalable, investor-ready businesses."
    },
    {
      question: "How can I book a consultation?",
      answer: "You can book a consultation by clicking the 'Book Consultation' button in the header or by visiting our Contact Us page. We'll schedule a session to discuss your business needs and how we can help you achieve your goals."
    },
    {
      question: "What makes BizExpress different from other business consultancies?",
      answer: "BizExpress focuses specifically on small businesses and SMEs in Nigeria. We provide practical, actionable solutions rather than just theory. Our approach combines legal registration, strategic planning, branding, and marketing to give you comprehensive support at every stage of your business journey."
    },
    {
      question: "Do you offer ongoing support after initial setup?",
      answer: "Yes! We believe in growing together with our clients. Beyond initial setup and registration, we offer ongoing consultation, marketing support, and strategic guidance to ensure your business continues to thrive."
    },
    {
      question: "What is the SME Toolkit?",
      answer: "Our free SME Toolkit includes essential resources like pitch deck templates, accounting spreadsheets, and marketing playbooks designed to help entrepreneurs kickstart and manage their businesses effectively."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies depending on the specific services you need. We offer customized packages tailored to your business requirements and budget. Contact us for a detailed quote based on your needs."
    },
    {
      question: "Can you help with social media management?",
      answer: "Absolutely! Our social media management service helps you build a strong online presence, engage your audience, and drive business growth through strategic content and consistent brand messaging across platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about BizExpress services and how we can help grow your business.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            We're here to help! Reach out to us for personalized assistance.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-6 text-base"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
};

export default FAQs;