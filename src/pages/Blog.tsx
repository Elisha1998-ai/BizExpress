import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Facebook as FacebookIcon, 
  Search,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

import team1 from "@/assets/ads-management.jpg";
import team2 from "@/assets/branding.jpg";
import team3 from "@/assets/social-media.jpg";
import team4 from "@/assets/content-creation.jpg";
import team5 from "@/assets/consultation-meeting.jpg";
import img12 from "../img12.jpg";
import img13 from "../img13.jpg";



const BlogPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogRef = collection(db, "blogPosts");
        const q = query(blogRef, orderBy("createdAt", sortOrder === "newest" ? "desc" : "asc"));
        const querySnapshot = await getDocs(q);
        const firebasePosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          isLarge: doc.data().isLarge || false,
          date: doc.data().createdAt?.toDate ? doc.data().createdAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : doc.data().date
        }));
        
        setPosts(firebasePosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [sortOrder]);

  const toggleSort = () => {
    setSortOrder(prev => prev === "newest" ? "oldest" : "newest");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Top Banner / Breadcrumbs */}
      <div className="pt-24 pb-8 border-b border-gray-100">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-4 sm:px-6 lg:px-8">
          <nav className="flex text-xs space-x-2 text-gray-500 mb-6 uppercase tracking-widest font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Articles</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Insights for Business Growth
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-normal">
                Expert perspectives on building, scaling, and transforming businesses in today's landscape.
              </p>
            </div>
            
            {/* Social Share Icons */}
            <div className="flex gap-4 mb-2">
              <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">
                <Twitter size={20} />
              </button>
              <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">
                <FacebookIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm md:shadow-none">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-6 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b-2 border-primary pb-4 -mb-4">
              Journal Articles
            </span>
          </div>
          <div 
            className="flex items-center space-x-4 text-xs font-medium text-gray-500 uppercase tracking-widest cursor-pointer hover:text-gray-900 transition-colors"
            onClick={toggleSort}
          >
            <span>Sort By: <span className="text-gray-900 capitalize">{sortOrder}</span></span>
            <ChevronDown size={14} className={sortOrder === "oldest" ? "rotate-180 transition-transform" : "transition-transform"} />
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <main className="py-16">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {posts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${post.isLarge ? 'md:col-span-2' : 'col-span-1'} group cursor-pointer`}
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="flex flex-col h-full">
                  {/* Empty Image Frame */}
                  <div className={`relative w-full overflow-hidden bg-gray-100 mb-6 ${post.isLarge ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                    {/* No icon as requested, just light gray background */}
                    {post.image && (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    )}
                  </div>
                  
                  {/* Category */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h2 className={`font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight ${post.isLarge ? 'text-3xl' : 'text-xl'}`}>
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta / Link */}
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex flex-col text-[11px] text-gray-400 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span className="mt-1">By {post.author}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900 flex items-center group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-24 text-center">
            <button className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
              Show More
            </button>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Never miss a story</h3>
              <p className="text-gray-500 font-light">Get our very latest perspectives on the future of business delivered straight to your inbox.</p>
            </div>
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 px-6 py-4 bg-white border border-gray-200 text-sm focus:outline-none focus:border-primary transition-all rounded-none"
              />
              <button className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <MinimalFooter />
    </div>
  );
};

export default BlogPage;
