import { Bot, BookOpen, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AskAISection = () => {
  const handleOpenChat = () => {
    const event = new CustomEvent('openAIChat');
    window.dispatchEvent(event);
  };

  const sampleQuestions = [
    "What is integrative medicine and how is it different from conventional care?",
    "How do I know if medical cannabis is right for me?",
    "What are the four pillars of whole-person health?",
    "How can I find a vetted integrative medicine provider?",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-professional-navy to-trust-blue text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Intro copy */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  AI-Powered Guide
                </p>
                <h2 className="text-2xl font-bold text-white">Ask AI Erick</h2>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              Have a question about integrative medicine, medical cannabis, or whole-person wellness? AI Erick is an intelligent guide trained on Dr. Kaufman's clinical research, published work, and evidence-based health frameworks.
            </p>

            <p className="text-sm text-white/50 italic">
              AI Erick provides general health education only. It is not a diagnostic tool and does not replace consultation with a licensed medical professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleOpenChat}
                className="bg-white text-professional-navy hover:bg-white/90 font-semibold px-6 py-3 text-base shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-6 py-3 text-base"
              >
                <a href="/content-library">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse the Library
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Sample questions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Search className="h-4 w-4 text-white/50" />
              <p className="text-sm text-white/50 font-medium uppercase tracking-widest">
                Try asking...
              </p>
            </div>

            {sampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={handleOpenChat}
                className="w-full text-left p-4 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/25 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                    <span className="text-xs font-bold text-white/70">{index + 1}</span>
                  </div>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors leading-relaxed">
                    {question}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskAISection;
