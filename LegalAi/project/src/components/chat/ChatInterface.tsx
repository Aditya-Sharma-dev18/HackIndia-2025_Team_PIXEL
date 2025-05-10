import React, { useState, useRef, useEffect } from 'react';
import { Scale } from 'lucide-react';

const initialMessages = [
  {
    content: 'Hello! I\'m your AI legal assistant for Indian law. I can help with questions about IPC, RTI, Labor laws, and more. How can I assist you today?',
    isUser: false,
  },
];

const sampleSuggestions = [
  "What are my rights under RTI Act?",
  "Explain Section 302 of IPC",
  "What is the minimum wage in Delhi?",
  "How to file a consumer complaint?"
];

const   ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{ content: string; isUser: boolean }[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage = { content: text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      console.log(response);

      const data = await response.json();
      const aiMessage = {
        content: data.answer || 'Sorry, I couldn’t understand that.',
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          content: 'Error: Unable to connect to the legal assistant service.',
          isUser: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => sendMessage(input);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleSuggestionClick = (suggestion: string) => sendMessage(suggestion);

  return (
    <section id="chat" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Chat with our Legal AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask questions about Indian laws and get accurate answers based on the latest legal information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-blue-800 text-white py-4 px-6">
            <h3 className="font-medium">LegalAI Assistant</h3>
          </div>

          {/* Chat Window */}
          <div className="h-96 md:h-[30rem] overflow-y-auto p-6 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start mb-4 ${msg.isUser ? 'justify-end' : ''}`}>
                {!msg.isUser && (
                  <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center mr-3">
                    <Scale size={20} />
                  </div>
                )}
                <div
                  className={`rounded-lg py-3 px-4 shadow-sm max-w-[80%] ${
                    msg.isUser ? 'bg-blue-100 text-right' : 'bg-white'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing animation */}
            {loading && (
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white mr-3">
                  <Scale size={20} />
                </div>
                <div className="bg-white rounded-lg py-3 px-4 shadow-sm max-w-[80%]">
                  <div className="typing-indicator space-x-1 flex">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.2s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.4s]"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
              <p className="text-sm text-blue-700 mb-3">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {sampleSuggestions.map((sugg, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(sugg)}
                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    {sugg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input box */}
          <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your legal question..."
              disabled={loading}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              onClick={handleSubmit}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
