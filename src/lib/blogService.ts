import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  Timestamp
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

export interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  createdAt: Timestamp;
}

const BLOG_COLLECTION = "posts";

export const blogService = {
  // Get all posts
  async getAllPosts(): Promise<BlogPost[]> {
    const q = query(collection(db, BLOG_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  },

  // Get a single post by ID
  async getPostById(id: string): Promise<BlogPost | null> {
    const docRef = doc(db, BLOG_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as BlogPost;
    }
    return null;
  },

  // Create a new post
  async createPost(post: Omit<BlogPost, "id" | "createdAt">): Promise<string> {
    const docRef = await addDoc(collection(db, BLOG_COLLECTION), {
      ...post,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  // Update a post
  async updatePost(id: string, post: Partial<BlogPost>): Promise<void> {
    const docRef = doc(db, BLOG_COLLECTION, id);
    await updateDoc(docRef, post);
  },

  // Delete a post
  async deletePost(id: string): Promise<void> {
    const docRef = doc(db, BLOG_COLLECTION, id);
    await deleteDoc(docRef);
  },

  // Upload an image and return the URL
  async uploadImage(file: File): Promise<string> {
    const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  }
};
