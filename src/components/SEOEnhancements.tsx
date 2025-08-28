import { Helmet } from 'react-helmet-async';

// Generate a comprehensive robots.txt file
export const generateRobotsTxt = () => `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://drerickkaufman.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow access to CSS and JS files
Allow: /static/
Allow: /assets/
Allow: /*.css$
Allow: /*.js$

# Disallow admin or sensitive areas (if any)
# Disallow: /admin/
# Disallow: /private/
`;

// SEO enhancements and meta tag optimizations
interface SEOEnhancementsProps {
  structuredData?: any;
  hreflang?: Array<{ lang: string; url: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOEnhancements = ({ structuredData, hreflang = [], breadcrumbs = [] }: SEOEnhancementsProps) => {
  return (
    <Helmet>
      {/* Enhanced meta tags for better SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//holisticallyrx.com" />
      <link rel="dns-prefetch" href="//docsofcannabis.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Language alternatives */}
      {hreflang.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb structured data */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url
            }))
          })}
        </script>
      )}
      
      {/* Security headers via meta tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance optimization */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Social media optimization */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr. Erick Kaufman, MD" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@drerikkaufman" />
      
      {/* Medical-specific meta tags */}
      <meta name="medical-specialties" content="Integrative Medicine, Alternative Medicine, Medical Cannabis" />
      <meta name="healthcare-provider" content="Licensed Physician" />
      <meta name="telehealth-services" content="Available" />
    </Helmet>
  );
};

export default SEOEnhancements;