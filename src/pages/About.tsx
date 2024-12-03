import React from 'react';
import { Target, Users, Lightbulb, Trophy, Star, Rocket, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Star className="h-6 w-6 text-[#FFD700]" />,
      title: "Excellence",
      description: "We strive for excellence in every solution we deliver"
    },
    {
      icon: <Rocket className="h-6 w-6 text-[#FFD700]" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#FFD700]" />,
      title: "Trust",
      description: "Building lasting relationships through reliability and integrity"
    },
    {
      icon: <Heart className="h-6 w-6 text-[#FFD700]" />,
      title: "Customer Focus",
      description: "Your success is our success"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Silent Logic AI Labs</h1>
          <p className="text-xl text-gray-200">Pioneering the future of intelligent automation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-[#008080] mr-3" />
              <h2 className="text-2xl font-bold text-[#333333]">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To democratize AI automation by making cutting-edge technology accessible and practical for businesses of all sizes. We're committed to transforming how companies operate, enabling them to achieve more with less through intelligent automation solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-[#008080] mr-3" />
              <h2 className="text-2xl font-bold text-[#333333]">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be the global leader in AI-driven business automation, creating a future where every organization can harness the power of artificial intelligence to reach its full potential. We envision a world where intelligent automation enhances human capabilities rather than replacing them.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-[#008080] mr-3" />
              <h2 className="text-2xl font-bold text-[#333333]">Our Purpose</h2>
            </div>
            <p className="text-gray-600">
              To empower businesses with intelligent automation solutions that drive growth, efficiency, and innovation. We believe in creating technology that serves humanity, making work more meaningful by eliminating repetitive tasks and enabling focus on creative and strategic initiatives.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#003366]/5 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#333333] mb-6">Our Impact</h2>
            <p className="text-gray-600 mb-4">
              Since our founding, we've been dedicated to helping businesses achieve their full potential through intelligent automation. Our solutions have helped companies across the globe transform their operations and achieve unprecedented efficiency.
            </p>
            <p className="text-gray-600">
              We're proud to be at the forefront of the AI revolution, continuously innovating and pushing the boundaries of what's possible with artificial intelligence and automation.
            </p>
          </div>
        </div>

        <div className="bg-[#003366] text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Transform your business operations with our AI-powered automation solutions. Let's discuss how we can help you achieve your goals.
          </p>
          <Link to="/contact" className="inline-block bg-[#FFD700] text-[#003366] px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}