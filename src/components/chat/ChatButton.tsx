import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatInstructionBubble from './ChatInstructionBubble';

interface ChatButtonProps {
  onClick: () => void;
  showInstructionBubble: boolean;
  onCloseInstructionBubble: () => void;
}

const ChatButton = ({ 
  onClick, 
  showInstructionBubble, 
  onCloseInstructionBubble 
}: ChatButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <Button
          onClick={onClick}
          className="h-16 w-16 rounded-full bg-medical-primary hover:bg-medical-accent shadow-xl hover:shadow-2xl transition-all duration-300"
          aria-label="Chat with Dr. Kaufman's AI Assistant"
        >
          <div className="relative">
            <Bot className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-trust-blue rounded-full animate-pulse"></div>
          </div>
        </Button>
        
        {/* Floating label for clarity */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background text-professional-navy text-xs font-medium px-3 py-1 rounded-full shadow-md border border-medical-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ask AI Erick
        </div>
        
        <ChatInstructionBubble 
          isVisible={showInstructionBubble}
          onClose={onCloseInstructionBubble}
        />
      </div>
    </div>
  );
};

export default ChatButton;