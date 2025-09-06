-- Create contact submissions table
CREATE TABLE public.kaufman_contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  inquiry_type TEXT NOT NULL CHECK (inquiry_type IN ('speaking', 'consulting', 'media', 'general')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE public.kaufman_newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source TEXT NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.kaufman_contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kaufman_newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since these are contact forms)
CREATE POLICY "Anyone can submit contact forms" 
ON public.kaufman_contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view their own submissions" 
ON public.kaufman_contact_submissions 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.kaufman_newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update their own subscription" 
ON public.kaufman_newsletter_subscribers 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can view newsletter subscriptions" 
ON public.kaufman_newsletter_subscribers 
FOR SELECT 
USING (true);