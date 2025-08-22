
import Header from '../components/Header';
import Footer from '../components/Footer';

const Widerrufsrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Widerrufsrecht</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Widerrufsbelehrung</h2>
                
                <h3 className="text-lg font-semibold mb-2">Widerrufsrecht</h3>
                <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                <p className="mt-2">Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-6">Ausübung des Widerrufsrechts</h3>
                <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p><strong>Gsmart GmbH</strong></p>
                  <p>Rheinpromenade 4 a</p>
                  <p>40789 Monheim a. Rhein</p>
                  <p>E-Mail: info@smartheizoel.de</p>
                </div>
                <p className="mt-2">mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Widerrufsfolgen</h2>
                <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
                
                <p className="mt-4">Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Besondere Hinweise</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Wichtiger Hinweis zu Heizöl-Lieferungen</h3>
                  <p>Das Widerrufsrecht erlischt bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind.</p>
                  <p className="mt-2">Bei Heizöl-Lieferungen kann das Widerrufsrecht unter bestimmten Umständen eingeschränkt sein, insbesondere wenn die Lieferung bereits erfolgt ist und das Heizöl in Ihren Tank eingefüllt wurde.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Muster-Widerrufsformular</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold mb-4">Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück:</p>
                  <div className="space-y-2 text-sm">
                    <p>An: Gsmart GmbH, Rheinpromenade 4 a, 40789 Monheim a. Rhein</p>
                    <p>E-Mail: info@smartheizoel.de</p>
                    <br />
                    <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):</p>
                    <p>_________________________________</p>
                    <br />
                    <p>Bestellt am (*)/erhalten am (*): _________________________________</p>
                    <p>Name des/der Verbraucher(s): _________________________________</p>
                    <p>Anschrift des/der Verbraucher(s): _________________________________</p>
                    <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): _________________________________</p>
                    <p>Datum: _________________________________</p>
                    <br />
                    <p className="text-xs">(*) Unzutreffendes streichen.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Widerrufsrecht;
