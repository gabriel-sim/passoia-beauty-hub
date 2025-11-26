import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/passoia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Passoia" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("look")}
            className="text-foreground hover:text-primary transition-colors text-lg font-medium"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="text-foreground hover:text-primary transition-colors text-lg font-medium"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="text-foreground hover:text-primary transition-colors text-lg font-medium"
          >
            Novidades
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("look")}
              className="text-left py-3 px-4 hover:bg-secondary rounded-lg transition-colors text-lg font-medium"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-left py-3 px-4 hover:bg-secondary rounded-lg transition-colors text-lg font-medium"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-left py-3 px-4 hover:bg-secondary rounded-lg transition-colors text-lg font-medium"
            >
              Novidades
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
