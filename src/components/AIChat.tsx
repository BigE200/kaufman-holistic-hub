import React, { useState, useEffect } from 'react';
import ChatWindow from './chat/ChatWindow';
import ChatButton from './chat/ChatButton';
import { useChat } from '@/hooks/useChat';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInstructionBubble, setShowInstructionBubble] = useState(true);

  const {
    messages,
    isTyping,
    sendMessage
  } = useChat({
    initialMessage: "Hello! I'm Dr. Kaufman's AI assistant. I can help answer questions about integrative medicine, alternative therapies, and holistic healthcare. How can I assist you today?",
    onSendMessage: (message) => {
      // Analytics tracking could go here
      // analytics.track('ai_chat_message_sent', { message });
    }
  });

  const quickResponses = [
    "What is integrative medicine?",
    "How do I get a medical cannabis card?",
    "Tell me about weight management options", 
    "How do I schedule a consultation?",
  ];

  // Listen for navigation trigger
  useEffect(() => {
    const handleOpenAIChat = () => {
      setIsOpen(true);
      setShowInstructionBubble(false);
    };
    
    window.addEventListener('openAIChat', handleOpenAIChat);
    return () => window.removeEventListener('openAIChat', handleOpenAIChat);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowInstructionBubble(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleCloseInstructionBubble = () => {
    setShowInstructionBubble(false);
  };

  return (
    <>
      {isOpen ? (
        <ChatWindow
          isOpen={isOpen}
          onClose={handleCloseChat}
          messages={messages}
          isTyping={isTyping}
          onSendMessage={sendMessage}
          quickResponses={quickResponses}
          showQuickResponses={messages.length <= 1}
        />
      ) : (
        <ChatButton
          onClick={handleOpenChat}
          showInstructionBubble={showInstructionBubble}
          onCloseInstructionBubble={handleCloseInstructionBubble}
        />
      )}
    </>
  );
};

export default AIChat;