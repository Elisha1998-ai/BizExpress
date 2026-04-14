import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const adminEmails = import.meta.env.VITE_ADMIN_EMAILS?.split(",") || [];

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        // Check if user email is in the admin whitelist
        const userEmail = user.email?.toLowerCase();
        const isWhitelisted = adminEmails.some(
          (email: string) => email.trim().toLowerCase() === userEmail
        );
        setIsAdmin(isWhitelisted);
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/auth?mode=signin" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    // If authenticated but not an admin, redirect to NotFound (security through obscurity)
    // This makes it look like the page doesn't exist for unauthorized users
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
