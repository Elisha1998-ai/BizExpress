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
    const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
      ...submission,
      submittedAt: Timestamp.now()
    });
    return docRef.id;
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
