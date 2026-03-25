import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Loader2, Tag, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { blogService, BlogPost } from "@/lib/blogService";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await blogService.getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const featuredPost = posts[0];
  const sidePost = posts[1];
  const remainingPosts = posts.slice(2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] px-4 sm:px-8 lg:px-12 py-24">
        {/* Back Button & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="pl-0 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-foreground flex items-center gap-4">
              Latest Stories
              <div className="bg-primary/10 p-2 rounded-xl">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-md">
            Expert insights and guides for building successful businesses in Nigeria.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-40">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : posts.length > 0 ? (
          <div className="space-y-20">
            
            {/* Featured Grid Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Main Post */}
              {featuredPost && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="lg:col-span-2 group"
                >
                  <Link to={`/blog/${featuredPost.id}`}>
                    <div className="relative h-[500px] sm:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-black flex flex-col sm:flex-row shadow-2xl transition-all duration-500 hover:shadow-primary/10">
                      {featuredPost.imageUrl && (
                        <div className="h-1/2 sm:h-full sm:w-1/2 overflow-hidden">
                          <img 
                            src={featuredPost.imageUrl} 
                            alt={featuredPost.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center bg-zinc-950 text-white">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="flex items-center bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
                            <BookOpen className="h-3 w-3 mr-2" />
                            {featuredPost.category}
                          </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                          {featuredPost.title}
                        </h2>
                        <p className="text-zinc-400 text-lg line-clamp-3 mb-8 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-sm text-zinc-500">
                          <span>{featuredPost.date}</span>
                          <span className="flex items-center group-hover:text-primary transition-colors">
                            Read Story <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Side Post */}
              {sidePost && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${sidePost.id}`}>
                    <Card className="h-full border-none bg-muted/30 rounded-[2.5rem] overflow-hidden hover:bg-muted/50 transition-all duration-300">
                      {sidePost.imageUrl && (
                        <div className="h-64 w-full overflow-hidden">
                          <img 
                            src={sidePost.imageUrl} 
                            alt={sidePost.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <CardContent className="p-8">
                        <div className="mb-4">
                          <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            <Tag className="h-3 w-3 mr-2" />
                            {sidePost.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                          {sidePost.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                          {sidePost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {sidePost.date}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Remaining Posts Grid */}
            {remainingPosts.length > 0 && (
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-black flex items-center gap-3">
                    Recent Stories
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </h2>
                  <div className="h-px flex-1 mx-8 bg-muted hidden sm:block" />
                  <Button variant="outline" className="rounded-full border-2 hover:bg-primary hover:text-white transition-all">
                    View All <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {remainingPosts.map((post, index) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link to={`/blog/${post.id}`} className="group">
                        <Card className="h-full border-none bg-transparent hover:bg-muted/10 transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col">
                          {post.imageUrl && (
                            <div className="h-56 w-full overflow-hidden rounded-[2rem] mb-6">
                              <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            </div>
                          )}
                          <CardContent className="px-2 pb-6 flex flex-col flex-grow">
                            <div className="mb-4">
                              <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {post.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center text-xs font-medium text-muted-foreground">
                              {post.date}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-40 bg-muted/10 rounded-[3rem] border-2 border-dashed">
            <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
            <p className="text-2xl font-bold text-muted-foreground">No stories yet</p>
            <p className="text-muted-foreground mt-2">Check back soon for insights and updates.</p>
          </div>
        )}
      </main>
      <MinimalFooter />
    </div>
  );
};

export default Blog;
