import { useEffect, useRef } from 'react';
import { X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatTypingIndicator from './ChatTypingIndicator';
import QuickResponses from './QuickResponses';
import { Message } from '@/hooks/useChat';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
  quickResponses: string[];
  showQuickResponses: boolean;
}

const ChatWindow = ({
  isOpen,
  onClose,
  messages,
  isTyping,
  onSendMessage,
  quickResponses,
  showQuickResponses
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-2xl border-medical-gray-200">
        <div className="bg-medical-primary text-primary-foreground p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ask AI Erick</h3>
                <p className="text-xs text-primary-foreground/80">Online • Integrative Medicine Help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-0 bg-background">
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            <ChatTypingIndicator isVisible={isTyping} />
            <div ref={messagesEndRef} />
          </div>

          <QuickResponses 
            onSelectResponse={onSendMessage}
            responses={quickResponses}
            isVisible={showQuickResponses}
          />

          <ChatInput 
            onSendMessage={onSendMessage}
            disabled={isTyping}
            placeholder="Ask about integrative medicine, alternative therapies..."
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatWindow;