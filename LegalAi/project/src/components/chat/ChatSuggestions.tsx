import React from 'react';

interface ChatSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className="bg-white hover:bg-gray-50 text-blue-700 text-sm py-2 px-3 rounded-full border border-blue-200 transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;