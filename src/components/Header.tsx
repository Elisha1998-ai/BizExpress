import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../Logo.png";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const isDarkTextRoute = 
    location.pathname === "/blog" || 
    location.pathname === "/faqs" || 
    location.pathname === "/portfolio" || 
    location.pathname === "/contact" || 
    location.pathname.startsWith("/blog/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowWeHelp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const howWeHelpSection = document.getElementById('how-we-help');
    if (howWeHelpSection) {
      howWeHelpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('portfolio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Services", path: "/services", onClick: undefined },
    { name: "Portfolio", path: "/portfolio", onClick: undefined },
    { name: "About Us", path: "/about", onClick: undefined },
    { name: "Blog", path: "/blog", onClick: undefined, disabled: false },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[80%]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="BizExpress Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.disabled) {
                    e.preventDefault();
                    return;
                  }
                  if (link.onClick) {
                    link.onClick(e);
                  }
                }}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : isDarkTextRoute 
                      ? "text-black hover:text-primary" 
                      : "text-white/90 hover:text-white drop-shadow-sm"
                } ${link.disabled ? 'cursor-default' : ''}`}
              >
                {link.name}
              </a>
            ))}

            <div className="ml-4">
              <Link to="/contact">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : isDarkTextRoute ? "text-black" : "text-white hover:text-white/80"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-border py-4 px-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium text-foreground hover:text-primary transition-colors ${
                    link.disabled ? 'cursor-default' : ''
                  }`}
                  onClick={(e) => {
                    if (link.disabled) {
                      e.preventDefault();
                      return;
                    }
                    if (link.onClick) {
                      link.onClick(e);
                    }
                    toggleMenu();
                  }}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-border">
                <Link to="/contact" onClick={toggleMenu}>
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
