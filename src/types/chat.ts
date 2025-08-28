// Common types used across chat components
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatConfig {
  maxMessages?: number;
  responseDelay?: number;
  autoScroll?: boolean;
  enableQuickResponses?: boolean;
}

export interface ChatAnalytics {
  sessionId: string;
  messageCount: number;
  startTime: Date;
  lastActivity: Date;
}

export interface ChatResponse {
  text: string;
  type: 'text' | 'link' | 'action';
  metadata?: Record<string, any>;
}

export interface ChatError {
  code: string;
  message: string;
  retryable: boolean;
}