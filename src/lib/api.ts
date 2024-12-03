import axios from 'axios';
import { z } from 'zod';

// Create axios instance with default config
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.silentlogicai.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API Response Types
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  company: z.string().optional(),
  role: z.enum(['user', 'admin']),
  createdAt: z.string(),
});

export const OnboardingResponseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  industry: z.string(),
  tasks: z.array(z.string()),
  hoursPerWeek: z.number(),
  teamSize: z.number(),
  previousAutomation: z.boolean(),
  challenges: z.string(),
  timeline: z.string(),
  budget: z.string(),
  createdAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;
export type OnboardingResponse = z.infer<typeof OnboardingResponseSchema>;

// API Functions
export const apiClient = {
  auth: {
    login: async (email: string, password: string) => {
      const { data } = await api.post('/auth/login', { email, password });
      return UserSchema.parse(data.user);
    },
    register: async (email: string, password: string, name: string) => {
      const { data } = await api.post('/auth/register', { email, password, name });
      return UserSchema.parse(data.user);
    },
    logout: async () => {
      await api.post('/auth/logout');
      localStorage.removeItem('authToken');
    },
  },
  onboarding: {
    submitResponses: async (responses: Omit<OnboardingResponse, 'id' | 'userId' | 'createdAt'>) => {
      const { data } = await api.post('/onboarding/submit', responses);
      return OnboardingResponseSchema.parse(data);
    },
    getResponses: async (userId: string) => {
      const { data } = await api.get(`/onboarding/${userId}`);
      return OnboardingResponseSchema.parse(data);
    },
  },
  user: {
    getProfile: async () => {
      const { data } = await api.get('/user/profile');
      return UserSchema.parse(data);
    },
    updateProfile: async (updates: Partial<User>) => {
      const { data } = await api.patch('/user/profile', updates);
      return UserSchema.parse(data);
    },
  },
};