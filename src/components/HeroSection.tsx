
import { useState } from 'react';
import PriceCalculator from './PriceCalculator';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in">
            {/* Trust Indicator */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Über 10.000 zufriedene Kunden vertrauen uns</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Deutschlands{' '}
                <span className="gradient-text">günstigster</span>{' '}
                Heizöl-Händler seit 2018
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-600 font-medium">
                Heizöl ab <span className="text-primary font-bold">70 Cent pro Liter</span> - 
                Kostenlose Lieferung ab 2.000L deutschlandweit
              </h2>
            </div>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-green-50 border border-green-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">€</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ab 70 Cent</p>
                  <p className="text-sm text-gray-600">pro Liter</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🚚</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Kostenlos</p>
                  <p className="text-sm text-gray-600">ab 2.000L</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">6+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jahre</p>
                  <p className="text-sm text-gray-600">Erfahrung</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4">
              <p className="text-lg text-gray-600 mb-4">
                Berechnen Sie jetzt Ihren individuellen Preis und sparen Sie bis zu 30% gegenüber lokalen Anbietern!
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">2.847 Kunden</span> haben diese Woche bestellt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Price Calculator - 40% */}
          <div className="lg:col-span-2">
            <PriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
