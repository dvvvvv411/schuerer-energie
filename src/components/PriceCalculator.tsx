
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MapPin, Euro, Truck } from 'lucide-react';

const PriceCalculator = () => {
  const [fuelType, setFuelType] = useState('standard');
  const [liters, setLiters] = useState<number>(3000);
  const [postalCode, setPostalCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const prices = {
    standard: 0.70,
    premium: 0.73
  };

  const calculateDeliveryFee = (literAmount: number) => {
    return literAmount >= 2000 ? 0 : 45; // 45€ Liefergebühr unter 2000L
  };

  const calculateTotal = () => {
    const basePrice = liters * prices[fuelType as keyof typeof prices];
    const deliveryFee = calculateDeliveryFee(liters);
    return basePrice + deliveryFee;
  };

  const handleOrder = async () => {
    setIsLoading(true);
    
    // Simuliere API-Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const orderData = {
      shop_id: "f5184df5-8d94-4b65-9710-806b450632ba",
      product: fuelType === "standard" ? "standard_heizoel" : "premium_heizoel",
      liters: liters,
      price_per_liter: prices[fuelType as keyof typeof prices],
      total_amount: calculateTotal(),
      delivery_fee: calculateDeliveryFee(liters),
      postal_code: postalCode
    };

    console.log('Order Data:', orderData);
    
    // In der realen Implementation würde hier der Token-Request erfolgen
    // und dann die Weiterleitung zu: https://checkout.schuerer-energie.de/checkout?token={token}
    
    setIsLoading(false);
  };

  const deliveryFee = calculateDeliveryFee(liters);
  const basePrice = liters * prices[fuelType as keyof typeof prices];
  const totalPrice = calculateTotal();

  return (
    <div className="glassmorphism-card p-8 animate-scale-in sticky top-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Sofort-Preisrechner
          </h3>
          <p className="text-gray-600">
            Ihr individueller Preis in Sekunden
          </p>
        </div>

        {/* Fuel Type Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-gray-900">
            Heizöl-Typ wählen
          </Label>
          <RadioGroup value={fuelType} onValueChange={setFuelType} className="space-y-3">
            <div className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-colors">
              <RadioGroupItem value="standard" id="standard" />
              <div className="flex-1">
                <Label htmlFor="standard" className="cursor-pointer">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Standard Heizöl</span>
                    <span className="text-primary font-bold">0,70 €/L</span>
                  </div>
                  <p className="text-sm text-gray-500">Bewährte Qualität zum besten Preis</p>
                </Label>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-colors">
              <RadioGroupItem value="premium" id="premium" />
              <div className="flex-1">
                <Label htmlFor="premium" className="cursor-pointer">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Premium Heizöl</span>
                    <span className="text-primary font-bold">0,73 €/L</span>
                  </div>
                  <p className="text-sm text-gray-500">Höchste Qualität mit Additiven</p>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Quantity Input */}
        <div className="space-y-2">
          <Label htmlFor="liters" className="text-base font-semibold text-gray-900">
            Menge in Litern
          </Label>
          <div className="relative">
            <Input
              id="liters"
              type="number"
              min="500"
              step="500"
              value={liters}
              onChange={(e) => setLiters(Number(e.target.value) || 0)}
              placeholder="z.B. 3000"
              className="text-lg pl-12"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Euro className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <p className="text-sm text-gray-500">Mindestbestellmenge: 500 Liter</p>
        </div>

        {/* Postal Code Input */}
        <div className="space-y-2">
          <Label htmlFor="postal-code" className="text-base font-semibold text-gray-900">
            Ihre Postleitzahl
          </Label>
          <div className="relative">
            <Input
              id="postal-code"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Ihre PLZ"
              className="text-lg pl-12"
              maxLength={5}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <MapPin className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Grundpreis ({liters} L)</span>
            <span className="font-semibold">{basePrice.toFixed(2)} €</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">Lieferung</span>
            </div>
            <span className={`font-semibold ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
              {deliveryFee === 0 ? 'KOSTENLOS' : `${deliveryFee.toFixed(2)} €`}
            </span>
          </div>
          
          {deliveryFee === 0 && (
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
              🎉 Sie sparen {45} € Lieferkosten!
            </div>
          )}
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Gesamtpreis</span>
              <span className="text-3xl font-bold text-primary">{totalPrice.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleOrder}
          disabled={!postalCode || liters < 500 || isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-xl font-semibold transition-all hover-scale animate-float"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Wird verarbeitet...</span>
            </div>
          ) : (
            'Jetzt bestellen'
          )}
        </Button>

        <p className="text-center text-sm text-gray-500">
          Kostenloser und unverbindlicher Preischeck
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;
