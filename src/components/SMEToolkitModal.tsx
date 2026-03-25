import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface SMEToolkitModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(15),
  business: z.string().trim().min(1, { message: "Business name is required" }).max(100),
});

export const SMEToolkitModal = ({ open, onOpenChange }: SMEToolkitModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = formSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Send user information via email
    const emailBody = `
New SME Toolkit Download Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business: ${formData.business}

Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:bizxpressng@gmail.com?subject=SME Toolkit Download Request&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    // Open download link
    setTimeout(() => {
      window.open("https://drive.google.com/file/d/1VCk4Do6QQzXFJ4hTJDrtXzO07fORuSXA/view?usp=sharing", "_blank");
    }, 500);
    
    toast({
      title: "Success!",
      description: "Your download should start shortly. Thank you for your interest!",
    });

    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", business: "" });
    setErrors({});
    setHasWatchedVideo(false);
    onOpenChange(false);
  };

  const handleVideoPlay = () => {
    setHasWatchedVideo(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Download Our Free SME Toolkit</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-2">
          {/* Instagram Video Embed */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-2 text-center">Watch This First</h3>
            <div className="relative w-full" style={{ paddingBottom: "100%" }}>
              <iframe
                src="https://www.instagram.com/p/DJ4CDCDIn49/embed"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                scrolling="no"
                onLoad={handleVideoPlay}
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">Fill in Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+234 xxx xxx xxxx"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="business">Business Name *</Label>
                <Input
                  id="business"
                  type="text"
                  value={formData.business}
                  onChange={(e) => handleInputChange("business", e.target.value)}
                  placeholder="Your business name"
                  className={errors.business ? "border-destructive" : ""}
                />
                {errors.business && (
                  <p className="text-sm text-destructive mt-1">{errors.business}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full text-lg py-6"
                disabled={!hasWatchedVideo}
              >
                {hasWatchedVideo ? "Download Free SME Toolkit" : "Please watch the video first"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
