import React, { useState } from 'react';
import { Message } from '../../types/chat';
import { User, Scale, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [showCitation, setShowCitation] = useState(false);
  
  const toggleCitation = () => {
    if (message.citation) {
      setShowCitation(!showCitation);
    }
  };
  
  return (
    <div className={`flex items-start mb-6 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      {!message.isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white mr-3 flex-shrink-0">
          <Scale size={20} />
        </div>
      )}
      
      <div className="max-w-[80%]">
        <div 
          className={`rounded-lg py-3 px-4 ${
            message.isUser 
              ? 'bg-blue-600 text-white rounded-br-none' 
              : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
          }`}
        >
          <div className="whitespace-pre-wrap">{message.content}</div>
          
          {message.citation && (
            <button 
              onClick={toggleCitation}
              className="mt-2 text-sm flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <span>{showCitation ? 'Hide source' : 'View source'}</span>
            </button>
          )}
        </div>
        
        {message.timestamp && (
          <div className={`text-xs mt-1 ${message.isUser ? 'text-right text-gray-500' : 'text-gray-500'}`}>
            {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
          </div>
        )}
        
        {showCitation && message.citation && (
          <div className="mt-2 bg-blue-50 border border-blue-100 rounded-lg p-3 shadow-sm">
            <div className="text-sm font-medium text-blue-800">{message.citation.title}</div>
            <div className="text-xs text-blue-600 mt-1">{message.citation.section}</div>
            <a 
              href={message.citation.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 text-xs flex items-center text-blue-700 hover:text-blue-900 transition-colors"
            >
              <span>View full text</span>
              <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        )}
      </div>
      
      {message.isUser && (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 ml-3 flex-shrink-0">
          <User size={20} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;