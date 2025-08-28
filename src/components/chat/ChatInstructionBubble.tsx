import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

interface ChatInstructionBubbleProps {
  isVisible: boolean;
  onClose: () => void;
  autoHideDelay?: number;
}

const ChatInstructionBubble = ({ 
  isVisible, 
  onClose, 
  autoHideDelay = 8000 
}: ChatInstructionBubbleProps) => {
  // Auto-hide after delay
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      onClose();
    }, autoHideDelay);

    return () => clearTimeout(timer);
  }, [isVisible, autoHideDelay, onClose]);

  if (!isVisible) return null;

  return (
    <div className="absolute -top-20 -left-48 w-64 bg-background border border-medical-gray-200 rounded-lg shadow-lg p-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-start gap-2">
        <div className="h-6 w-6 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <Bot className="h-3 w-3 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-professional-navy mb-1">💬 Ask AI Erick</p>
          <p className="text-xs text-medical-gray-600 leading-relaxed">
            Get instant answers about integrative medicine, alternative therapies, and Dr. Kaufman's services.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-medical-gray-400 hover:text-medical-gray-600 text-xs p-0.5"
          aria-label="Close instruction"
        >
          ✕
        </button>
      </div>
      {/* Pointer arrow */}
      <div className="absolute bottom-0 right-4 transform translate-y-full">
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-background"></div>
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-medical-gray-200 absolute top-0 translate-y-[-1px]"></div>
      </div>
    </div>
  );
};

export default ChatInstructionBubble;