import { useState, useCallback } from 'react';

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

  const generateBotResponse = useCallback((userMessage: string): string => {
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
  }, []);

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

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
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