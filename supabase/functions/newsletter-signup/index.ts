import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase configuration');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { email, name, source } = await req.json();

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if subscriber already exists
    const { data: existingSubscriber } = await supabase
      .from('kaufman_newsletter_subscribers')
      .select('id, status')
      .eq('email', email)
      .maybeSingle();

    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'You are already subscribed to our newsletter!' 
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        // Reactivate subscription
        const { error } = await supabase
          .from('kaufman_newsletter_subscribers')
          .update({ 
            status: 'active',
            unsubscribed_at: null,
            name: name || null
          })
          .eq('id', existingSubscriber.id);

        if (error) {
          console.error('Database error:', error);
          return new Response(
            JSON.stringify({ error: 'Failed to reactivate subscription' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Welcome back! Your subscription has been reactivated.' 
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Create new subscription
    const { data, error } = await supabase
      .from('kaufman_newsletter_subscribers')
      .insert({
        email,
        name: name || null,
        source: source || 'website',
        status: 'active'
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to subscribe to newsletter' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Newsletter subscription successful:', data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!',
        id: data.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in newsletter-signup function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});