
import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
                <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen der Gsmart GmbH (nachfolgend "Verkäufer") und ihren Kunden (nachfolgend "Käufer"). Abweichende Bedingungen des Käufers werden nicht anerkannt, es sei denn, der Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Vertragsschluss</h2>
                <p>Die Darstellung der Produkte auf der Website stellt kein bindendes Angebot des Verkäufers dar. Der Käufer gibt durch das Absenden einer Bestellung ein verbindliches Angebot zum Kauf der bestellten Waren ab. Der Verkäufer kann dieses Angebot innerhalb von 5 Tagen annehmen.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
                <div className="space-y-4">
                  <p>Die angegebenen Preise sind Endpreise und enthalten die gesetzliche Umsatzsteuer. Zusätzliche Liefer- und Versandkosten werden gesondert ausgewiesen.</p>
                  <p>Die Zahlung erfolgt wahlweise per:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Vorkasse per Überweisung</li>
                    <li>Rechnung (nur bei Geschäftskunden nach Bonitätsprüfung)</li>
                    <li>Barzahlung bei Lieferung</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Lieferung und Lieferzeiten</h2>
                <div className="space-y-4">
                  <p>Die Lieferung erfolgt deutschlandweit. Ab einer Bestellmenge von 2.000 Litern ist die Lieferung kostenfrei.</p>
                  <p>Die Lieferzeit beträgt in der Regel 3-5 Werktage nach Zahlungseingang. Bei Vorkasse erfolgt die Lieferung nach Zahlungseingang.</p>
                  <p>Der Verkäufer ist zu Teillieferungen berechtigt, sofern dies für den Käufer zumutbar ist.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Eigentumsvorbehalt</h2>
                <p>Die gelieferte Ware bleibt bis zur vollständigen Bezahlung aller Forderungen aus dem Liefervertrag Eigentum des Verkäufers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Gewährleistung</h2>
                <p>Es gelten die gesetzlichen Gewährleistungsbestimmungen. Gewährleistungsansprüche verjähren bei Verbrauchern in 2 Jahren, bei Unternehmern in einem Jahr ab Ablieferung der Ware.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Haftung</h2>
                <p>Die Haftung des Verkäufers für Schäden ist ausgeschlossen, soweit nachfolgend nichts anderes bestimmt ist. Dies gilt auch für die Haftung der gesetzlichen Vertreter und Erfüllungsgehilfen des Verkäufers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Schlussbestimmungen</h2>
                <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten ist Düsseldorf, sofern der Käufer Kaufmann ist.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AGB;
