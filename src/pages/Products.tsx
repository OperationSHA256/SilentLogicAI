import React, { useState } from 'react';
import { Bot, Brain, MessageSquare, BarChart, Users, Zap, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'AI Customer Service Bot',
    icon: <MessageSquare className="h-8 w-8 text-[#008080]" />,
    description: 'Intelligent chatbot that handles customer inquiries 24/7 with natural language processing and learning capabilities.',
    features: [
      '24/7 Customer Support',
      'Multi-language Support',
      'Natural Language Processing',
      'Custom Knowledge Base',
      'Analytics Dashboard'
    ],
    popular: true
  },
  {
    id: 2,
    name: 'Smart Lead Generation',
    icon: <Users className="h-8 w-8 text-[#008080]" />,
    description: 'AI-powered lead generation system that identifies and qualifies potential customers across multiple channels.',
    features: [
      'Lead Scoring',
      'Email Campaign Automation',
      'Social Media Integration',
      'CRM Integration',
      'Performance Analytics'
    ],
    popular: false
  },
  {
    id: 3,
    name: 'Business Intelligence Suite',
    icon: <BarChart className="h-8 w-8 text-[#008080]" />,
    description: 'Advanced analytics platform that provides actionable insights from your business data.',
    features: [
      'Predictive Analytics',
      'Custom Dashboards',
      'Data Visualization',
      'Automated Reporting',
      'Trend Analysis'
    ],
    popular: true
  },
  {
    id: 4,
    name: 'Process Automation Engine',
    icon: <Zap className="h-8 w-8 text-[#008080]" />,
    description: 'Streamline your business operations with intelligent workflow automation.',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Task Management',
      'Integration APIs',
      'Custom Workflows'
    ],
    popular: false
  },
  {
    id: 5,
    name: 'AI Decision Support',
    icon: <Brain className="h-8 w-8 text-[#008080]" />,
    description: 'Machine learning system that helps make data-driven business decisions.',
    features: [
      'Risk Analysis',
      'Market Predictions',
      'Scenario Planning',
      'Strategy Recommendations',
      'Performance Tracking'
    ],
    popular: true
  },
  {
    id: 6,
    name: 'Smart Document Processor',
    icon: <Bot className="h-8 w-8 text-[#008080]" />,
    description: 'Automated document processing and data extraction using advanced AI.',
    features: [
      'OCR Technology',
      'Data Extraction',
      'Document Classification',
      'Template Learning',
      'Export Integration'
    ],
    popular: false
  }
];

const ITEMS_PER_PAGE = 6;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">AI Products</h1>
          <p className="text-xl text-gray-200">Transform your business with our cutting-edge AI solutions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-[#003366]/5 rounded-lg">
                    {product.icon}
                  </div>
                  {product.popular && (
                    <span className="px-3 py-1 bg-[#FFD700] text-[#003366] text-sm font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#333333] mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-[#008080]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-[#008080] font-medium">Want to know more?</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 bg-[#008080] text-white rounded-md hover:bg-[#006666] transition-colors duration-300"
                  >
                    Request a demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <span className="text-[#333333]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}