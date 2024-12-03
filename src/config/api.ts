export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'https://api.silentlogicai.com/v1',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
  CACHE_TIME: 1000 * 60 * 5, // 5 minutes
  STALE_TIME: 1000 * 60 * 2, // 2 minutes
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAILS: (id: string) => `/products/${id}`,
  },
  CONTACT: {
    SUBMIT: '/contact',
  },
  NEWSLETTER: {
    SUBSCRIBE: '/newsletter/subscribe',
    UNSUBSCRIBE: '/newsletter/unsubscribe',
  },
  ONBOARDING: {
    SUBMIT: '/onboarding/submit',
    GET: (userId: string) => `/onboarding/${userId}`,
  },
} as const;