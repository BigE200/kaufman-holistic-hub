import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RecommendedPracticesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recommended Independent Practices & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Discover trusted independent practices to support your holistic health journey. Inspired by leaders in functional medicine, these resources focus on root-cause wellness and personalized care. This site provides informational referrals only and does not offer medical services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* UltraWellness Center Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">UltraWellness Center</CardTitle>
              <CardDescription className="text-base font-medium">
                A Model for Functional Medicine Excellence
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1">
                <p className="text-muted-foreground mb-4">
                  Founded by{" "}
                  <a 
                    href="https://drhyman.com" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Dr. Mark Hyman
                  </a>{" "}
                  in 2004, the UltraWellness Center specializes in treating chronic conditions through a systems-based approach, integrating nutrition, advanced diagnostics, and regenerative therapies. It's a prime example of independent practices emphasizing long-term wellness over symptom management.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multidisciplinary team with expertise in hormone health, fatty liver, and chronic disease reversal.
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Focus on personalized plans for issues like autoimmune diseases, fatigue, and longevity.
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Requires a separate primary care physician—aligning with our referral philosophy.
                  </li>
                </ul>
              </div>
              
              <div className="mt-auto">
                <Button 
                  asChild 
                  className="w-full mb-3"
                >
                  <a 
                    href="https://www.ultrawellnesscenter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Visit UltraWellness Center
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground italic text-center">
                  Disclaimer: Informational referral only; not affiliated.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder cards for Holistically Rx and Docs of Cannabis */}
          <Card className="h-full flex flex-col opacity-50">
            <CardHeader>
              <CardTitle className="text-xl">Holistically Rx</CardTitle>
              <CardDescription className="text-base font-medium">
                Content Coming Soon
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4">
                Content for this practice will be added soon.
              </p>
              <div className="mt-auto">
                <Button disabled className="w-full mb-3">
                  Coming Soon
                </Button>
                <p className="text-xs text-muted-foreground italic text-center">
                  Disclaimer: Informational referral only; not affiliated.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col opacity-50">
            <CardHeader>
              <CardTitle className="text-xl">Docs of Cannabis</CardTitle>
              <CardDescription className="text-base font-medium">
                Content Coming Soon
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4">
                Content for this practice will be added soon.
              </p>
              <div className="mt-auto">
                <Button disabled className="w-full mb-3">
                  Coming Soon
                </Button>
                <p className="text-xs text-muted-foreground italic text-center">
                  Disclaimer: Informational referral only; not affiliated.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            For full terms and conditions, please review our{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecommendedPracticesSection;