import { useState, useEffect, useRef, useMemo } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { blogService, BlogPost } from "@/lib/blogService";
import { Loader2, Plus, Pencil, Trash2, ArrowLeft, LogOut, Image as ImageIcon, Video, X, Save, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingImage, setUserUploadingImage] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: "BizExpress Team",
    category: "General",
    imageUrl: "",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  });

  const resetCurrentPost = () => {
    setCurrentPost({
      title: "",
      excerpt: "",
      content: "",
      author: "BizExpress Team",
      category: "General",
      imageUrl: "",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    });
  };

  // Quill modules configuration
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();
          input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
              const quill = quillRef.current?.getEditor();
              const range = quill?.getSelection();
              if (quill && range) {
                try {
                  // Use local storage (Base64) for now
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const base64String = reader.result as string;
                    quill.insertEmbed(range.index, 'image', base64String);
                  };
                  reader.readAsDataURL(file);
                } catch (error) {
                  console.error("Error uploading editor image:", error);
                }
              }
            }
          };
        }
      }
    }
  }), []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/auth?mode=signin");
      } else {
        fetchPosts();
      }
      setUserLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth?mode=signin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const fetchedPosts = await blogService.getAllPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserUploadingImage(true);
      try {
        // Use local storage (Base64) for now
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          setCurrentPost({ ...currentPost, imageUrl: base64String });
          setUserUploadingImage(false);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error uploading main image:", error);
        setUserUploadingImage(false);
      }
    }
  };

  const handleSave = async () => {
    if (!currentPost.title) return;
    setLoading(true);
    try {
      if (currentPost.id) {
        await blogService.updatePost(currentPost.id, currentPost);
      } else {
        await blogService.createPost(currentPost as Omit<BlogPost, "id" | "createdAt">);
      }
      setIsEditing(false);
      resetCurrentPost();
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    // Save draft to local storage for the preview page to pick up across tabs
    localStorage.setItem('blog_preview_draft', JSON.stringify(currentPost));
    window.open('/blog/preview', '_blank');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setLoading(true);
      try {
        await blogService.deletePost(id);
        fetchPosts();
      } catch (error) {
        console.error("Error deleting post:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (userLoading) {
    return (
      <div className="min-h-screen bg-background">
      {!isEditing && <Header />}
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {!isEditing && <Header />}
      <main className={`mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 ${isEditing ? 'max-w-5xl w-full' : 'w-[90%] sm:w-[80%] md:w-[85%] lg:w-[85%]'}`}>
        
        {isEditing ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Editor Top Bar - Adjusted to top-0 since Navbar is removed */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b shadow-sm">
              <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <span className="text-sm text-muted-foreground">Draft in {currentPost.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" onClick={handlePreview}>
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button 
                    onClick={handleSave} 
                    disabled={loading || !currentPost.title}
                    className="rounded-full px-6"
                  >
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Publish
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              {/* Cover Image Area */}
              <div 
                className={`relative group w-full h-[400px] rounded-[15px] overflow-hidden mb-12 bg-muted/30 border-2 border-dashed border-muted transition-all flex flex-col items-center justify-center cursor-pointer ${currentPost.imageUrl ? 'border-none' : 'hover:bg-muted/50'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                {currentPost.imageUrl ? (
                  <>
                    <img 
                      src={currentPost.imageUrl} 
                      alt="Cover" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex flex-col items-center text-white">
                        <ImageIcon className="h-10 w-10 mb-2" />
                        <span className="font-medium">Change Cover Image</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-muted-foreground">
                    <div className="p-4 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform">
                      {uploadingImage ? <Loader2 className="h-8 w-8 animate-spin" /> : <Plus className="h-8 w-8" />}
                    </div>
                    <span className="text-lg font-medium">Add a high-resolution cover image</span>
                    <span className="text-sm">Recommended: 1600 x 900px</span>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleMainImageUpload} 
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Meta Inputs (Category/Author) */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium uppercase tracking-wider">Category</span>
                  <input 
                    value={currentPost.category} 
                    onChange={e => setCurrentPost({...currentPost, category: e.target.value})} 
                    placeholder="e.g. Registration"
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 min-w-[120px]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium uppercase tracking-wider">Author</span>
                  <input 
                    value={currentPost.author} 
                    onChange={e => setCurrentPost({...currentPost, author: e.target.value})} 
                    placeholder="BizExpress Team"
                    className="bg-transparent border-b border-muted focus:border-primary focus:outline-none py-1 min-w-[150px]"
                  />
                </div>
              </div>

              {/* Title Input */}
              <textarea 
                value={currentPost.title} 
                onChange={e => {
                  setCurrentPost({...currentPost, title: e.target.value});
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }} 
                placeholder="Title"
                className="w-full text-5xl sm:text-6xl font-heading font-semibold bg-transparent border-none focus:outline-none focus:ring-0 resize-none placeholder:text-muted/40 leading-tight mb-4 overflow-hidden"
                rows={1}
                style={{ height: 'auto', minHeight: '1em' }}
              />

              {/* Excerpt Input */}
              <textarea 
                value={currentPost.excerpt} 
                onChange={e => {
                  setCurrentPost({...currentPost, excerpt: e.target.value});
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }} 
                placeholder="Write a short teaser..."
                className="w-full text-xl font-heading text-muted-foreground/80 bg-transparent border-none focus:outline-none focus:ring-0 resize-none placeholder:text-muted-foreground/60 leading-relaxed mb-12 overflow-hidden"
                rows={1}
                style={{ height: 'auto', minHeight: '1.5em' }}
              />

              {/* Content Editor */}
              <div className="medium-editor-wrapper prose prose-lg dark:prose-invert max-w-none">
                <style>{`
                  .medium-editor-wrapper .ql-container.ql-snow {
                    border: none !important;
                    font-family: inherit;
                  }
                  .medium-editor-wrapper .ql-editor {
                    padding: 0;
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: hsl(var(--foreground));
                  }
                  .medium-editor-wrapper .ql-editor.ql-blank::before {
                    left: 0;
                    font-style: normal;
                    color: hsl(var(--muted-foreground) / 0.4);
                  }
                  .medium-editor-wrapper .ql-toolbar.ql-snow {
                    border: none !important;
                    background: transparent;
                    padding-left: 0;
                    margin-bottom: 1rem;
                    opacity: 0.6;
                    transition: opacity 0.2s;
                  }
                  .medium-editor-wrapper:hover .ql-toolbar.ql-snow {
                    opacity: 1;
                  }
                  .medium-editor-wrapper .ql-editor img {
                    border-radius: 1.5rem;
                    margin: 2rem auto;
                  }
                `}</style>
                <ReactQuill 
                  ref={quillRef}
                  theme="snow" 
                  value={currentPost.content} 
                  onChange={content => setCurrentPost({...currentPost, content})}
                  modules={modules}
                  placeholder="Tell your story..."
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground text-lg">Manage your blog posts and stories.</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
                <Button onClick={() => {
                  resetCurrentPost();
                  setIsEditing(true);
                }} className="shadow-lg hover:shadow-primary/20 transition-all">
                  <Plus className="mr-2 h-5 w-5" />
                  New Post
                </Button>
              </div>
            </div>

            <div className="grid gap-8">
              {loading ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed">
                  <p className="text-xl text-muted-foreground">No posts yet. Start writing your first story!</p>
                  <Button variant="link" onClick={() => setIsEditing(true)} className="mt-4 text-primary font-bold">
                    Create your first post
                  </Button>
                </div>
              ) : posts.map(post => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-muted/30">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {post.imageUrl && (
                        <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-sm font-medium">By {post.author}</span>
                          <div className="flex gap-2">
                            <Button 
                              variant="secondary" 
                              size="sm" 
                              className="rounded-full"
                              onClick={() => {
                                setCurrentPost(post);
                                setIsEditing(true);
                              }}
                            >
                              <Pencil className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="rounded-full text-destructive hover:bg-destructive/10"
                              onClick={() => handleDelete(post.id!)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
      <MinimalFooter />
    </div>
  );
};

export default AdminDashboard;
