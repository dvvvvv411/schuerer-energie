
import { Star, Quote } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Maria Schmidt",
      location: "München",
      rating: 5,
      text: "Fantastischer Service! Das Heizöl wurde pünktlich geliefert und der Preis war unschlagbar. Werden definitiv wieder bestellen.",
      date: "vor 2 Wochen"
    },
    {
      name: "Thomas Weber",
      location: "Hamburg",
      rating: 5,
      text: "Sehr professionelle Abwicklung und günstige Preise. Die Bestellung war einfach und die Lieferung war kostenlos ab 2000L.",
      date: "vor 1 Monat"
    },
    {
      name: "Andrea Müller",
      location: "Berlin",
      rating: 5,
      text: "Seit 3 Jahren unser Heizöl-Lieferant. Immer zuverlässig, pünktlich und zu fairen Preisen. Absolute Empfehlung!",
      date: "vor 3 Wochen"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Was unsere <span className="gradient-text">Kunden sagen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 100.000 zufriedene Kunden vertrauen bereits auf unseren Service. 
            Lesen Sie selbst, was sie über uns sagen.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center glassmorphism-card p-6 animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-gray-600">Kundenbewertung</div>
          </div>

          <div className="text-center glassmorphism-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600 mb-2">Weiterempfehlung</div>
            <div className="text-sm text-gray-500">von unseren Kunden</div>
          </div>

          <div className="text-center glassmorphism-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">&lt;24h</div>
            <div className="text-gray-600 mb-2">Lieferzeit</div>
            <div className="text-sm text-gray-500">deutschlandweit</div>
          </div>

          <div className="text-center glassmorphism-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600 mb-2">Sicherheit</div>
            <div className="text-sm text-gray-500">geprüfte Qualität</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glassmorphism-card p-8 relative hover:shadow-2xl transition-all duration-500 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Vertrauen Sie auf unsere Sicherheit und Qualität</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">SSL</div>
            <div className="text-2xl font-bold text-gray-400">TÜV</div>
            <div className="text-2xl font-bold text-gray-400">DIN EN</div>
            <div className="text-2xl font-bold text-gray-400">ISO 9001</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
