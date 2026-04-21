import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy,
  Timestamp 
} from "firebase/firestore";
import { db } from "./firebase";

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  services: string[];
  message: string;
  submittedAt: Timestamp;
}

const CONTACT_COLLECTION = "contactSubmissions";

export const contactService = {
  // Submit a new contact form
  async submitContact(submission: Omit<ContactSubmission, "id" | "submittedAt">): Promise<string> {
    try {
      console.log("Attempting to submit contact form...", submission);
      console.log("Firebase DB instance:", db);
      
      const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
        ...submission,
        submittedAt: Timestamp.now()
      });
      
      console.log("Contact form submitted successfully with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error in submitContact:", error);
      throw error;
    }
  },

  // Get all contact submissions (admin only)
  async getAllSubmissions(): Promise<ContactSubmission[]> {
    const q = query(collection(db, CONTACT_COLLECTION), orderBy("submittedAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ContactSubmission[];
  }
};
