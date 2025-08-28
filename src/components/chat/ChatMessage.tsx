import { Bot, User } from 'lucide-react';
import { Message } from '@/hooks/useChat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      {message.sender === 'bot' && (
        <div className="h-7 w-7 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-3 text-sm ${
          message.sender === 'user'
            ? 'bg-trust-blue text-primary-foreground'
            : 'bg-medical-gray-100 text-medical-gray-900'
        }`}
      >
        {message.text}
      </div>
      {message.sender === 'user' && (
        <div className="h-7 w-7 bg-trust-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;