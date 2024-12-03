import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useCryptoData } from '../hooks/useCryptoData';
import { formatCurrency } from '../utils/formatters';

export default function CryptoTicker() {
  const { data: cryptoData, isError } = useCryptoData();

  if (isError || !cryptoData) {
    return null;
  }

  const tickerContent = cryptoData.map((crypto) => (
    <div
      key={crypto.id}
      className="flex items-center space-x-2 mr-8 whitespace-nowrap"
    >
      <span className="font-medium">{crypto.symbol.toUpperCase()}</span>
      <span>{formatCurrency(crypto.current_price)}</span>
      <span
        className={`flex items-center ${
          crypto.price_change_percentage_24h >= 0
            ? 'text-green-400'
            : 'text-red-400'
        }`}
      >
        {crypto.price_change_percentage_24h >= 0 ? (
          <TrendingUp className="h-4 w-4 mr-1" />
        ) : (
          <TrendingDown className="h-4 w-4 mr-1" />
        )}
        {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
      </span>
    </div>
  ));

  return (
    <div className="bg-[#003366] text-white py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden">
          <div className="ticker-track">
            <div className="ticker-content">
              {tickerContent}
            </div>
            <div className="ticker-content">
              {tickerContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}