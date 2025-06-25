
import { Calculator, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Heizöl-Sorten', href: '/heizoelsorten' },
    { name: 'Lieferservice', href: '/lieferservice' },
    { name: 'Preise & Konditionen', href: '/preise' },
    { name: 'Über uns & Service', href: '/ueber-uns' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPriceCalculator = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to calculator
      const element = document.getElementById('price-calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      window.location.href = '/#price-calculator';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Centered on mobile */}
          <div className="flex items-center lg:flex-none flex-1 lg:flex-initial justify-center lg:justify-start">
            <Link to="/" onClick={handleNavClick}>
              <img 
                src="https://i.imgur.com/jOSkXXt.png" 
                alt="Schürer Energie" 
                className="h-12 w-auto hover-scale"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToPriceCalculator}
              className="hidden sm:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 hover-scale"
            >
              <Calculator className="w-4 h-4" />
              <span className="font-medium">zum Preisrechner</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors absolute right-4"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
