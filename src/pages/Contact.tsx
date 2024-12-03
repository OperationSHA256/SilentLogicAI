import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Bot } from 'lucide-react';
import { useContactSubmit, useNewsletterSubscribe } from '../hooks/useApi';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { mutate: submitContact, isLoading: isSubmitting } = useContactSubmit();
  const { mutate: subscribeNewsletter, isLoading: isSubscribing } = useNewsletterSubscribe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(formData, {
      onSuccess: () => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
      },
      onError: () => {
        toast.error('Failed to send message. Please try again.');
      }
    });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    subscribeNewsletter(newsletterEmail, {
      onSuccess: () => {
        toast.success('Successfully subscribed to newsletter!');
        setNewsletterEmail('');
      },
      onError: () => {
        toast.error('Failed to subscribe. Please try again.');
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch with our team of AI experts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#333333] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our AI solutions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#008080] mr-4" />
                <div>
                  <h3 className="font-semibold text-[#333333]">Email</h3>
                  <p className="text-gray-600">info@silentlogicai.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#008080] mr-4" />
                <div>
                  <h3 className="font-semibold text-[#333333]">Phone</h3>
                  <p className="text-gray-600">+61 481 942 597</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#008080] mr-4" />
                <div>
                  <h3 className="font-semibold text-[#333333]">Location</h3>
                  <p className="text-gray-600">Gold Coast, Australia</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-12 bg-[#003366] rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-[#FFD700] mr-3" />
                <h3 className="text-xl font-bold">Stay Updated</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest updates on AI automation, industry insights, and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-[#FFD700] text-[#003366] px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-50 whitespace-nowrap"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  Join 5,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#008080] focus:border-[#008080]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#008080] focus:border-[#008080]"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#008080] focus:border-[#008080]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#008080] focus:border-[#008080]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#008080] hover:bg-[#006666] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008080] disabled:opacity-50"
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}