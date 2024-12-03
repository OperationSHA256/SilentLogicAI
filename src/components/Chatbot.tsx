import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

// Simulated knowledge base responses - replace with actual API calls later
const knowledgeBase = {
  greetings: [
    "Hello! I'm SilentBot, your AI assistant. How can I help you today?",
    "Hi there! I'm here to help you learn more about Silent Logic AI Labs. What would you like to know?",
  ],
  services: "We offer AI-powered automation solutions including customer service bots, lead generation, business intelligence, process automation, and smart document processing.",
  about: "Silent Logic AI Labs is a leading provider of AI automation solutions, helping businesses streamline their operations and improve customer experience through intelligent automation.",
  pricing: "Our pricing varies based on your specific needs. We offer customized solutions starting from $249/month. Would you like to speak with our team about a tailored solution?",
  contact: "You can reach us through our contact form, by email at info@silentlogicai.com, or by phone at +61 481 942 597. Would you like me to connect you with someone from our team?",
  default: "I'm not sure about that, but I'd be happy to connect you with our team for more detailed information. Would you like to schedule a call?"
};

const generateResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
    return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
  }
  if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('product')) {
    return knowledgeBase.services;
  }
  if (lowerMessage.includes('about') || lowerMessage.includes('company')) {
    return knowledgeBase.about;
  }
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return knowledgeBase.pricing;
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
    return knowledgeBase.contact;
  }
  return knowledgeBase.default;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: Date.now().toString(),
            type: 'bot',
            content: knowledgeBase.greetings[0],
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate API call delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg transition-colors duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#008080] hover:bg-[#006666]'
        } text-white z-50`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed right-4 bottom-20 w-96 bg-white rounded-lg shadow-xl z-40 transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[600px]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#003366] text-white rounded-t-lg">
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              <h3 className="font-semibold">SilentBot</h3>
            </div>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-200 hover:text-white"
            >
              {isMinimized ? <Maximize2 className="h-5 w-5" /> : <Minimize2 className="h-5 w-5" />}
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-[472px] overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-[#008080] text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.type === 'bot' && (
                        <div className="flex items-center mb-1">
                          <Bot className="h-4 w-4 mr-1" />
                          <span className="text-xs font-semibold">SilentBot</span>
                        </div>
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-colors duration-300 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}