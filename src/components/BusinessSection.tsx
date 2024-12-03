import React from 'react';
import { Bot, Zap, Target, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessSection() {
  const solutions = [
    {
      title: "Business Process Automation",
      items: [
        "Lead Capture & CRM Integration",
        "Customer Support Ticket Management",
        "Appointment Setting Automation"
      ]
    },
    {
      title: "AI-Powered Outreach",
      items: [
        "Multi-Channel Campaign Automation",
        "Personalized Email Sequences",
        "Social Media Engagement"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-[#008080] font-semibold">What Business Are We In?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            Empowering Business Growth Through AI Automation
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our business leverages AI-powered automation to streamline your cold outreach efforts, attract new clients, and optimize conversions. Helping your business grow efficiently and effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#003366]/5 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-[#003366] mb-6">{solution.title}</h3>
              <ul className="space-y-4">
                {solution.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Zap className="h-5 w-5 text-[#008080] mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#003366] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                Experience how our AI solutions can help your business become far more efficient and scale your operations effortlessly.
              </p>
              <Link
                to="/demos"
                className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-[#003366] rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300"
              >
                Try Our Demos
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <Bot className="h-32 w-32 text-[#008080] opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}