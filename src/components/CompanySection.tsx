
import { MapPin, Mail, Clock } from 'lucide-react';

const CompanySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Über <span className="gradient-text">Schürer Energie</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Seit 2018 sind wir Ihr vertrauensvoller Partner für günstige und hochwertige Heizöl-Lieferungen in ganz Deutschland. 
                Als modernes Unternehmen aus Nürnberg haben wir uns auf die direkte Belieferung von Privat- und Geschäftskunden spezialisiert.
              </p>
              
              <p>
                Durch unsere optimierten Beschaffungswege und die direkte Zusammenarbeit mit führenden Raffinerien können wir Ihnen 
                <span className="font-semibold text-primary"> Heizöl ab 70 Cent pro Liter</span> anbieten - 
                und das bei gleichbleibend hoher Qualität.
              </p>
              
              <p>
                Unser Erfolgsrezept: Faire Preise, zuverlässiger Service und die kostenlose Lieferung ab 2.000 Litern deutschlandweit. 
                <span className="font-semibold text-gray-900"> Über 10.000 zufriedene Kunden</span> sprechen für unsere Qualität.
              </p>
            </div>

            {/* Quality Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">DIN EN 10203</p>
                  <p className="text-sm text-gray-600">Zertifizierte Qualität</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🛡️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Sicherheit</p>
                  <p className="text-sm text-gray-600">Geprüfte Lieferungen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glassmorphism-card p-8 space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Kontakt & Standort
                </h3>
                <p className="text-gray-600">
                  Ihr direkter Draht zu uns
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Unser Standort</h4>
                    <p className="text-gray-600">
                      Fürther Str. 252<br />
                      90402 Nürnberg<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail Kontakt</h4>
                    <a 
                      href="mailto:info@schuerer-energie.de" 
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      info@schuerer-energie.de
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bestellzeiten</h4>
                    <p className="text-gray-600">
                      Online: 24/7 verfügbar<br />
                      Support: Mo-Fr 8:00-18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Info */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Rechtliche Angaben</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Schürer Energie GmbH</p>
                  <p>Amtsgericht Nürnberg HRB 35887</p>
                  <p>USt-ID: DE363251118</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
