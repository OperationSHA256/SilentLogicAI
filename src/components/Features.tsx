import React from 'react';
import { BarChart, Shield, Clock, Users } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#008080] font-semibold">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-[#333333] sm:text-4xl">
            Transform Your Customer Experience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI solutions deliver exceptional customer service while reducing operational costs.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative bg-white p-6 rounded-lg">
              <div className="flex justify-center">
                <BarChart className="h-12 w-12 text-[#008080]" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-[#333333] text-center">Data-Driven Insights</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Advanced analytics for better decision-making
              </p>
            </div>

            <div className="relative bg-white p-6 rounded-lg">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-[#008080]" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-[#333333] text-center">Secure Platform</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Enterprise-grade security protocols
              </p>
            </div>

            <div className="relative bg-white p-6 rounded-lg">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-[#008080]" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-[#333333] text-center">24/7 Support</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Round-the-clock automated assistance
              </p>
            </div>

            <div className="relative bg-white p-6 rounded-lg">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-[#008080]" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-[#333333] text-center">Scalable Solutions</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Grows with your business needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}