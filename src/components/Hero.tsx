import React from 'react';
import { Bot, MessageSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-[#003366] pt-16">
      {/* AI-themed background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#003366]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/95 to-[#008080]/90" />
      </div>
      
      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-pulse" style={{ animationDuration: '3.5s' }} />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent animate-pulse" style={{ animationDuration: '4.5s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-2 sm:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Silent Logic AI Labs
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Revolutionizing customer support through intelligent automation. We transform your customer service operations with cutting-edge AI solutions.
            </p>
            <div className="mt-8">
              <Link
                to="/onboarding"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#003366] bg-[#FFD700] hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72">
              {/* Neural Network Animation */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#008080" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Animated Circles */}
                  {[...Array(12)].map((_, i) => (
                    <circle
                      key={i}
                      cx={100 + Math.cos(i * Math.PI / 6) * 70}
                      cy={100 + Math.sin(i * Math.PI / 6) * 70}
                      r="4"
                      fill="#FFD700"
                      filter="url(#glow)"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                  
                  {/* Connecting Lines */}
                  {[...Array(12)].map((_, i) => (
                    <path
                      key={`line-${i}`}
                      d={`M 100 100 L ${100 + Math.cos(i * Math.PI / 6) * 70} ${100 + Math.sin(i * Math.PI / 6) * 70}`}
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      filter="url(#glow)"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                  
                  {/* Central Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="12"
                    fill="#008080"
                    filter="url(#glow)"
                    className="animate-pulse"
                  />
                </svg>
              </div>
              
              {/* Multiple Rotating Outer Rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={`ring-${i}`}
                  className="absolute inset-0 animate-spin"
                  style={{
                    animationDuration: `${20 + i * 5}s`,
                    transform: `scale(${1 - i * 0.1})`,
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="1"
                      strokeDasharray="8 8"
                      className="opacity-30"
                      filter="url(#glow)"
                    />
                  </svg>
                </div>
              ))}
              
              {/* Pulsing Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: '3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-5 text-white">
            <Bot className="h-7 w-7 text-[#FFD700] mb-3" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Support</h3>
            <p className="text-sm text-gray-300">Intelligent automation that understands and responds to customer needs 24/7.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-5 text-white">
            <MessageSquare className="h-7 w-7 text-[#FFD700] mb-3" />
            <h3 className="text-lg font-semibold mb-2">Smart Conversations</h3>
            <p className="text-sm text-gray-300">Natural language processing for human-like customer interactions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-5 text-white">
            <Zap className="h-7 w-7 text-[#FFD700] mb-3" />
            <h3 className="text-lg font-semibold mb-2">Rapid Resolution</h3>
            <p className="text-sm text-gray-300">Swift and accurate solutions to customer inquiries and issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
}