import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="BizExpress Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold text-primary">BizExpress</span>
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
                className={`text-sm font-medium text-foreground hover:text-primary transition-colors ${
                  link.disabled ? 'cursor-default' : ''
                }`}
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
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
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
