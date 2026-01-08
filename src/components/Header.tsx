import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/altans-blue.jpg';



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <img src={logoImage} alt="ALTANS Avocats" className="h-12" />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('droit-social')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Droit Social
            </button>
            <button 
              onClick={() => scrollToSection('droit-affaires')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Droit des Affaires
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-primary hover:text-primary/80 transition-colors text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('droit-social')}
                className="text-primary hover:text-primary/80 transition-colors text-left"
              >
                Droit Social
              </button>
              <button 
                onClick={() => scrollToSection('droit-affaires')}
                className="text-primary hover:text-primary/80 transition-colors text-left"
              >
                Droit des Affaires
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

