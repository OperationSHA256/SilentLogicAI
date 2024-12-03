export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  status: number;
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular: boolean;
  createdAt: string;
  updatedAt: string;
}

// Contact Types
export interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  subscribed: boolean;
  createdAt: string;
}

// Onboarding Types
export interface OnboardingResponse {
  id: string;
  userId: string;
  industry: string;
  tasks: string[];
  hoursPerWeek: number;
  teamSize: number;
  previousAutomation: boolean;
  challenges: string;
  timeline: string;
  budget: string;
  createdAt: string;
}