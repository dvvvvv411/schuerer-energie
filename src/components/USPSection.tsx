
import { Euro, Truck, Shield } from 'lucide-react';

const USPSection = () => {
  const usps = [
    {
      icon: Euro,
      title: "Ab 70 Cent pro Liter",
      description: "Garantiert günstige Preise für Standard- und Premium-Heizöl durch optimierte Beschaffung und direkte Zusammenarbeit mit Raffinerien.",
      highlight: "Bis zu 30% günstiger"
    },
    {
      icon: Truck,
      title: "Kostenlose Lieferung ab 2.000L",
      description: "Deutschlandweite kostenfreie Anlieferung bei größeren Bestellungen. Schnell, zuverlässig und pünktlich zu Ihrem Wunschtermin.",
      highlight: "Deutschlandweit"
    },
    {
      icon: Shield,
      title: "Seit 2018 vertrauenswürdig",
      description: "Über 7 Jahre Erfahrung und hunderttausende zufriedene Kunden sprechen für unsere Qualität und Zuverlässigkeit im Heizöl-Handel.",
      highlight: "100.000+ Kunden"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Warum <span className="gradient-text">Gsmart</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seit 2018 sind wir Ihr vertrauensvoller Partner für günstiges Heizöl in ganz Deutschland. 
            Überzeugen Sie sich von unseren unschlagbaren Vorteilen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div 
                key={index}
                className="group glassmorphism-card p-8 text-center hover:shadow-2xl transition-all duration-500 hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {usp.highlight}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {usp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-primary to-red-600 mx-auto mt-6 group-hover:w-20 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-primary mb-2">100.000+</div>
            <div className="text-gray-600">Zufriedene Kunden</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-primary mb-2">50M+</div>
            <div className="text-gray-600">Liter geliefert</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-primary mb-2">7+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600">Kundenzufriedenheit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
