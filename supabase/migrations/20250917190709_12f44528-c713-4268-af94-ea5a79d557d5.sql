-- Fix critical security vulnerability: Remove public access to newsletter subscriber data
-- Newsletter subscriber data should only be viewable by authenticated administrators

-- Drop the overly permissive policy that allows anyone to view newsletter subscriptions
DROP POLICY IF EXISTS "Anyone can view newsletter subscriptions" ON public.kaufman_newsletter_subscribers;

-- Add a secure policy that only allows authenticated users to view subscriber data
CREATE POLICY "Only authenticated users can view newsletter subscriptions" 
ON public.kaufman_newsletter_subscribers 
FOR SELECT 
TO authenticated
USING (true);

-- Keep the INSERT and UPDATE policies as-is since we want:
-- - Anyone to be able to subscribe to the newsletter (INSERT)
-- - Subscribers to be able to update their own subscription status (UPDATE)
-- These policies remain unchanged:
-- - "Anyone can subscribe to newsletter" (INSERT policy)
-- - "Anyone can update their own subscription" (UPDATE policy)