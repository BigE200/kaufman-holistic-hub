import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Dr. Kaufman's AI assistant. I can help answer questions about integrative medicine, medical cannabis, and holistic healthcare. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for navigation trigger
  useEffect(() => {
    const handleOpenAIChat = () => {
      setIsOpen(true);
    };
    
    window.addEventListener('openAIChat', handleOpenAIChat);
    return () => window.removeEventListener('openAIChat', handleOpenAIChat);
  }, []);

  const quickResponses = [
    "What is integrative medicine?",
    "How can medical cannabis help me?",
    "What are your telehealth services?",
    "How do I schedule a consultation?",
  ];

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('integrative medicine') || lowerMessage.includes('holistic')) {
      return "Integrative medicine combines conventional medical treatments with evidence-based complementary therapies. Dr. Kaufman focuses on treating the whole person, addressing root causes rather than just symptoms, and incorporating therapies like medical cannabis when appropriate.";
    }
    
    if (lowerMessage.includes('cannabis') || lowerMessage.includes('marijuana')) {
      return "Medical cannabis can be effective for various conditions including chronic pain, anxiety, PTSD, and certain neurological disorders. Dr. Kaufman provides medical cannabis certifications and guidance through Holistically Rx and Docs of Cannabis platforms.";
    }
    
    if (lowerMessage.includes('telehealth') || lowerMessage.includes('consultation') || lowerMessage.includes('appointment')) {
      return "Dr. Kaufman offers secure telehealth consultations through HIPAA-compliant platforms. You can schedule through Holistically Rx (holisticallyrx.com) or Docs of Cannabis (docsofcannabis.com) depending on your needs.";
    }
    
    if (lowerMessage.includes('trust') || lowerMessage.includes('feedback')) {
      return "Dr. Kaufman pioneered feedback systems in healthcare to build trust and transparency. All patient interactions include feedback collection to continuously improve care quality and patient outcomes.";
    }
    
    return "Thank you for your question! For personalized medical advice, I recommend scheduling a consultation with Dr. Kaufman. You can find more information on his platforms: Holistically Rx and Docs of Cannabis, or reach out through the contact page.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickResponse = (response: string) => {
    setInputText(response);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <Button
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full bg-medical-primary hover:bg-medical-accent shadow-xl hover:shadow-2xl transition-all duration-300"
            aria-label="Chat with Dr. Kaufman's AI Assistant"
          >
            <div className="relative">
              <Bot className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-trust-blue rounded-full animate-pulse"></div>
            </div>
          </Button>
          
          {/* Floating label for clarity */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-professional-navy text-xs font-medium px-3 py-1 rounded-full shadow-md border border-medical-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask AI Erick
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-2xl border-medical-gray-200">
        <div className="bg-medical-primary text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ask AI Erick</h3>
                <p className="text-xs text-white/80">Online • Integrative Medicine Help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-0 bg-white">
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="h-7 w-7 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    message.sender === 'user'
                      ? 'bg-trust-blue text-white'
                      : 'bg-medical-gray-100 text-medical-gray-900'
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="h-7 w-7 bg-trust-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="h-7 w-7 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-medical-gray-100 text-medical-gray-900 rounded-lg p-3 text-sm">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-medical-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-medical-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="h-2 w-2 bg-medical-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length <= 1 && (
            <div className="p-3 border-t border-medical-gray-200 bg-medical-gray-50">
              <p className="text-xs text-medical-gray-600 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs bg-white border border-medical-gray-200 rounded-full px-3 py-1 hover:bg-medical-primary hover:text-white transition-colors duration-200"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-medical-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about integrative medicine, medical cannabis..."
                className="flex-1 text-sm border-medical-gray-200 focus:border-medical-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-medical-primary hover:bg-medical-accent text-white p-2 h-10 w-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-medical-gray-500 mt-2 text-center">
              This AI assistant provides general information. For medical advice, schedule a consultation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChat;