
export interface OrderData {
  shop_id: string;
  product: string;
  liters: number;
  price_per_liter: number;
  total_amount: number;
  delivery_fee: number;
  postal_code: string;
}

export interface TokenResponse {
  token: string;
}

export class OrderService {
  private static readonly API_BASE_URL = 'https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1';
  private static readonly CHECKOUT_BASE_URL = 'https://checkout.schuerer-energie.de/checkout';

  static async createOrderToken(orderData: OrderData): Promise<string> {
    const response = await fetch(`${this.API_BASE_URL}/get-order-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create order token: ${response.status} ${response.statusText}`);
    }

    const data: TokenResponse = await response.json();
    return data.token;
  }

  static getCheckoutUrl(token: string): string {
    return `${this.CHECKOUT_BASE_URL}?token=${token}`;
  }

  static redirectToCheckout(token: string): void {
    window.location.href = this.getCheckoutUrl(token);
  }
}
