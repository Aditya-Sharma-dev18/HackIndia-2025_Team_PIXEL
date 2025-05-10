import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import SupportedLaws from './components/SupportedLaws';
import ChatInterface from './components/chat/ChatInterface';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <div className="flex flex-col min-h-screen">
          <HeroSection />
          <ChatInterface />
          <HowItWorks />
          <SupportedLaws />
        </div>
      </Layout>
    </LanguageProvider>
  );
}

export default App;