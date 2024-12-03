import React from 'react';
import { Mail, Ticket, Calendar, Share2, AtSign, MessageSquare } from 'lucide-react';

export default function Demos() {
  const demos = [
    {
      icon: <Mail className="h-8 w-8 text-[#008080]" />,
      title: "Lead Capture & CRM Integration Demo",
      description: "Experience seamless lead capture and automatic CRM integration. Watch as customer data flows effortlessly into your system, with AI-powered lead scoring and qualification.",
      status: "Live Demo"
    },
    {
      icon: <Ticket className="h-8 w-8 text-[#008080]" />,
      title: "Customer Support Ticket Management Demo",
      description: "See our AI in action as it automatically categorizes, prioritizes, and routes support tickets. Includes smart response suggestions and resolution time predictions.",
      status: "Interactive Demo"
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#008080]" />,
      title: "Appointment Setting Demo",
      description: "Watch our AI handle complex scheduling scenarios, managing multiple time zones, availability checks, and automated reminders with natural language processing.",
      status: "Live Demo"
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#008080]" />,
      title: "AI Automation Outreach",
      description: "Discover how our AI automates and optimizes multi-channel outreach campaigns, ensuring consistent brand messaging across all touchpoints.",
      status: "Interactive Demo"
    },
    {
      icon: <AtSign className="h-8 w-8 text-[#008080]" />,
      title: "AI Automation Outreach - Personalized Emails",
      description: "Experience AI-driven email personalization that goes beyond simple mail merge, creating truly engaging content based on recipient behavior and preferences.",
      status: "Live Demo"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#008080]" />,
      title: "AI Automation Outreach - Social Media",
      description: "See how our AI manages social media engagement, automatically generating relevant content and responding to interactions while maintaining brand voice.",
      status: "Interactive Demo"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Interactive Demos</h1>
          <p className="text-xl text-gray-200">Experience our AI solutions in action with these interactive demonstrations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-[#003366]/5 rounded-lg">
                    {demo.icon}
                  </div>
                  <span className="text-sm font-medium text-[#008080] bg-[#008080]/10 px-3 py-1 rounded-full">
                    {demo.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">{demo.title}</h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                <button className="w-full bg-[#003366] text-white px-4 py-2 rounded-md hover:bg-[#002244] transition-colors duration-300">
                  Launch Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}