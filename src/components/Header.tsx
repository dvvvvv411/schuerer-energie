
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/ORUHBdI.png" 
              alt="Schürer Energie" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#preisrechner" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Preisrechner
            </a>
            <a href="#vorteile" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Vorteile
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Kontakt
            </a>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center">
            <a 
              href="tel:+49911123456" 
              className="hidden sm:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 hover-scale"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
