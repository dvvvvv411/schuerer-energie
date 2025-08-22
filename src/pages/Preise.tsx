
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import SEO from '@/components/SEO';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Preise = () => {
  const scrollToPriceCalculator = () => {
    // Navigate to home page and scroll to calculator
    window.location.href = '/#price-calculator';
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Heizöl Preise & Konditionen | Ab 70 Cent/L | Gsmart"
        description="Transparente Heizöl-Preise ohne versteckte Kosten. Standard Heizöl ab 70 Cent/L, Premium ab 73 Cent/L. Preisgarantie bis zur Lieferung!"
        keywords="Heizöl Preise, Heizöl Kosten, Preisgarantie, transparente Preise, Heizöl günstig kaufen"
        canonicalUrl="https://smartheizoel.de/preise"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32" background="primary">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparente <span className="gradient-text">Preise & Konditionen</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faire und transparente Preise ohne versteckte Kosten. 
            Profitieren Sie von unseren Mengenrabatten und Stammkundenvorteilen.
          </p>
        </div>
      </PageSection>

      {/* Aktuelle Preise */}
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-12">Aktuelle Heizölpreise</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glassmorphism-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Standard Heizöl EL</h3>
            <div className="text-4xl font-bold text-primary mb-4">0,70 €</div>
            <div className="text-gray-600 mb-6">pro Liter (inkl. MwSt.)</div>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✓ DIN 51603-1 Qualität</li>
              <li>✓ Schwefelarm</li>
              <li>✓ Sofort verfügbar</li>
              <li>✓ Für alle Ölheizungen</li>
            </ul>
          </div>

          <div className="glassmorphism-card p-8 text-center border-2 border-primary">
            <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
              PREMIUM
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium Heizöl Plus</h3>
            <div className="text-4xl font-bold text-primary mb-4">0,73 €</div>
            <div className="text-gray-600 mb-6">pro Liter (inkl. MwSt.)</div>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✓ Premium-Qualität mit Additiven</li>
              <li>✓ Ultra-schwefelarm</li>
              <li>✓ Verlängerte Haltbarkeit</li>
              <li>✓ Optimierte Verbrennung</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Benötigen Sie ein individuelles Angebot?
          </p>
          <Button 
            onClick={scrollToPriceCalculator}
            className="bg-primary hover:bg-primary/90"
          >
            <Calculator className="w-4 h-4 mr-2" />
            zum Preisrechner
          </Button>
        </div>
      </PageSection>

      {/* Preisgarantie */}
      <PageSection background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Unsere Preisgarantie</h2>
          <div className="glassmorphism-card p-8">
            <p className="text-lg text-gray-700 mb-6">
              Nach Ihrer Bestellung garantieren wir den vereinbarten Preis bis zur Lieferung - 
              auch bei steigenden Marktpreisen. Sie profitieren von Planungssicherheit und 
              transparenten Kosten ohne böse Überraschungen.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-primary mb-2">✓ Garantiert</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Festpreis bei Bestellung</li>
                  <li>• Keine nachträglichen Kosten</li>
                  <li>• Transparente Preisgestaltung</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">📞 Service</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Kostenlose Beratung</li>
                  <li>• Individuelle Angebote</li>
                  <li>• Persönliche Betreuung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Preise;
