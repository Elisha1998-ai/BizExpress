import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
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
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+234 xxx xxx xxxx" 
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select 
                      id="service" 
                      className="w-full mt-2 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="cac">CAC Registration</option>
                      <option value="planning">Business Planning</option>
                      <option value="branding">Branding & Strategy</option>
                      <option value="content">Content Creation</option>
                      <option value="social">Social Media Management</option>
                      <option value="tools">SME Tools & Resources</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business needs..." 
                      rows={5}
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
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
                      <h3 className="font-bold text-lg mb-1 text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">info@bizexpress.com</p>
                      <p className="text-muted-foreground">support@bizexpress.com</p>
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
                        123 Business District<br />
                        Lagos, Nigeria
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
    </div>
  );
};

export default Contact;
