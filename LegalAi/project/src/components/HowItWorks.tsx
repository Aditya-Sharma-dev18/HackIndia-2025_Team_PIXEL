import React, { useState, useEffect, useRef } from 'react';
import { Database, CpuIcon, MessageSquare } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  step: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, isActive, step }) => {
  return (
    <div 
      className={`relative p-6 rounded-lg transition-all duration-500 ${
        isActive 
          ? 'bg-white shadow-lg scale-105 z-10' 
          : 'bg-gray-50'
      }`}
    >
      <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
        <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
          isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          {step}
        </div>
      </div>
      <div className="mt-6 text-center">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
          isActive ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'
        }`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-blue-900' : 'text-gray-700'}`}>
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        
        if (isVisible) {
          const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 3);
          }, 3000);
          
          return () => clearInterval(interval);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: <Database size={28} />,
      title: "Retrieve",
      description: "Our system searches through a vast database of Indian legal documents to find relevant information."
    },
    {
      icon: <CpuIcon size={28} />,
      title: "Generate",
      description: "The AI analyzes the retrieved information and generates accurate, contextual responses."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Respond",
      description: "You receive a clear, concise answer with citations to the relevant legal sections."
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI uses Retrieval-Augmented Generation to provide accurate answers based on authoritative legal sources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={activeStep === index}
              step={index + 1}
            />
          ))}
          
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0 hidden md:block">
            <div 
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(activeStep / 2) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;