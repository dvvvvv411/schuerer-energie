
import { useState, useEffect } from 'react';
import PriceCalculator from './PriceCalculator';
import { Star } from 'lucide-react';

const HeroSection = () => {
  // Handle hash-based navigation to price calculator
  useEffect(() => {
    if (window.location.hash === '#price-calculator') {
      setTimeout(() => {
        const element = document.getElementById('price-calculator');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in text-center">
            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Deutschlands{' '}
                <span className="gradient-text">günstigster</span>{' '}
                Heizöl-Händler seit 2018
              </h1>
              
              <h2 className="text-xl lg:text-2xl xl:text-3xl text-gray-600 font-medium max-w-3xl mx-auto">
                Heizöl ab <span className="text-primary font-bold">70 Cent pro Liter</span> - 
                Kostenlose Lieferung ab 2.000L deutschlandweit
              </h2>
            </div>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-green-50 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">€</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Ab 70 Cent</p>
                  <p className="text-sm text-gray-600">pro Liter</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">🚚</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Kostenlos</p>
                  <p className="text-sm text-gray-600">ab 2.000L</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-purple-50 border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">7+</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Jahre</p>
                  <p className="text-sm text-gray-600">Erfahrung</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4 max-w-2xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-600 mb-6">
                Berechnen Sie jetzt Ihren individuellen Preis und sparen Sie bis zu 30% gegenüber lokalen Anbietern!
              </p>
              {/* Trust Indicator - moved here */}
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">Über 100.000 zufriedene Kunden vertrauen uns</span>
              </div>
            </div>
          </div>

          {/* Price Calculator - Removed width constraint */}
          <div className="w-full">
            <PriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
