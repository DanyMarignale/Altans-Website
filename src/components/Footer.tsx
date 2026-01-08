import logoImage from '../assets/altans-blue.jpg';



export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-[#004172] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <img src={logoImage} alt="ALTANS Avocats" className="h-12 mb-4" />
            <p className="text-[#004172] leading-relaxed">
              Cabinet d'avocats spécialisé en droit social et droit des affaires, nous accompagnons les CSE, les salariés et les entreprises avec expertise et engagement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-[#004172]">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-[#004172] hover:text-[#004172]/70 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('droit-social')}
                  className="text-[#004172] hover:text-[#004172]/70 transition-colors"
                >
                  Droit Social
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('droit-affaires')}
                  className="text-[#004172] hover:text-[#004172]/70 transition-colors"
                >
                  Droit des Affaires
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-[#004172] hover:text-[#004172]/70 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="mb-4 text-[#004172]">Nos expertises</h4>
            <ul className="space-y-2 text-[#004172]">
              <li>Droit du travail</li>
              <li>Relations collectives</li>
              <li>CSE & Représentants</li>
              <li>Droit des sociétés</li>
              <li>Fusions & Acquisitions</li>
              <li>Propriété intellectuelle</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#004172] text-sm">
              © {new Date().getFullYear()} ALTANS Avocats. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#004172] hover:text-[#004172]/70 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-[#004172] hover:text-[#004172]/70 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

