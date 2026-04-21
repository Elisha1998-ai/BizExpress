import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowLeft, Check, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { useState } from "react";
import { contactService } from "@/lib/contactService";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: "cac", label: "CAC Registration" },
    { value: "planning", label: "Business Planning" },
    { value: "branding", label: "Branding & Strategy" },
    { value: "content", label: "Content Creation" },
    { value: "social", label: "Social Media Management" },
    { value: "ads", label: "Ads Management" },
    { value: "consultation", label: "Business Consultation" },
    { value: "tools", label: "SME Tools & Resources" },
  ];

  const toggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await contactService.submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        services: selectedServices,
        message: formData.message
      });
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedServices([]);
      
      // Also open email client as backup
      window.location.href = `mailto:bizxpressng@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      console.error("Error code:", error?.code);
      console.error("Error message:", error?.message);
      toast.error(`Failed to send message: ${error?.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto pt-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-foreground">
            Contact Us
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Ready to build your empire? Get in touch with us today
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      required 
                      className="mt-2"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+234 xxx xxx xxxx" 
                      className="mt-2"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleService(option.value)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                            selectedServices.includes(option.value)
                              ? "border-primary bg-primary/5 text-primary shadow-sm"
                              : "border-input bg-background text-muted-foreground hover:border-primary/50 hover:bg-accent/50"
                          }`}
                        >
                          <span>{option.label}</span>
                          {selectedServices.includes(option.value) && (
                            <Check className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
                          )}
                        </button>
                      ))}
                    </div>
                    {selectedServices.length > 0 && (
                      <input type="hidden" name="services" value={selectedServices.join(", ")} />
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business needs..." 
                      rows={5}
                      required 
                      className="mt-2"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-foreground">Book Consultation</h3>
                      <p className="text-muted-foreground font-semibold">Email Us</p>
                      <p className="text-muted-foreground">
                        <a href="mailto:bizxpressng@gmail.com" className="hover:text-primary transition-colors">
                          bizxpressng@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">08050662704</p>
                      <p className="text-muted-foreground">0201 330 9507</p>
                      <p className="text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">
                        No. 11 Frank Alamu Street, Ashi Bodija, Ibadan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default Contact;
