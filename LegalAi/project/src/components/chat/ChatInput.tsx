import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { locales } from '../../locales';

interface ChatInputProps {
  onSend: (message: string) => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, loading }) => {
  const { language } = useLanguage();
  const currentLocale = locales[language];
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !loading) {
      onSend(message);
      setMessage('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight(e.target);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const toggleRecording = () => {
    // This would be replaced with actual speech recognition implementation
    setIsRecording(!isRecording);
    if (!isRecording) {
      alert('In a real implementation, voice recording would start here.');
    } else {
      alert('Voice recording stopped.');
      setMessage(message + " [Voice transcription would appear here]");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end">
      <div className="relative flex-grow">
        <textarea
          ref={inputRef}
          className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[48px] max-h-[120px]"
          placeholder={currentLocale.askQuestion || "Ask about Indian laws..."}
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={loading}
          rows={1}
        />
        
        <button
          type="button"
          onClick={toggleRecording}
          className={`absolute right-12 bottom-3 text-gray-500 hover:text-blue-600 transition-colors ${isRecording ? 'text-red-500 hover:text-red-600' : ''}`}
          disabled={loading}
        >
          {isRecording ? <X size={20} /> : <Mic size={20} />}
        </button>
      </div>
      
      <button
        type="submit"
        className={`ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 transition-colors flex-shrink-0 ${
          loading || !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading || !message.trim()}
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;