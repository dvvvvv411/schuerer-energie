
import { useState } from 'react';
import { OrderService, OrderData } from '@/services/orderService';
import { useToast } from '@/hooks/use-toast';

export const useCheckout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const processOrder = async (orderData: OrderData) => {
    setIsProcessing(true);
    
    try {
      console.log('Processing order:', orderData);
      
      // Call the API to get the token
      const token = await OrderService.createOrderToken(orderData);
      
      console.log('Received token:', token);
      
      // Show success message
      toast({
        title: "Bestellung wird verarbeitet",
        description: "Sie werden zur Kasse weitergeleitet...",
      });
      
      // Redirect to checkout
      setTimeout(() => {
        OrderService.redirectToCheckout(token);
      }, 1500);
      
    } catch (error) {
      console.error('Order processing failed:', error);
      
      toast({
        title: "Fehler bei der Bestellung",
        description: error instanceof Error ? error.message : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
      
      setIsProcessing(false);
    }
  };

  return {
    processOrder,
    isProcessing,
  };
};
