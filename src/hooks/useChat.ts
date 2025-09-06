import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UseChatProps {
  initialMessage?: string;
  onSendMessage?: (message: string) => void;
}

export const useChat = ({ initialMessage, onSendMessage }: UseChatProps = {}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: initialMessage || "Hello! I'm Dr. Kaufman's AI assistant. I can help answer questions about integrative medicine, alternative therapies, and holistic healthcare. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const generateBotResponse = useCallback(async (userMessage: string): Promise<string> => {
    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          message: userMessage,
          conversationHistory: messages.slice(-10).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        }
      });

      if (error) {
        throw new Error(`AI response error: ${error.message}`);
      }

      return data?.response || "I apologize, but I'm having trouble responding right now. Please try again.";
    } catch (error) {
      console.error('Error getting AI response:', error);
      return "I'm experiencing technical difficulties. Please try again in a moment, or contact our office directly for immediate assistance.";
    }
  }, [messages]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    onSendMessage?.(text);

    try {
      const botResponseText = await generateBotResponse(text);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble responding right now. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  }, [generateBotResponse, onSendMessage]);

  const clearMessages = useCallback(() => {
    setMessages([messages[0]]); // Keep initial message
  }, [messages]);

  return {
    messages,
    isTyping,
    sendMessage,
    clearMessages
  };
};