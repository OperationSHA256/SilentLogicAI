export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export async function fetchCryptoData(): Promise<CryptoData[]> {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false'
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch crypto data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
}