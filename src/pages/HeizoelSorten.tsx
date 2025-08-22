
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Shield, Droplets, Thermometer } from 'lucide-react';

const HeizoelSorten = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Heizöl-Sorten | Standard & Premium Heizöl | Gsmart"
        description="Hochwertige Heizöl-Sorten: Standard Heizöl EL ab 70 Cent/L und Premium Heizöl Plus ab 73 Cent/L. Schwefelarm, DIN-Norm konform. Jetzt bestellen!"
        keywords="Heizöl Sorten, Standard Heizöl EL, Premium Heizöl Plus, schwefelarmes Heizöl, DIN 51603-1"
        canonicalUrl="https://smartheizoel.de/heizoelsorten"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32" background="primary">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hochwertige <span className="gradient-text">Heizöl-Sorten</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere Premium-Heizölsorten für optimale Heizleistung und Effizienz. 
            Alle Sorten erfüllen höchste Qualitätsstandards und sind umweltfreundlich.
          </p>
        </div>
      </PageSection>

      {/* Heizöl-Sorten Overview */}
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Heizöl-Qualitäten</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            title="Standard Heizöl EL"
            description="Bewährte Qualität für zuverlässige Wärme in Ihrem Zuhause. Entspricht DIN 51603-1 Standard."
            icon={Droplets}
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Preis:</span>
                <span className="font-bold text-primary">0,70 €/Liter</span>
              </div>
              <div className="text-sm text-gray-500">
                • Schwefelarm (max. 1000 mg/kg)<br/>
                • Optimale Verbrennungsqualität<br/>
                • Für alle modernen Ölheizungen geeignet
              </div>
            </div>
          </InfoCard>

          <InfoCard
            title="Premium Heizöl Plus"
            description="Höchste Qualität mit Additiven für bessere Performance und längere Haltbarkeit Ihrer Heizungsanlage."
            icon={Shield}
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Preis:</span>
                <span className="font-bold text-primary">0,73 €/Liter</span>
              </div>
              <div className="text-sm text-gray-500">
                • Schwefelarm (max. 50 mg/kg)<br/>
                • Mit Additiven gegen Alterung<br/>
                • Verbesserte Fließeigenschaften
              </div>
            </div>
          </InfoCard>
        </div>
      </PageSection>

      {/* Qualitätsmerkmale */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Qualitätsmerkmale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Optimaler Heizwert</h3>
              <p className="text-gray-600">
                Mindestens 42,6 MJ/kg für maximale Energieausbeute und Effizienz Ihrer Heizung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Geprüfte Reinheit</h3>
              <p className="text-gray-600">
                Regelmäßige Qualitätskontrollen und Laborprüfungen garantieren höchste Reinheit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Umweltfreundlich</h3>
              <p className="text-gray-600">
                Schwefelarme Qualität reduziert Emissionen und schont die Umwelt.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Lagerung & Haltbarkeit */}
      <PageSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Lagerung & Haltbarkeit</h2>
          <div className="glassmorphism-card p-8">
            <p className="text-lg text-gray-700 mb-6">
              Unser Heizöl ist bei sachgerechter Lagerung mehrere Jahre haltbar. 
              Für optimale Qualität empfehlen wir die Beachtung folgender Punkte:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-primary mb-2">✓ Empfehlungen</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Dunkle, kühle Lagerung</li>
                  <li>• Regelmäßige Tankwartung</li>
                  <li>• Schutz vor Kondenswasser</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">⚠️ Vermeiden</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Direkte Sonneneinstrahlung</li>
                  <li>• Temperaturschwankungen</li>
                  <li>• Verunreinigungen</li>
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

export default HeizoelSorten;
