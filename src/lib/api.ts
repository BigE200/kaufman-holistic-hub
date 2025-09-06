// API endpoint configuration for Supabase Edge Functions
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

if (!SUPABASE_URL) {
  console.warn('VITE_SUPABASE_URL not found. Edge functions will not work properly.');
}

export const API_ENDPOINTS = {
  CONTACT_SUBMISSION: `${SUPABASE_URL}/functions/v1/contact-submission`,
  NEWSLETTER_SIGNUP: `${SUPABASE_URL}/functions/v1/newsletter-signup`,
  AI_CHAT: `${SUPABASE_URL}/functions/v1/ai-chat`,
};

// Create a proxy for the AI chat API to handle the correct endpoint
export const AI_CHAT_ENDPOINT = '/api/ai-chat';

// Helper function to make API calls to Supabase Edge Functions
export async function callEdgeFunction(functionName: string, data: any) {
  const url = `${SUPABASE_URL}/functions/v1/${functionName}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
}