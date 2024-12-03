import { useQuery } from '@tanstack/react-query';
import { fetchCryptoData } from '../services/cryptoService';

export function useCryptoData() {
  return useQuery({
    queryKey: ['crypto-prices'],
    queryFn: fetchCryptoData,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
  });
}