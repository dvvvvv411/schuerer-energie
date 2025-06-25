
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import USPSection from '@/components/USPSection';
import TrustSection from '@/components/TrustSection';
import CompanySection from '@/components/CompanySection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PriceCalculator from '@/components/PriceCalculator';
import { companyStructuredData, localBusinessStructuredData } from '@/data/structuredData';

const Index = () => {
  const structuredData = [companyStructuredData, localBusinessStructuredData];

  return (
    <div className="min-h-screen">
      <SEO
        title="Schürer Energie | Heizöl ab 70 Cent/L | Kostenlose Lieferung ab 2.000L"
        description="Deutschlands günstigster Heizöl-Händler seit 2018. Heizöl ab 70 Cent pro Liter. Kostenlose Lieferung ab 2.000L deutschlandweit. Jetzt Preis berechnen!"
        keywords="Heizöl günstig, Heizöl bestellen, Heizöl Lieferung Deutschland, günstige Heizölpreise, Heizöl online kaufen"
        structuredData={structuredData}
        canonicalUrl="https://schuerer-energie.de/"
      />
      <Header />
      <HeroSection />
      <USPSection />
      <TrustSection />
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <PriceCalculator />
        </div>
      </div>
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
