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
  const [showInstructionBubble, setShowInstructionBubble] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Dr. Kaufman's AI assistant. I can help answer questions about integrative medicine, alternative therapies, and holistic healthcare. How can I assist you today?",
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

  // Auto-hide instruction bubble after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructionBubble(false);
    }, 8000); // Hide after 8 seconds

    return () => clearTimeout(timer);
  }, []);

  // Listen for navigation trigger
  useEffect(() => {
    const handleOpenAIChat = () => {
      console.log('AI Chat opened from navigation');
      setIsOpen(true);
      setShowInstructionBubble(false);
    };
    
    window.addEventListener('openAIChat', handleOpenAIChat);
    return () => window.removeEventListener('openAIChat', handleOpenAIChat);
  }, []);

  const quickResponses = [
    "What is integrative medicine?",
    "How do I get a medical cannabis card?",
    "Tell me about weight management options", 
    "How do I schedule a consultation?",
  ];

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Medical Cannabis Card & Docs of Cannabis
    if (lowerMessage.includes('cannabis card') || lowerMessage.includes('medical marijuana card') || lowerMessage.includes('mmj card') || lowerMessage.includes('docs of cannabis')) {
      return "Docs of Cannabis helps you get approved for your medical cannabis card online with licensed doctors. The process is fast and simple - most appointments take 15 minutes, with approval typically within 2 weeks. We serve patients in most US states and offer a money-back guarantee if you're not approved.";
    }

    if (lowerMessage.includes('qualifying conditions') || lowerMessage.includes('cannabis conditions') || lowerMessage.includes('medical marijuana conditions')) {
      return "Common qualifying conditions for medical cannabis include chronic pain, PTSD, anxiety, epilepsy, cancer, insomnia, and many others. Each state has its own approved list. Our cannabis doctors at Docs of Cannabis evaluate your symptoms and medical history to determine eligibility - no guesswork, just clarity and support.";
    }

    if (lowerMessage.includes('cannabis renewal') || lowerMessage.includes('card renewal') || lowerMessage.includes('renew')) {
      return "Docs of Cannabis makes medical marijuana card renewals simple and stress-free. We handle the paperwork, provide timely reminders, and ensure you stay compliant without interruptions in your care. The renewal process is even faster than initial applications.";
    }

    if (lowerMessage.includes('states') || lowerMessage.includes('where') || lowerMessage.includes('available')) {
      return "Docs of Cannabis serves patients in most US states including Arkansas, Arizona, California, Connecticut, Delaware, Florida, Georgia, Illinois, Iowa, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nevada, New Jersey, New Mexico, New York, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, Texas, Vermont, Virginia, Washington, and West Virginia.";
    }
    
    // Weight Management
    if (lowerMessage.includes('weight') || lowerMessage.includes('semaglutide') || lowerMessage.includes('tirzepatide') || lowerMessage.includes('wegovy')) {
      return "Holistically Rx offers medically supervised weight management with prescriptions like Semaglutide, Tirzepatide, Wegovy, and more. These GLP-1 medications help with sustainable weight loss under professional guidance. Schedule a consultation at holisticallyrx.com to discuss if these treatments are right for you.";
    }

    // Longevity Therapies
    if (lowerMessage.includes('longevity') || lowerMessage.includes('nad+') || lowerMessage.includes('nad') || lowerMessage.includes('glutathione') || lowerMessage.includes('rapamycin') || lowerMessage.includes('anti-aging')) {
      return "Our longevity therapies include cutting-edge treatments like NAD+ infusions for cellular repair, Glutathione injections for antioxidant support, and Rapamycin consultations for longevity research. These treatments support healthy aging and optimal cellular function.";
    }

    // Hormone Optimization
    if (lowerMessage.includes('hormone') || lowerMessage.includes('hrt') || lowerMessage.includes('trt') || lowerMessage.includes('testosterone') || lowerMessage.includes('estrogen')) {
      return "We offer comprehensive hormone optimization including HRT (Hormone Replacement Therapy) and TRT (Testosterone Replacement Therapy). Our functional medicine approach includes continuous glucose monitoring (CGM) and metabolic health assessments to optimize your hormonal balance.";
    }

    // IV Therapy
    if (lowerMessage.includes('iv therapy') || lowerMessage.includes('infusion') || lowerMessage.includes('hydration') || lowerMessage.includes('nutrients')) {
      return "Holistically Rx provides mobile IV therapy services for hydration, energy boost, and nutrient replenishment. Our IV treatments are delivered directly to you and can help with recovery, immune support, and overall wellness.";
    }

    // Diagnostic Services
    if (lowerMessage.includes('diagnostic') || lowerMessage.includes('testing') || lowerMessage.includes('dutch') || lowerMessage.includes('gut biome') || lowerMessage.includes('nutrition')) {
      return "We offer advanced diagnostic services including DUTCH hormone tests, comprehensive gut biome analysis, and personalized nutritional guidance. These tests help identify root causes and create targeted treatment plans for optimal health.";
    }

    // Emotional Wellness & ESA
    if (lowerMessage.includes('emotional') || lowerMessage.includes('mental health') || lowerMessage.includes('esa') || lowerMessage.includes('emotional support') || lowerMessage.includes('anxiety') || lowerMessage.includes('depression')) {
      return "Our emotional wellness services include ESA (Emotional Support Animal) certifications and therapies to support mental health and well-being. We take a holistic approach to mental wellness, addressing both psychological and physiological factors.";
    }
    
    // Integrative Medicine
    if (lowerMessage.includes('integrative medicine') || lowerMessage.includes('holistic')) {
      return "Integrative medicine treats you as a whole person—mind, body, and spirit. At Holistically Rx, we blend proven medical practices with natural therapies, targeting root causes rather than just symptoms. Our approach combines modern medicine with evidence-based complementary treatments.";
    }
    
    // Alternative Medicine & Cannabis
    if (lowerMessage.includes('alternative') || lowerMessage.includes('plant') || lowerMessage.includes('cannabis') || lowerMessage.includes('medical marijuana')) {
      return "Alternative medicine and plant-based therapies can be effective for various conditions including chronic pain, anxiety, PTSD, and neurological disorders. Dr. Kaufman provides specialized certifications and guidance through both Holistically Rx and Docs of Cannabis platforms. Cannabis offers a natural alternative to opioids for many patients.";
    }
    
    // Telehealth & Appointments
    if (lowerMessage.includes('telehealth') || lowerMessage.includes('consultation') || lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
      return "We offer secure telehealth consultations through HIPAA-compliant platforms. Both Holistically Rx and Docs of Cannabis are available every day with no insurance required - just a 100% online process with licensed providers. Visit holisticallyrx.com or docsofcannabis.com to schedule your consultation.";
    }

    // Team & Providers
    if (lowerMessage.includes('doctor') || lowerMessage.includes('provider') || lowerMessage.includes('team') || lowerMessage.includes('krasne') || lowerMessage.includes('niles') || lowerMessage.includes('cheryl') || lowerMessage.includes('miller')) {
      return "Our team includes board-certified physicians like Dr. Krasne (Anesthesiologist), Dr. Niles (OB/GYN with 30+ years experience), Dr. Cheryl (Cannabis Medicine specialist), and Dr. J. Chance Miller (Longevity and Weight Management). All are licensed providers committed to compassionate, patient-centered care.";
    }

    // Cost & Insurance
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('insurance') || lowerMessage.includes('affordable')) {
      return "Both Holistically Rx and Docs of Cannabis provide affordable care with no insurance required and transparent pricing with no hidden fees. We believe in making integrative medicine and cannabis therapy accessible to everyone. Docs of Cannabis even offers a money-back guarantee if you're not approved.";
    }
    
    // Trust & Quality
    if (lowerMessage.includes('trust') || lowerMessage.includes('feedback') || lowerMessage.includes('reviews') || lowerMessage.includes('safe')) {
      return "Our platforms are trusted by over 1 million subscribers with 4.7-star ratings and hundreds of positive reviews. We maintain the highest standards with HIPAA compliance, licensed providers, and certified US-based pharmacies. Dr. Kaufman pioneered feedback systems in healthcare to ensure transparency and continuous improvement.";
    }
    
    return "Thank you for your question! Dr. Kaufman's platforms offer comprehensive care: Holistically Rx provides integrative medicine including weight management, longevity therapies, and hormone optimization, while Docs of Cannabis specializes in medical marijuana card certifications and cannabis therapy. For personalized advice, schedule a consultation at holisticallyrx.com or docsofcannabis.com.";
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
            onClick={() => {
              setIsOpen(true);
              setShowInstructionBubble(false);
            }}
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
          
          {/* Instruction bubble */}
          {showInstructionBubble && (
            <div className="absolute -top-20 -left-48 w-64 bg-white border border-medical-gray-200 rounded-lg shadow-lg p-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="h-3 w-3 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-professional-navy mb-1">💬 Ask AI Erick</p>
                  <p className="text-xs text-medical-gray-600 leading-relaxed">
                    Get instant answers about integrative medicine, alternative therapies, and Dr. Kaufman's services.
                  </p>
                </div>
                <button
                  onClick={() => setShowInstructionBubble(false)}
                  className="text-medical-gray-400 hover:text-medical-gray-600 text-xs p-0.5"
                  aria-label="Close instruction"
                >
                  ✕
                </button>
              </div>
              {/* Pointer arrow */}
              <div className="absolute bottom-0 right-4 transform translate-y-full">
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-medical-gray-200 absolute top-0 translate-y-[-1px]"></div>
              </div>
            </div>
          )}
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
                placeholder="Ask about integrative medicine, alternative therapies..."
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