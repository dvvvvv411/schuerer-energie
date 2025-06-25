
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import { Truck, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Lieferservice = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32" background="primary">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zuverlässiger <span className="gradient-text">Lieferservice</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schnelle und sichere Lieferung direkt zu Ihnen nach Hause. 
            Deutschlandweite Zustellung mit modernsten Tankfahrzeugen.
          </p>
        </div>
      </PageSection>

      {/* Liefergebiete */}
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Liefergebiete</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard
            title="Nürnberg & Umgebung"
            description="Hauptliefergebiet mit Expresslieferung innerhalb 24 Stunden."
            icon={MapPin}
          >
            <div className="text-sm text-gray-600">
              • Nürnberg, Fürth, Erlangen<br/>
              • Schwabach, Ansbach<br/>
              • Lieferung meist am nächsten Tag
            </div>
          </InfoCard>

          <InfoCard
            title="Bayern"
            description="Komplette Abdeckung Bayerns mit zuverlässigen Lieferzeiten."
            icon={Truck}
          >
            <div className="text-sm text-gray-600">
              • München, Augsburg, Regensburg<br/>
              • Würzburg, Bamberg, Bayreuth<br/>
              • Lieferung binnen 2-3 Werktagen
            </div>
          </InfoCard>

          <InfoCard
            title="Deutschlandweit"
            description="Bundesweite Lieferung für größere Mengen ab 3.000 Liter."
            icon={MapPin}
          >
            <div className="text-sm text-gray-600">
              • Alle Bundesländer<br/>
              • Mindestmenge: 3.000 Liter<br/>
              • Lieferung binnen 5-7 Werktagen
            </div>
          </InfoCard>
        </div>
      </PageSection>

      {/* Lieferablauf */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">So läuft Ihre Lieferung ab</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Bestellung</h3>
              <p className="text-gray-600">
                Online oder telefonisch bestellen. Wir bestätigen Ihren Termin sofort.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Ankündigung</h3>
              <p className="text-gray-600">
                24h vor Lieferung erhalten Sie eine SMS/E-Mail mit dem Zeitfenster.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Lieferung</h3>
              <p className="text-gray-600">
                Professionelle Befüllung Ihres Tanks durch geschulte Fahrer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Abrechnung</h3>
              <p className="text-gray-600">
                Rechnung per E-Mail oder Post. Zahlung bequem per Überweisung.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Lieferkonditionen */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Lieferkonditionen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Mindestmengen</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Nürnberg & Umgebung:</span>
                  <span className="font-bold">500 Liter</span>
                </div>
                <div className="flex justify-between">
                  <span>Bayern:</span>
                  <span className="font-bold">1.000 Liter</span>
                </div>
                <div className="flex justify-between">
                  <span>Deutschlandweit:</span>
                  <span className="font-bold">3.000 Liter</span>
                </div>
              </div>
            </div>

            <div className="glassmorphism-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Lieferzeiten</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Montag - Freitag: 7:00 - 17:00 Uhr</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Samstag: 8:00 - 14:00 Uhr</span>
                </div>
                <div className="text-sm text-gray-600 mt-3">
                  Express-Service nach Absprache auch außerhalb der Zeiten möglich.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="glassmorphism-card p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4">🚚 Kostenlose Lieferung</h3>
              <p className="text-lg mb-4">ab 2.000 Liter deutschlandweit</p>
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt bestellen
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Lieferservice;
