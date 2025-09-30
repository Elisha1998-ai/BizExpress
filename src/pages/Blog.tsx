import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Steps to Successfully Register Your Business in Nigeria",
    excerpt: "Learn the essential steps to get your business officially registered with CAC and avoid common pitfalls.",
    date: "March 15, 2024",
    author: "BizExpress Team",
    category: "Registration"
  },
  {
    id: 2,
    title: "Building a Brand That Stands Out in the Nigerian Market",
    excerpt: "Discover proven strategies for creating a memorable brand identity that resonates with your target audience.",
    date: "March 10, 2024",
    author: "BizExpress Team",
    category: "Branding"
  },
  {
    id: 3,
    title: "How to Write a Business Plan That Attracts Investors",
    excerpt: "Master the art of creating compelling business plans that capture investor attention and secure funding.",
    date: "March 5, 2024",
    author: "BizExpress Team",
    category: "Business Planning"
  },
  {
    id: 4,
    title: "Essential Tools Every Nigerian SME Owner Needs",
    excerpt: "A comprehensive guide to the must-have digital tools and resources for managing your small business.",
    date: "February 28, 2024",
    author: "BizExpress Team",
    category: "Resources"
  },
  {
    id: 5,
    title: "Understanding Nigerian Business Compliance Requirements",
    excerpt: "Stay compliant and avoid penalties with this guide to essential business regulations and requirements.",
    date: "February 20, 2024",
    author: "BizExpress Team",
    category: "Compliance"
  },
  {
    id: 6,
    title: "Scaling Your Business: When and How to Grow",
    excerpt: "Learn the signs that indicate your business is ready to scale and the strategies to do it successfully.",
    date: "February 15, 2024",
    author: "BizExpress Team",
    category: "Growth"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-foreground">
            BizExpress Blog
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Insights, tips, and strategies for Nigerian entrepreneurs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:border-primary transition-colors cursor-pointer">
                <CardContent className="pt-6">
                  <div className="mb-3">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
