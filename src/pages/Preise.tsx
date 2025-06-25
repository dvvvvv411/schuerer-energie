
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import { Euro, TrendingDown, Calculator, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Preise = () => {
  return (
    <div className="min-h-screen">
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
      </PageSection>

      {/* Mengenrabatte */}
      <PageSection background="gray">
        <h2 className="text-3xl font-bold text-center mb-12">Mengenrabatte</h2>
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism-card p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">1.000L+</div>
                <div className="text-sm text-gray-600">1% Rabatt</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">2.000L+</div>
                <div className="text-sm text-gray-600">2% Rabatt + Kostenlose Lieferung</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5.000L+</div>
                <div className="text-sm text-gray-600">3% Rabatt</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">10.000L+</div>
                <div className="text-sm text-gray-600">5% Rabatt</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Größere Mengen? Fordern Sie ein individuelles Angebot an!
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              <Calculator className="w-4 h-4 mr-2" />
              Preis berechnen
            </Button>
          </div>
        </div>
      </PageSection>

      {/* Zusatzleistungen */}
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-12">Zusatzleistungen & Konditionen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            title="Lieferkosten"
            description="Faire und transparente Lieferkonditionen je nach Entfernung und Menge."
            icon={Euro}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Bis 50 km:</span>
                <span className="font-bold">0,05 €/L</span>
              </div>
              <div className="flex justify-between">
                <span>Bis 100 km:</span>
                <span className="font-bold">0,08 €/L</span>
              </div>
              <div className="flex justify-between">
                <span>Ab 2.000L:</span>
                <span className="font-bold text-green-600">Kostenlos</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard
            title="Zahlungskonditionen"
            description="Flexible Zahlungsmöglichkeiten für Privat- und Geschäftskunden."
            icon={TrendingDown}
          >
            <div className="space-y-2 text-sm">
              <div>• Rechnung (14 Tage Zahlungsziel)</div>
              <div>• Überweisung vorab (2% Skonto)</div>
              <div>• Lastschrift möglich</div>
              <div>• Ratenzahlung ab 5.000L</div>
            </div>
          </InfoCard>

          <InfoCard
            title="Stammkundenvorteile"
            description="Exklusive Vorteile für unsere treuen Kunden mit besonderen Konditionen."
            icon={Gift}
          >
            <div className="space-y-2 text-sm">
              <div>• Feste Ansprechpartner</div>
              <div>• Bevorzugte Liefertermine</div>
              <div>• Sonderkonditionen bei Großmengen</div>
              <div>• Kostenlose Tankwartung</div>
            </div>
          </InfoCard>
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
