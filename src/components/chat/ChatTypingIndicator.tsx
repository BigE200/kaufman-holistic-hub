import { Bot } from 'lucide-react';

interface ChatTypingIndicatorProps {
  isVisible: boolean;
}

const ChatTypingIndicator = ({ isVisible }: ChatTypingIndicatorProps) => {
  if (!isVisible) return null;

  return (
    <div className="flex gap-2 justify-start">
      <div className="h-7 w-7 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <Bot className="h-4 w-4 text-primary-foreground" />
      </div>
      <div className="bg-medical-gray-100 text-medical-gray-900 rounded-lg p-3 text-sm">
        <div className="flex gap-1">
          <div className="h-2 w-2 bg-medical-gray-400 rounded-full animate-bounce"></div>
          <div className="h-2 w-2 bg-medical-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="h-2 w-2 bg-medical-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;