import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronRight } from 'lucide-react';

const chatMessages = [
  { message: "What are my rights under RTI Act?", isUser: true },
  { message: "Under the Right to Information Act, you have the right to request information from public authorities within 30 days. You can apply online or via post with a nominal fee.", isUser: false },
  { message: "What's the penalty for delayed information?", isUser: true },
  { message: "If information is delayed beyond the 30-day deadline without reasonable cause, a penalty of ₹250 per day (max ₹25,000) can be imposed on the Public Information Officer.", isUser: false }
];

const HeroSection: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  
  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  const scrollToChat = () => {
    const chatSection = document.getElementById('chat');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Legal Knowledge<br />
              <span className="text-blue-300">Accessible to All</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-md">
              Get instant, accurate answers to your questions about Indian laws using our AI-powered legal assistant.
            </p>
            <button 
              onClick={scrollToChat}
              className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium flex items-center transition-colors duration-300"
            >
              Get Started
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
          
          <div className="md:w-1/2 max-w-lg">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-blue-800 p-4 flex items-center">
                <MessageSquare size={20} className="text-white mr-2" />
                <h3 className="text-white font-medium">LegalAI Assistant</h3>
              </div>
              
              <div className="bg-gray-50 p-4 h-80 overflow-y-auto">
                {chatMessages.slice(0, visibleMessages).map((message, index) => (
                  <div 
                    key={index}
                    className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                      }`}
                    >
                      {message.message}
                    </div>
                  </div>
                ))}
                
                {visibleMessages < chatMessages.length && (
                  <div className="flex items-center justify-center my-4">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;