import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

interface NewsletterFormData {
  email: string;
  firstName?: string;
}

interface NewsletterFormProps {
  onSubscribe?: (data: NewsletterFormData) => Promise<void>;
  compact?: boolean;
}

const NewsletterForm = ({ onSubscribe, compact = false }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      if (onSubscribe) {
        await onSubscribe({ email, firstName });
      }

      toast({
        title: "Successfully subscribed!",
        description: "Welcome to Dr. Kaufman's newsletter. Check your email for confirmation.",
      });
      
      setEmail('');
      setFirstName('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="flex-1"
        />
        <Button 
          type="submit"
          disabled={isSubmitting || !email.trim()}
          className="bg-medical-primary hover:bg-medical-accent text-primary-foreground"
        >
          {isSubmitting ? (
            <LoadingSpinner size="sm" />
          ) : (
            'Subscribe'
          )}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-2">
        <Input 
          type="text"
          placeholder="First name (optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={isSubmitting}
          className="flex-1"
        />
        <Input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="flex-1"
          required
        />
      </div>
      <Button 
        type="submit"
        disabled={isSubmitting || !email.trim()}
        className="w-full bg-medical-primary hover:bg-medical-accent text-primary-foreground"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" className="mr-2" />
            Subscribing...
          </>
        ) : (
          'Subscribe to Newsletter'
        )}
      </Button>
    </form>
  );
};

export default NewsletterForm;