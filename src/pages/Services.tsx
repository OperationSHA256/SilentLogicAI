import React from 'react';
import { Bot, MessageSquare, BrainCircuit, BarChart3, Workflow, HeartHandshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-[#008080]" />,
      title: "AI Customer Support",
      description: "24/7 intelligent support automation with natural language understanding and real-time response capabilities.",
      features: ["Natural Language Processing", "Multi-language Support", "Custom Knowledge Base"]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#008080]" />,
      title: "Chatbot Integration",
      description: "Seamless integration of AI-powered chatbots across multiple platforms and communication channels.",
      features: ["Omnichannel Support", "Custom Branding", "Analytics Dashboard"]
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-[#008080]" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models trained on your data to provide personalized customer experiences.",
      features: ["Predictive Analytics", "Sentiment Analysis", "Behavior Pattern Recognition"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#008080]" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and insights to optimize your customer service operations.",
      features: ["Real-time Metrics", "Custom Reports", "Performance Analytics"]
    },
    {
      icon: <Workflow className="h-12 w-12 text-[#008080]" />,
      title: "Workflow Automation",
      description: "Streamline customer service processes with intelligent workflow automation.",
      features: ["Ticket Routing", "Task Automation", "Integration APIs"]
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-[#008080]" />,
      title: "Customer Experience Optimization",
      description: "Enhance customer satisfaction with data-driven improvements and personalized interactions.",
      features: ["Customer Journey Mapping", "Satisfaction Monitoring", "Feedback Analysis"]
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Comprehensive AI solutions for modern customer service</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[#008080]">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}