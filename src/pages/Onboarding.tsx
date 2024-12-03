import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Bot, Loader2, MessageSquare } from 'lucide-react';
import { useMount } from 'react-use';
import { useSubmitOnboarding } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface Message {
  text: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

const initialMessages = [
  {
    text: "Hello! I'm your AI consultant from Silent Logic. I'm here to understand your business needs and help identify automation opportunities. Would you like to start our discovery call?",
    type: 'ai' as const,
    timestamp: new Date()
  }
];

const questions = [
  "What industry is your business in?",
  "What are the main repetitive tasks that take up most of your time?",
  "How many hours per week do you spend on these tasks?",
  "What's your current team size?",
  "Have you tried any automation solutions before?",
  "What's your biggest business challenge right now?",
  "What's your target timeline for implementing automation?",
  "What's your budget range for automation solutions?"
];

export default function Onboarding() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isListening, setIsListening] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);
  const navigate = useNavigate();

  const { mutate: submitOnboarding, isLoading: isSubmitting } = useSubmitOnboarding({
    onSuccess: () => {
      toast.success('Thank you for completing the discovery call!');
      navigate('/dashboard');
    },
  });

  useMount(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.continuous = true;
      recognition.current.interimResults = false;

      recognition.current.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        handleUserInput(transcript);
      };

      recognition.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.current.onend = () => {
        if (isListening) {
          recognition.current?.start();
        }
      };
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleListening = () => {
    if (!recognition.current) {
      toast.error('Speech recognition is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognition.current.stop();
    } else {
      recognition.current.start();
    }
    setIsListening(!isListening);
  };

  const handleUserInput = async (input: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      text: input,
      type: 'user',
      timestamp: new Date()
    }]);

    // Store response
    setResponses(prev => ({
      ...prev,
      [questions[currentQuestion]]: input
    }));

    setIsProcessing(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (currentQuestion < questions.length - 1) {
      // Add next question
      setMessages(prev => [...prev, {
        text: questions[currentQuestion + 1],
        type: 'ai',
        timestamp: new Date()
      }]);
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Submit responses
      const formattedResponses = {
        industry: responses[questions[0]] || '',
        tasks: [responses[questions[1]] || ''],
        hoursPerWeek: parseInt(responses[questions[2]] || '0'),
        teamSize: parseInt(responses[questions[3]] || '0'),
        previousAutomation: responses[questions[4]]?.toLowerCase().includes('yes') || false,
        challenges: responses[questions[5]] || '',
        timeline: responses[questions[6]] || '',
        budget: responses[questions[7]] || ''
      };

      submitOnboarding(formattedResponses);

      setMessages(prev => [...prev, {
        text: "Thank you for sharing all this information! I'll analyze your needs and prepare a customized automation proposal. Would you like to schedule a follow-up call with our team to discuss the specific solutions we can offer?",
        type: 'ai',
        timestamp: new Date()
      }]);
    }

    setIsProcessing(false);
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">AI Discovery Call</h1>
          <p className="text-xl text-gray-200">Let's understand your business needs and find the perfect automation solution</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.type === 'user'
                        ? 'bg-[#008080] text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.type === 'ai' && (
                      <div className="flex items-center mb-2">
                        <Bot className="h-5 w-5 mr-2" />
                        <span className="font-semibold">AI Assistant</span>
                      </div>
                    )}
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              {(isProcessing || isSubmitting) && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleListening}
                    disabled={isSubmitting}
                    className={`p-3 rounded-full ${
                      isListening
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-[#008080] hover:bg-[#006666]'
                    } text-white transition-colors duration-300 disabled:opacity-50`}
                  >
                    {isListening ? (
                      <MicOff className="h-6 w-6" />
                    ) : (
                      <Mic className="h-6 w-6" />
                    )}
                  </button>
                  <span className="text-sm text-gray-500">
                    {isListening ? 'Tap to stop' : 'Tap to speak'}
                  </span>
                </div>
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}