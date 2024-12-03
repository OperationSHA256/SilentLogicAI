import React from 'react';
import { Building2, ShoppingBag, Stethoscope, GraduationCap, Briefcase, Factory, Truck, DollarSign, Bot, Zap, Target, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: <Building2 className="h-8 w-8 text-[#008080]" />,
    title: "Real Estate",
    description: "Automate property management, tenant screening, and market analysis with AI-powered solutions.",
    useCases: [
      "Automated Property Valuation",
      "Smart Lead Qualification",
      "Maintenance Request Processing",
      "Market Trend Analysis"
    ]
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-[#008080]" />,
    title: "Retail & E-commerce",
    description: "Enhance customer experience and optimize operations with intelligent retail automation.",
    useCases: [
      "Inventory Management",
      "Customer Service Automation",
      "Demand Forecasting",
      "Personalized Marketing"
    ]
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-[#008080]" />,
    title: "Healthcare",
    description: "Streamline patient care and administrative tasks with AI-powered healthcare solutions.",
    useCases: [
      "Appointment Scheduling",
      "Patient Record Management",
      "Insurance Verification",
      "Treatment Plan Analysis"
    ]
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-[#008080]" />,
    title: "Education",
    description: "Transform learning experiences with intelligent educational automation tools.",
    useCases: [
      "Student Enrollment Processing",
      "Course Management",
      "Performance Analytics",
      "Administrative Automation"
    ]
  },
  {
    icon: <Briefcase className="h-8 w-8 text-[#008080]" />,
    title: "Professional Services",
    description: "Optimize client services and business operations with smart automation solutions.",
    useCases: [
      "Client Onboarding",
      "Document Processing",
      "Time & Billing Automation",
      "Project Management"
    ]
  },
  {
    icon: <Factory className="h-8 w-8 text-[#008080]" />,
    title: "Manufacturing",
    description: "Enhance production efficiency and quality control with AI-driven manufacturing solutions.",
    useCases: [
      "Quality Control Automation",
      "Supply Chain Optimization",
      "Predictive Maintenance",
      "Production Planning"
    ]
  },
  {
    icon: <Truck className="h-8 w-8 text-[#008080]" />,
    title: "Logistics",
    description: "Optimize supply chain and delivery operations with intelligent logistics automation.",
    useCases: [
      "Route Optimization",
      "Inventory Tracking",
      "Shipment Processing",
      "Fleet Management"
    ]
  },
  {
    icon: <DollarSign className="h-8 w-8 text-[#008080]" />,
    title: "Financial Services",
    description: "Streamline financial operations and compliance with AI-powered solutions.",
    useCases: [
      "Transaction Processing",
      "Risk Assessment",
      "Compliance Monitoring",
      "Customer Onboarding"
    ]
  }
];

const commonFeatures = [
  {
    icon: <Bot className="h-12 w-12 text-[#008080]" />,
    title: "AI-Powered Automation",
    description: "Leverage advanced artificial intelligence to automate complex business processes"
  },
  {
    icon: <Zap className="h-12 w-12 text-[#008080]" />,
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows"
  },
  {
    icon: <Target className="h-12 w-12 text-[#008080]" />,
    title: "Custom Solutions",
    description: "Tailored automation solutions designed for your specific industry needs"
  }
];

export default function Solutions() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-xl text-gray-200">Tailored AI automation solutions for your industry</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Common Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {commonFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#003366]/5 rounded-lg">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#333333] mb-2">Use Cases:</h4>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-[#008080]">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#008080] hover:text-[#006666] font-medium"
                >
                  Learn More
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-[#003366] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Industry?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how our AI solutions can revolutionize your business operations.
              </p>
              <Link
                to="/onboarding"
                className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-[#003366] rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300"
              >
                Start Your Journey
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