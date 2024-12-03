import { useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { apiService } from '../services/api';
import { API_ENDPOINTS } from '../config/api';
import type { OnboardingResponse, ContactRequest, ApiResponse } from '../types/api';

// Products hooks
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => apiService.get(API_ENDPOINTS.PRODUCTS.LIST),
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => apiService.get(API_ENDPOINTS.PRODUCTS.DETAILS(id)),
    enabled: !!id,
    retry: 2,
  });
};

// Contact form hook
export const useContactSubmit = () => {
  return useMutation<ApiResponse<void>, Error, ContactRequest>({
    mutationFn: (data) => apiService.post(API_ENDPOINTS.CONTACT.SUBMIT, data),
    retry: 1,
  });
};

// Newsletter hook
export const useNewsletterSubscribe = () => {
  return useMutation<ApiResponse<void>, Error, string>({
    mutationFn: (email) => 
      apiService.post(API_ENDPOINTS.NEWSLETTER.SUBSCRIBE, { email }),
    retry: 1,
  });
};

// Onboarding hook
type OnboardingData = Omit<OnboardingResponse, 'id' | 'userId' | 'createdAt'>;

export const useSubmitOnboarding = (
  options?: UseMutationOptions<ApiResponse<OnboardingResponse>, Error, OnboardingData>
) => {
  return useMutation<ApiResponse<OnboardingResponse>, Error, OnboardingData>({
    mutationFn: (data) => 
      apiService.post(API_ENDPOINTS.ONBOARDING.SUBMIT, data),
    retry: 1,
    ...options,
  });
};