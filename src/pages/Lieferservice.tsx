
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import { Truck, Shield, Clock, Calculator, CheckCircle, Star, Gauge, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Lieferservice = () => {
  const navigateToPriceCalculator = () => {
    window.location.href = '/#price-calculator';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32" background="primary">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Deutschlandweite <span className="gradient-text">Heizöl-Lieferung</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Zuverlässige Lieferung in 4-7 Werktagen deutschlandweit. 
            Professionelle Tankfahrzeuge, geschulte Fahrer und höchste Sicherheitsstandards.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/30">
              <Truck className="w-8 h-8 text-primary" />
              <div className="text-center">
                <p className="font-bold text-gray-900">4-7 Werktage</p>
                <p className="text-sm text-gray-600">Deutschlandweit</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/30">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-center">
                <p className="font-bold text-gray-900">100% Sicher</p>
                <p className="text-sm text-gray-600">Zertifiziert</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/30">
              <CheckCircle className="w-8 h-8 text-primary" />
              <div className="text-center">
                <p className="font-bold text-gray-900">Kostenlos</p>
                <p className="text-sm text-gray-600">ab 2.000L</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Warum Schürer Energie? */}
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-12">Warum Schürer Energie?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard
            title="Über 7 Jahre Erfahrung"
            description="Seit 2018 vertrauen deutschlandweit Kunden auf unsere Zuverlässigkeit und Expertise."
            icon={Star}
          />

          <InfoCard
            title="Beste Preise"
            description="Heizöl ab 70 Cent pro Liter - bis zu 30% günstiger als lokale Anbieter."
            icon={Gauge}
          />

          <InfoCard
            title="100.000+ Kunden"
            description="Über 100.000 zufriedene Kunden vertrauen bereits auf unseren Service."
            icon={Users}
          />

          <InfoCard
            title="Sicherheit garantiert"
            description="Alle Tankfahrzeuge sind TÜV-geprüft und entsprechen neuesten Sicherheitsstandards."
            icon={Shield}
          />
        </div>
      </PageSection>

      {/* Tankfahrzeuge & Technik */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Moderne Tankfahrzeuge & Technik</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Hochmoderne Flotte</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">TÜV-geprüfte Tankfahrzeuge</p>
                    <p className="text-gray-600 text-sm">Regelmäßige Wartung und Sicherheitsprüfungen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">GPS-Tracking in Echtzeit</p>
                    <p className="text-gray-600 text-sm">Transparente Verfolgung Ihrer Lieferung</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Umweltfreundliche Motoren</p>
                    <p className="text-gray-600 text-sm">Euro 6 Standard für minimale Emissionen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Geschulte Fahrer</p>
                    <p className="text-gray-600 text-sm">Zertifiziert für Gefahrguttransport (ADR)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism-card p-8 text-center">
              <Truck className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-4">Tankvolumen</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Kleinfahrzeuge:</span>
                  <span className="font-bold">bis 3.000L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Standardfahrzeuge:</span>
                  <span className="font-bold">bis 10.000L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Großfahrzeuge:</span>
                  <span className="font-bold">bis 25.000L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service & Sicherheit */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service & Sicherheit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glassmorphism-card p-8 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Sicherheitsgarantie</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Vollversicherung aller Transporte</li>
                <li>• ADR-zertifizierte Fahrer</li>
                <li>• Notfall-Hotline 24/7</li>
                <li>• Umweltschutz-Zertifikat</li>
              </ul>
            </div>

            <div className="glassmorphism-card p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Pünktliche Lieferung</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• SMS-Benachrichtigung</li>
                <li>• 2-Stunden-Zeitfenster</li>
                <li>• Lieferung Mo-Sa 7-17 Uhr</li>
                <li>• Express-Service verfügbar</li>
              </ul>
            </div>

            <div className="glassmorphism-card p-8 text-center">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Professioneller Service</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Tankprüfung inklusive</li>
                <li>• Saubere Befüllung</li>
                <li>• Digitale Rechnung</li>
                <li>• Kundendienst vor Ort</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Optimized CTA */}
      <PageSection background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Jetzt Heizöl bestellen und sparen!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Deutschlandweite Lieferung in 4-7 Werktagen. Kostenlose Lieferung ab 2.000 Liter.
            Berechnen Sie jetzt online Ihren individuellen Preis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={navigateToPriceCalculator}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Calculator className="w-5 h-5 mr-2" />
                zum Preisrechner
              </Button>
            </button>
            
            <Link to="/preise">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Preise anzeigen
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-600">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">Über 100.000 zufriedene Kunden deutschlandweit</span>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Lieferservice;
