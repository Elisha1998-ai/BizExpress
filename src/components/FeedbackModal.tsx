import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    toast({
      title: "Thank you for your feedback! 🎉",
      description: "We appreciate you taking the time to share your thoughts.",
    });
    setName("");
    setEmail("");
    setMessage("");
    setRating(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Give feedback"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Modal overlay + content */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md animate-scale-in overflow-hidden">
            {/* Header accent */}
            <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />

            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Share Your Feedback</h3>
                  <p className="text-sm text-muted-foreground">We'd love to hear from you</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Rating */}
              <div className="mb-5">
                <p className="text-sm font-medium text-foreground mb-2">How's your experience?</p>
                <div className="flex gap-2">
                  {["😞", "😐", "🙂", "😊", "🤩"].map((emoji, i) => (
                    <button
                      key={i}
                      onClick={() => setRating(i)}
                      className={`text-2xl p-2 rounded-xl transition-all duration-200 ${
                        rating === i
                          ? "bg-primary/15 scale-110 ring-2 ring-primary/30"
                          : "hover:bg-muted hover:scale-105"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl"
                  />
                  <Input
                    placeholder="Email (optional)"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <Textarea
                  placeholder="Tell us what you think..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl min-h-[100px] resize-none"
                  required
                />
                <Button
                  type="submit"
                  className="w-full rounded-xl gap-2 font-semibold"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                  Send Feedback
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackModal;
