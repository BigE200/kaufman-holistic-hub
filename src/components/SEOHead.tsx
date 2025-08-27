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
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;