import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our tables
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  inquiry_type: 'speaking' | 'consulting' | 'media' | 'general';
  created_at?: string;
  status: 'new' | 'contacted' | 'scheduled' | 'completed';
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  name?: string;
  subscribed_at?: string;
  status: 'active' | 'unsubscribed';
  source: string; // which page they subscribed from
}

export interface SpeakingInquiry {
  id?: string;
  contact_id?: string;
  event_name: string;
  event_date?: string;
  event_type: 'podcast' | 'conference' | 'workshop' | 'media' | 'other';
  audience_size?: number;
  topic_requested?: string;
  budget_range?: string;
  additional_details?: string;
  created_at?: string;
  status: 'inquiry' | 'reviewing' | 'scheduled' | 'confirmed' | 'completed';
}