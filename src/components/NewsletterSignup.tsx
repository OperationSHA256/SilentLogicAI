import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function NewsletterSignup({ variant = 'default' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
    setLoading(false);
  };

  if (variant === 'blog') {
    return (
      <div className="bg-[#003366] text-white rounded-xl p-8 my-12">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 text-[#FFD700]" />
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our monthly newsletter for the latest updates on AI automation, 
            industry trends, and exclusive insights from our experts.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#008080]"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#008080] text-white px-6 py-2 rounded-md hover:bg-[#006666] transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center text-sm text-gray-300">
            <CheckCircle className="h-4 w-4 mr-2" />
            Join 5,000+ subscribers
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#003366]/10 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-[#003366] mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">
        Get monthly updates on AI automation and industry insights.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-transparent"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? '...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}