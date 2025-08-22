
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Users, Award, Wrench, Heart } from 'lucide-react';

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Über uns & Service | Familienbetrieb seit 2018 | Schürer Energie"
        description="Schürer Energie GmbH - Ihr vertrauensvoller Partner für Heizöl seit 2018. Familienbetrieb aus Nürnberg mit über 100.000 zufriedenen Kunden deutschlandweit."
        keywords="Schürer Energie, Familienbetrieb, Nürnberg, Heizöl Unternehmen, seit 2018, 100000 Kunden"
        canonicalUrl="https://schuerer-energie.de/ueber-uns"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32" background="primary">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Über uns & <span className="gradient-text">Unser Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seit 2018 Ihr vertrauensvoller Partner für Heizöl in Nürnberg und ganz Deutschland. 
            Familienbetrieb mit Tradition und modernster Technik.
          </p>
        </div>
      </PageSection>

      {/* Unternehmen */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Schürer Energie GmbH</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Unsere Geschichte</h3>
              <p className="text-gray-700 mb-4">
                Gegründet 2018 in Nürnberg, haben wir uns als zuverlässiger Heizöllieferant 
                in der Region etabliert. Was als lokaler Familienbetrieb begann, ist heute 
                ein deutschlandweit agierendes Unternehmen mit modernsten Tankfahrzeugen 
                und digitalen Bestell- und Lieferprozessen.
              </p>
              <p className="text-gray-700">
                Unser Erfolgsrezept: Persönliche Betreuung kombiniert mit innovativer Technik, 
                faire Preise und absolute Zuverlässigkeit. Über 100.000 zufriedene Kunden 
                vertrauen bereits auf unseren Service.
              </p>
            </div>
            <div className="glassmorphism-card p-8">
              <h4 className="text-xl font-bold mb-4">Unternehmensdaten</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Gegründet:</span>
                  <span className="font-bold">2018</span>
                </div>
                <div className="flex justify-between">
                  <span>Standort:</span>
                  <span className="font-bold">Nürnberg</span>
                </div>
                <div className="flex justify-between">
                  <span>Liefergebiet:</span>
                  <span className="font-bold">Deutschlandweit</span>
                </div>
                <div className="flex justify-between">
                  <span>Kunden:</span>
                  <span className="font-bold">100.000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Erfahrung:</span>
                  <span className="font-bold">7+ Jahre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service-Versprechen */}
      <PageSection background="gray">
        <h2 className="text-3xl font-bold text-center mb-12">Unser Service-Versprechen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard
            title="Persönlich"
            description="Individuelle Beratung und persönliche Ansprechpartner für alle Ihre Fragen."
            icon={Users}
          />

          <InfoCard
            title="Qualität"
            description="Höchste Heizöl-Qualität nach DIN-Norm mit regelmäßigen Laborprüfungen."
            icon={Award}
          />

          <InfoCard
            title="Zuverlässig"
            description="Pünktliche Lieferung zum vereinbarten Termin - darauf können Sie sich verlassen."
            icon={Wrench}
          />

          <InfoCard
            title="Fair"
            description="Transparente Preise ohne versteckte Kosten und faire Konditionen für alle."
            icon={Heart}
          />
        </div>
      </PageSection>

      {/* Zusatzservices */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Zusatzservices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Technischer Service</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Tankreinigung und -wartung durch Fachbetriebe</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Heizungsservice und -wartung in Kooperation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Tankprüfung und Dichtheitsprüfung</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Beratung zur optimalen Tankgröße</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Kundenservice</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>24/7 Notfall-Hotline für Geschäftskunden</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>SMS/E-Mail Benachrichtigung vor Lieferung</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Online-Kundenbereich mit Lieferhistorie</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Flexible Zahlungskonditionen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Kontakt & Standort */}
      <PageSection background="primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kontakt & Standort</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism-card p-8">
              <h3 className="text-xl font-bold mb-4">Firmenadresse</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-bold">Schürer Energie GmbH</p>
                <p>Fürther Str. 252<br/>90402 Nürnberg</p>
                <p>
                  <strong>E-Mail:</strong> info@schuerer-energie.de<br/>
                  <strong>Telefon:</strong> 0217 385 229 38
                </p>
              </div>
            </div>

            <div className="glassmorphism-card p-8">
              <h3 className="text-xl font-bold mb-4">Rechtliche Angaben</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Amtsgericht:</strong> Nürnberg HRB 35887</p>
                <p><strong>USt-ID:</strong> DE363251118</p>
                <p><strong>Geschäftsführer:</strong> Max Schürer</p>
                <p><strong>Gründung:</strong> 2018</p>
                <p className="mt-4 text-xs text-gray-500">
                  Alle Angaben ohne Gewähr. Preise verstehen sich inkl. MwSt. 
                  und können je nach Marktlage variieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default UeberUns;
