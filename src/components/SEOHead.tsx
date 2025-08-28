import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SEOHead = ({ 
  title = "Dr. Erick Kaufman, MD - Board Certified Integrative Medicine & Alternative Medicine Expert",
  description = "Dr. Erick Kaufman, MD - Board Certified physician specializing in integrative medicine and alternative therapies. Founder of Holistically Rx & Docs of Cannabis. Telehealth consultations available.",
  keywords = "Dr Erick Kaufman MD, integrative medicine, alternative medicine doctor, telehealth physician, holistic healthcare, plant-based medicine, chronic pain treatment",
  canonical,
  ogImage = "/dr-kaufman-social.jpg",
  noIndex = false
}: SEOHeadProps) => {
  const fullTitle = title.includes('Dr. Erick Kaufman') ? title : `${title} | Dr. Erick Kaufman, MD`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Enhanced Meta Tags for AI Optimization */}
      <meta name="author" content="Dr. Erick Kaufman, MD" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* AI Search Engine Optimization */}
      <meta name="AI-optimized" content="true" />
      <meta name="subject" content="Integrative Medicine, Alternative Healthcare, Medical Cannabis" />
      <meta name="topic" content="Holistic Healthcare and Alternative Medicine" />
      <meta name="summary" content={description} />
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dr. Erick Kaufman, MD" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@DrErickKaufman" />
      <meta name="twitter:site" content="@DrErickKaufman" />
      
      {/* Medical/Healthcare Specific Tags */}
      <meta name="medical-disclaimer" content="This website is for educational purposes only and does not provide medical advice." />
      <meta name="health-topic" content="Integrative Medicine, Alternative Medicine, Medical Cannabis" />
      
      {/* Structured Data Indicators */}
      <meta name="schema-type" content="Person, MedicalBusiness, WebPage" />
    </Helmet>
  );
};

export default SEOHead;