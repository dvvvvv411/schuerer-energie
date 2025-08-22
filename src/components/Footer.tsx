
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/13e95491-5022-4284-bd23-053e28db70a9.png" 
                alt="Gsmart" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Ihr vertrauensvoller Partner für günstiges Heizöl seit 2018. 
                Deutschlandweite Lieferung ab 70 Cent pro Liter.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Rheinpromenade 4 a, 40789 Monheim a. Rhein</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+4921738522938" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  0217 385 229 38
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:info@smartheizoel.de" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@smartheizoel.de
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service</h4>
            <ul className="space-y-2">
              <li><a href="#preisrechner" className="text-gray-300 hover:text-primary transition-colors">Preisrechner</a></li>
              <li><a href="#kontakt" className="text-gray-300 hover:text-primary transition-colors">Kontakt</a></li>
              <li><Link to="/preise" className="text-gray-300 hover:text-primary transition-colors">Preise</Link></li>
              <li><Link to="/lieferservice" className="text-gray-300 hover:text-primary transition-colors">Lieferbedingungen</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-gray-300 hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-gray-300 hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-gray-300 hover:text-primary transition-colors">AGB</Link></li>
              <li><Link to="/widerrufsrecht" className="text-gray-300 hover:text-primary transition-colors">Widerrufsrecht</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2025 Gsmart GmbH. Alle Rechte vorbehalten.</p>
              <p>Amtsgericht Düsseldorf HRB 107383 | USt-ID: DE363251118</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-400">
                Made with ❤️ in Germany
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
