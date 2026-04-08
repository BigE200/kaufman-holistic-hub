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
            Find Your Path to Optimal Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Dr. Kaufman's expertise led him to build two distinct platforms to connect patients with the right independent, licensed providers. Choose the path that fits your goals. This site provides informational referrals only and does not offer medical services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Holistically Rx Card */}
          <Card className="h-full flex flex-col border-2 border-medical-primary/20 hover:border-medical-primary/50 transition-colors">
            <CardHeader>
              <div className="text-xs font-semibold text-medical-primary uppercase tracking-wide mb-1">
                Founded by Dr. Kaufman
              </div>
              <CardTitle className="text-xl">Holistically Rx (HRx)</CardTitle>
              <CardDescription className="text-base font-medium">
                Whole Person Care &amp; Integrative Medicine
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1">
                <p className="text-muted-foreground mb-4">
                  HRx is Dr. Kaufman's answer to the question patients kept asking: "What else can you do?" It connects patients with independent providers who practice evidence-based integrative medicine — addressing root causes, not just symptoms. This is whole-person care that is accessible, affordable, and authoritative.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Connects you with vetted integrative medicine providers
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Evidence-based, whole-person approach to optimal wellness
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hormone health, longevity, chronic conditions &amp; more
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Secure, approved telehealth technology
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full mb-3"
                >
                  <a
                    href="https://holisticallyrx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Explore Holistically Rx
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground italic text-center">
                  Referral to independent licensed providers. Not a direct medical service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Docs of Cannabis Card */}
          <Card className="h-full flex flex-col border-2 border-wellness-green/20 hover:border-wellness-green/50 transition-colors">
            <CardHeader>
              <div className="text-xs font-semibold text-wellness-green uppercase tracking-wide mb-1">
                Founded by Dr. Kaufman
              </div>
              <CardTitle className="text-xl">Docs of Cannabis (DOC)</CardTitle>
              <CardDescription className="text-base font-medium">
                Safe, Compliant Medical Cannabis Guidance
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1">
                <p className="text-muted-foreground mb-4">
                  DOC was built to help patients navigate medical cannabis safely, in full compliance with state laws, and with the guidance of educated, independent physicians. With 45,000+ patients served and a 4.6/5 Trustpilot rating, DOC is the most trusted name in evidence-based cannabis medicine.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-wellness-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Connects you with licensed physicians for cannabis consultations
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-wellness-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    State-law compliant guidance in all supported states
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-wellness-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    45,000+ patients served | 4.6/5 Trustpilot rating
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-wellness-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive patient education &amp; safety resources
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  asChild
                  variant="outline"
                  className="w-full mb-3 border-wellness-green text-wellness-green hover:bg-wellness-green/10"
                >
                  <a
                    href="https://docsofcannabis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Explore Docs of Cannabis
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground italic text-center">
                  Referral to independent licensed physicians. Not a direct medical service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* UltraWellness Center Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <div className="text-xs font-semibold text-trust-blue uppercase tracking-wide mb-1">
                Recommended External Resource
              </div>
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
                  in 2004, the UltraWellness Center is a leading example of the functional medicine model Dr. Kaufman's work is inspired by — treating chronic conditions through a systems-based approach, integrating nutrition, advanced diagnostics, and regenerative therapies.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multidisciplinary team specializing in chronic disease reversal
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Focus on personalized plans for autoimmune diseases &amp; longevity
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Aligns with our referral-first, root-cause philosophy
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  asChild
                  variant="outline"
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
                  External resource. Not affiliated with EKMD.
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
