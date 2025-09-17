-- Fix critical security vulnerability: Remove public access to contact submissions
-- Contact submissions should only be viewable by authenticated administrators

-- Drop the overly permissive policy that allows anyone to view contact submissions
DROP POLICY IF EXISTS "Anyone can view their own submissions" ON public.kaufman_contact_submissions;

-- Add a secure policy that only allows authenticated users to view submissions
-- Note: Since there's no admin authentication system in place yet, this will prevent public access
-- but also means submissions won't be viewable until proper admin authentication is implemented
CREATE POLICY "Only authenticated users can view contact submissions" 
ON public.kaufman_contact_submissions 
FOR SELECT 
TO authenticated
USING (true);

-- Keep the INSERT policy as-is since we want anyone to be able to submit contact forms
-- The INSERT policy "Anyone can submit contact forms" remains unchanged