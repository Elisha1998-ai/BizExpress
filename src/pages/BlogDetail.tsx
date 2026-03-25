import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Loader2, Tag } from "lucide-react";
import { blogService, BlogPost } from "@/lib/blogService";
import { MinimalFooter } from "@/components/ui/minimal-footer";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const fetchedPost = await blogService.getPostById(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="text-center py-40">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[85%] px-6 sm:px-8 lg:px-12 py-16">
        <Button
          variant="ghost"
          onClick={() => navigate("/blog")}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Button>

        <article className="max-w-4xl mx-auto">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-[2rem] mb-8 shadow-lg"
            />
          )}

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
              <Tag className="h-4 w-4 mr-2" />
              {post.category}
            </span>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-1.5" />
              {post.date}
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <User className="h-4 w-4 mr-1.5" />
              {post.author}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-foreground leading-tight">
            {post.title}
          </h1>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6 
              [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:mx-auto [&_img]:my-8 
              [&_iframe]:rounded-2xl [&_iframe]:shadow-md [&_iframe]:mx-auto [&_iframe]:my-8 [&_iframe]:w-full [&_iframe]:aspect-video"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default BlogDetail;
